> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/performance-tests](https://developer.apple.com/documentation/xctest/performance-tests)

# Performance Tests

**Interface languages:** Swift, Objective-C

**Framework:** XCTest  
**Kind:** API Collection

Gather metrics while running your code, and report a failure if the metrics become significantly worse than a baseline value.

## Topics

### Measuring Performance

- [Writing and running performance tests](../xcode/writing-and-running-performance-tests.md): Repeatably gather metrics on the performance of your code.

### Measurement Options

- [XCTMeasureOptions](xctmeasureoptions.md): Options to control the gathering of performance measurements during tests.

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

### Measurements

- [XCTPerformanceMeasurement](xctperformancemeasurement.md): A measurement from a single iteration of a performance test.
- [XCTPerformanceMeasurementTimestamp](xctperformancemeasurementtimestamp.md): A point in time that captures the start or finish of a performance test iteration.
