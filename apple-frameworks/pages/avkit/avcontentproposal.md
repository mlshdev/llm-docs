> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontentproposal

# AVContentProposal (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 10.0+

An object that describes the content to propose playing after the current item finishes.

## Declaration

```swift
class AVContentProposal
```

## Mentioned In

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md)

<a id="overview"></a>

## Overview

A content proposal object models the data about the proposed content such as its title, preview image, presentation time, and content URL. You make a content proposal eligible for presentation by setting it as the [nextContentProposal](../avfoundation/avplayeritem/nextcontentproposal.md) of the current [AVPlayerItem](../avfoundation/avplayeritem.md).

```swift
let proposal = AVContentProposal(contentTimeForTransition: time,
                                 title: title,
                                 previewImage: image)
// Set the proposal as the nextContentProposal of the current player item
currentPlayerItem.nextContentProposal = proposal
```

## Topics

### Creating a content proposal

- [init(contentTimeForTransition:title:previewImage:)](avcontentproposal/init%28contenttimefortransition_title_previewimage_%29.md): Creates a new content proposal with the specified transition time, title, and preview image.

### Configuring the content proposal

- [contentTimeForTransition](avcontentproposal/contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](avcontentproposal/title.md): The title of the proposed content.
- [previewImage](avcontentproposal/previewimage.md): The preview image of the proposed item.
- [metadata](avcontentproposal/metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](avcontentproposal/automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [url](avcontentproposal/url.md): The URL of the proposed content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with overlays and parental controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.

# AVContentProposal (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 10.0+

An object that describes the content to propose playing after the current item finishes.

## Declaration

```objectivec
@interface AVContentProposal : NSObject
```

## Mentioned In

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md)

<a id="overview"></a>

## Overview

A content proposal object models the data about the proposed content such as its title, preview image, presentation time, and content URL. You make a content proposal eligible for presentation by setting it as the [nextContentProposal](../avfoundation/avplayeritem/nextcontentproposal.md) of the current [AVPlayerItem](../avfoundation/avplayeritem.md).

```swift
let proposal = AVContentProposal(contentTimeForTransition: time,
                                 title: title,
                                 previewImage: image)
// Set the proposal as the nextContentProposal of the current player item
currentPlayerItem.nextContentProposal = proposal
```

## Topics

### Creating a content proposal

- [initWithContentTimeForTransition:title:previewImage:](avcontentproposal/init%28contenttimefortransition_title_previewimage_%29.md): Creates a new content proposal with the specified transition time, title, and preview image.

### Configuring the content proposal

- [contentTimeForTransition](avcontentproposal/contenttimefortransition.md): The time within the timeline of the current player item when the content proposal presentation should begin.
- [title](avcontentproposal/title.md): The title of the proposed content.
- [previewImage](avcontentproposal/previewimage.md): The preview image of the proposed item.
- [metadata](avcontentproposal/metadata.md): Optional custom metadata associated with the proposed item.
- [automaticAcceptanceInterval](avcontentproposal/automaticacceptanceinterval.md): The interval between the time playback ends and automatic acceptance of this content proposal.
- [URL](avcontentproposal/url.md): The URL of the proposed content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Content proposals and parental controls

- [Presenting content proposals in tvOS](presenting-content-proposals-in-tvos.md): Display a preview of an upcoming media item at the conclusion of the currently playing media item.
- [Working with overlays and parental controls in tvOS](working-with-overlays-and-parental-controls-in-tvos.md): Add interactive overlays, parental controls, and livestream channel flipping using a player view controller.
- [AVContentProposalAction](avcontentproposalaction.md): Constant that indicate the action a user takes when dismissing a content proposal.
- [AVContentProposalViewController](avcontentproposalviewcontroller.md): A view controller that proposes content to watch next.
