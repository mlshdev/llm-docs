> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/menuindicator(_:)](https://developer.apple.com/documentation/swiftui/view/menuindicator(_:))

# menuIndicator(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Sets the menu indicator visibility for controls within this view.

## Declaration

```swift
nonisolated func menuIndicator(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: The menu indicator visibility to apply.

<a id="discussion"></a>

## Discussion

Use this modifier to override the default menu indicator visibility for controls in this view. For example, the code below creates a menu without an indicator:

```swift
Menu {
    ForEach(history , id: \.self) { historyItem in
        Button(historyItem.title) {
            self.openURL(historyItem.url)
        }
    }
} label: {
    Label("Back", systemImage: "chevron.backward")
        .labelStyle(.iconOnly)
} primaryAction: {
    if let last = history.last {
        self.openURL(last.url)
    }
}
.menuIndicator(.hidden)
```

> **Note**

> On tvOS, the standard button styles do not include a menu indicator, so this modifier will have no effect when using a built-in button style. You can implement an indicator in your own [ButtonStyle](../buttonstyle.md) implementation by checking the value of the `menuIndicatorVisibility` environment value.

## See Also

### Showing a menu indicator

- [menuIndicatorVisibility](../environmentvalues/menuindicatorvisibility.md): The menu indicator visibility to apply to controls within a view.
