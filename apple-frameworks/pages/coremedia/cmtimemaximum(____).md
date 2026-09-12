> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemaximum(_:_:)](https://developer.apple.com/documentation/coremedia/cmtimemaximum(_:_:))

# CMTimeMaximum(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the greater of two time values.

## Declaration

```swift
func CMTimeMaximum(_ time1: CMTime, _ time2: CMTime) -> CMTime
```

## Parameters

- `time1`: A time value.
- `time2`: Another time value.

<a id="return-value"></a>

## Return Value

The greater of the two times.

## See Also

### Comparing Times

- [CMTimeCompare(\_:\_:)](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMinimum(\_:\_:)](cmtimeminimum%28____%29.md): Returns the lesser of two time values.

# CMTimeMaximum (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the greater of two time values.

## Declaration

```objectivec
extern CMTime CMTimeMaximum(CMTime time1, CMTime time2);
```

## Parameters

- `time1`: A time value.
- `time2`: Another time value.

<a id="return-value"></a>

## Return Value

The greater of the two times.

## See Also

### Comparing Times

- [CMTIME_COMPARE_INLINE](cmtime_compare_inline.md): Returns a Boolean value that indicates whether the specified comparison is true.
- [CMTimeCompare](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMinimum](cmtimeminimum%28____%29.md): Returns the lesser of two time values.
