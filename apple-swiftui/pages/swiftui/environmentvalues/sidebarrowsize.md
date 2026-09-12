> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/sidebarrowsize](https://developer.apple.com/documentation/swiftui/environmentvalues/sidebarrowsize)

# sidebarRowSize

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The current size of sidebar rows.

## Declaration

```swift
var sidebarRowSize: SidebarRowSize { get set }
```

<a id="discussion"></a>

## Discussion

On macOS, reflects the value of the “Sidebar icon size” in System Settings’ Appearance settings.

This can be used to update the content shown in the sidebar in response to this size. And it can be overridden to force a sidebar to a particularly size, regardless of the user preference.

On other platforms, the value is always `.medium` and setting a different value has no effect.

SwiftUI views like `Label` automatically adapt to the sidebar row size.

## See Also

### Configuring the sidebar

- [SidebarRowSize](../sidebarrowsize.md): The standard sizes of sidebar rows.
