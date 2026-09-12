> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/attachment](https://developer.apple.com/documentation/foundationmodels/attachment)

# Attachment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An asset provided to the model.

## Declaration

```swift
struct Attachment<Content>
```

## Mentioned In

- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md)

<a id="overview"></a>

## Overview

Use `Attachment` to include media such as images alongside text in your prompts and instructions.

```swift
let response = try await session.respond {
    "Describe this image:"
    Attachment(image)
}
```

Use the [label(\_:)](attachment/label%28__%29.md) method to assign a label to an attachment. Labels help the model identify specific attachments when making tool calls.

```swift
Prompt {
    "Compare these two images:"
    Attachment(firstImage)
        .label("image-0")
    Attachment(secondImage)
        .label("image-1")
}
```

## Topics

### Creating an attachment instance

- [init(\_:orientation:)](attachment/init%28__orientation_%29.md): Conforms when `Content` is `ImageAttachmentContent`. Creates an attachment from a Core Graphics image.
- [init(imageURL:orientation:)](attachment/init%28imageurl_orientation_%29.md): Conforms when `Content` is `ImageAttachmentContent`. Creates an attachment from a file URL pointing to an image.

### Assigning a label

- [label(\_:)](attachment/label%28__%29.md): Assigns a label to an attachment.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstructionsRepresentable](instructionsrepresentable.md)
- [PromptRepresentable](promptrepresentable.md)

## See Also

### Prompt attachments

- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md): Analyze and extract information from images by combining them with descriptive text prompts.
- [ImageAttachmentContent](imageattachmentcontent.md): A type that holds image data.
- [ImageReference](imagereference.md): A reference to an image in a session’s transcript.
