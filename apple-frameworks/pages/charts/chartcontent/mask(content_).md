> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/mask(content:)](https://developer.apple.com/documentation/charts/chartcontent/mask(content:))

# mask(content:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Masks chart content using the alpha channel of the specified content.

## Declaration

```swift
nonisolated func mask<C>(@ContentBuilder content: () -> C) -> some ChartContent where C : ChartContent

```

<a id="discussion"></a>

## Discussion

Parameter content: The content whose alpha will be applied to this item.

## See Also

### Masking and clipping

- [clipShape(\_:style:)](clipshape%28__style_%29.md): Sets a clip shape for the chart content.
