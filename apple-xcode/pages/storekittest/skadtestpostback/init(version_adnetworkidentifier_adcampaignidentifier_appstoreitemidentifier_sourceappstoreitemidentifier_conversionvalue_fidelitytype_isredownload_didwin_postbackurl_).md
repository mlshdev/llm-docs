> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/init(version:adnetworkidentifier:adcampaignidentifier:appstoreitemidentifier:sourceappstoreitemidentifier:conversionvalue:fidelitytype:isredownload:didwin:postbackurl:)](https://developer.apple.com/documentation/storekittest/skadtestpostback/init(version:adnetworkidentifier:adcampaignidentifier:appstoreitemidentifier:sourceappstoreitemidentifier:conversionvalue:fidelitytype:isredownload:didwin:postbackurl:))

# init(version:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Creates a test postback for an in-app ad.

## Declaration

```swift
init?(version: SKAdTestPostbackVersion, adNetworkIdentifier: String, adCampaignIdentifier: Int, appStoreItemIdentifier: Int, sourceAppStoreItemIdentifier: Int, conversionValue: Int, fidelityType: Int, isRedownload: Bool, didWin: Bool, postbackURL: String)
```

## Parameters

- `version`: [SKAdTestPostbackVersion](../skadtestpostbackversion.md), the SKAdNetwork version. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).
- `adNetworkIdentifier`: Your ad network identifier. For the test environment, you may use any lowercased value. You must use the same value to verify the signature after you receive the postback on your server. Also, use the same ad network identifier in the `Info.plist` of the source app in the testing environment.
- `adCampaignIdentifier`: The campaign identifier associated with the ad.
- `appStoreItemIdentifier`: The App Store item identifier of the advertised app.
- `sourceAppStoreItemIdentifier`: The App Store item identifier of the app that displays the ad. This value is `0` in the testing environment.
- `conversionValue`: SKAdNetwork version 2.0 and later. An unsigned 6-bit value that the installed app provides by calling [updateConversionValue(\_:)](https://developer.apple.com/documentation/storekit/skadnetwork/updateconversionvalue%28_:%29). Note: In the production environment, the conversion-value only appears in the postback if the installed app provides it, and if providing the parameter meets Apple’s privacy threshold.
- `fidelityType`: SKAdNetwork version 2.2 and later. A value of `0` indicates a view-through ad presentation; a value of `1` indicates a StoreKit-rendered ad.
- `isRedownload`: SKAdNetwork version 2.0 and later. A Boolean flag that in the production environment indicates that the customer redownloaded and reinstalled the app when the value is `true`.
- `didWin`: SKAdNetwork version 3.0 and later. A Boolean value that’s `true` if the ad network won the attribution, and `false` if the postback represents a qualifying ad impression that didn’t win the attribution.
- `postbackURL`: A URL on your server where you can receive test postbacks.

<a id="discussion"></a>

## Discussion

Create one to six test postbacks to use for unit testing. Call [setPostbacks(\_:)](../skadtestsession/setpostbacks%28__%29.md) to add the test postbacks to the test session.

## See Also

### Creating test postbacks

- [init(version:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:didWin:postbackURL:)](init%28version_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for a web ad or an in-app ad.
- [winningPostbacks(withVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:)](winningpostbacks%28withversion_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_postbackurl_%29.md): Creates a sequence of test postbacks for an in-app or web ad impression.

# initWithVersion:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Creates a test postback for an in-app ad.

## Declaration

```objectivec
- (instancetype) initWithVersion:(SKAdTestPostbackVersion) version adNetworkIdentifier:(NSString *) adNetworkIdentifier adCampaignIdentifier:(NSInteger) adCampaignIdentifier appStoreItemIdentifier:(NSInteger) appStoreItemIdentifier sourceAppStoreItemIdentifier:(NSInteger) sourceAppStoreItemIdentifier conversionValue:(NSInteger) conversionValue fidelityType:(NSInteger) fidelityType isRedownload:(BOOL) isRedownload didWin:(BOOL) didWin postbackURL:(NSString *) postbackURL;
```

## Parameters

- `version`: [SKAdTestPostbackVersion](../skadtestpostbackversion.md), the SKAdNetwork version. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).
- `adNetworkIdentifier`: Your ad network identifier. For the test environment, you may use any lowercased value. You must use the same value to verify the signature after you receive the postback on your server. Also, use the same ad network identifier in the `Info.plist` of the source app in the testing environment.
- `adCampaignIdentifier`: The campaign identifier associated with the ad.
- `appStoreItemIdentifier`: The App Store item identifier of the advertised app.
- `sourceAppStoreItemIdentifier`: The App Store item identifier of the app that displays the ad. This value is `0` in the testing environment.
- `conversionValue`: SKAdNetwork version 2.0 and later. An unsigned 6-bit value that the installed app provides by calling [updateConversionValue:](https://developer.apple.com/documentation/storekit/skadnetwork/updateconversionvalue%28_:%29). Note: In the production environment, the conversion-value only appears in the postback if the installed app provides it, and if providing the parameter meets Apple’s privacy threshold.
- `fidelityType`: SKAdNetwork version 2.2 and later. A value of `0` indicates a view-through ad presentation; a value of `1` indicates a StoreKit-rendered ad.
- `isRedownload`: SKAdNetwork version 2.0 and later. A Boolean flag that in the production environment indicates that the customer redownloaded and reinstalled the app when the value is `true`.
- `didWin`: SKAdNetwork version 3.0 and later. A Boolean value that’s `true` if the ad network won the attribution, and `false` if the postback represents a qualifying ad impression that didn’t win the attribution.
- `postbackURL`: A URL on your server where you can receive test postbacks.

<a id="discussion"></a>

## Discussion

Create one to six test postbacks to use for unit testing. Call [setPostbacks:error:](../skadtestsession/setpostbacks%28__%29.md) to add the test postbacks to the test session.

## See Also

### Creating test postbacks

- [initWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:didWin:postbackURL:](init%28version_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for a web ad or an in-app ad.
- [winningPostbacksWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:](winningpostbacks%28withversion_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_postbackurl_%29.md): Creates a sequence of test postbacks for an in-app or web ad impression.
