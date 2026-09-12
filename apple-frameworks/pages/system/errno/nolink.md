> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nolink](https://developer.apple.com/documentation/system/errno/nolink)

# noLink

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Reserved.

## Declaration

```swift
static var noLink: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

This error is reserved for future use.

The corresponding C error is `ENOLINK`.

## See Also

### Reserved

- [lastErrnoValue](lasterrnovalue.md): The largest valid error.
- [multiHop](multihop.md): Reserved.
- [noStreamResources](nostreamresources.md): Reserved.
- [notStream](notstream.md): Reserved.
- [notUsed](notused.md): Error. Not used.
- [timeout](timeout.md): Reserved.
