> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/touchbaritempresence(_:)](https://developer.apple.com/documentation/swiftui/view/touchbaritempresence(_:))

# touchBarItemPresence(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets the behavior of the user-customized view.

## Declaration

```swift
nonisolated func touchBarItemPresence(_ presence: TouchBarItemPresence) -> some View

```

## Parameters

- `presence`: One of the allowed [TouchBarItemPresence](../touchbaritempresence.md) descriptions.

<a id="return-value"></a>

## Return Value

A trait that describes the behavior for this Touch Bar view.

<a id="discussion"></a>

## Discussion

Use `touchBarItemPresence(_:)` to define the visibility requirements of a particular Touch Bar view during customization by the user.

Touch Bar views may be:

- `.required`: not allowed to be removed by the user.
- `.default`: shown by default prior to user customization, but removable.
- `.optional`: not visible by default, but can be added through the customization palette.

Each [TouchBarItemPresence](../touchbaritempresence.md) must be initialized with a string that is a globally unique identifier for this item.

In the example below, all of the Touch Bar items are visible in the Touch Bar by default, except for the “Clubs” item. It’s set to `.optional` but is configurable by the user:

```swift
TextField("TouchBar Demo", text: $placeholder)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .focusable()
    .touchBar {
        Button("♥️", action: selectHearts)
            .touchBarItemPresence(.required("heartsKey"))
        Button("♣️", action: selectClubs)
            .touchBarItemPresence(.optional("clubsKey"))
        Button("♠️", action: selectSpades)
            .touchBarItemPresence(.required("spadesKey"))
        Button("♦️", action: selectDiamonds)
            .touchBarItemPresence(.required("diamondsKey"))
}
```

![A view showing the configuration of the Touch Bar with required and](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-touchBarItemPresence@2x.png)

## See Also

### Managing Touch Bar input

- [touchBar(content:)](touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [TouchBar](../touchbar.md): A container for a view that you can show in the Touch Bar.
- [TouchBarItemPresence](../touchbaritempresence.md): Options that affect user customization of the Touch Bar.
