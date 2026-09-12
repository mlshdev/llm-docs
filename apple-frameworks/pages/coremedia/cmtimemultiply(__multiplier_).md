> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemultiply(_:multiplier:)](https://developer.apple.com/documentation/coremedia/cmtimemultiply(_:multiplier:))

# CMTimeMultiply(\_:multiplier:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the result of multiplying a time by an integer multiplier.

## Declaration

```swift
func CMTimeMultiply(_ time: CMTime, multiplier: Int32) -> CMTime
```

## Parameters

- `time`: A time value to multiply.
- `multiplier`: A 32-bit integer multiplier value.

<a id="return-value"></a>

## Return Value

A time structure that represents the product of the multiplied time.

<a id="Discussion"></a>

## Discussion

The result has the same timescale as the time argument. If the result overflows, the system repeatedly halves the result until no overflow occurs. The system applies the default rounding method when converting the result to this timescale. If the result’s value still overflows when its timescale is `1`, then the result is positive or negative infinity, depending on the direction of the overflow. If rounding occurs for any reason, the system sets the result’s [hasBeenRounded](cmtimeflags/hasbeenrounded.md) flag. It also sets this flag if the time argument has [hasBeenRounded](cmtimeflags/hasbeenrounded.md) set. If the `time` operand is invalid, the result is invalid. If the time operand is valid but infinite, the result is infinite and of an appropriate sign, based on the signs of both operands. If the time operand is valid, but indefinite, the result is indefinite.

## See Also

### Performing Time Calculations

- [CMTimeAdd(\_:\_:)](cmtimeadd%28____%29.md): Returns the sum of two times.
- [CMTimeSubtract(\_:\_:)](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiplyByFloat64(\_:multiplier:)](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
- [CMTimeMultiplyByRatio(\_:multiplier:divisor:)](cmtimemultiplybyratio%28__multiplier_divisor_%29.md): Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.

# CMTimeMultiply (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the result of multiplying a time by an integer multiplier.

## Declaration

```objectivec
extern CMTime CMTimeMultiply(CMTime time, int32_t multiplier);
```

## Parameters

- `time`: A time value to multiply.
- `multiplier`: A 32-bit integer multiplier value.

<a id="return-value"></a>

## Return Value

A time structure that represents the product of the multiplied time.

<a id="Discussion"></a>

## Discussion

The result has the same timescale as the time argument. If the result overflows, the system repeatedly halves the result until no overflow occurs. The system applies the default rounding method when converting the result to this timescale. If the result’s value still overflows when its timescale is `1`, then the result is positive or negative infinity, depending on the direction of the overflow. If rounding occurs for any reason, the system sets the result’s [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) flag. It also sets this flag if the time argument has [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) set. If the `time` operand is invalid, the result is invalid. If the time operand is valid but infinite, the result is infinite and of an appropriate sign, based on the signs of both operands. If the time operand is valid, but indefinite, the result is indefinite.

## See Also

### Performing Time Calculations

- [CMTimeAdd](cmtimeadd%28____%29.md): Returns the sum of two times.
- [CMTimeSubtract](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiplyByFloat64](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
- [CMTimeMultiplyByRatio](cmtimemultiplybyratio%28__multiplier_divisor_%29.md): Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.
