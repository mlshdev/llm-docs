> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundconcept/image(_:)-29ora](https://developer.apple.com/documentation/imageplayground/imageplaygroundconcept/image(_:)-29ora)

# image(\_:)

**Framework:** Image Playground  
**Kind:** Type Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Creates a concept structure from the specified image object.

## Declaration

```swift
static func image(_ image: CGImage) -> ImagePlaygroundConcept
```

## Parameters

- `image`: The image you want to pass to the diffusion model.

<a id="discussion"></a>

## Discussion

Call this method when you want to use an image as the basis for generating a new image. Typically, you include other text-based concept structures in addition to this one. Include at most one image among the collection of concepts. Including more than one image yields unpredictable image results.

## See Also

### Describing the image

- [text(\_:)](text%28__%29.md): Creates a concept structure that includes a short text description.
- [extracted(from:title:)](extracted%28from_title_%29.md): Creates a concept structure from a long-form string and a title that guides the extraction of concepts from that string.
- [drawing(\_:)](drawing%28__%29.md): Creates a concept structure from a PencilKit drawing.
- [image(\_:)](image%28__%29-2s44c.md): Creates a concept structure from the image at the specified URL.
