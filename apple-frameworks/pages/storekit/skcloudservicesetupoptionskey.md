> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupoptionskey](https://developer.apple.com/documentation/storekit/skcloudservicesetupoptionskey)

# SKCloudServiceSetupOptionsKey (Swift)

**Framework:** StoreKit  
**Kind:** Structure

Keys to specify the types of setup options for a cloud service.

## Declaration

```swift
struct SKCloudServiceSetupOptionsKey
```

## Topics

### Initializing

- [init(rawValue:)](skcloudservicesetupoptionskey/init%28rawvalue_%29.md): Initializes a cloud service setup options key based on the provided raw value.

### Indicating Setup Options

- [action](skcloudservicesetupoptionskey/action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [iTunesItemIdentifier](skcloudservicesetupoptionskey/itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [affiliateToken](skcloudservicesetupoptionskey/affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [campaignToken](skcloudservicesetupoptionskey/campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [messageIdentifier](skcloudservicesetupoptionskey/messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
- [SKCloudServiceSetupMessageIdentifier](skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading the setup view

- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md): Allow eligible customers to subscribe to Apple Music.
- [load(options:completionHandler:)](skcloudservicesetupviewcontroller/load%28options_completionhandler_%29.md): Deprecated. Loads the cloud service setup view with the specified options.
- [SKArcadeService](skarcadeservice.md)

# SKCloudServiceSetupOptionsKey (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Alias

Keys to specify the types of setup options for a cloud service.

## Declaration

```objectivec
typedef NSString * SKCloudServiceSetupOptionsKey;
```

## Topics

### Indicating Setup Options

- [SKCloudServiceSetupOptionsActionKey](skcloudservicesetupoptionskey/action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [SKCloudServiceSetupOptionsITunesItemIdentifierKey](skcloudservicesetupoptionskey/itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [SKCloudServiceSetupOptionsAffiliateTokenKey](skcloudservicesetupoptionskey/affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [SKCloudServiceSetupOptionsCampaignTokenKey](skcloudservicesetupoptionskey/campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [SKCloudServiceSetupOptionsMessageIdentifierKey](skcloudservicesetupoptionskey/messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
- [SKCloudServiceSetupMessageIdentifier](skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.

## See Also

### Loading the setup view

- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md): Allow eligible customers to subscribe to Apple Music.
- [loadWithOptions:completionHandler:](skcloudservicesetupviewcontroller/load%28options_completionhandler_%29.md): Deprecated. Loads the cloud service setup view with the specified options.
- [SKArcadeService](skarcadeservice.md)
