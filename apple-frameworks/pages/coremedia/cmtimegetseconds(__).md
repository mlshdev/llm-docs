> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimegetseconds(_:)](https://developer.apple.com/documentation/coremedia/cmtimegetseconds(_:))

# CMTimeGetSeconds(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a representation of the time in seconds.

## Declaration

```swift
func CMTimeGetSeconds(_ time: CMTime) -> Float64
```

## Parameters

- `time`: A time value for which to retrieve seconds.

<a id="return-value"></a>

## Return Value

The time in seconds.

<a id="Discussion"></a>

## Discussion

If the time is [invalid](cmtime/invalid.md) or [indefinite](cmtime/indefinite.md), the result is [nan](https://developer.apple.com/documentation/swift/double/nan).

If the time is infinite, the result is positive or negative infinity.

If the time is numeric, it ignores the epoch, and returns the result of `time.value / time.timescale`. It performs the division in `Float64`, so the fraction isn’t lost in the returned result.

## See Also

### Inspecting a Time

- [CMTimeAbsoluteValue(\_:)](cmtimeabsolutevalue%28__%29.md): Returns the absolute value of a time.
- [CMTIME_IS_VALID(\_:)](cmtime_is_valid%28__%29.md): Returns a Boolean value that indicates whether a given time is valid.
- [CMTIME_IS_INVALID(\_:)](cmtime_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a given time is invalid.
- [CMTIME_IS_POSITIVEINFINITY(\_:)](cmtime_is_positiveinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is positive infinity.
- [CMTIME_IS_NEGATIVEINFINITY(\_:)](cmtime_is_negativeinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is negative infinity.
- [CMTIME_IS_INDEFINITE(\_:)](cmtime_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a given time is indefinite.
- [CMTIME_IS_NUMERIC(\_:)](cmtime_is_numeric%28__%29.md): Returns a Boolean value that indicates whether a given time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED(\_:)](cmtime_has_been_rounded%28__%29.md): Returns a Boolean value that indicates whether the system rounded the time value.

# CMTimeGetSeconds (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a representation of the time in seconds.

## Declaration

```objectivec
extern Float64 CMTimeGetSeconds(CMTime time);
```

## Parameters

- `time`: A time value for which to retrieve seconds.

<a id="return-value"></a>

## Return Value

The time in seconds.

<a id="Discussion"></a>

## Discussion

If the time is [kCMTimeInvalid](cmtime/invalid.md) or [kCMTimeIndefinite](cmtime/indefinite.md), the result is [nan](https://developer.apple.com/documentation/swift/double/nan).

If the time is infinite, the result is positive or negative infinity.

If the time is numeric, it ignores the epoch, and returns the result of `time.value / time.timescale`. It performs the division in `Float64`, so the fraction isn’t lost in the returned result.

## See Also

### Inspecting a Time

- [CMTimeAbsoluteValue](cmtimeabsolutevalue%28__%29.md): Returns the absolute value of a time.
- [CMTIME_IS_VALID](cmtime_is_valid.md): Returns a Boolean value that indicates whether a time is valid.
- [CMTIME_IS_INVALID](cmtime_is_invalid.md): Returns a Boolean value that indicates whether a time is invalid.
- [CMTIME_IS_POSITIVE_INFINITY](cmtime_is_positive_infinity.md): Returns a Boolean value that indicates whether a time is positive infinity.
- [CMTIME_IS_NEGATIVE_INFINITY](cmtime_is_negative_infinity.md): Returns a Boolean value that indicates whether a time is negative infinity.
- [CMTIME_IS_INDEFINITE](cmtime_is_indefinite.md): Returns a Boolean value that indicates whether a time is indefinite.
- [CMTIME_IS_NUMERIC](cmtime_is_numeric.md): Returns a Boolean value that indicates whether a time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED](cmtime_has_been_rounded.md): Returns a Boolean value that indicates whether the system rounded the time.
