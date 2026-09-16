> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbaritemvisibilitypriority/high

# high

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.1+

A priority that keeps the item in the toolbar longer than items with the default or low priority.

## Declaration

```swift
static let high: ToolbarItemVisibilityPriority
```

<a id="discussion"></a>

## Discussion

Use for frequently used actions that need to stay visible as the toolbar shrinks.

## See Also

### Getting system priorities

- [automatic](automatic.md): The default priority that lets the system determine the item’s visibility in the toolbar.
- [low](low.md): A priority that moves the item to the overflow menu before items with the default or high priority.
