> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markup/applytransform(_:)](https://developer.apple.com/documentation/paperkit/markup/applytransform(_:))

# applyTransform(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Transforms this element with the specified transform.

## Declaration

```swift
mutating func applyTransform(_ transform: CGAffineTransform)
```

## Parameters

- `transform`: The transform applied to the element. Skew is ignored.

## Default Implementations

### Markup Implementations

- [applyTransform(\_:)](applytransform%28__%29-9je6a.md): Transforms this element with the specified transform.

## See Also

### Laying out

- [frame](frame.md): The element’s unrotated frame.
- [rotation](rotation.md): The element’s rotation around the center of its frame.
- [renderFrame](renderframe.md): The unrotated frame that tightly fits the rendered contents of the element.
