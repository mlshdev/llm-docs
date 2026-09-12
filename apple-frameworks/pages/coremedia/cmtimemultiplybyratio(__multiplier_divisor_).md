> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemultiplybyratio(_:multiplier:divisor:)](https://developer.apple.com/documentation/coremedia/cmtimemultiplybyratio(_:multiplier:divisor:))

# CMTimeMultiplyByRatio(\_:multiplier:divisor:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.

## Declaration

```swift
func CMTimeMultiplyByRatio(_ time: CMTime, multiplier: Int32, divisor: Int32) -> CMTime
```

## Parameters

- `time`: A time value to multiple by a ratio.
- `multiplier`: The value by which to multiply.
- `divisor`: The value by which to divide.

<a id="return-value"></a>

## Return Value

A value equal to `(time * multiplier) / divisor`.

<a id="Discussion"></a>

## Discussion

This method preserves the exact rational value, unless it causes an overflow. If an overflow occurs, the system chooses a new timescale to minimize the rounding error and applies the default rounding method when converting the result to this timescale. If the result’s value still overflows when its timescale is `1`, the system sets the result to positive or negative infinity, depending on the direction of the overflow.

If rounding occurs for any reason, the system sets the result’s [hasBeenRounded](cmtimeflags/hasbeenrounded.md) flag. It also sets this flag if the time argument has its [hasBeenRounded](cmtimeflags/hasbeenrounded.md) flag set.

If the time value or timescale is zero, the result is [invalid](cmtime/invalid.md). If only the timescale is zero, the result is positive or negative infinity, depending on the signs of the other arguments.

If time is invalid, the result is [invalid](cmtime/invalid.md). If time is infinite, the result is similarly infinite. If time is indefinite, the result is indefinite.

## See Also

### Performing Time Calculations

- [CMTimeAdd(\_:\_:)](cmtimeadd%28____%29.md): Returns the sum of two times.
- [CMTimeSubtract(\_:\_:)](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiply(\_:multiplier:)](cmtimemultiply%28__multiplier_%29.md): Returns the result of multiplying a time by an integer multiplier.
- [CMTimeMultiplyByFloat64(\_:multiplier:)](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.

# CMTimeMultiplyByRatio (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.

## Declaration

```objectivec
extern CMTime CMTimeMultiplyByRatio(CMTime time, int32_t multiplier, int32_t divisor);
```

## Parameters

- `time`: A time value to multiple by a ratio.
- `multiplier`: The value by which to multiply.
- `divisor`: The value by which to divide.

<a id="return-value"></a>

## Return Value

A value equal to `(time * multiplier) / divisor`.

<a id="Discussion"></a>

## Discussion

This method preserves the exact rational value, unless it causes an overflow. If an overflow occurs, the system chooses a new timescale to minimize the rounding error and applies the default rounding method when converting the result to this timescale. If the result’s value still overflows when its timescale is `1`, the system sets the result to positive or negative infinity, depending on the direction of the overflow.

If rounding occurs for any reason, the system sets the result’s [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) flag. It also sets this flag if the time argument has its [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) flag set.

If the time value or timescale is zero, the result is [kCMTimeInvalid](cmtime/invalid.md). If only the timescale is zero, the result is positive or negative infinity, depending on the signs of the other arguments.

If time is invalid, the result is [kCMTimeInvalid](cmtime/invalid.md). If time is infinite, the result is similarly infinite. If time is indefinite, the result is indefinite.

## See Also

### Performing Time Calculations

- [CMTimeAdd](cmtimeadd%28____%29.md): Returns the sum of two times.
- [CMTimeSubtract](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiply](cmtimemultiply%28__multiplier_%29.md): Returns the result of multiplying a time by an integer multiplier.
- [CMTimeMultiplyByFloat64](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
