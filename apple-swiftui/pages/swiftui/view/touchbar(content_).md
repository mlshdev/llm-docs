> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/touchbar(content:)](https://developer.apple.com/documentation/swiftui/view/touchbar(content:))

# touchBar(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets the content that the Touch Bar displays.

## Declaration

```swift
nonisolated func touchBar<Content>(@ContentBuilder content: () -> Content) -> some View where Content : View

```

## Parameters

- `content`: A collection of views to be displayed by the Touch Bar.

<a id="return-value"></a>

## Return Value

A view that contains the Touch Bar content.

<a id="discussion"></a>

## Discussion

Use `touchBar(_:)` when you need to dynamically construct items to show in the Touch Bar. The content is displayed by the Touch Bar when appropriate, depending on focus.

In the example below, four buttons are added to a Touch Bar content struct and then added to the Touch Bar:

```swift
let touchBarItems = TouchBar(id: "myBarItems") {
    Button("♣️", action: {})
    Button("♥️", action: {})
    Button("♠️", action: {})
    Button("♦️", action: {})
}

TextField("TouchBar Demo", text: $placeholder)
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .focusable()
    .touchBar(touchBarItems)
```

![A Touch Bar that shows content you create using a Touch Bar content](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-touchBar@2x.png)

## See Also

### Managing Touch Bar input

- [touchBar(\_:)](touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBar](../touchbar.md): A container for a view that you can show in the Touch Bar.
- [TouchBarItemPresence](../touchbaritempresence.md): Options that affect user customization of the Touch Bar.
