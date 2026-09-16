> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/togglestyleconfiguration/ismixed

# isMixed

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Whether the [Toggle](../toggle.md) is currently in a mixed state.

## Declaration

```swift
var isMixed: Bool
```

<a id="discussion"></a>

## Discussion

Use this property to determine whether the toggle style should render a mixed state presentation. A mixed state corresponds to an underlying collection with a mix of true and false Bindings. To toggle the state, use the `Bool.toggle()` method on the [isOn](ison.md) binding.

In the following example, a custom style uses the `isMixed` property to render the correct toggle state using symbols:

```swift
struct SymbolToggleStyle: ToggleStyle {
    func makeBody(configuration: Configuration) -> some View {
        Button {
            configuration.isOn.toggle()
        } label: {
            Image(
                systemName: configuration.isMixed
                ? "minus.circle.fill" : configuration.isOn
                ? "checkmark.circle.fill" : "circle.fill")
            configuration.label
        }
    }
}
```

## See Also

### Managing the toggle state

- [isOn](ison.md): A binding to a state property that indicates whether the toggle is on.
- [$isOn]($ison.md)
