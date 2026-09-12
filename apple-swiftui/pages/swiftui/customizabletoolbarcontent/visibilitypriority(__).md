> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customizabletoolbarcontent/visibilitypriority(_:)](https://developer.apple.com/documentation/swiftui/customizabletoolbarcontent/visibilitypriority(_:))

# visibilityPriority(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.1+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Defines the visibility priority for a toolbar item.

## Declaration

```swift
func visibilityPriority(_ priority: ToolbarItemVisibilityPriority) -> some CustomizableToolbarContent

```

## Parameters

- `priority`: The visibility priority for this toolbar item.

<a id="discussion"></a>

## Discussion

When toolbar space is limited, items with a lower priority move into the overflow menu before items with a higher priority. The default is [automatic](../toolbaritemvisibilitypriority/automatic.md).

In the following example, `PrimaryControl` stays visible in the toolbar longer than `SecondaryControl`:

```swift
struct RootView: View {
    var body: some View {
        ContentView()
            .toolbar {
                ToolbarItem {
                    SecondaryControl()
                }
                ToolbarItem {
                    PrimaryControl()
                }
                .visibilityPriority(.high)
            }
    }
}
```
