> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colorpicker/init(_:selection:supportsopacity:)](https://developer.apple.com/documentation/swiftui/colorpicker/init(_:selection:supportsopacity:))

# init(\_:selection:supportsOpacity:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a color picker with a text label generated from a title string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, selection: Binding<CGColor>, supportsOpacity: Bool = true)
```

## Parameters

- `titleResource`: The localized title of the picker.
- `selection`: A [Binding](../binding.md) to the variable that displays the selected `CGColor`.
- `supportsOpacity`: A Boolean value that indicates whether the color picker allows adjustments to the selected color’s opacity; the default is `true`.

## See Also

### Creating a color picker

- [init(selection:supportsOpacity:label:)](init%28selection_supportsopacity_label_%29.md): Creates an instance that selects a color.
