import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Car {
    make: string;
    model: string;
    color: string;
    year: number;
}

interface CarFormProps {
    onAddCar: (car: Car) => void;
}

const CarForm: React.FC<CarFormProps> = ({ onAddCar }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddCar({ make, model, color, year });
        setMake('');
        setModel('');
        setColor('');
        setYear('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="make">
                <Form.Label>Make</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter make"
                    value={make}
                    onChange =  {(e) => setMake(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter model"
                    value={model}
                    onChange =  {(e) => setModel(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter a color of your choice"
                    value={color}
                    onChange =  {(e) => setColor(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter year"
                    value={year}
                    onChange =  {(e) => setYear(e.target.value)}
                />
            </Form.Group>
            <Button type="submit">Add Car</Button>
        </Form>
    );
};

export default CarForm;
