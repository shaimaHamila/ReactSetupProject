import { Button, DatePicker } from "antd";

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>Ant design is working successfully. You can now start building your</p>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
        </div>
    );
};

export default Dashboard;
