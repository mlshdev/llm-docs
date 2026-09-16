> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/commandgroupplacement/windowsize

# windowSize

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that control the size of the window.

## Declaration

```swift
static let windowSize: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following commands in macOS:

- Minimize
- Zoom

## See Also

### Windows

- [singleWindowList](singlewindowlist.md): Placement for commands that describe and reveal any windows that the app defines.
- [windowArrangement](windowarrangement.md): Placement for commands that arrange all of an app’s windows.
- [windowList](windowlist.md): Placement for commands that describe and reveal the app’s open windows.
