> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowresizability/contentsize](https://developer.apple.com/documentation/swiftui/windowresizability/contentsize)

# contentSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

A window resizability that’s derived from the window’s content.

## Declaration

```swift
static var contentSize: WindowResizability { get set }
```

<a id="discussion"></a>

## Discussion

Windows that use this resizability have:

- A minimum size that matches the minimum size of the window’s content.
- A maximum size that matches the maximum size of the window’s content.

## See Also

### Getting the resizability

- [automatic](automatic.md): The automatic window resizability.
- [contentMinSize](contentminsize.md): A window resizability that’s partially derived from the window’s content.
