> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowvisibilitytoggle/init(windowid:)](https://developer.apple.com/documentation/swiftui/windowvisibilitytoggle/init(windowid:))

# init(windowID:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Create a window visibility toggle to alter the visibility of a specific window.

## Declaration

```swift
nonisolated init(windowID: String) where Label == DefaultWindowVisibilityToggleLabel
```

## Parameters

- `windowID`: The `id` of the singleton window type that should be toggled. If this is not a valid id, the toggle will be disabled and non-functional.
