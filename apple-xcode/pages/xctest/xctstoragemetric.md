> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctstoragemetric](https://developer.apple.com/documentation/xctest/xctstoragemetric)

# XCTStorageMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the amount of data that a performance test logically writes to storage.

## Declaration

```swift
class XCTStorageMetric
```

<a id="overview"></a>

## Overview

`XCTStorageMetric` records the amount of data logically written to the disk in the block argument to [measure(metrics:block:)](xctestcase/measure%28metrics_block_%29.md). The logical size of data written is the number of bytes in all requests to write to the disk. The logical size can be different from the size of physically written data, based on how the file system organizes data, and the fact that the disk controller replaces content in fixed-size blocks.

## Topics

### Initializers

- [init()](xctstoragemetric/init%28%29.md): Creates a metric for measuring disk use in a process.
- [init(application:)](xctstoragemetric/init%28application_%29.md): Creates a metric for measuring disk use in the requested app.

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
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTStorageMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the amount of data that a performance test logically writes to storage.

## Declaration

```objectivec
@interface XCTStorageMetric : NSObject
```

<a id="overview"></a>

## Overview

`XCTStorageMetric` records the amount of data logically written to the disk in the block argument to [measureWithMetrics:block:](xctestcase/measure%28metrics_block_%29.md). The logical size of data written is the number of bytes in all requests to write to the disk. The logical size can be different from the size of physically written data, based on how the file system organizes data, and the fact that the disk controller replaces content in fixed-size blocks.

## Topics

### Initializers

- [init](xctstoragemetric/init%28%29.md): Creates a metric for measuring disk use in a process.
- [initWithApplication:](xctstoragemetric/init%28application_%29.md): Creates a metric for measuring disk use in the requested app.

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
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
