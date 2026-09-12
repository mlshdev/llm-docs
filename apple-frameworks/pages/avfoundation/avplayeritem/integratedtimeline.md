> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/integratedtimeline](https://developer.apple.com/documentation/avfoundation/avplayeritem/integratedtimeline)

# integratedTimeline (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An integrated timeline that represents the player item timing including its scheduled interstitial events.

## Declaration

```swift
nonisolated var integratedTimeline: AVPlayerItemIntegratedTimeline { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` for player items in an interstitial player.

## See Also

### Configuring interstitial events

- [automaticallyHandlesInterstitialEvents](automaticallyhandlesinterstitialevents.md): A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.
- [translatesPlayerInterstitialEvents](translatesplayerinterstitialevents.md): A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.
- [interstitialTimeRanges](interstitialtimeranges.md): An array of time ranges that identify interstitial content.
- [template](template.md): The template player item that initializes this instance.

# integratedTimeline (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An integrated timeline that represents the player item timing including its scheduled interstitial events.

## Declaration

```objectivec
@property (readonly) AVPlayerItemIntegratedTimeline * integratedTimeline;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` for player items in an interstitial player.

## See Also

### Configuring interstitial events

- [automaticallyHandlesInterstitialEvents](automaticallyhandlesinterstitialevents.md): A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.
- [translatesPlayerInterstitialEvents](translatesplayerinterstitialevents.md): A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.
- [interstitialTimeRanges](interstitialtimeranges.md): An array of time ranges that identify interstitial content.
- [templatePlayerItem](template.md): The template player item that initializes this instance.
