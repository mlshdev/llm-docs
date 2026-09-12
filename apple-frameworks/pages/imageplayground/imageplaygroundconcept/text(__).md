> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundconcept/text(_:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundconcept/text(_:))

# text(\_:)

**Framework:** Image Playground  
**Kind:** Type Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Creates a concept structure that includes a short text description.

## Declaration

```swift
static func text(_ text: String) -> ImagePlaygroundConcept
```

## Parameters

- `text`: The text that describes the image. Your text must be relatively short, so specify single words or brief sentences. If you specify a string that exceeds the model’s supported maximum string length, the system tries to extract important or interesting concepts and use those instead.

<a id="return-value"></a>

## Return Value

A concept object that encapsulates the specified text.

<a id="discussion"></a>

## Discussion

Call this method when you want to use short strings to generate an image. The system passes short strings in their entirety as input to the diffusion model. If you provide a long string, the system tries to extract only the relevant details and pass those to the model instead.

## See Also

### Describing the image

- [extracted(from:title:)](extracted%28from_title_%29.md): Creates a concept structure from a long-form string and a title that guides the extraction of concepts from that string.
- [drawing(\_:)](drawing%28__%29.md): Creates a concept structure from a PencilKit drawing.
- [image(\_:)](image%28__%29-29ora.md): Creates a concept structure from the specified image object.
- [image(\_:)](image%28__%29-2s44c.md): Creates a concept structure from the image at the specified URL.
