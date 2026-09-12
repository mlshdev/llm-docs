> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowplacement/position/replacing(_:)](https://developer.apple.com/documentation/swiftui/windowplacement/position/replacing(_:))

# replacing(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 2.0+ (deprecated in 2.0)

Positions the window in the same spot as an existing window, hiding the old window in the process.

> Use PushWindowAction instead.

## Declaration

```swift
static func replacing(_ relativeWindow: WindowProxy) -> WindowPlacement.Position
```

## Parameters

- `relativeWindow`: The existing window that the new window will replace.

<a id="discussion"></a>

## Discussion

This will position the new window in the same location as the specified existing window, and hide the old window. Closing the new window will then result in the original window being shown again.
