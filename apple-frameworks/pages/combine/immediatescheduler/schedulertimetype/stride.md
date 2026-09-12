> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/immediatescheduler/schedulertimetype/stride](https://developer.apple.com/documentation/combine/immediatescheduler/schedulertimetype/stride)

# ImmediateScheduler.SchedulerTimeType.Stride

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The increment by which the immediate scheduler counts time.

## Declaration

```swift
struct Stride
```

## Topics

### Creating Scheduler Time Strides

- [init(\_:)](stride/init%28__%29.md): Creates an immediate scheduler time interval from the given time interval.
- [init(exactly:)](stride/init%28exactly_%29.md): Creates an immediate scheduler time interval from a binary integer type.
- [init(floatLiteral:)](stride/init%28floatliteral_%29.md): Creates an immediate scheduler time interval from a floating-point seconds value.
- [init(integerLiteral:)](stride/init%28integerliteral_%29.md): Creates an immediate scheduler time interval from an integer seconds value.

### Creating Scheduler Time Strides from Seconds

- [microseconds(\_:)](stride/microseconds%28__%29.md): Converts the specified number of microseconds into an instance of this scheduler time type.
- [milliseconds(\_:)](stride/milliseconds%28__%29.md): Converts the specified number of milliseconds into an instance of this scheduler time type.
- [nanoseconds(\_:)](stride/nanoseconds%28__%29.md): Converts the specified number of nanoseconds into an instance of this scheduler time type.
- [seconds(\_:)](stride/seconds%28__%29-8lm65.md): Converts the specified number of seconds, as a floating-point value, into an instance of this scheduler time type.
- [seconds(\_:)](stride/seconds%28__%29-9uwki.md): Converts the specified number of seconds into an instance of this scheduler time type.

### Declaring Timekeeping Types

- [ImmediateScheduler.SchedulerTimeType.Stride.FloatLiteralType](stride/floatliteraltype.md): The type used when evaluating floating-point literals.
- [ImmediateScheduler.SchedulerTimeType.Stride.IntegerLiteralType](stride/integerliteraltype.md): The type used when evaluating integer literals.
- [ImmediateScheduler.SchedulerTimeType.Stride.Magnitude](stride/magnitude-swift.typealias.md): The type used for expressing the stride’s magnitude.

### Expressing Scheduler Time Strides as Seconds

- [magnitude](stride/magnitude-swift.property.md): The value of this time interval in seconds.

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
- [SchedulerTimeIntervalConvertible](../../schedulertimeintervalconvertible.md)
- [SignedNumeric](https://developer.apple.com/documentation/swift/signednumeric)
