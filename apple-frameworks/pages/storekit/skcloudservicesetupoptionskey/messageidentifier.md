> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupoptionskey/messageidentifier](https://developer.apple.com/documentation/storekit/skcloudservicesetupoptionskey/messageidentifier)

# messageIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · tvOS 11.0+ (deprecated in 18.0)

A key that is used to select the main message presented to the user for this setup view.

> Use the messageIdentifier property of MusicSubscriptionOffer.Options from MusicKit.

## Declaration

```swift
static let messageIdentifier: SKCloudServiceSetupOptionsKey
```

## Mentioned In

- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If this key is missing, the setup view is configured as if it is using the [join](../skcloudservicesetupmessageidentifier/join.md) key by default.

## See Also

### Indicating Setup Options

- [action](action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](../skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [iTunesItemIdentifier](itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [affiliateToken](affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [campaignToken](campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [SKCloudServiceSetupMessageIdentifier](../skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.

# SKCloudServiceSetupOptionsMessageIdentifierKey (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · tvOS 11.0+ (deprecated in 18.0)

A key that is used to select the main message presented to the user for this setup view.

> Use the messageIdentifier property of MusicSubscriptionOffer.Options from MusicKit.

## Declaration

```objectivec
extern SKCloudServiceSetupOptionsKey const SKCloudServiceSetupOptionsMessageIdentifierKey;
```

## Mentioned In

- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If this key is missing, the setup view is configured as if it is using the [SKCloudServiceSetupMessageIdentifierJoin](../skcloudservicesetupmessageidentifier/join.md) key by default.

## See Also

### Indicating Setup Options

- [SKCloudServiceSetupOptionsActionKey](action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](../skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [SKCloudServiceSetupOptionsITunesItemIdentifierKey](itunesitemidentifier.md): Deprecated. A key that specifies the iTunes Store item that the user is trying to access through the service.
- [SKCloudServiceSetupOptionsAffiliateTokenKey](affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [SKCloudServiceSetupOptionsCampaignTokenKey](campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [SKCloudServiceSetupMessageIdentifier](../skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.
