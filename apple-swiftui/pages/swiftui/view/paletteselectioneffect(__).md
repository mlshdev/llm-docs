> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/paletteselectioneffect(_:)](https://developer.apple.com/documentation/swiftui/view/paletteselectioneffect(_:))

# paletteSelectionEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Specifies the selection effect to apply to a palette item.

## Declaration

```swift
nonisolated func paletteSelectionEffect(_ effect: PaletteSelectionEffect) -> some View

```

## Parameters

- `effect`: The type of effect to apply when a palette item is selected.

<a id="discussion"></a>

## Discussion

[automatic](../paletteselectioneffect/automatic.md) applies the system’s default appearance when selected. When using un-tinted SF Symbols or template images, the current tint color is applied to the selected items’ image. If the provided SF Symbols have custom tints, a stroke is drawn around selected items.

If you wish to provide a specific image (or SF Symbol) to indicate selection, use [custom](../paletteselectioneffect/custom.md) to forgo the system’s default selection appearance allowing the provided image to solely indicate selection instead.

The following example creates a palette picker that disables the system selection behavior:

```swift
Menu {
    Picker("Palettes", selection: $selection) {
        ForEach(palettes) { palette in
            Label(palette.title, image: selection == palette ?
                  "selected-palette" : "palette")
            .tint(palette.tint)
            .tag(palette)
        }
    }
    .pickerStyle(.palette)
    .paletteSelectionEffect(.custom)
} label: {
    ...
}
```

If a specific SF Symbol variant is preferable instead, use [symbolVariant(\_:)](../paletteselectioneffect/symbolvariant%28__%29.md).

```swift
Menu {
    ControlGroup {
        ForEach(ColorTags.allCases) { colorTag in
            Toggle(isOn: $selectedColorTags[colorTag]) {
                Label(colorTag.name, systemImage: "circle")
            }
            .tint(colorTag.color)
        }
    }
    .controlGroupStyle(.palette)
    .paletteSelectionEffect(.symbolVariant(.fill))
}
```

## See Also

### Choosing from a set of options

- [Picker](../picker.md): A control for selecting from a set of mutually exclusive values.
- [pickerStyle(\_:)](pickerstyle%28__%29.md): Sets the style for pickers within this view.
- [horizontalRadioGroupLayout()](horizontalradiogrouplayout%28%29.md): Sets the style for radio group style pickers within this view to be horizontally positioned with the radio buttons inside the layout.
- [defaultWheelPickerItemHeight(\_:)](defaultwheelpickeritemheight%28__%29.md): Sets the default wheel-style picker item height.
- [defaultWheelPickerItemHeight](../environmentvalues/defaultwheelpickeritemheight.md): The default height of an item in a wheel-style picker, such as a date picker.
- [PaletteSelectionEffect](../paletteselectioneffect.md): The selection effect to apply to a palette item.
