> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/touchbar(_:)](https://developer.apple.com/documentation/swiftui/view/touchbar(_:))

# touchBar(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets the Touch Bar content to be shown in the Touch Bar when applicable.

## Declaration

```swift
nonisolated func touchBar<Content>(_ touchBar: TouchBar<Content>) -> some View where Content : View

```

## Parameters

- `touchBar`: A collection of views that the Touch Bar displays.

<a id="return-value"></a>

## Return Value

A view that contains the Touch Bar content.

<a id="discussion"></a>

## Discussion

Use [touchBar(\_:)](touchbar%28__%29.md) to provide a static set of views that are displayed by the Touch Bar when appropriate, depending on whether the view has focus.

The example below provides Touch Bar content in-line, that creates the content the Touch Bar displays:

```swift
func selectHearts() {/* ... */ }
func selectClubs() { /* ... */ }
func selectSpades() { /* ... */ }
func selectDiamonds() { /* ... */ }

TextField("TouchBar Demo", text: $placeholder)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .focusable()
    .touchBar {
        Button("♥️ - Hearts", action: selectHearts)
        Button("♣️ - Clubs", action: selectClubs)
        Button("♠️ - Spades", action: selectSpades)
        Button("♦️ - Diamonds", action: selectDiamonds)
    }
```

![A Touch Bar that shows content you create by using a static collection](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-touchbar-static@2x.png)

## See Also

### Managing Touch Bar input

- [touchBar(content:)](touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBarItemPrincipal(\_:)](touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBar](../touchbar.md): A container for a view that you can show in the Touch Bar.
- [TouchBarItemPresence](../touchbaritempresence.md): Options that affect user customization of the Touch Bar.
