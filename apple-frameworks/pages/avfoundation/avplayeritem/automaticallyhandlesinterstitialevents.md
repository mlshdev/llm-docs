> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/automaticallyhandlesinterstitialevents](https://developer.apple.com/documentation/avfoundation/avplayeritem/automaticallyhandlesinterstitialevents)

# automaticallyHandlesInterstitialEvents (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.

## Declaration

```swift
nonisolated var automaticallyHandlesInterstitialEvents: Bool { get set }
```

## See Also

### Configuring interstitial events

- [integratedTimeline](integratedtimeline.md): An integrated timeline that represents the player item timing including its scheduled interstitial events.
- [translatesPlayerInterstitialEvents](translatesplayerinterstitialevents.md): A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.
- [interstitialTimeRanges](interstitialtimeranges.md): An array of time ranges that identify interstitial content.
- [template](template.md): The template player item that initializes this instance.

# automaticallyHandlesInterstitialEvents (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the player item automatically plays interstitial events according to server-side directives.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyHandlesInterstitialEvents;
```

## See Also

### Configuring interstitial events

- [integratedTimeline](integratedtimeline.md): An integrated timeline that represents the player item timing including its scheduled interstitial events.
- [translatesPlayerInterstitialEvents](translatesplayerinterstitialevents.md): A Boolean value that indicates whether the player translates interstitial events to interstitial time ranges.
- [interstitialTimeRanges](interstitialtimeranges.md): An array of time ranges that identify interstitial content.
- [templatePlayerItem](template.md): The template player item that initializes this instance.
