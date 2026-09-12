> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement/windowarrangement](https://developer.apple.com/documentation/swiftui/commandgroupplacement/windowarrangement)

# windowArrangement

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that arrange all of an app’s windows.

## Declaration

```swift
static let windowArrangement: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following command in macOS:

- Bring All to Front

## See Also

### Windows

- [singleWindowList](singlewindowlist.md): Placement for commands that describe and reveal any windows that the app defines.
- [windowList](windowlist.md): Placement for commands that describe and reveal the app’s open windows.
- [windowSize](windowsize.md): Placement for commands that control the size of the window.
