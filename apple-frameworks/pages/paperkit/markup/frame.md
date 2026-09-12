> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markup/frame](https://developer.apple.com/documentation/paperkit/markup/frame)

# frame

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The element’s unrotated frame.

## Declaration

```swift
var frame: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

Together with `rotation` this defines the element’s position in its parent. This won’t necessarily contain all the contents of an element, rotation and styling may cause the element to extend beyond this frame. Use `renderFrame` for an unrotated frame that contains the entire element.

## See Also

### Laying out

- [rotation](rotation.md): The element’s rotation around the center of its frame.
- [renderFrame](renderframe.md): The unrotated frame that tightly fits the rendered contents of the element.
- [applyTransform(\_:)](applytransform%28__%29.md): Transforms this element with the specified transform.
