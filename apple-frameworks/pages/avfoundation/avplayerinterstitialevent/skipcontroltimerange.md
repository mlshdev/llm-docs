> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/skipcontroltimerange](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/skipcontroltimerange)

# skipControlTimeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The time range within the duration of the interstitial event for which a skip button should be displayed.

## Declaration

```swift
var skipControlTimeRange: CMTimeRange { get set }
```

<a id="discussion"></a>

## Discussion

The start of the time range should indicate at which point the skip button should appear. The duration of the time range should indicate how long the skip button should be available. If this value is set to kCMTimePositiveInfinity, then the skip button will be available for the remainder of the interstitial’s duration after appearing. If either the start or duration of the time range is kCMTimeInvalid, then the interstitial will NOT be eligible to be skipped.

## See Also

### Managing skipping behavior

- [skipControlLocalizedLabelBundleKey](skipcontrollocalizedlabelbundlekey.md): The key defined in the AVPlayerInterstitialEventController’s localizedStringsBundle that points to the localized label for the skip button.
- [AVPlayerInterstitialEvent.SkippableEventState](skippableeventstate.md): These constants describe the state for a skippable AVPlayerInterstitialEvent.

# skipControlTimeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The time range within the duration of the interstitial event for which a skip button should be displayed.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange skipControlTimeRange;
```

<a id="discussion"></a>

## Discussion

The start of the time range should indicate at which point the skip button should appear. The duration of the time range should indicate how long the skip button should be available. If this value is set to kCMTimePositiveInfinity, then the skip button will be available for the remainder of the interstitial’s duration after appearing. If either the start or duration of the time range is kCMTimeInvalid, then the interstitial will NOT be eligible to be skipped.

## See Also

### Managing skipping behavior

- [skipControlLocalizedLabelBundleKey](skipcontrollocalizedlabelbundlekey.md): The key defined in the AVPlayerInterstitialEventController’s localizedStringsBundle that points to the localized label for the skip button.
- [AVPlayerInterstitialEventSkippableEventState](skippableeventstate.md): These constants describe the state for a skippable AVPlayerInterstitialEvent.
