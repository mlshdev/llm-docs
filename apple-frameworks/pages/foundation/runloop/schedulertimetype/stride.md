> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/schedulertimetype/stride](https://developer.apple.com/documentation/foundation/runloop/schedulertimetype/stride)

# RunLoop.SchedulerTimeType.Stride

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The interval by which run loop times advance.

## Declaration

```swift
struct Stride
```

## Topics

### Creating Scheduler Time Strides

- [init(\_:)](stride/init%28__%29.md): Creates a run loop scheduler time interval from the given time interval.
- [init(exactly:)](stride/init%28exactly_%29.md): Creates a run loop scheduler time interval from a binary integer type.
- [init(floatLiteral:)](stride/init%28floatliteral_%29.md): Creates a run loop scheduler time interval from a floating-point seconds value.
- [init(integerLiteral:)](stride/init%28integerliteral_%29.md): Creates a run loop scheduler time interval from an integer seconds value.

### Converting to Seconds

- [microseconds(\_:)](stride/microseconds%28__%29.md): Converts the specified number of microseconds into an instance of this scheduler time type.
- [milliseconds(\_:)](stride/milliseconds%28__%29.md): Converts the specified number of milliseconds into an instance of this scheduler time type.
- [nanoseconds(\_:)](stride/nanoseconds%28__%29.md): Converts the specified number of nanoseconds into an instance of this scheduler time type.
- [seconds(\_:)](stride/seconds%28__%29-4kk8j.md): Converts the specified number of seconds, as a floating-point value, into an instance of this scheduler time type.
- [seconds(\_:)](stride/seconds%28__%29-48wwk.md): Converts the specified number of seconds into an instance of this scheduler time type.

### Inspecting Stride Properties

- [magnitude](stride/magnitude.md): The value of this time interval in seconds.
- [timeInterval](stride/timeinterval.md): The value of this time interval in seconds.

### Operators

- [\*(\_:\_:)](stride/_%28____%29.md): Returns the result of multiplying the values of the two arguments.
- [\*=(\_:\_:)](stride/_=%28____%29.md): Multiplies the values of the two arguments, and assigns the result to the first argument.
- [+(\_:\_:)](stride/+%28____%29.md): Returns the result of adding the values of the two arguments.
- [+=(\_:\_:)](stride/+=%28____%29.md): Adds the values of the two arguments, and assigns the result to the first argument.
- [-(\_:\_:)](stride/-%28____%29.md): Returns the result of subtracting the second stride from the first.
- [-=(\_:\_:)](stride/-=%28____%29.md): Subtracts the second stride from the first and assigns the result to the first.
- [\<(\_:\_:)](stride/_%28____%29~07fc27a6.md): Returns a Boolean value indicating whether the first stride is less than the second.

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

### Working with Scheduler Time Intervals

- [advanced(by:)](advanced%28by_%29.md): Returns a run loop scheduler time calculated by advancing this instance’s time by the given interval.
- [distance(to:)](distance%28to_%29.md): Returns the distance to another run loop scheduler time.
