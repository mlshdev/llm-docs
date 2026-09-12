> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeabsolutevalue(_:)](https://developer.apple.com/documentation/coremedia/cmtimeabsolutevalue(_:))

# CMTimeAbsoluteValue(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the absolute value of a time.

## Declaration

```swift
func CMTimeAbsoluteValue(_ time: CMTime) -> CMTime
```

## Parameters

- `time`: A time structure.

<a id="return-value"></a>

## Return Value

The time value, but with its sign inverted, if necessary.

## See Also

### Inspecting a Time

- [CMTimeGetSeconds(\_:)](cmtimegetseconds%28__%29.md): Returns a representation of the time in seconds.
- [CMTIME_IS_VALID(\_:)](cmtime_is_valid%28__%29.md): Returns a Boolean value that indicates whether a given time is valid.
- [CMTIME_IS_INVALID(\_:)](cmtime_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a given time is invalid.
- [CMTIME_IS_POSITIVEINFINITY(\_:)](cmtime_is_positiveinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is positive infinity.
- [CMTIME_IS_NEGATIVEINFINITY(\_:)](cmtime_is_negativeinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is negative infinity.
- [CMTIME_IS_INDEFINITE(\_:)](cmtime_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a given time is indefinite.
- [CMTIME_IS_NUMERIC(\_:)](cmtime_is_numeric%28__%29.md): Returns a Boolean value that indicates whether a given time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED(\_:)](cmtime_has_been_rounded%28__%29.md): Returns a Boolean value that indicates whether the system rounded the time value.

# CMTimeAbsoluteValue (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the absolute value of a time.

## Declaration

```objectivec
extern CMTime CMTimeAbsoluteValue(CMTime time);
```

## Parameters

- `time`: A time structure.

<a id="return-value"></a>

## Return Value

The time value, but with its sign inverted, if necessary.

## See Also

### Inspecting a Time

- [CMTimeGetSeconds](cmtimegetseconds%28__%29.md): Returns a representation of the time in seconds.
- [CMTIME_IS_VALID](cmtime_is_valid.md): Returns a Boolean value that indicates whether a time is valid.
- [CMTIME_IS_INVALID](cmtime_is_invalid.md): Returns a Boolean value that indicates whether a time is invalid.
- [CMTIME_IS_POSITIVE_INFINITY](cmtime_is_positive_infinity.md): Returns a Boolean value that indicates whether a time is positive infinity.
- [CMTIME_IS_NEGATIVE_INFINITY](cmtime_is_negative_infinity.md): Returns a Boolean value that indicates whether a time is negative infinity.
- [CMTIME_IS_INDEFINITE](cmtime_is_indefinite.md): Returns a Boolean value that indicates whether a time is indefinite.
- [CMTIME_IS_NUMERIC](cmtime_is_numeric.md): Returns a Boolean value that indicates whether a time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED](cmtime_has_been_rounded.md): Returns a Boolean value that indicates whether the system rounded the time.
