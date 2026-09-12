> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundconcept](https://developer.apple.com/documentation/imageplayground/imageplaygroundconcept)

# ImagePlaygroundConcept

**Framework:** Image Playground  
**Kind:** Structure  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Text elements that specify the content to include in the image.

## Declaration

```swift
struct ImagePlaygroundConcept
```

<a id="overview"></a>

## Overview

Use this type to wrap pieces of text describing the image you want to create. You can also specify larger pieces of text that contain important concepts to extract and use to guide the image-creation process.

## Topics

### Describing the image

- [text(\_:)](imageplaygroundconcept/text%28__%29.md): Creates a concept structure that includes a short text description.
- [extracted(from:title:)](imageplaygroundconcept/extracted%28from_title_%29.md): Creates a concept structure from a long-form string and a title that guides the extraction of concepts from that string.
- [drawing(\_:)](imageplaygroundconcept/drawing%28__%29.md): Creates a concept structure from a PencilKit drawing.
- [image(\_:)](imageplaygroundconcept/image%28__%29-29ora.md): Creates a concept structure from the specified image object.
- [image(\_:)](imageplaygroundconcept/image%28__%29-2s44c.md): Creates a concept structure from the image at the specified URL.

## See Also

### Platform support

- [ImagePlaygroundStyle](imageplaygroundstyle.md): Style options that determine the appearance of generated images.
