> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurementtimestamp](https://developer.apple.com/documentation/xctest/xctperformancemeasurementtimestamp)

# XCTPerformanceMeasurementTimestamp (Swift)

**Framework:** XCTest  
**Kind:** Class

A point in time that captures the start or finish of a performance test iteration.

## Declaration

```swift
class XCTPerformanceMeasurementTimestamp
```

## Topics

### Initializers

- [init()](xctperformancemeasurementtimestamp/init%28%29.md): Intitializes a timestamp that represents the current time.
- [init(absoluteTime:date:)](xctperformancemeasurementtimestamp/init%28absolutetime_date_%29.md): Intitializes a timestamp that represents the provided time.

### Mach Absolute Time

- [absoluteTimeNanoSeconds](xctperformancemeasurementtimestamp/absolutetimenanoseconds.md): The nanoseconds component of the absolute time.
- [absoluteTime](xctperformancemeasurementtimestamp/absolutetime.md): The absolute time of the timestamp, which is the value of the mach absolute time clock.

### Date

- [date](xctperformancemeasurementtimestamp/date.md): The timestamp’s representation as a date.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Measurements

- [XCTPerformanceMeasurement](xctperformancemeasurement.md): A measurement from a single iteration of a performance test.

# XCTPerformanceMeasurementTimestamp (Objective-C)

**Framework:** XCTest  
**Kind:** Class

A point in time that captures the start or finish of a performance test iteration.

## Declaration

```objectivec
@interface XCTPerformanceMeasurementTimestamp : NSObject
```

## Topics

### Initializers

- [init](xctperformancemeasurementtimestamp/init%28%29.md): Intitializes a timestamp that represents the current time.
- [initWithAbsoluteTime:date:](xctperformancemeasurementtimestamp/init%28absolutetime_date_%29.md): Intitializes a timestamp that represents the provided time.

### Mach Absolute Time

- [absoluteTimeNanoSeconds](xctperformancemeasurementtimestamp/absolutetimenanoseconds.md): The nanoseconds component of the absolute time.
- [absoluteTime](xctperformancemeasurementtimestamp/absolutetime.md): The absolute time of the timestamp, which is the value of the mach absolute time clock.

### Date

- [date](xctperformancemeasurementtimestamp/date.md): The timestamp’s representation as a date.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Measurements

- [XCTPerformanceMeasurement](xctperformancemeasurement.md): A measurement from a single iteration of a performance test.
