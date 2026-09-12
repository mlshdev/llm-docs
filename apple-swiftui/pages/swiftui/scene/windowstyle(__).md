> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowstyle(_:)](https://developer.apple.com/documentation/swiftui/scene/windowstyle(_:))

# windowStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ · visionOS 1.0+

Sets the style for windows created by this scene.

## Declaration

```swift
nonisolated func windowStyle<S>(_ style: S) -> some Scene where S : WindowStyle

```

## See Also

### Creating windows

- [WindowGroup](../windowgroup.md): A scene that presents a group of identically structured windows.
- [Window](../window.md): A scene that presents its content in a single, unique window.
- [UtilityWindow](../utilitywindow.md): A specialized window scene that provides secondary utility to the content of the main scenes of an application.
- [WindowStyle](../windowstyle.md): A specification for the appearance and interaction of a window.
