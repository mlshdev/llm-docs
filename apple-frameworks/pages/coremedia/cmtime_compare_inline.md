> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime_compare_inline](https://developer.apple.com/documentation/coremedia/cmtime_compare_inline)

# CMTIME_COMPARE_INLINE

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the specified comparison is true.

## Declaration

```objectivec
#define CMTIME_COMPARE_INLINE(time1, comparator, time2)
```

<a id="Discussion"></a>

## Discussion

The following code demonstrates how to use this macro to determine if the first time is less than or equal to the second time:

```objc
CMTIME_COMPARE_INLINE(time1, <=, time2)
```

## See Also

### Comparing Times

- [CMTimeCompare](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMaximum](cmtimemaximum%28____%29.md): Returns the greater of two time values.
- [CMTimeMinimum](cmtimeminimum%28____%29.md): Returns the lesser of two time values.
