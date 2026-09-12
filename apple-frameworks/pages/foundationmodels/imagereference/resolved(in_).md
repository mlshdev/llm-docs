> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/imagereference/resolved(in:)](https://developer.apple.com/documentation/foundationmodels/imagereference/resolved(in:))

# resolved(in:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the referenced image from the transcript.

## Declaration

```swift
func resolved(in transcript: some Sequence<Transcript.Entry>) -> Transcript.ImageAttachment?
```

## Parameters

- `transcript`: The transcript to resolve the reference against.

<a id="return-value"></a>

## Return Value

The [Transcript.ImageAttachment](../transcript/imageattachment.md) for this reference, or `nil` if no attachment with label [attachmentLabel](attachmentlabel.md) is found in the transcript.

<a id="discussion"></a>

## Discussion

If more than one attachment shares an [attachmentLabel](attachmentlabel.md), the attachment from the latest entry is returned.
