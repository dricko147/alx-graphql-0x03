# alx-graphql-0x03

Objective: Implement an ErrorBoundary class component in TypeScript that can catch and handle JavaScript errors in your application.

Instructions:

Duplicate alx-graphql-0x02 to alx-graphql-0x03
Change directory to alx-rick-and-morty-app
Create a new file named ErrorBoundary.tsx in the components directory.
Implement the ErrorBoundary class by extending React.Component. Use the following structure:
interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps , State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

Save and close your files
Run npm run dev from the terminal
From a tab in your browser type http://localhost:3000 to see the changes made.
Repo:

GitHub repository: alx-graphql-0x03
Directory: alx-rick-and-morty-app
File: README.md, components/ErrorBoundary.tsx,
1. Wrap the Application with ErrorBoundary
mandatory
Objective: Integrate the ErrorBoundary component into your Next.js application by wrapping the main component.

Instructions:

Open thepages/_app.tsx file.

Import the ErrorBoundary component.

Wrap the Component prop in the ErrorBoundary:

import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;

Save and close your files
Run npm run dev from the terminal
From a tab in your browser type http://localhost:3000 to see the changes made.
Repo:

GitHub repository: alx-graphql-0x03
Directory: alx-rick-and-morty-app
File: README.md, pages/_app.tsx,
2. Create a Component to Test ErrorBoundary
mandatory
Objective: Develop a simple component that intentionally throws an error to test the ErrorBoundary functionality.

Instructions:

Create a new file named ErrorProneComponent.tsx in the components directory.
Implement a functional component that throws an error when rendered:
const ErrorProneComponent: React.FC = () => {
  throw new Error('This is a test error!');
};

export default ErrorProneComponent;

In any of your pages (e.g., pages/index.tsx), import and use the ErrorProneComponent within the ErrorBoundary to trigger the error:

import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;

Save and close your files
Run npm run dev from the terminal
From a tab in your browser type http://localhost:3000 to see the changes made.
Repo:

GitHub repository: alx-graphql-0x03
Directory: alx-rick-and-morty-app
File: README.md, components/ErrorProneComponent.tsx,
3. Monitor and Log Errors
mandatory
Objective: Integrate an error monitoring service (e.g., Sentry) into the ErrorBoundary to log errors.

Instructions:

Choose an error monitoring service and install its SDK. For example, for Sentry, run:
npm install @sentry/react @sentry/nextjs

Configure the monitoring service in your ErrorBoundary component. For Sentry, modify componentDidCatch to report errors:
import * as Sentry from '@sentry/react';

componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  Sentry.captureException(error, { extra: errorInfo });
}
Ensure that the service is correctly set up in your application (follow their documentation for initialization).

Test your application by throwing an error in ErrorProneComponent and check if the error is logged in the monitoring service dashboard.

Submit your updated ErrorBoundary.tsx file and provide a screenshot of the logged error in your monitoring service.

Save and close your files

Run npm run dev from the terminal

From a tab in your browser type http://localhost:3000 to see the changes made.