
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AppProvider } from './contexts/AppContext';
import Header from './components/common/Header';
import BottomNav from './components/common/BottomNav';
import SideNav from './components/common/SideNav';
import Dashboard from './pages/Dashboard';
import TransactionsPage from './pages/TransactionsPage';
import BudgetsPage from './pages/BudgetsPage';
import SavingsPage from './pages/SavingsPage';
import SettingsPage from './pages/SettingsPage';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <TransactionsPage />;
      case 'budgets':
        return <BudgetsPage />;
      case 'savings':
        return <SavingsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppProvider>
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <SideNav activePage={activePage} setActivePage={setActivePage} />
        <div className="flex-grow-1 d-flex flex-column" style={{ overflow: 'hidden' }}>
          <Header />
          <main className="flex-grow-1" style={{ overflowY: 'auto', paddingBottom: '5rem' }}>
            <Container fluid="lg" className="p-4">
              {renderPage()}
            </Container>
          </main>
        </div>
        <BottomNav activePage={activePage} setActivePage={setActivePage} />
      </div>
    </AppProvider>
  );
};

export default App;
