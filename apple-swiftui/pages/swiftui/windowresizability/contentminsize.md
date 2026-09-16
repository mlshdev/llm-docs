> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/windowresizability/contentminsize

# contentMinSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

A window resizability that’s partially derived from the window’s content.

## Declaration

```swift
static var contentMinSize: WindowResizability { get set }
```

<a id="discussion"></a>

## Discussion

Windows that use this resizability have:

- A minimum size that matches the minimum size of the window’s content.
- No maximum size.

## See Also

### Getting the resizability

- [automatic](automatic.md): The automatic window resizability.
- [contentSize](contentsize.md): A window resizability that’s derived from the window’s content.
