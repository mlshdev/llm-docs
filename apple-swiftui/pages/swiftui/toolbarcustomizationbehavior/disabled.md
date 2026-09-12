> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcustomizationbehavior/disabled](https://developer.apple.com/documentation/swiftui/toolbarcustomizationbehavior/disabled)

# disabled

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The disabled customization behavior.

## Declaration

```swift
static var disabled: ToolbarCustomizationBehavior { get }
```

<a id="discussion"></a>

## Discussion

Items with this behavior may not be removed or moved by the user. They will be placed before other customizatable items. Use this behavior for the most important items that users need for the app to do common functionality.

## See Also

### Getting customization behaviors

- [default](default.md): The default customization behavior.
- [reorderable](reorderable.md): The reorderable customization behavior.
