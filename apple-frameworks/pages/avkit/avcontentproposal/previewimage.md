> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposal/previewimage](https://developer.apple.com/documentation/avkit/avcontentproposal/previewimage)

# previewImage (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The preview image of the proposed item.

## Declaration

```swift
var previewImage: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

The preview image you provide should typically be a frame from the proposed video, not the poster artwork.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [url](url.md): The URL of the proposed content.

# previewImage (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The preview image of the proposed item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImage * previewImage;
```

<a id="Discussion"></a>

## Discussion

The preview image you provide should typically be a frame from the proposed video, not the poster artwork.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [URL](url.md): The URL of the proposed content.
