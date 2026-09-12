> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmemorymetric](https://developer.apple.com/documentation/xctest/xctmemorymetric)

# XCTMemoryMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the physical memory that a performance test uses.

## Declaration

```swift
class XCTMemoryMetric
```

<a id="overview"></a>

## Overview

`XCTMemoryMetric` compares the memory use before and after running the block argument to [measure(metrics:block:)](xctestcase/measure%28metrics_block_%29.md), and reports the difference.

## Topics

### Initializers

- [init()](xctmemorymetric/init%28%29.md): Initializes a metric that measures memory use in the current process.
- [init(application:)](xctmemorymetric/init%28application_%29.md): Initializes a metric that measures memory use in the target app.

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
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTMemoryMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the physical memory that a performance test uses.

## Declaration

```objectivec
@interface XCTMemoryMetric : NSObject
```

<a id="overview"></a>

## Overview

`XCTMemoryMetric` compares the memory use before and after running the block argument to [measureWithMetrics:block:](xctestcase/measure%28metrics_block_%29.md), and reports the difference.

## Topics

### Initializers

- [init](xctmemorymetric/init%28%29.md): Initializes a metric that measures memory use in the current process.
- [initWithApplication:](xctmemorymetric/init%28application_%29.md): Initializes a metric that measures memory use in the target app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCTMetric](xctmetric.md)

## See Also

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
