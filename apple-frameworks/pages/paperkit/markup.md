> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markup](https://developer.apple.com/documentation/paperkit/markup)

# Markup

**Framework:** PaperKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A markup component.

## Declaration

```swift
protocol Markup : Sendable
```

<a id="overview"></a>

## Overview

> **Note**

> This protocol is designed for PaperKit’s internal types only. Client conformance is not supported.

## Topics

### Laying out

- [frame](markup/frame.md): The element’s unrotated frame.
- [rotation](markup/rotation.md): The element’s rotation around the center of its frame.
- [renderFrame](markup/renderframe.md): The unrotated frame that tightly fits the rendered contents of the element.
- [applyTransform(\_:)](markup/applytransform%28__%29.md): Transforms this element with the specified transform.

### Controlling interactions

- [allowedInteractions](markup/allowedinteractions.md): Interactions that people can perform on this markup.
- [MarkupInteractions](markupinteractions.md): Interactions that people can perform on markup elements.

### Managing feature compatibility

- [featureSet](markup/featureset.md): The set of features used by this markup.
- [removeContentUnsupported(by:)](markup/removecontentunsupported%28by_%29.md): Removes all content not supported by the provided feature set.

### Identifying markup

- [elementID](markup/elementid.md): The element identifier for use in a markup ordered set.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ImageMarkup](imagemarkup.md)
- [LinkMarkup](linkmarkup.md)
- [LoupeMarkup](loupemarkup.md)
- [ShapeMarkup](shapemarkup.md)

## See Also

### Markup elements

- [ImageMarkup](imagemarkup.md): A markup element that represents an image.
- [ShapeMarkup](shapemarkup.md): A markup element that represents a shape or text box with customizable appearance and behavior.
- [LinkMarkup](linkmarkup.md): A URL link that a person can tap on in the canvas.
- [LoupeMarkup](loupemarkup.md): A loupe magnifier that magnifies the content below the loupe.
- [MarkupInteractions](markupinteractions.md): Interactions that people can perform on markup elements.
