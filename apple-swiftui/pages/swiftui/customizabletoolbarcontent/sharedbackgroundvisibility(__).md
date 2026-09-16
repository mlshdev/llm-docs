> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/customizabletoolbarcontent/sharedbackgroundvisibility(_:)

# sharedBackgroundVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Controls the visibility of the glass background effect on items in the toolbar. In certain contexts, such as the navigation bar on iOS and the window toolbar on macOS, toolbar items will be given a glass background effect that is shared with other items in the same logical grouping.

## Declaration

```swift
nonisolated func sharedBackgroundVisibility(_ visibility: Visibility) -> some CustomizableToolbarContent

```

## Parameters

- `visibility`: The visibility of the background effect.

<a id="discussion"></a>

## Discussion

This modifier adjusts the visibility of that effect. Hiding the effect will cause the item to be placed in its own grouping.

```swift
ContentView()
    .toolbar(id: "main") {
        ToolbarItem(id: "build-status", placement: principal) {
            BuildStatus()
        }
        .sharedBackgroundVisibility(.hidden)
    }
```

## See Also

### Setting visibility

- [hidden(\_:)](hidden%28__%29.md): Hides a toolbar item within its toolbar.
- [visibilityPriority(\_:)](visibilitypriority%28__%29.md): Defines the visibility priority for a toolbar item.
