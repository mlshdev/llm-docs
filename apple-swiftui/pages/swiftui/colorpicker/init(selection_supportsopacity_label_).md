> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colorpicker/init(selection:supportsopacity:label:)](https://developer.apple.com/documentation/swiftui/colorpicker/init(selection:supportsopacity:label:))

# init(selection:supportsOpacity:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates an instance that selects a color.

## Declaration

```swift
nonisolated init(selection: Binding<CGColor>, supportsOpacity: Bool = true, @ContentBuilder label: () -> Label)
```

## Parameters

- `selection`: A [Binding](../binding.md) to the variable that displays the selected `CGColor`.
- `supportsOpacity`: A Boolean value that indicates whether the color picker allows adjusting the selected color’s opacity; the default is `true`.
- `label`: A view that describes the use of the selected color. The system color picker UI sets it’s title using the text from this view.

## See Also

### Creating a color picker

- [init(\_:selection:supportsOpacity:)](init%28__selection_supportsopacity_%29.md): Conforms when `Label` is `Text`. Creates a color picker with a text label generated from a title string resource.
