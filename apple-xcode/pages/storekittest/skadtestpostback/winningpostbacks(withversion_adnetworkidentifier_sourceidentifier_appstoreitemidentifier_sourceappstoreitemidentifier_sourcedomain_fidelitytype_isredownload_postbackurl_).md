> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/winningpostbacks(withversion:adnetworkidentifier:sourceidentifier:appstoreitemidentifier:sourceappstoreitemidentifier:sourcedomain:fidelitytype:isredownload:postbackurl:)](https://developer.apple.com/documentation/storekittest/skadtestpostback/winningpostbacks(withversion:adnetworkidentifier:sourceidentifier:appstoreitemidentifier:sourceappstoreitemidentifier:sourcedomain:fidelitytype:isredownload:postbackurl:))

# winningPostbacks(withVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Creates a sequence of test postbacks for an in-app or web ad impression.

## Declaration

```swift
class func winningPostbacks(withVersion version: SKAdTestPostbackVersion, adNetworkIdentifier: String, sourceIdentifier: String, appStoreItemIdentifier: Int, sourceAppStoreItemIdentifier: Int, sourceDomain: String?, fidelityType: Int, isRedownload: Bool, postbackURL: String) -> [SKAdTestPostback]?
```

## Parameters

- `version`: [SKAdTestPostbackVersion](../skadtestpostbackversion.md), the SKAdNetwork version. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).
- `adNetworkIdentifier`: Your ad network identifier. For the test environment, you may use any lowercased value. You must use the same value to verify the signature after you receive the postback on your server. Also, use the same ad network identifier in the `Info.plist` of the source app in the testing environment.
- `sourceIdentifier`: Four digits that represent the ad campaign.
- `appStoreItemIdentifier`: The App Store item identifier of the advertised app.
- `sourceAppStoreItemIdentifier`: The App Store item identifier of the app that displays the ad. This value is `0` in the testing environment.
- `sourceDomain`: The domain of the website that displays the ad.
- `fidelityType`: A value of `0` indicates a view-through ad presentation; a value of `1` indicates a StoreKit-rendered ad or a web ad.
- `isRedownload`: SKAdNetwork version 2.0 and later. In the production environment, a Boolean flag that indicates that the customer redownloaded and reinstalled the app when the value is `true`.
- `postbackURL`: A URL on your server where you can receive test postbacks.

<a id="return-value"></a>

## Return Value

An array containing a winning postback for each conversion window.

<a id="discussion"></a>

## Discussion

This method provides parameters to create test postbacks for either an in-app ad or a web ad. To create test postbacks for an in-app ad, provide an empty string for `sourceDomain`.

For more information about the conversion windows corresponding to each postback, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Creating test postbacks

- [init(version:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:didWin:postbackURL:)](init%28version_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for a web ad or an in-app ad.
- [init(version:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:)](init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for an in-app ad.

# winningPostbacksWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Creates a sequence of test postbacks for an in-app or web ad impression.

## Declaration

```objectivec
+ (NSArray<SKAdTestPostback *> *) winningPostbacksWithVersion:(SKAdTestPostbackVersion) version adNetworkIdentifier:(NSString *) adNetworkIdentifier sourceIdentifier:(NSString *) sourceIdentifier appStoreItemIdentifier:(NSInteger) appStoreItemIdentifier sourceAppStoreItemIdentifier:(NSInteger) sourceAppStoreItemIdentifier sourceDomain:(NSString *) sourceDomain fidelityType:(NSInteger) fidelityType isRedownload:(BOOL) isRedownload postbackURL:(NSString *) postbackURL;
```

## Parameters

- `version`: [SKAdTestPostbackVersion](../skadtestpostbackversion.md), the SKAdNetwork version. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).
- `adNetworkIdentifier`: Your ad network identifier. For the test environment, you may use any lowercased value. You must use the same value to verify the signature after you receive the postback on your server. Also, use the same ad network identifier in the `Info.plist` of the source app in the testing environment.
- `sourceIdentifier`: Four digits that represent the ad campaign.
- `appStoreItemIdentifier`: The App Store item identifier of the advertised app.
- `sourceAppStoreItemIdentifier`: The App Store item identifier of the app that displays the ad. This value is `0` in the testing environment.
- `sourceDomain`: The domain of the website that displays the ad.
- `fidelityType`: A value of `0` indicates a view-through ad presentation; a value of `1` indicates a StoreKit-rendered ad or a web ad.
- `isRedownload`: SKAdNetwork version 2.0 and later. In the production environment, a Boolean flag that indicates that the customer redownloaded and reinstalled the app when the value is `true`.
- `postbackURL`: A URL on your server where you can receive test postbacks.

<a id="return-value"></a>

## Return Value

An array containing a winning postback for each conversion window.

<a id="discussion"></a>

## Discussion

This method provides parameters to create test postbacks for either an in-app ad or a web ad. To create test postbacks for an in-app ad, provide an empty string for `sourceDomain`.

For more information about the conversion windows corresponding to each postback, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Creating test postbacks

- [initWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:didWin:postbackURL:](init%28version_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for a web ad or an in-app ad.
- [initWithVersion:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:](init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for an in-app ad.
