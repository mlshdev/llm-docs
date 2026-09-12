> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/imagereference](https://developer.apple.com/documentation/foundationmodels/imagereference)

# ImageReference

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A reference to an image in a session’s transcript.

## Declaration

```swift
struct ImageReference
```

## Mentioned In

- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md)

<a id="overview"></a>

## Overview

Use `ImageReference` to allow the model to reference images from the transcript of the current `LanguageModelSession`.

You can define an `ImageReference` as an argument to a `Tool`. Retrieve the referenced image from the transcript during the tool call.

```swift
struct MyTool: Tool {
  @SessionProperty(\.history) var history

  @Generable
  struct Arguments {
    var image: ImageReference
  }

  public func call(arguments: Arguments) async throws -> Output {
    guard let imageAttachment = arguments.image.resolved(in: history) else {
      throw ImageToolError.imageNotFound(arguments.image.attachmentLabel)
    }
    let image = imageAttachment.cgImage
    ...
  }
}
```

## Topics

### Getting the image label

- [attachmentLabel](imagereference/attachmentlabel.md): The label of the referenced image.

### Accessing the referenced image

- [resolved(in:)](imagereference/resolved%28in_%29.md): Returns the referenced image from the transcript.

## Relationships

### Conforms To

- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Generable](generable.md)
- [InstructionsRepresentable](instructionsrepresentable.md)
- [PromptRepresentable](promptrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Prompt attachments

- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md): Analyze and extract information from images by combining them with descriptive text prompts.
- [Attachment](attachment.md): An asset provided to the model.
- [ImageAttachmentContent](imageattachmentcontent.md): A type that holds image data.
