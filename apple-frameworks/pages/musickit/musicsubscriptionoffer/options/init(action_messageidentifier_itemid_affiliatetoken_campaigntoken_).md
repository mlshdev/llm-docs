> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicsubscriptionoffer/options/init(action:messageidentifier:itemid:affiliatetoken:campaigntoken:)](https://developer.apple.com/documentation/musickit/musicsubscriptionoffer/options/init(action:messageidentifier:itemid:affiliatetoken:campaigntoken:))

# init(action:messageIdentifier:itemID:affiliateToken:campaignToken:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates options for a subscription offer sheet with specific values for common properties.

## Declaration

```swift
init(action: MusicSubscriptionOffer.Action = .subscribe, messageIdentifier: MusicSubscriptionOffer.MessageIdentifier = .join, itemID: MusicItemID? = nil, affiliateToken: String? = nil, campaignToken: String? = nil)
```
