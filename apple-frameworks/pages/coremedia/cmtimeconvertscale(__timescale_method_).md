> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeconvertscale(_:timescale:method:)](https://developer.apple.com/documentation/coremedia/cmtimeconvertscale(_:timescale:method:))

# CMTimeConvertScale(\_:timescale:method:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts the source time to a new timescale using the specified rounding method.

## Declaration

```swift
func CMTimeConvertScale(_ time: CMTime, timescale newTimescale: Int32, method: CMTimeRoundingMethod) -> CMTime
```

## Parameters

- `time`: The time to convert.
- `newTimescale`: The timescale to use for the converted time.
- `method`: The rounding method to apply.

<a id="return-value"></a>

## Return Value

A time structure that represents the time in a new timescale.

<a id="Discussion"></a>

## Discussion

If this operation needs to round the value, it sets the resulting time’s [hasBeenRounded](cmtimeflags/hasbeenrounded.md) flag. If the source time is nonnumeric (infinite, indefinite, or invalid), the result is also nonnumeric.

## See Also

### Changing the Timescale

- [CMTimeRoundingMethod](cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.

# CMTimeConvertScale (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts the source time to a new timescale using the specified rounding method.

## Declaration

```objectivec
extern CMTime CMTimeConvertScale(CMTime time, int32_t newTimescale, CMTimeRoundingMethod method);
```

## Parameters

- `time`: The time to convert.
- `newTimescale`: The timescale to use for the converted time.
- `method`: The rounding method to apply.

<a id="return-value"></a>

## Return Value

A time structure that represents the time in a new timescale.

<a id="Discussion"></a>

## Discussion

If this operation needs to round the value, it sets the resulting time’s [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) flag. If the source time is nonnumeric (infinite, indefinite, or invalid), the result is also nonnumeric.

## See Also

### Changing the Timescale

- [CMTimeRoundingMethod](cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.
