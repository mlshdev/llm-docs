> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/attachment/label(_:)](https://developer.apple.com/documentation/foundationmodels/attachment/label(_:))

# label(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Assigns a label to an attachment.

## Declaration

```swift
func label(_ label: String) -> Attachment<Content>
```

## Parameters

- `label`: A string that identifies this attachment.

## Mentioned In

- [Analyzing images with multimodal prompting](../analyzing-images-with-multimodal-prompting.md)

<a id="discussion"></a>

## Discussion

Labels help the model identify specific attachments when making tool calls.

```swift
Attachment(image)
    .label("profile-photo")
```
