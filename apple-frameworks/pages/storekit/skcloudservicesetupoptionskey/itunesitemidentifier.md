> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupoptionskey/itunesitemidentifier](https://developer.apple.com/documentation/storekit/skcloudservicesetupoptionskey/itunesitemidentifier)

# iTunesItemIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · tvOS 10.0+ (deprecated in 18.0)

A key that specifies the iTunes Store item that the user is trying to access through the service.

> Use the itemID property of MusicSubscriptionOffer.Options from MusicKit.

## Declaration

```swift
static let iTunesItemIdentifier: SKCloudServiceSetupOptionsKey
```

<a id="Discussion"></a>

## Discussion

The only iTunes Store items that are supported are song, video, playlist, and album.

## See Also

### Indicating Setup Options

- [action](action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](../skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [affiliateToken](affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [campaignToken](campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [messageIdentifier](messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
- [SKCloudServiceSetupMessageIdentifier](../skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.

# SKCloudServiceSetupOptionsITunesItemIdentifierKey (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · tvOS 10.0+ (deprecated in 18.0)

A key that specifies the iTunes Store item that the user is trying to access through the service.

> Use the itemID property of MusicSubscriptionOffer.Options from MusicKit.

## Declaration

```objectivec
extern SKCloudServiceSetupOptionsKey const SKCloudServiceSetupOptionsITunesItemIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

The only iTunes Store items that are supported are song, video, playlist, and album.

## See Also

### Indicating Setup Options

- [SKCloudServiceSetupOptionsActionKey](action.md): Deprecated. A key that specifies the action for a setup entry point.
- [SKCloudServiceSetupAction](../skcloudservicesetupaction.md): A string used to specify the type of setup action to offer for a cloud service.
- [SKCloudServiceSetupOptionsAffiliateTokenKey](affiliatetoken.md): Deprecated. A key that specifies the iTunes Store affiliate token.
- [SKCloudServiceSetupOptionsCampaignTokenKey](campaigntoken.md): Deprecated. A key that specifies the iTunes Store affiliate campaign token.
- [SKCloudServiceSetupOptionsMessageIdentifierKey](messageidentifier.md): Deprecated. A key that is used to select the main message presented to the user for this setup view.
- [SKCloudServiceSetupMessageIdentifier](../skcloudservicesetupmessageidentifier.md): Identifiers for the available messages the setup view can present to the user.
