> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/annotation(position:alignment:spacing:overflowresolution:content:)-1kiow](https://developer.apple.com/documentation/charts/chartcontent/annotation(position:alignment:spacing:overflowresolution:content:)-1kiow)

# annotation(position:alignment:spacing:overflowResolution:content:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Annotates this mark or collection of marks with a view positioned relative to its bounds.

## Declaration

```swift
nonisolated func annotation<C>(position: AnnotationPosition = .automatic, alignment: Alignment = .center, spacing: CGFloat? = nil, overflowResolution: AnnotationOverflowResolution, @ViewBuilder content: () -> C) -> some ChartContent where C : View

```

## Parameters

- `position`: The location relative to the item being annotated at which the annotation will be placed.
- `alignment`: The guide for aligning the annotation in the specified position.
- `spacing`: Distance between the annotation and the annotated content, or `nil` if you want to use the default distance.
- `overflowResolution`: How to resolve the annotation exceeding the boundary of the plot.
- `content`: A view builder that creates the annotation. The builder takes one input which provides information regarding the item being annotated such as its size.

## See Also

### Annotating marks

- [annotation(position:alignment:spacing:content:)](annotation%28position_alignment_spacing_content_%29-65emh.md): Annotates this mark or collection of marks with a view positioned relative to its bounds.
- [annotation(position:alignment:spacing:content:)](annotation%28position_alignment_spacing_content_%29-26b2f.md): Annotates this mark or collection of marks with a view positioned relative to its bounds.
- [annotation(position:alignment:spacing:overflowResolution:content:)](annotation%28position_alignment_spacing_overflowresolution_content_%29-6w4p3.md): Annotates this mark or collection of marks with a view positioned relative to its bounds.
