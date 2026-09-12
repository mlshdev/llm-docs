> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposal/contenttimefortransition](https://developer.apple.com/documentation/avkit/avcontentproposal/contenttimefortransition)

# contentTimeForTransition (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The time within the timeline of the current player item when the content proposal presentation should begin.

## Declaration

```swift
var contentTimeForTransition: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The time value commonly marks the beginning of the end credits in a television show or movie. For other content, this may be at the very end of the video. The default value, [indefinite](../../coremedia/cmtime/indefinite.md), indicates that the transition should occur at the very end of the current player item’s end time; this is equivalent to using the duration of the asset.

## See Also

### Configuring the Content Proposal

- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [url](url.md): The URL of the proposed content.

# contentTimeForTransition (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The time within the timeline of the current player item when the content proposal presentation should begin.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime contentTimeForTransition;
```

<a id="Discussion"></a>

## Discussion

The time value commonly marks the beginning of the end credits in a television show or movie. For other content, this may be at the very end of the video. The default value, [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md), indicates that the transition should occur at the very end of the current player item’s end time; this is equivalent to using the duration of the asset.

## See Also

### Configuring the Content Proposal

- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [URL](url.md): The URL of the proposed content.
