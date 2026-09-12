> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctapplicationlaunchmetric](https://developer.apple.com/documentation/xctest/xctapplicationlaunchmetric)

# XCTApplicationLaunchMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the application launch duration for a performance test.

## Declaration

```swift
class XCTApplicationLaunchMetric
```

## Topics

### Initializers

- [init()](xctapplicationlaunchmetric/init%28%29.md): Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks.
- [init(waitUntilResponsive:)](xctapplicationlaunchmetric/init%28waituntilresponsive_%29.md): Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks, or to display its first frame and wait until the app is responsive.

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
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.

# XCTApplicationLaunchMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the application launch duration for a performance test.

## Declaration

```objectivec
@interface XCTApplicationLaunchMetric : NSObject
```

## Topics

### Initializers

- [init](xctapplicationlaunchmetric/init%28%29.md): Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks.
- [initWithWaitUntilResponsive:](xctapplicationlaunchmetric/init%28waituntilresponsive_%29.md): Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks, or to display its first frame and wait until the app is responsive.

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
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
