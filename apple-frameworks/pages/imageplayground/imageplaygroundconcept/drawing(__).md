> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundconcept/drawing(_:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundconcept/drawing(_:))

# drawing(\_:)

**Framework:** Image Playground  
**Kind:** Type Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Creates a concept structure from a PencilKit drawing.

## Declaration

```swift
static func drawing(_ drawing: PKDrawing) -> ImagePlaygroundConcept
```

## Parameters

- `drawing`: A PencilKit drawing object that contains a set of strokes. The system uses this drawing, along with other concepts, to guide the image creation.

<a id="discussion"></a>

## Discussion

Call this method when you want to use a PencilKit drawing as the basis for generating a new image. Typically, you include other text-based concept structures in addition to this one. Include at most one PencilKit drawing among a collection of concepts. Including more than one drawing yields unpredictable image results.

## See Also

### Describing the image

- [text(\_:)](text%28__%29.md): Creates a concept structure that includes a short text description.
- [extracted(from:title:)](extracted%28from_title_%29.md): Creates a concept structure from a long-form string and a title that guides the extraction of concepts from that string.
- [image(\_:)](image%28__%29-29ora.md): Creates a concept structure from the specified image object.
- [image(\_:)](image%28__%29-2s44c.md): Creates a concept structure from the image at the specified URL.
