> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/schedulertimetype/stride](https://developer.apple.com/documentation/foundation/operationqueue/schedulertimetype/stride)

# OperationQueue.SchedulerTimeType.Stride

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The interval by which operation queue times advance.

## Declaration

```swift
struct Stride
```

## Topics

### Managing Stride Properties

- [timeInterval](stride/timeinterval.md): The value of this time interval, in seconds.
- [magnitude](stride/magnitude.md): The value of this time interval, in seconds.

### Creating Scheduler Time Strides

- [init(\_:)](stride/init%28__%29.md): Creates a stride using the specified time interval.
- [init(exactly:)](stride/init%28exactly_%29.md): Creates a stride using the specified integer, if it can be represented exactly.
- [init(floatLiteral:)](stride/init%28floatliteral_%29.md): Creates a stride using the specified floating-point value.
- [init(integerLiteral:)](stride/init%28integerliteral_%29.md): Creates a stride using the specified integer value.

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Numeric](https://developer.apple.com/documentation/swift/numeric)
- [SchedulerTimeIntervalConvertible](../../../combine/schedulertimeintervalconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SignedNumeric](https://developer.apple.com/documentation/swift/signednumeric)

## See Also

### Managing Scheduler Time Type Properties

- [date](date.md): The date this type represents.
- [advanced(by:)](advanced%28by_%29.md): Calculates an operation queue scheduler time by advancing the scheduler time type’s date by the given interval.
- [distance(to:)](distance%28to_%29.md): The distance to another operation queue scheduler time.
