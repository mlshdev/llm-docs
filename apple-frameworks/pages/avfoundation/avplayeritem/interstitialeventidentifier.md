> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/interstitialeventidentifier](https://developer.apple.com/documentation/avfoundation/avplayeritem/interstitialeventidentifier)

# interstitialEventIdentifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

The identifier of the AVPlayerInterstitialEvent that created this item, or nil if the item was not created from an interstitial event.

## Declaration

```swift
nonisolated var interstitialEventIdentifier: String? { get }
```

# interstitialEventIdentifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

The identifier of the AVPlayerInterstitialEvent that created this item, or nil if the item was not created from an interstitial event.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * interstitialEventIdentifier;
```
