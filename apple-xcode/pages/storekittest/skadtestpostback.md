> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback](https://developer.apple.com/documentation/storekittest/skadtestpostback)

# SKAdTestPostback (Swift)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A test postback that contains ad conversion information in the testing environment.

## Declaration

```swift
class SKAdTestPostback
```

<a id="overview"></a>

## Overview

Use this class to create test postbacks to use for unit testing.

In the production environment, the system creates a postback after a user installs an advertised app. The advertised app is responsible for registering the installation and may update the conversion value. The system sends the postback after a timer expires.

In the testing environment, you can mimic a postback by creating it directly. You control the property values within the postback. Use it to test your app’s ability to register the app installation and update conversion values, and to test your server’s ability to receive postbacks.

## Topics

### Creating test postbacks

- [init(version:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:didWin:postbackURL:)](skadtestpostback/init%28version_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for a web ad or an in-app ad.
- [winningPostbacks(withVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:)](skadtestpostback/winningpostbacks%28withversion_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_postbackurl_%29.md): Creates a sequence of test postbacks for an in-app or web ad impression.
- [init(version:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:)](skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for an in-app ad.

### Getting the Postback Destination

- [postbackURL](skadtestpostback/postbackurl.md): A URL on your server where the testing environment sends test postbacks.

### Getting general information

- [version](skadtestpostback/version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](skadtestpostback/transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](skadtestpostback/postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](skadtestpostback/isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](skadtestpostback/isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.

### Getting advertisement information

- [adNetworkIdentifier](skadtestpostback/adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](skadtestpostback/appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](skadtestpostback/sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceDomain](skadtestpostback/sourcedomain.md): The source of a web ad.
- [sourceIdentifier](skadtestpostback/sourceidentifier.md): A string that identifies an ad campaign.

### Getting conversion information

- [fidelityType](skadtestpostback/fidelitytype.md): An integer that indicates the type of ad impression, StoreKit-rendered or view-through.
- [fineConversionValue](skadtestpostback/fineconversionvalue.md): The specific conversion value of an ad postback.
- [coarseConversionValue](skadtestpostback/coarseconversionvalue.md): A value that indicates a high, medium, or low conversion value for an ad postback.
- [didWin](skadtestpostback/didwin.md): A Boolean value that indicates whether the postback won the attribution.

### Getting information in earlier versions

- [adCampaignIdentifier](skadtestpostback/adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [conversionValue](skadtestpostback/conversionvalue.md): An unsigned 6-bit value that the app or ad network controls.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Ad impression and postback testing

- [Testing and validating ad impression signatures and postbacks for SKAdNetwork](testing-and-validating-ad-impression-signatures-and-postbacks-for-skadnetwork.md): Validate your ad impressions and test your postbacks by creating unit tests using the StoreKit Test framework.
- [SKAdTestSession](skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostbackResponse](skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
- [SKAdTestPostbackVersion](skadtestpostbackversion.md): A constant that indicates the postback version.

# SKAdTestPostback (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A test postback that contains ad conversion information in the testing environment.

## Declaration

```objectivec
@interface SKAdTestPostback : NSObject
```

<a id="overview"></a>

## Overview

Use this class to create test postbacks to use for unit testing.

In the production environment, the system creates a postback after a user installs an advertised app. The advertised app is responsible for registering the installation and may update the conversion value. The system sends the postback after a timer expires.

In the testing environment, you can mimic a postback by creating it directly. You control the property values within the postback. Use it to test your app’s ability to register the app installation and update conversion values, and to test your server’s ability to receive postbacks.

## Topics

### Creating test postbacks

- [initWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:didWin:postbackURL:](skadtestpostback/init%28version_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for a web ad or an in-app ad.
- [winningPostbacksWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:](skadtestpostback/winningpostbacks%28withversion_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_postbackurl_%29.md): Creates a sequence of test postbacks for an in-app or web ad impression.
- [initWithVersion:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:](skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md): Creates a test postback for an in-app ad.

### Getting the Postback Destination

- [postbackURL](skadtestpostback/postbackurl.md): A URL on your server where the testing environment sends test postbacks.

### Getting general information

- [version](skadtestpostback/version.md): The SKAdNetwork version that the postback uses.
- [transactionIdentifier](skadtestpostback/transactionidentifier.md): A unique transaction identifier that the system generates.
- [postbackSequenceIndex](skadtestpostback/postbacksequenceindex.md): The position of this postback among all postbacks for an ad impression.
- [isRegistered](skadtestpostback/isregistered.md): A Boolean value that indicates whether the postback is registered in the testing environment.
- [isRedownload](skadtestpostback/isredownload.md): A Boolean value that indicates whether the user redownloaded and reinstalled the app.

### Getting advertisement information

- [adNetworkIdentifier](skadtestpostback/adnetworkidentifier.md): A string that represents the advertising network’s unique identifier.
- [appStoreItemIdentifier](skadtestpostback/appstoreitemidentifier.md): The item identifier of the app that this ad impression advertises.
- [sourceAppStoreItemIdentifier](skadtestpostback/sourceappstoreitemidentifier.md): The item identifier of the app that displays the ad.
- [sourceDomain](skadtestpostback/sourcedomain.md): The source of a web ad.
- [sourceIdentifier](skadtestpostback/sourceidentifier.md): A string that identifies an ad campaign.

### Getting conversion information

- [fidelityType](skadtestpostback/fidelitytype.md): An integer that indicates the type of ad impression, StoreKit-rendered or view-through.
- [fineConversionValue](skadtestpostback/fineconversionvalue.md): The specific conversion value of an ad postback.
- [coarseConversionValue](skadtestpostback/coarseconversionvalue.md): A value that indicates a high, medium, or low conversion value for an ad postback.
- [didWin](skadtestpostback/didwin.md): A Boolean value that indicates whether the postback won the attribution.

### Getting information in earlier versions

- [adCampaignIdentifier](skadtestpostback/adcampaignidentifier.md): A number that represents the advertising network’s campaign.
- [conversionValue](skadtestpostback/conversionvalue.md): An unsigned 6-bit value that the app or ad network controls.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Ad impression and postback testing

- [SKAdTestSession](skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostbackResponse](skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
- [SKAdTestPostbackVersion](skadtestpostbackversion.md): A constant that indicates the postback version.
