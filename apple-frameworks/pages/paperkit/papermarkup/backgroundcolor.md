> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkup/backgroundcolor](https://developer.apple.com/documentation/paperkit/papermarkup/backgroundcolor)

# backgroundColor

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The background color of the paper.

## Declaration

```swift
var backgroundColor: CGColor? { get set }
```

<a id="discussion"></a>

## Discussion

Default is `nil`, which uses a default color based on the current user interface style.

## See Also

### Accessing elements

- [subelements](subelements.md): The subelements of the paper markup.
- [id](id.md): The unique identifier of the markup.
- [bounds](bounds.md): The bounds of the paper.
- [contentsRenderFrame](contentsrenderframe.md): The frame that tightly fits the rendered contents on the paper.
- [featureSet](featureset.md): The set of features used by this data model.
- [indexableContent](indexablecontent.md)
