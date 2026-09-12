> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeadd(_:_:)](https://developer.apple.com/documentation/coremedia/cmtimeadd(_:_:))

# CMTimeAdd(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the sum of two times.

## Declaration

```swift
func CMTimeAdd(_ lhs: CMTime, _ rhs: CMTime) -> CMTime
```

## Parameters

- `lhs`: A time value.
- `rhs`: A second time value.

<a id="return-value"></a>

## Return Value

A time value that represents the result of the operation.

<a id="Discussion"></a>

## Discussion

If both operands have the same timescale, the timescale of the result is the same. If the operands have different timescales, the timescale of the result is the least common multiple of the operands’ timescales. If that value is greater than [kCMTimeMaxTimescale](kcmtimemaxtimescale.md), the system sets the timescale to [kCMTimeMaxTimescale](kcmtimemaxtimescale.md) and uses the default rounding method to convert the result to this timescale.

If the value of the result overflows, the system repeatedly halves its timescale until it no longer overflows, and uses the default rounding to convert the result to this timescale. If the result’s value still overflows when its timescale is `1`, the system sets the result’s timescale to positive or negative infinity, depending on the direction of the overflow. If any rounding occurs, or if either operand has its [hasBeenRounded](cmtimeflags/hasbeenrounded.md) flag set, the system sets the result’s [hasBeenRounded](cmtimeflags/hasbeenrounded.md) flag.

If either of the operands is [invalid](cmtime/invalid.md), the result is [invalid](cmtime/invalid.md).

If the operands are valid, but one is infinite, the result is infinite. If the operands are valid, and both are infinite, the results are as follows:

- +infinity + +infinity == +infinity
- -infinity + -infinity == -infinity
- +infinity + -infinity == invalid
- -infinity + +infinity == invalid

If the operands are valid, not infinite, and either or both is [indefinite](cmtime/indefinite.md), the result is [indefinite](cmtime/indefinite.md).

If the two operands are numeric, but have different nonzero epochs, the result is [invalid](cmtime/invalid.md). If both have the same nonzero epoch, the result is epoch zero. You can’t add or subtract times that have different epochs, because the epoch length is unknown. The system considers times in epoch zero to be durations, so you can add them to times in other epochs. You can compare times in different epochs, however, because numerically greater epochs always occur after numerically lesser epochs.

## See Also

### Performing Time Calculations

- [CMTimeSubtract(\_:\_:)](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiply(\_:multiplier:)](cmtimemultiply%28__multiplier_%29.md): Returns the result of multiplying a time by an integer multiplier.
- [CMTimeMultiplyByFloat64(\_:multiplier:)](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
- [CMTimeMultiplyByRatio(\_:multiplier:divisor:)](cmtimemultiplybyratio%28__multiplier_divisor_%29.md): Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.

# CMTimeAdd (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the sum of two times.

## Declaration

```objectivec
extern CMTime CMTimeAdd(CMTime lhs, CMTime rhs);
```

## Parameters

- `lhs`: A time value.
- `rhs`: A second time value.

<a id="return-value"></a>

## Return Value

A time value that represents the result of the operation.

<a id="Discussion"></a>

## Discussion

If both operands have the same timescale, the timescale of the result is the same. If the operands have different timescales, the timescale of the result is the least common multiple of the operands’ timescales. If that value is greater than [kCMTimeMaxTimescale](kcmtimemaxtimescale.md), the system sets the timescale to [kCMTimeMaxTimescale](kcmtimemaxtimescale.md) and uses the default rounding method to convert the result to this timescale.

If the value of the result overflows, the system repeatedly halves its timescale until it no longer overflows, and uses the default rounding to convert the result to this timescale. If the result’s value still overflows when its timescale is `1`, the system sets the result’s timescale to positive or negative infinity, depending on the direction of the overflow. If any rounding occurs, or if either operand has its [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) flag set, the system sets the result’s [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) flag.

If either of the operands is [kCMTimeInvalid](cmtime/invalid.md), the result is [kCMTimeInvalid](cmtime/invalid.md).

If the operands are valid, but one is infinite, the result is infinite. If the operands are valid, and both are infinite, the results are as follows:

- +infinity + +infinity == +infinity
- -infinity + -infinity == -infinity
- +infinity + -infinity == invalid
- -infinity + +infinity == invalid

If the operands are valid, not infinite, and either or both is [kCMTimeIndefinite](cmtime/indefinite.md), the result is [kCMTimeIndefinite](cmtime/indefinite.md).

If the two operands are numeric, but have different nonzero epochs, the result is [kCMTimeInvalid](cmtime/invalid.md). If both have the same nonzero epoch, the result is epoch zero. You can’t add or subtract times that have different epochs, because the epoch length is unknown. The system considers times in epoch zero to be durations, so you can add them to times in other epochs. You can compare times in different epochs, however, because numerically greater epochs always occur after numerically lesser epochs.

## See Also

### Performing Time Calculations

- [CMTimeSubtract](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiply](cmtimemultiply%28__multiplier_%29.md): Returns the result of multiplying a time by an integer multiplier.
- [CMTimeMultiplyByFloat64](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
- [CMTimeMultiplyByRatio](cmtimemultiplybyratio%28__multiplier_divisor_%29.md): Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.
