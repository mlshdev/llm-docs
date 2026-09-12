> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposal/metadata](https://developer.apple.com/documentation/avkit/avcontentproposal/metadata)

# metadata (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

Optional custom metadata associated with the proposed item.

## Declaration

```swift
var metadata: [AVMetadataItem] { get set }
```

<a id="Discussion"></a>

## Discussion

In addition to the title and preview image, you can associate any custom metadata you need for the presentation of this content proposal.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [url](url.md): The URL of the proposed content.

# metadata (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

Optional custom metadata associated with the proposed item.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

In addition to the title and preview image, you can associate any custom metadata you need for the presentation of this content proposal.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [URL](url.md): The URL of the proposed content.
