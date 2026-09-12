> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentproposal/init(contenttimefortransition:title:previewimage:)](https://developer.apple.com/documentation/avkit/avcontentproposal/init(contenttimefortransition:title:previewimage:))

# init(contentTimeForTransition:title:previewImage:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** tvOS 10.0+

Creates a new content proposal with the specified transition time, title, and preview image.

## Declaration

```swift
init(contentTimeForTransition: CMTime, title: String, previewImage: UIImage?)
```

## Parameters

- `contentTimeForTransition`: A [CMTime](../../coremedia/cmtime.md) value at which to present the content propsal within the media’s timeline.
- `title`: The title of the proposed content.
- `previewImage`: The preview image for the proposed item.

<a id="return-value"></a>

## Return Value

A new instance of [AVContentProposal](../avcontentproposal.md).

<a id="Discussion"></a>

## Discussion

You specify the content proposal’s presentation time within the asset’s timeline. For instance, if you wanted to present the next content proposal 15 seconds before the end of the currently playing asset, you could create the next content proposal as follows:

```swift
let episode1Asset = // Currently presented asset for Episode 1
// Subtract 15 seconds from the current episode's duration
let time = episode1Asset.duration - CMTime(value: 15, timescale: 1)
let title = "My Series: Episode 2"
let image = UIImage(named: "myseries_ep2")
let proposal = AVContentProposal(contentTimeForTransition: time,
                                 title: title,
                                 previewImage: image)
// Set the proposal as the nextContentProposal of the current player item
currentPlayerItem.nextContentProposal = proposal
```

# initWithContentTimeForTransition:title:previewImage: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Creates a new content proposal with the specified transition time, title, and preview image.

## Declaration

```objectivec
- (instancetype) initWithContentTimeForTransition:(CMTime) contentTimeForTransition title:(NSString *) title previewImage:(UIImage *) previewImage;
```

## Parameters

- `contentTimeForTransition`: A [CMTime](../../coremedia/cmtime.md) value at which to present the content propsal within the media’s timeline.
- `title`: The title of the proposed content.
- `previewImage`: The preview image for the proposed item.

<a id="return-value"></a>

## Return Value

A new instance of [AVContentProposal](../avcontentproposal.md).

<a id="Discussion"></a>

## Discussion

You specify the content proposal’s presentation time within the asset’s timeline. For instance, if you wanted to present the next content proposal 15 seconds before the end of the currently playing asset, you could create the next content proposal as follows:

```swift
let episode1Asset = // Currently presented asset for Episode 1
// Subtract 15 seconds from the current episode's duration
let time = episode1Asset.duration - CMTime(value: 15, timescale: 1)
let title = "My Series: Episode 2"
let image = UIImage(named: "myseries_ep2")
let proposal = AVContentProposal(contentTimeForTransition: time,
                                 title: title,
                                 previewImage: image)
// Set the proposal as the nextContentProposal of the current player item
currentPlayerItem.nextContentProposal = proposal
```
