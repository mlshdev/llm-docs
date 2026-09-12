> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemvisibilitypriority/low](https://developer.apple.com/documentation/swiftui/toolbaritemvisibilitypriority/low)

# low

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.1+

A priority that moves the item to the overflow menu before items with the default or high priority.

## Declaration

```swift
static let low: ToolbarItemVisibilityPriority
```

<a id="discussion"></a>

## Discussion

Use for secondary actions, such as archive or delete, that don’t need persistent visibility in the toolbar.

## See Also

### Getting system priorities

- [automatic](automatic.md): The default priority that lets the system determine the item’s visibility in the toolbar.
- [high](high.md): A priority that keeps the item in the toolbar longer than items with the default or low priority.
