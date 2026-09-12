> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/isclosedcaptiondisplayenabled](https://developer.apple.com/documentation/avfoundation/avplayer/isclosedcaptiondisplayenabled)

# isClosedCaptionDisplayEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

A Boolean value that indicates whether the player uses closed captioning.

> Let a player enable closed captions automatically according to user preferences by setting the value of the [appliesMediaSelectionCriteriaAutomatically](appliesmediaselectioncriteriaautomatically.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Declaration

```swift
var isClosedCaptionDisplayEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The player displays closed captions in the following cases:

- Closed captions are present in the media and the value of `closedCaptionDisplayEnabled` is [true](https://developer.apple.com/documentation/swift/true), or
- A media selection option representing a stream of closed captions is selected in the legible media selection group.

> **Note**

>  It’s strongly recommended that you don’t rely on this property to control the display of closed captions and instead use the media selection capabilities of [AVPlayer](../avplayer.md) and [AVPlayerItem](../avplayeritem.md). The media selection API works equally well for displaying SDH subtitles as well as other kinds of content offering accessibility features. See [select(\_:in:)](../avplayeritem/select%28__in_%29.md) for more details.

# closedCaptionDisplayEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

A Boolean value that indicates whether the player uses closed captioning.

> Let a player enable closed captions automatically according to user preferences by setting the value of the [appliesMediaSelectionCriteriaAutomatically](appliesmediaselectioncriteriaautomatically.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Declaration

```objectivec
@property (getter=isClosedCaptionDisplayEnabled) BOOL closedCaptionDisplayEnabled;
```

<a id="Discussion"></a>

## Discussion

The player displays closed captions in the following cases:

- Closed captions are present in the media and the value of `closedCaptionDisplayEnabled` is [true](https://developer.apple.com/documentation/swift/true), or
- A media selection option representing a stream of closed captions is selected in the legible media selection group.

> **Note**

>  It’s strongly recommended that you don’t rely on this property to control the display of closed captions and instead use the media selection capabilities of [AVPlayer](../avplayer.md) and [AVPlayerItem](../avplayeritem.md). The media selection API works equally well for displaying SDH subtitles as well as other kinds of content offering accessibility features. See [selectMediaOption:inMediaSelectionGroup:](../avplayeritem/select%28__in_%29.md) for more details.
