> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/restrictions-swift.struct](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/restrictions-swift.struct)

# AVPlayerInterstitialEvent.Restrictions (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that define restrictions on the playback of interstitial content.

## Declaration

```swift
struct Restrictions
```

## Topics

### Configure

- [constrainsSeekingForwardInPrimaryContent](restrictions-swift.struct/constrainsseekingforwardinprimarycontent.md): A restriction that indicates the event doesn’t allow seeking forward within an interstitial item.
- [requiresPlaybackAtPreferredRateForAdvancement](restrictions-swift.struct/requiresplaybackatpreferredrateforadvancement.md): A restriction that indicates the event doesn’t allow advancing the current time within an interstitial item.

### Initializing a restriction

- [init(rawValue:)](restrictions-swift.struct/init%28rawvalue_%29.md): Creates a restriction with an integer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing restrictions

- [restrictions](restrictions-swift.property.md): The restrictions the event imposes on the playback of interstitial content.

# AVPlayerInterstitialEventRestrictions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that define restrictions on the playback of interstitial content.

## Declaration

```objectivec
enum AVPlayerInterstitialEventRestrictions : NSUInteger;
```

## Topics

### Configure

- [AVPlayerInterstitialEventRestrictionConstrainsSeekingForwardInPrimaryContent](restrictions-swift.struct/constrainsseekingforwardinprimarycontent.md): A restriction that indicates the event doesn’t allow seeking forward within an interstitial item.
- [AVPlayerInterstitialEventRestrictionRequiresPlaybackAtPreferredRateForAdvancement](restrictions-swift.struct/requiresplaybackatpreferredrateforadvancement.md): A restriction that indicates the event doesn’t allow advancing the current time within an interstitial item.
- [AVPlayerInterstitialEventRestrictionDefaultPolicy](../avplayerinterstitialeventrestrictions/avplayerinterstitialeventrestrictiondefaultpolicy.md): The default restriction policy.
- [AVPlayerInterstitialEventRestrictionNone](../avplayerinterstitialeventrestrictions/avplayerinterstitialeventrestrictionnone.md): A value that indicates no restrictions on playback of primary or interstitial content.

## See Also

### Managing restrictions

- [restrictions](restrictions-swift.property.md): The restrictions the event imposes on the playback of interstitial content.
