> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/skippableeventstate](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/skippableeventstate)

# AVPlayerInterstitialEvent.SkippableEventState (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

These constants describe the state for a skippable AVPlayerInterstitialEvent.

## Declaration

```swift
enum SkippableEventState
```

## Topics

### Event states

- [AVPlayerInterstitialEvent.SkippableEventState.eligible](skippableeventstate/eligible.md): Indicates that the interstitial event is currently skippable.
- [AVPlayerInterstitialEvent.SkippableEventState.noLongerEligible](skippableeventstate/nolongereligible.md): Indicates that the interstitial event is no longer eligible to be skipped.
- [AVPlayerInterstitialEvent.SkippableEventState.notSkippable](skippableeventstate/notskippable.md): Indicates that the interstitial event is not skippable.
- [AVPlayerInterstitialEvent.SkippableEventState.notYetEligible](skippableeventstate/notyeteligible.md): Indicates that the interstitial event will eventually become eligible to be skipped.

### Initializers

- [init(rawValue:)](skippableeventstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing skipping behavior

- [skipControlLocalizedLabelBundleKey](skipcontrollocalizedlabelbundlekey.md): The key defined in the AVPlayerInterstitialEventController’s localizedStringsBundle that points to the localized label for the skip button.
- [skipControlTimeRange](skipcontroltimerange.md): The time range within the duration of the interstitial event for which a skip button should be displayed.

# AVPlayerInterstitialEventSkippableEventState (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

These constants describe the state for a skippable AVPlayerInterstitialEvent.

## Declaration

```objectivec
enum AVPlayerInterstitialEventSkippableEventState : NSInteger;
```

## Topics

### Event states

- [AVPlayerInterstitialEventSkippableEventStateEligible](skippableeventstate/eligible.md): Indicates that the interstitial event is currently skippable.
- [AVPlayerInterstitialEventSkippableEventStateNoLongerEligible](skippableeventstate/nolongereligible.md): Indicates that the interstitial event is no longer eligible to be skipped.
- [AVPlayerInterstitialEventSkippableEventStateNotSkippable](skippableeventstate/notskippable.md): Indicates that the interstitial event is not skippable.
- [AVPlayerInterstitialEventSkippableEventStateNotYetEligible](skippableeventstate/notyeteligible.md): Indicates that the interstitial event will eventually become eligible to be skipped.

## See Also

### Managing skipping behavior

- [skipControlLocalizedLabelBundleKey](skipcontrollocalizedlabelbundlekey.md): The key defined in the AVPlayerInterstitialEventController’s localizedStringsBundle that points to the localized label for the skip button.
- [skipControlTimeRange](skipcontroltimerange.md): The time range within the duration of the interstitial event for which a skip button should be displayed.
