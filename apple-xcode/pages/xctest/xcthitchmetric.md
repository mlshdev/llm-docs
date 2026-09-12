> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xcthitchmetric](https://developer.apple.com/documentation/xctest/xcthitchmetric)

# XCTHitchMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

A metric to measure the number of hitches your UI encounters in a performance test.

## Declaration

```swift
class XCTHitchMetric
```

<a id="Discussion"></a>

## Discussion

A hitch occurs when your app doesn’t prepare the content it displays in time for the system to render it in the next screen update. For more information, see [Understanding hitches in your app](../xcode/understanding-hitches-in-your-app.md).

## Topics

### Creating a hitch metric

- [init(application:)](xcthitchmetric/init%28application_%29.md): Initializes a metric that measures hitches metric in the specified app.

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
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTHitchMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

A metric to measure the number of hitches your UI encounters in a performance test.

## Declaration

```objectivec
@interface XCTHitchMetric : NSObject
```

<a id="Discussion"></a>

## Discussion

A hitch occurs when your app doesn’t prepare the content it displays in time for the system to render it in the next screen update. For more information, see [Understanding hitches in your app](../xcode/understanding-hitches-in-your-app.md).

## Topics

### Creating a hitch metric

- [initWithApplication:](xcthitchmetric/init%28application_%29.md): Initializes a metric that measures hitches metric in the specified app.

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
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTOSSignpostMetric](xctossignpostmetric.md): A metric to record the time that a performance test spends executing a signposted region of code.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
