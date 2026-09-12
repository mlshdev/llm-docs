> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/interstitialtimeranges](https://developer.apple.com/documentation/avfoundation/avplayeritem/interstitialtimeranges)

# interstitialTimeRanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS · visionOS 1.0+

An array of time ranges that identify interstitial content.

## Declaration

```swift
var interstitialTimeRanges: [AVInterstitialTimeRange] { get }
```

```swift
var interstitialTimeRanges: [AVInterstitialTimeRange] { get set }
```

<a id="Discussion"></a>

## Discussion

Interstitial content is material that’s unrelated to a player item’s primary content, such as advertisements and legal notices. If you use [AVPlayerViewController](../../avkit/avplayerviewcontroller.md) to present an item that contains interstitial time ranges, the user interface marks those time ranges differently on the playback timeline. A player view controller can also call your app when it begins and ends playing interstitial content. You can use these events to customize playback behavior, such as preventing viewers from skipping required content.

> **Note**

>  On iOS, the stream must define the interstitial time ranges, or you must use [AVPlayerInterstitialEventController](../avplayerinterstitialeventcontroller.md).

## See Also

### Configuring interstitial events

- [integratedTimeline](integratedtimeline.md): An integrated timeline that represents the player item timing including its scheduled interstitial events.
- [automaticallyHandlesInterstitialEvents](automaticallyhandlesinterstitialevents.md): A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.
- [translatesPlayerInterstitialEvents](translatesplayerinterstitialevents.md): A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.
- [template](template.md): The template player item that initializes this instance.

# interstitialTimeRanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS · visionOS 1.0+

An array of time ranges that identify interstitial content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVInterstitialTimeRange *> * interstitialTimeRanges;
```

```objectivec
@property (nonatomic, copy) NSArray<AVInterstitialTimeRange *> * interstitialTimeRanges;
```

<a id="Discussion"></a>

## Discussion

Interstitial content is material that’s unrelated to a player item’s primary content, such as advertisements and legal notices. If you use [AVPlayerViewController](../../avkit/avplayerviewcontroller.md) to present an item that contains interstitial time ranges, the user interface marks those time ranges differently on the playback timeline. A player view controller can also call your app when it begins and ends playing interstitial content. You can use these events to customize playback behavior, such as preventing viewers from skipping required content.

> **Note**

>  On iOS, the stream must define the interstitial time ranges, or you must use [AVPlayerInterstitialEventController](../avplayerinterstitialeventcontroller.md).

## See Also

### Configuring interstitial events

- [integratedTimeline](integratedtimeline.md): An integrated timeline that represents the player item timing including its scheduled interstitial events.
- [automaticallyHandlesInterstitialEvents](automaticallyhandlesinterstitialevents.md): A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.
- [translatesPlayerInterstitialEvents](translatesplayerinterstitialevents.md): A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.
- [templatePlayerItem](template.md): The template player item that initializes this instance.
