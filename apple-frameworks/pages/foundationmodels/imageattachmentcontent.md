> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/imageattachmentcontent](https://developer.apple.com/documentation/foundationmodels/imageattachmentcontent)

# ImageAttachmentContent

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that holds image data.

## Declaration

```swift
struct ImageAttachmentContent
```

<a id="overview"></a>

## Overview

You don’t create `ImageAttachmentContent` directly. Instead, use one of the [Attachment](attachment.md) initializers to attach a [CGImage](../coregraphics/cgimage.md), [CIImage](../coreimage/ciimage.md), [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md), or image file URL.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Prompt attachments

- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md): Analyze and extract information from images by combining them with descriptive text prompts.
- [Attachment](attachment.md): An asset provided to the model.
- [ImageReference](imagereference.md): A reference to an image in a session’s transcript.
