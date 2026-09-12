> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmetric](https://developer.apple.com/documentation/xctest/xctmetric)

# XCTMetric (Swift)

**Framework:** XCTest  
**Kind:** Protocol

A protocol that defines the methods that objects must provide when gathering metrics during performance tests.

## Declaration

```swift
protocol XCTMetric : NSCopying, NSObjectProtocol
```

<a id="overview"></a>

## Overview

Objects that gather metrics during performance tests must conform to `XCTMetric`. Before you create your own conforming objects, first use the metrics classes that `XCTest` supplies.

## Topics

### Recording Metrics

- [willBeginMeasuring()](xctmetric/willbeginmeasuring%28%29.md): A method that XCTest calls when it’s ready to begin running the measured code.
- [didStopMeasuring()](xctmetric/didstopmeasuring%28%29.md): A method that XCTest calls when it has finished running the measured code.

### Reporting Gathered Metrics

- [reportMeasurements(from:to:)](xctmetric/reportmeasurements%28from_to_%29.md): Reports the measurements gathered for a metric between specific timestamps.

## Relationships

### Inherits From

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md)
- [XCTCPUMetric](xctcpumetric.md)
- [XCTClockMetric](xctclockmetric.md)
- [XCTHitchMetric](xcthitchmetric.md)
- [XCTMemoryMetric](xctmemorymetric.md)
- [XCTOSSignpostMetric](xctossignpostmetric.md)
- [XCTStorageMetric](xctstoragemetric.md)

## See Also

### Measurement Metrics

- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Protocol

A protocol that defines the methods that objects must provide when gathering metrics during performance tests.

## Declaration

```objectivec
@protocol XCTMetric <NSCopying, NSObject>
```

<a id="overview"></a>

## Overview

Objects that gather metrics during performance tests must conform to `XCTMetric`. Before you create your own conforming objects, first use the metrics classes that `XCTest` supplies.

## Topics

### Recording Metrics

- [willBeginMeasuring](xctmetric/willbeginmeasuring%28%29.md): A method that XCTest calls when it’s ready to begin running the measured code.
- [didStopMeasuring](xctmetric/didstopmeasuring%28%29.md): A method that XCTest calls when it has finished running the measured code.

### Reporting Gathered Metrics

- [reportMeasurementsFromStartTime:toEndTime:error:](xctmetric/reportmeasurements%28from_to_%29.md): Reports the measurements gathered for a metric between specific timestamps.

## Relationships

### Inherits From

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md)
- [XCTCPUMetric](xctcpumetric.md)
- [XCTClockMetric](xctclockmetric.md)
- [XCTHitchMetric](xcthitchmetric.md)
- [XCTMemoryMetric](xctmemorymetric.md)
- [XCTOSSignpostMetric](xctossignpostmetric.md)
- [XCTStorageMetric](xctstoragemetric.md)

## See Also

### Measurement Metrics

- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
