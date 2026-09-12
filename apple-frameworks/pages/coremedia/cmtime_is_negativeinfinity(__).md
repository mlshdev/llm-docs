> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime_is_negativeinfinity(_:)](https://developer.apple.com/documentation/coremedia/cmtime_is_negativeinfinity(_:))

# CMTIME_IS_NEGATIVEINFINITY(\_:)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a given time is negative infinity.

## Declaration

```swift
func CMTIME_IS_NEGATIVEINFINITY(_ time: CMTime) -> Bool
```

## Parameters

- `time`: A time value to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the time represents negative infinity; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this macro instead of testing whether a time is equal to [negativeInfinity](cmtime/negativeinfinity.md), because there are many times that negative positive infinity. This is because the system ignores nonflags fields, so they can contain anything.

## See Also

### Inspecting a Time

- [CMTimeGetSeconds(\_:)](cmtimegetseconds%28__%29.md): Returns a representation of the time in seconds.
- [CMTimeAbsoluteValue(\_:)](cmtimeabsolutevalue%28__%29.md): Returns the absolute value of a time.
- [CMTIME_IS_VALID(\_:)](cmtime_is_valid%28__%29.md): Returns a Boolean value that indicates whether a given time is valid.
- [CMTIME_IS_INVALID(\_:)](cmtime_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a given time is invalid.
- [CMTIME_IS_POSITIVEINFINITY(\_:)](cmtime_is_positiveinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is positive infinity.
- [CMTIME_IS_INDEFINITE(\_:)](cmtime_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a given time is indefinite.
- [CMTIME_IS_NUMERIC(\_:)](cmtime_is_numeric%28__%29.md): Returns a Boolean value that indicates whether a given time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED(\_:)](cmtime_has_been_rounded%28__%29.md): Returns a Boolean value that indicates whether the system rounded the time value.
