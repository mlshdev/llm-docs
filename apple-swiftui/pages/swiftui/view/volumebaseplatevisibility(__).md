> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/volumebaseplatevisibility(_:)](https://developer.apple.com/documentation/swiftui/view/volumebaseplatevisibility(_:))

# volumeBaseplateVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Sets the visibility of the baseplate of a volume, which appears when a user looks towards the ‘floor’ of a volume and during resize. Both `automatic` and `visible` will show the baseplate. `hidden` will never show it.

## Declaration

```swift
nonisolated func volumeBaseplateVisibility(_ visibility: Visibility) -> some View

```

<a id="discussion"></a>

## Discussion

The baseplate is a semi-transparent view that appears on the ‘floor’ of a volume.

Usage:

```swift
WindowGroup() {
    Poker()
        .volumeBaseplateVisibility(.visible)
}
.windowStyle(.volumetric)
```

Defaults to `automatic` (visible).

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
- [sliderThumbVisibility(\_:)](sliderthumbvisibility%28__%29.md): Sets the thumb visibility for `Slider`s within this view.
- [tableColumnHeaders(\_:)](tablecolumnheaders%28__%29.md): Controls the visibility of a `Table`’s column header views.
- [upperLimbVisibility(\_:)](upperlimbvisibility%28__%29.md): Sets the preferred visibility of the user’s upper limbs, while an [ImmersiveSpace](../immersivespace.md) scene is presented.
