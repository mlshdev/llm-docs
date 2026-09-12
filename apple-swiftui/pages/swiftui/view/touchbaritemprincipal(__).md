> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/touchbaritemprincipal(_:)](https://developer.apple.com/documentation/swiftui/view/touchbaritemprincipal(_:))

# touchBarItemPrincipal(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets principal views that have special significance to this Touch Bar.

## Declaration

```swift
nonisolated func touchBarItemPrincipal(_ principal: Bool = true) -> some View

```

## Parameters

- `principal`: A Boolean value that indicates whether to display this view prominently in the Touch Bar compared to other views.

<a id="return-value"></a>

## Return Value

A Touch Bar view with one element centered in the Touch Bar row.

<a id="discussion"></a>

## Discussion

Use `touchBarItemPrincipal(_:)` to designate a view as a significant view in the Touch Bar. Currently, that view will be placed in the center of the row.

The example below sets the last button as the principal button for the Touch Bar view.

```swift
let touchBarItems = TouchBar(id: "myBarItems") {
    Button("♣️", action: {})
    Button("♥️", action: {})
    Button("♠️", action: {})
    Button("♦️", action: {})
       .touchBarItemPrincipal(true)
}

TextField("TouchBar Demo", text: $placeholder)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .focusable()
    .touchBar(touchBarItems)
```

> **Note**

> Multiple visible bars may each specify a principal view, but the system only honors one of them.

![A Touch Bar view showing one element designated as the principal view](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-touchBarItemPrincipal@2x.png)

## See Also

### Managing Touch Bar input

- [touchBar(content:)](touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarCustomizationLabel(\_:)](touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBar](../touchbar.md): A container for a view that you can show in the Touch Bar.
- [TouchBarItemPresence](../touchbaritempresence.md): Options that affect user customization of the Touch Bar.
