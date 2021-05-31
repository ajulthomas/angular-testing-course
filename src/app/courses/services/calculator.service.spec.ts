import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
describe('CalculatorService', () => {
    let calculator: CalculatorService,
        loggerSpy: jasmine.SpyObj<LoggerService>;
    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        });
        calculator = TestBed.inject(CalculatorService);
    });
    it('should add two numbers', () => {
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
    it('should substract two numbers', () => {
        const result = calculator.subtract(4, 2);
        expect(result).toBe(2);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
});