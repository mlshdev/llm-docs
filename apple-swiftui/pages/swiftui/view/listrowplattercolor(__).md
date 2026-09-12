> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listrowplattercolor(_:)](https://developer.apple.com/documentation/swiftui/view/listrowplattercolor(_:))

# listRowPlatterColor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Sets the color that the system applies to the row background when this view is placed in a list.

> Use [listItemTint(\_:)](https://developer.apple.com/documentation/swiftui/view/listitemtint%28_:%29-5ehdr) instead.

## Declaration

```swift
nonisolated func listRowPlatterColor(_ color: Color?) -> some View

```

## Parameters

- `color`: The [Color](../color.md) to apply to the system cell.

<a id="return-value"></a>

## Return Value

A view with the specified `color` applied to the system cell.

<a id="discussion"></a>

## Discussion

Use `listRowPlatterColor(_:)` to set the underlying row background color in a list.

In the example below, the `Flavor` enumeration provides content for list items. The SwiftUI [List](../list.md) builder iterates over the `Flavor` enumeration and extracts the raw value of each of its elements using the resulting text to create each list row item. After the list builder finishes, the `listRowPlatterColor(_:)` modifier sets the underlying row background color to the [Color](../color.md) you specify.

```swift
struct ContentView: View {
    enum Flavor: String, CaseIterable, Identifiable {
        var id: String { self.rawValue }
        case vanilla, chocolate, strawberry
    }

    var body: some View {
        List {
            ForEach(Flavor.allCases) {
                Text($0.rawValue)
                    .listRowPlatterColor(.green)
            }
        }
    }
}
```

## See Also

### Appearance modifiers

- [colorScheme(\_:)](colorscheme%28__%29.md): Deprecated. Sets this view’s color scheme.
- [background(\_:alignment:)](background%28__alignment_%29.md): Deprecated. Layers the given view behind this view.
- [overlay(\_:alignment:)](overlay%28__alignment_%29.md): Deprecated. Layers a secondary view in front of this view.
- [foregroundColor(\_:)](foregroundcolor%28__%29.md): Deprecated. Sets the color of the foreground elements displayed by this view.
- [complicationForeground()](complicationforeground%28%29.md): Deprecated. Promotes this view to the foreground in a complication.
