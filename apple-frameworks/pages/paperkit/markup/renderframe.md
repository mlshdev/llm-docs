> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markup/renderframe](https://developer.apple.com/documentation/paperkit/markup/renderframe)

# renderFrame

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The unrotated frame that tightly fits the rendered contents of the element.

## Declaration

```swift
var renderFrame: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This frame includes padding around `frame` to ensure it includes all the rendered aspects of the content. For example, this frame will include the strokes, and shadows of any contents.

## See Also

### Laying out

- [frame](frame.md): The element’s unrotated frame.
- [rotation](rotation.md): The element’s rotation around the center of its frame.
- [applyTransform(\_:)](applytransform%28__%29.md): Transforms this element with the specified transform.
