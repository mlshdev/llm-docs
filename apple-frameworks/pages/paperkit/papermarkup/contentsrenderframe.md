> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkup/contentsrenderframe](https://developer.apple.com/documentation/paperkit/papermarkup/contentsrenderframe)

# contentsRenderFrame

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The frame that tightly fits the rendered contents on the paper.

## Declaration

```swift
var contentsRenderFrame: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This frame includes padding around `contentsFrame` to ensure it includes all the rendered aspects of the content. For example, this frame will include the strokes, and shadows of any contents.

## See Also

### Accessing elements

- [subelements](subelements.md): The subelements of the paper markup.
- [id](id.md): The unique identifier of the markup.
- [bounds](bounds.md): The bounds of the paper.
- [featureSet](featureset.md): The set of features used by this data model.
- [indexableContent](indexablecontent.md)
- [backgroundColor](backgroundcolor.md): The background color of the paper.
