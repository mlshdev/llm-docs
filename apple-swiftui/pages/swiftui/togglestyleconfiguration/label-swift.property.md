> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/togglestyleconfiguration/label-swift.property](https://developer.apple.com/documentation/swiftui/togglestyleconfiguration/label-swift.property)

# label

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that describes the effect of switching the toggle between states.

## Declaration

```swift
let label: ToggleStyleConfiguration.Label
```

<a id="discussion"></a>

## Discussion

Use this value in your implementation of the [makeBody(configuration:)](../togglestyle/makebody%28configuration_%29.md) method when defining a custom [ToggleStyle](../togglestyle.md). Access it through the that method’s `configuration` parameter.

Because the label is a [View](../view.md), you can incorporate it into the view hierarchy that you return from your style definition. For example, you can combine the label with a circle image in an [HStack](../hstack.md):

```swift
HStack {
    Image(systemName: configuration.isOn
        ? "checkmark.circle.fill"
        : "circle")
    configuration.label
}
```

## See Also

### Getting the label view

- [ToggleStyleConfiguration.Label](label-swift.struct.md): A type-erased label of a toggle.
