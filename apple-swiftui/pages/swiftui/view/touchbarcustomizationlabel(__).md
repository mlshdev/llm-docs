> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/touchbarcustomizationlabel(_:)](https://developer.apple.com/documentation/swiftui/view/touchbarcustomizationlabel(_:))

# touchBarCustomizationLabel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets a user-visible string that identifies the view’s functionality.

## Declaration

```swift
nonisolated func touchBarCustomizationLabel(_ label: Text) -> some View

```

## Parameters

- `label`: A `Text` view containing the customization label.

<a id="return-value"></a>

## Return Value

A Touch Bar element with a set customization label.

<a id="discussion"></a>

## Discussion

This string is visible during user customization.

```swift
TextField("TouchBar Demo", text: $placeholder)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .focusable()
    .touchBar {
        Button("♥️", action: selectHearts)
            .touchBarCustomizationLabel(Text("Hearts"))
        Button("♣️", action: selectClubs)
            .touchBarCustomizationLabel(Text("Clubs"))
        Button("♠️", action: selectSpades)
            .touchBarCustomizationLabel(Text("Spades"))
        Button("♦️", action: selectDiamonds)
            .touchBarCustomizationLabel(Text("Diamonds"))
    }
```

![A Touch Bar customization view showing labels assigned to the Touch](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-touchBarCustomizationLabel@2x.png)

## See Also

### Managing Touch Bar input

- [touchBar(content:)](touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarItemPresence(\_:)](touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBar](../touchbar.md): A container for a view that you can show in the Touch Bar.
- [TouchBarItemPresence](../touchbaritempresence.md): Options that affect user customization of the Touch Bar.
