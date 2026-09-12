> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/lasterrnovalue](https://developer.apple.com/documentation/system/errno/lasterrnovalue)

# lastErrnoValue

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The largest valid error.

## Declaration

```swift
static var lastErrnoValue: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

This value is the largest valid value encountered using the C `errno` global variable. It isn’t a valid error.

The corresponding C error is `ELAST`.

## See Also

### Reserved

- [multiHop](multihop.md): Reserved.
- [noLink](nolink.md): Reserved.
- [noStreamResources](nostreamresources.md): Reserved.
- [notStream](notstream.md): Reserved.
- [notUsed](notused.md): Error. Not used.
- [timeout](timeout.md): Reserved.
