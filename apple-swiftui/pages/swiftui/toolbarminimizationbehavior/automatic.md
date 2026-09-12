> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarminimizationbehavior/automatic](https://developer.apple.com/documentation/swiftui/toolbarminimizationbehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The system determines the minimize behavior. By default, navigation bars on iOS will minimize when the view has a searchable using the [toolbarPrincipal](../searchfieldplacement/toolbarprincipal.md) placement.

## Declaration

```swift
static var automatic: ToolbarMinimizationBehavior { get }
```

## See Also

### Getting behaviors

- [never](never.md): The toolbar cannot be minimized.
- [onScrollDown](onscrolldown.md): Minimize when scrolling down.
- [onScrollUp](onscrollup.md): Minimize when scrolling up.
