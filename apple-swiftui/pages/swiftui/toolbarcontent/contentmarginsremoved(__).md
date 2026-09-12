> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcontent/contentmarginsremoved(_:)](https://developer.apple.com/documentation/swiftui/toolbarcontent/contentmarginsremoved(_:))

# contentMarginsRemoved(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Configures whether the content margins are removed.

## Declaration

```swift
nonisolated func contentMarginsRemoved(_ removed: Bool = true) -> some ToolbarContent

```

## Parameters

- `removed`: Whether the content margins should be removed.

<a id="discussion"></a>

## Discussion

Use this modifier to remove the default padding around a toolbar item’s content. This is useful for content that goes to the edge of the item.

```swift
.toolbar {
    ToolbarItem {
        CustomButton()
    }
    .contentMarginsRemoved()
}
```
