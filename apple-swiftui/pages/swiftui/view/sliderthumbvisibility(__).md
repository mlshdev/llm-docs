> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sliderthumbvisibility(_:)](https://developer.apple.com/documentation/swiftui/view/sliderthumbvisibility(_:))

# sliderThumbVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets the thumb visibility for `Slider`s within this view.

## Declaration

```swift
nonisolated func sliderThumbVisibility(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: The slider thumb visibility to apply.

<a id="discussion"></a>

## Discussion

Use this modifier to override the default slider thumb visibility. For example, the code below creates a `Slider` without an indicator:

```swift
@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
    VStack {
        Slider(
            value: $speed,
            in: 0...100,
            onEditingChanged: { editing in
                isEditing = editing
            }
        )
        .sliderThumbVisibility(.hidden)

        Text("\(speed)")
            .foregroundColor(isEditing ? .red : .blue)
    }
}
```

Note: On watchOS, the slider thumb is always visible.

## See Also

### Visibility

- [hidden()](hidden%28%29.md): Hides this view unconditionally.
- [labelsHidden()](labelshidden%28%29.md): Hides the labels of any controls contained within this view.
- [labelsVisibility(\_:)](labelsvisibility%28__%29.md): Controls the visibility of labels of any controls contained within this view.
- [menuIndicator(\_:)](menuindicator%28__%29.md): Sets the menu indicator visibility for controls within this view.
- [listRowSeparator(\_:edges:)](listrowseparator%28__edges_%29.md): Sets the display mode for the separator associated with this specific row.
- [listSectionSeparator(\_:edges:)](listsectionseparator%28__edges_%29.md): Sets whether to hide the separator associated with a list section.
- [listSectionIndexVisibility(\_:)](listsectionindexvisibility%28__%29.md): Changes the visibility of the list section index.
- [persistentSystemOverlays(\_:)](persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [scrollIndicators(\_:axes:)](scrollindicators%28__axes_%29.md): Sets the visibility of scroll indicators within this view.
- [scrollClipDisabled(\_:)](scrollclipdisabled%28__%29.md): Sets whether a scroll view clips its content to its bounds.
- [tableColumnHeaders(\_:)](tablecolumnheaders%28__%29.md): Controls the visibility of a `Table`’s column header views.
- [upperLimbVisibility(\_:)](upperlimbvisibility%28__%29.md): Sets the preferred visibility of the user’s upper limbs, while an [ImmersiveSpace](../immersivespace.md) scene is presented.
- [volumeBaseplateVisibility(\_:)](volumebaseplatevisibility%28__%29.md): Sets the visibility of the baseplate of a volume, which appears when a user looks towards the ‘floor’ of a volume and during resize. Both `automatic` and `visible` will show the baseplate. `hidden` will never show it.
