> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkup](https://developer.apple.com/documentation/paperkit/papermarkup)

# PaperMarkup

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The data model object for storing markup data created from a `PaperViewController`.

## Declaration

```swift
struct PaperMarkup
```

## Mentioned In

- [Integrating PaperKit into your app](getting-started-with-paperkit.md)

## Topics

### Creating markup

- [init(bounds:)](papermarkup/init%28bounds_%29.md): Initializes and returns a new paper model with the specified bounds.
- [init(dataRepresentation:)](papermarkup/init%28datarepresentation_%29.md): Initializes and returns a new paper model from the specified data.

### Serializing markup

- [dataRepresentation()](papermarkup/datarepresentation%28%29.md): Generate a serialized data representation of the data model.

### Accessing elements

- [subelements](papermarkup/subelements.md): The subelements of the paper markup.
- [id](papermarkup/id.md): The unique identifier of the markup.
- [bounds](papermarkup/bounds.md): The bounds of the paper.
- [contentsRenderFrame](papermarkup/contentsrenderframe.md): The frame that tightly fits the rendered contents on the paper.
- [featureSet](papermarkup/featureset.md): The set of features used by this data model.
- [indexableContent](papermarkup/indexablecontent.md)
- [backgroundColor](papermarkup/backgroundcolor.md): The background color of the paper.

### Rendering markup

- [draw(in:frame:options:)](papermarkup/draw%28in_frame_options_%29.md): Draws the entire paper contents in the specified rectangle.

### Appending content

- [append(contentsOf:)](papermarkup/append%28contentsof_%29-5668.md): Adds the contents of a data model on top of this paper.
- [append(contentsOf:)](papermarkup/append%28contentsof_%29-5tgti.md): Adds the contents of a PencilKit drawing on top of this paper.

### Transforming content

- [transformContent(\_:)](papermarkup/transformcontent%28__%29.md): Transforms the contents of this paper with the specified transform.

### Inserting elements

- [insertNewShape(configuration:frame:rotation:)](papermarkup/insertnewshape%28configuration_frame_rotation_%29.md): Add a new element on top of the paper.
- [insertNewImage(\_:frame:rotation:)](papermarkup/insertnewimage%28__frame_rotation_%29.md): Add a new image on top of the paper.
- [insertNewLine(configuration:from:to:startMarker:endMarker:)](papermarkup/insertnewline%28configuration_from_to_startmarker_endmarker_%29.md): Add a line element on top of the paper.
- [insertNewTextbox(attributedText:frame:rotation:)](papermarkup/insertnewtextbox%28attributedtext_frame_rotation_%29-53rs.md): Add a new text box on top of the paper.
- [insertNewTextbox(attributedText:frame:rotation:)](papermarkup/insertnewtextbox%28attributedtext_frame_rotation_%29-67igk.md): Add a new text box on top of the paper.

### Removing content

- [removeContentUnsupported(by:)](papermarkup/removecontentunsupported%28by_%29.md): Remove all contents that is not supported by the provided feature set.

### Default Implementations

- [Identifiable Implementations](papermarkup/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data model

- [MarkupOrderedSet](markuporderedset.md): An ordered set of markup elements.
- [MarkupID](markupid.md): An opaque ID for markup elements.
