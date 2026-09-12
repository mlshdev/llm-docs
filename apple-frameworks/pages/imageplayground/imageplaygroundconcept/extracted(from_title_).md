> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundconcept/extracted(from:title:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundconcept/extracted(from:title:))

# extracted(from:title:)

**Framework:** Image Playground  
**Kind:** Type Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Creates a concept structure from a long-form string and a title that guides the extraction of concepts from that string.

## Declaration

```swift
static func extracted(from text: String, title: String? = nil) -> ImagePlaygroundConcept
```

## Parameters

- `text`: A long text description, such as a paragraph or document. You can specify any length string you want. For strings above a minimum length, the system extracts important or interesting concepts using the contents of `title` as a guide. It converts the concepts it extracts into a separate input prompts for the diffusion model. For strings below the minimum length, the system passes the entire string to the model.
- `title`: A concise summary of the text you pass in the `text` parameter. The system uses this string as a guide to extract concepts from the `text` parameter.

<a id="return-value"></a>

## Return Value

A concept object that encapsulates the concepts from the specified text.

<a id="discussion"></a>

## Discussion

Call this method when you want to use long-form text to generate an image. The method extracts relevant details from the text and uses them to create the returned object.

## See Also

### Describing the image

- [text(\_:)](text%28__%29.md): Creates a concept structure that includes a short text description.
- [drawing(\_:)](drawing%28__%29.md): Creates a concept structure from a PencilKit drawing.
- [image(\_:)](image%28__%29-29ora.md): Creates a concept structure from the specified image object.
- [image(\_:)](image%28__%29-2s44c.md): Creates a concept structure from the image at the specified URL.
