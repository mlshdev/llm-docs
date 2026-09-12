> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimecompare(_:_:)](https://developer.apple.com/documentation/coremedia/cmtimecompare(_:_:))

# CMTimeCompare(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the numerical relationship of two times.

## Declaration

```swift
func CMTimeCompare(_ time1: CMTime, _ time2: CMTime) -> Int32
```

## Parameters

- `time1`: A time to compare.
- `time2`: Another time to compare.

<a id="return-value"></a>

## Return Value

A numeric value that indicates the relative order of the times.

<a id="Discussion"></a>

## Discussion

This method returns the following values depending on the relationship of the time values:

- If `time1` is less than `time2`, it returns `-1`.
- If `time1` is greater than `time2`, it returns `1`.
- If `time1` and `time2` are equal, it returns `0`.

To sort numeric and nonnumeric times consistently, this call uses the following sort rules:

`-infinity < all finite values < indefinite < +infinity < invalid`

Times with numerically larger epochs are greater than those with smaller epochs. \`\`

> **Tip**

>  You can also use the [CMTIME_COMPARE_INLINE](cmtime_compare_inline.md) macro to compare times. This macro results in a more readable expression because it puts the comparison operator between the operands.

## See Also

### Comparing Times

- [CMTimeMaximum(\_:\_:)](cmtimemaximum%28____%29.md): Returns the greater of two time values.
- [CMTimeMinimum(\_:\_:)](cmtimeminimum%28____%29.md): Returns the lesser of two time values.

# CMTimeCompare (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the numerical relationship of two times.

## Declaration

```objectivec
extern int32_t CMTimeCompare(CMTime time1, CMTime time2);
```

## Parameters

- `time1`: A time to compare.
- `time2`: Another time to compare.

<a id="return-value"></a>

## Return Value

A numeric value that indicates the relative order of the times.

<a id="Discussion"></a>

## Discussion

This method returns the following values depending on the relationship of the time values:

- If `time1` is less than `time2`, it returns `-1`.
- If `time1` is greater than `time2`, it returns `1`.
- If `time1` and `time2` are equal, it returns `0`.

To sort numeric and nonnumeric times consistently, this call uses the following sort rules:

`-infinity < all finite values < indefinite < +infinity < invalid`

Times with numerically larger epochs are greater than those with smaller epochs. \`\`

> **Tip**

>  You can also use the [CMTIME_COMPARE_INLINE](cmtime_compare_inline.md) macro to compare times. This macro results in a more readable expression because it puts the comparison operator between the operands.

## See Also

### Comparing Times

- [CMTIME_COMPARE_INLINE](cmtime_compare_inline.md): Returns a Boolean value that indicates whether the specified comparison is true.
- [CMTimeMaximum](cmtimemaximum%28____%29.md): Returns the greater of two time values.
- [CMTimeMinimum](cmtimeminimum%28____%29.md): Returns the lesser of two time values.
