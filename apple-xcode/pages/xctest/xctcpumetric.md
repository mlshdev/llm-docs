> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctcpumetric](https://developer.apple.com/documentation/xctest/xctcpumetric)

# XCTCPUMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record information about CPU activity during a performance test.

## Declaration

```swift
class XCTCPUMetric
```

<a id="overview"></a>

## Overview

`XCTCPUMetric` captures the following statistics about CPU activity; each metric is captured while the block argument to a [measure(metrics:block:)](xctestcase/measure%28metrics_block_%29.md) call runs in a performance test:

- *CPU time* is the length of time, in seconds, that the CPU is active and executing instructions for the measured target. When the CPU switches context to execute a different process or thread or becomes idle, this value doesn’t increase.
- *CPU cycles* is the number of clock cycles that occur while the CPU is active and executing instructions for the measured target.
- *CPU instructions retired* is the number of processor instructions that run to completion during execution of the measured target. It’s possible for a CPU to abandon processing an instruction during execution, for example, if the instruction is evaluated out of order and logically follows a branch in the code that the CPU discovers it doesn’t need to take. An abandoned instruction doesn’t contribute to the retired instructions metric.

## Topics

### Initializers

- [init()](xctcpumetric/init%28%29.md): Creates a CPU metric that records data for the current process.
- [init(application:)](xctcpumetric/init%28application_%29.md): Creates a CPU metric that records data for the requested app.
- [init(limitingToCurrentThread:)](xctcpumetric/init%28limitingtocurrentthread_%29.md): Creates a CPU metric that optionally records data only for the current thread.

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
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTCPUMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record information about CPU activity during a performance test.

## Declaration

```objectivec
@interface XCTCPUMetric : NSObject
```

<a id="overview"></a>

## Overview

`XCTCPUMetric` captures the following statistics about CPU activity; each metric is captured while the block argument to a [measureWithMetrics:block:](xctestcase/measure%28metrics_block_%29.md) call runs in a performance test:

- *CPU time* is the length of time, in seconds, that the CPU is active and executing instructions for the measured target. When the CPU switches context to execute a different process or thread or becomes idle, this value doesn’t increase.
- *CPU cycles* is the number of clock cycles that occur while the CPU is active and executing instructions for the measured target.
- *CPU instructions retired* is the number of processor instructions that run to completion during execution of the measured target. It’s possible for a CPU to abandon processing an instruction during execution, for example, if the instruction is evaluated out of order and logically follows a branch in the code that the CPU discovers it doesn’t need to take. An abandoned instruction doesn’t contribute to the retired instructions metric.

## Topics

### Initializers

- [init](xctcpumetric/init%28%29.md): Creates a CPU metric that records data for the current process.
- [initWithApplication:](xctcpumetric/init%28application_%29.md): Creates a CPU metric that records data for the requested app.
- [initLimitingToCurrentThread:](xctcpumetric/init%28limitingtocurrentthread_%29.md): Creates a CPU metric that optionally records data only for the current thread.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCTMetric](xctmetric.md)

## See Also

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
