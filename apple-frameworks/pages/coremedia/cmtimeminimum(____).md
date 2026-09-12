> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeminimum(_:_:)](https://developer.apple.com/documentation/coremedia/cmtimeminimum(_:_:))

# CMTimeMinimum(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the lesser of two time values.

## Declaration

```swift
func CMTimeMinimum(_ time1: CMTime, _ time2: CMTime) -> CMTime
```

## Parameters

- `time1`: A time value.
- `time2`: Another time value.

<a id="return-value"></a>

## Return Value

The lesser of the two times.

## See Also

### Comparing Times

- [CMTimeCompare(\_:\_:)](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMaximum(\_:\_:)](cmtimemaximum%28____%29.md): Returns the greater of two time values.

# CMTimeMinimum (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the lesser of two time values.

## Declaration

```objectivec
extern CMTime CMTimeMinimum(CMTime time1, CMTime time2);
```

## Parameters

- `time1`: A time value.
- `time2`: Another time value.

<a id="return-value"></a>

## Return Value

The lesser of the two times.

## See Also

### Comparing Times

- [CMTIME_COMPARE_INLINE](cmtime_compare_inline.md): Returns a Boolean value that indicates whether the specified comparison is true.
- [CMTimeCompare](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMaximum](cmtimemaximum%28____%29.md): Returns the greater of two time values.
