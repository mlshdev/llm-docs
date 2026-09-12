> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicsubscriptionoffer/options](https://developer.apple.com/documentation/musickit/musicsubscriptionoffer/options)

# MusicSubscriptionOffer.Options

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Options for loading subscription offers for Apple Music.

## Declaration

```swift
struct Options
```

## Topics

### Initializers

- [init(action:messageIdentifier:itemID:affiliateToken:campaignToken:)](options/init%28action_messageidentifier_itemid_affiliatetoken_campaigntoken_%29.md): Creates options for a subscription offer sheet with specific values for common properties.

### Instance Properties

- [action](options/action.md): An action for the subscription offers entry point.
- [affiliateToken](options/affiliatetoken.md): An affiliate token for the Apple Services affiliate program.
- [campaignToken](options/campaigntoken.md): A campaign token for the Apple Services affiliate program.
- [itemID](options/itemid.md): An identifier for the music item the user is trying to access, which requires an active subscription.
- [messageIdentifier](options/messageidentifier.md): An identifier for selecting the main message that the subscription offer sheet presents to the user.

### Type Properties

- [default](options/default.md): The default set of options for loading subscription offers for Apple Music.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
