> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupmessageidentifier](https://developer.apple.com/documentation/storekit/skcloudservicesetupmessageidentifier)

# SKCloudServiceSetupMessageIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Structure

Identifiers for the available messages the setup view can present to the user.

## Declaration

```swift
struct SKCloudServiceSetupMessageIdentifier
```

## Topics

### Initializing Identifiers

- [init(rawValue:)](skcloudservicesetupmessageidentifier/init%28rawvalue_%29.md): Initializes a cloud service setup message identifier based on the provided raw value.

### Message Identifiers

- [addMusic](skcloudservicesetupmessageidentifier/addmusic.md): Deprecated. Message identifier for adding music.
- [connect](skcloudservicesetupmessageidentifier/connect.md): Deprecated. Message identifier for connecting.
- [join](skcloudservicesetupmessageidentifier/join.md): Deprecated. Message identifier for joining.
- [playMusic](skcloudservicesetupmessageidentifier/playmusic.md): Deprecated. Message identifier for playing music.

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
- [SKCloudServiceSetupAction](skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [iTunesItemIdentifier](skcloudservicesetupoptionskey/itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [affiliateToken](skcloudservicesetupoptionskey/affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [campaignToken](skcloudservicesetupoptionskey/campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [messageIdentifier](skcloudservicesetupoptionskey/messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.

# SKCloudServiceSetupMessageIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Alias

Identifiers for the available messages the setup view can present to the user.

## Declaration

```objectivec
typedef NSString * SKCloudServiceSetupMessageIdentifier;
```

## Topics

### Message Identifiers

- [SKCloudServiceSetupMessageIdentifierAddMusic](skcloudservicesetupmessageidentifier/addmusic.md): Deprecated. Message identifier for adding music.
- [SKCloudServiceSetupMessageIdentifierConnect](skcloudservicesetupmessageidentifier/connect.md): Deprecated. Message identifier for connecting.
- [SKCloudServiceSetupMessageIdentifierJoin](skcloudservicesetupmessageidentifier/join.md): Deprecated. Message identifier for joining.
- [SKCloudServiceSetupMessageIdentifierPlayMusic](skcloudservicesetupmessageidentifier/playmusic.md): Deprecated. Message identifier for playing music.

## See Also

### Indicating Setup Options

- [SKCloudServiceSetupOptionsActionKey](skcloudservicesetupoptionskey/action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [SKCloudServiceSetupOptionsITunesItemIdentifierKey](skcloudservicesetupoptionskey/itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [SKCloudServiceSetupOptionsAffiliateTokenKey](skcloudservicesetupoptionskey/affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [SKCloudServiceSetupOptionsCampaignTokenKey](skcloudservicesetupoptionskey/campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [SKCloudServiceSetupOptionsMessageIdentifierKey](skcloudservicesetupoptionskey/messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
