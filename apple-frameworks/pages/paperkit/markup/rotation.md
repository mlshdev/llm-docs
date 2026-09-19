> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markup/rotation

# rotation

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The element’s rotation around the center of its frame.

## Declaration

```swift
var rotation: CGFloat { get set }
```

<a id="discussion"></a>

## Discussion

Together with `frame` this defines the element’s position in its parent.

## See Also

### Laying out

- [frame](frame.md): The element’s unrotated frame.
- [renderFrame](renderframe.md): The unrotated frame that tightly fits the rendered contents of the element.
- [applyTransform(\_:)](applytransform%28__%29.md): Transforms this element with the specified transform.
