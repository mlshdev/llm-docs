> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/translatesplayerinterstitialevents](https://developer.apple.com/documentation/avfoundation/avplayeritem/translatesplayerinterstitialevents)

# translatesPlayerInterstitialEvents (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.

## Declaration

```swift
var translatesPlayerInterstitialEvents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Enable this property value to support using interstitial events, or set it to [false](https://developer.apple.com/documentation/swift/false) to perform your own interstitial management.

## See Also

### Configuring interstitial events

- [integratedTimeline](integratedtimeline.md): An integrated timeline that represents the player item timing including its scheduled interstitial events.
- [automaticallyHandlesInterstitialEvents](automaticallyhandlesinterstitialevents.md): A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.
- [interstitialTimeRanges](interstitialtimeranges.md): An array of time ranges that identify interstitial content.
- [template](template.md): The template player item that initializes this instance.

# translatesPlayerInterstitialEvents (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.

## Declaration

```objectivec
@property (nonatomic) BOOL translatesPlayerInterstitialEvents;
```

<a id="Discussion"></a>

## Discussion

Enable this property value to support using interstitial events, or set it to [false](https://developer.apple.com/documentation/swift/false) to perform your own interstitial management.

## See Also

### Configuring interstitial events

- [integratedTimeline](integratedtimeline.md): An integrated timeline that represents the player item timing including its scheduled interstitial events.
- [automaticallyHandlesInterstitialEvents](automaticallyhandlesinterstitialevents.md): A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.
- [interstitialTimeRanges](interstitialtimeranges.md): An array of time ranges that identify interstitial content.
- [templatePlayerItem](template.md): The template player item that initializes this instance.
