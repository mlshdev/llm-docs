> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/keyboard](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/keyboard)

# keyboard

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A placement for items in the keyboard section.

## Declaration

```swift
static let keyboard: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

On iOS, keyboard items are above the software keyboard when present, or at the bottom of the screen when a hardware keyboard is attached.

On macOS, keyboard items will be placed inside the Touch Bar.

A `FocusedValue` can be used to adjust the content of the keyboard bar based on the currently focused view. In the example below, the keyboard bar gains additional buttons only when the appropriate `TextField` is focused.

```swift
enum Field {
    case suit
    case rank
}

struct KeyboardBarDemo : View {
    @FocusedValue(\.field) var field: Field?

    var body: some View {
        HStack {
            TextField("Suit", text: $suitText)
                .focusedValue(\.field, .suit)
            TextField("Rank", text: $rankText)
                .focusedValue(\.field, .rank)
        }
        .toolbar {
            ToolbarItemGroup(placement: .keyboard) {
                if field == .suit {
                    Button("♣️", action: {})
                    Button("♥️", action: {})
                    Button("♠️", action: {})
                    Button("♦️", action: {})
                }
                DoneButton()
            }
        }
    }
}
```

## See Also

### Getting explicit placement

- [topBarLeading](topbarleading.md): A placement for items in the leading edge of the top bar.
- [topBarTrailing](topbartrailing.md): A placement for items in the trailing edge of the top bar.
- [topBarPinnedTrailing](topbarpinnedtrailing.md): A placement that pins the item to the trailing edge of the toolbar.
- [bottomBar](bottombar.md): A placement for items in the bottom toolbar.
- [bottomOrnament](bottomornament.md): A placement for items in an ornament under the window.
- [accessoryBar(id:)](accessorybar%28id_%29.md): Creates a unique accessory bar placement.
