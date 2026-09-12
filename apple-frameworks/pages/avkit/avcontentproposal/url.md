> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposal/url](https://developer.apple.com/documentation/avkit/avcontentproposal/url)

# url (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The URL of the proposed content.

## Declaration

```swift
var url: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property value to initialize a new [AVPlayerItem](../../avfoundation/avplayeritem.md) to play when the user accepts the content proposal. If the value of this property is `nil`, the [AVPlayerViewControllerDelegate](../avplayerviewcontrollerdelegate.md) must handle the content proposal acceptance.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.

# URL (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The URL of the proposed content.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Use this property value to initialize a new [AVPlayerItem](../../avfoundation/avplayeritem.md) to play when the user accepts the content proposal. If the value of this property is `nil`, the [AVPlayerViewControllerDelegate](../avplayerviewcontrollerdelegate.md) must handle the content proposal acceptance.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
