> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartxaxislabel(_:position:alignment:spacing:)](https://developer.apple.com/documentation/swiftui/view/chartxaxislabel(_:position:alignment:spacing:))

# chartXAxisLabel(\_:position:alignment:spacing:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds x axis label for charts in the view.

## Declaration

```swift
nonisolated func chartXAxisLabel(_ labelKey: LocalizedStringKey, position: AnnotationPosition = .automatic, alignment: Alignment? = nil, spacing: CGFloat? = nil) -> some View

```

## Parameters

- `labelKey`: The key for the localized label string.
- `position`: The position of the label.
- `alignment`: The alignment of the label.
- `spacing`: The spacing of the label from the axis markers.

## See Also

### Axis Labels

- [chartXAxisLabel(position:alignment:spacing:content:)](chartxaxislabel%28position_alignment_spacing_content_%29.md): Adds x axis label for charts in the view.
- [chartYAxisLabel(\_:position:alignment:spacing:)](chartyaxislabel%28__position_alignment_spacing_%29.md): Adds y axis label for charts in the view.
- [chartYAxisLabel(position:alignment:spacing:content:)](chartyaxislabel%28position_alignment_spacing_content_%29.md): Adds y axis label for charts in the view.
- [chartZAxisLabel(\_:position:alignment:spacing:)](chartzaxislabel%28__position_alignment_spacing_%29.md): Adds z axis label for charts in the view. It effects 3D charts only.
