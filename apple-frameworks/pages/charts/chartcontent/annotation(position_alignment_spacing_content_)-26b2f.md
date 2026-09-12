> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/annotation(position:alignment:spacing:content:)-26b2f](https://developer.apple.com/documentation/charts/chartcontent/annotation(position:alignment:spacing:content:)-26b2f)

# annotation(position:alignment:spacing:content:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Annotates this mark or collection of marks with a view positioned relative to its bounds.

## Declaration

```swift
nonisolated func annotation<C>(position: AnnotationPosition = .automatic, alignment: Alignment = .center, spacing: CGFloat? = nil, @ViewBuilder content: @escaping (AnnotationContext) -> C) -> some ChartContent where C : View

```

## Parameters

- `position`: The location relative to the item being annotated at which the annotation will be placed.
- `alignment`: The guide for aligning the annotation in the specified position.
- `spacing`: Distance between the annotation and the annotated content, or `nil` if you want to use the default distance.
- `content`: A view builder that creates the annotation.

## See Also

### Annotating marks

- [annotation(position:alignment:spacing:content:)](annotation%28position_alignment_spacing_content_%29-65emh.md): Annotates this mark or collection of marks with a view positioned relative to its bounds.
- [annotation(position:alignment:spacing:overflowResolution:content:)](annotation%28position_alignment_spacing_overflowresolution_content_%29-1kiow.md): Annotates this mark or collection of marks with a view positioned relative to its bounds.
- [annotation(position:alignment:spacing:overflowResolution:content:)](annotation%28position_alignment_spacing_overflowresolution_content_%29-6w4p3.md): Annotates this mark or collection of marks with a view positioned relative to its bounds.
