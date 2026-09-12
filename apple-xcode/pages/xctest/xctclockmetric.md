> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctclockmetric](https://developer.apple.com/documentation/xctest/xctclockmetric)

# XCTClockMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the time that elapses during a performance test.

## Declaration

```swift
class XCTClockMetric
```

<a id="overview"></a>

## Overview

`XCTClockMetric` measures the total elapsed time during execution of the block argument to [measure(metrics:block:)](xctestcase/measure%28metrics_block_%29.md). The metric records time monotonically, regardless of changes to the system clock. Its result includes time spent executing code under test, and time when the CPU is idle or running other code.

## Topics

### Initializing an Item

- [init()](xctclockmetric/init%28%29.md): Initializes a metric that records elapsed time in a performance test.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [XCTMetric](xctmetric.md)

## See Also

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTClockMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the time that elapses during a performance test.

## Declaration

```objectivec
@interface XCTClockMetric : NSObject
```

<a id="overview"></a>

## Overview

`XCTClockMetric` measures the total elapsed time during execution of the block argument to [measureWithMetrics:block:](xctestcase/measure%28metrics_block_%29.md). The metric records time monotonically, regardless of changes to the system clock. Its result includes time spent executing code under test, and time when the CPU is idle or running other code.

## Topics

### Initializing an Item

- [init](xctclockmetric/init%28%29.md): Initializes a metric that records elapsed time in a performance test.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCTMetric](xctmetric.md)

## See Also

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
