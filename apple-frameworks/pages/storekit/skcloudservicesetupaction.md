> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupaction](https://developer.apple.com/documentation/storekit/skcloudservicesetupaction)

# SKCloudServiceSetupAction (Swift)

**Framework:** StoreKit  
**Kind:** Structure

A string used to specify the type of setup action to offer for a cloud service.

## Declaration

```swift
struct SKCloudServiceSetupAction
```

## Topics

### Initializers

- [init(rawValue:)](skcloudservicesetupaction/init%28rawvalue_%29.md): Initializes a setup action to offer for a cloud service using the specified value.

### Type Properties

- [subscribe](skcloudservicesetupaction/subscribe.md): Deprecated. A subscribe action in a cloud service setup view, such as an offer to subscribe to Apple Music.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Indicating Setup Options

- [action](skcloudservicesetupoptionskey/action.md): Deprecated. A key that specifies the action for a setup entry point.
- [iTunesItemIdentifier](skcloudservicesetupoptionskey/itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [affiliateToken](skcloudservicesetupoptionskey/affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [campaignToken](skcloudservicesetupoptionskey/campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [messageIdentifier](skcloudservicesetupoptionskey/messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
- [SKCloudServiceSetupMessageIdentifier](skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.

# SKCloudServiceSetupAction (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Alias

A string used to specify the type of setup action to offer for a cloud service.

## Declaration

```objectivec
typedef NSString * SKCloudServiceSetupAction;
```

## Topics

### Type Properties

- [SKCloudServiceSetupActionSubscribe](skcloudservicesetupaction/subscribe.md): Deprecated. A subscribe action in a cloud service setup view, such as an offer to subscribe to Apple Music.

## See Also

### Indicating Setup Options

- [SKCloudServiceSetupOptionsActionKey](skcloudservicesetupoptionskey/action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupOptionsITunesItemIdentifierKey](skcloudservicesetupoptionskey/itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [SKCloudServiceSetupOptionsAffiliateTokenKey](skcloudservicesetupoptionskey/affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [SKCloudServiceSetupOptionsCampaignTokenKey](skcloudservicesetupoptionskey/campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [SKCloudServiceSetupOptionsMessageIdentifierKey](skcloudservicesetupoptionskey/messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
- [SKCloudServiceSetupMessageIdentifier](skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.
