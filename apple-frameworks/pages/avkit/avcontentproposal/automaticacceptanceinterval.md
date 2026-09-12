> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposal/automaticacceptanceinterval](https://developer.apple.com/documentation/avkit/avcontentproposal/automaticacceptanceinterval)

# automaticAcceptanceInterval (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The interval between the time playback ends and automatic acceptance of this content proposal.

## Declaration

```swift
var automaticAcceptanceInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The content proposal displays a countdown timer to reflect this value. Set this value to [nan](https://developer.apple.com/documentation/swift/double/nan) to disable the default, which is automatic acceptance.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [url](url.md): The URL of the proposed content.

# automaticAcceptanceInterval (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The interval between the time playback ends and automatic acceptance of this content proposal.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSTimeInterval automaticAcceptanceInterval;
```

<a id="Discussion"></a>

## Discussion

The content proposal displays a countdown timer to reflect this value. Set this value to [nan](https://developer.apple.com/documentation/swift/double/nan) to disable the default, which is automatic acceptance.

## See Also

### Configuring the Content Proposal

- [contentTimeForTransition](contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](title.md): The title of the proposed content.
- [previewImage](previewimage.md): The preview image of the proposed item.
- [metadata](metadata.md): Optional custom metadata associated with the proposed item.
- [URL](url.md): The URL of the proposed content.
