> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/code/invalidrunneruppostback](https://developer.apple.com/documentation/storekittest/skadtesterror/code/invalidrunneruppostback)

# SKAdTestError.Code.invalidRunnerUpPostback (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A non-winning postback is defined with a version prior to version 3, in the testing environment.

## Declaration

```swift
case invalidRunnerUpPostback
```

<a id="discussion"></a>

## Discussion

Check that all non-winning postback you create with [init(version:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:)](../../skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md) in [SKAdTestPostback](../../skadtestpostback.md) specify version 3 ([version3_0](../../skadtestpostbackversion/version3_0.md)) or later. Non-winning postbacks are available starting in version 3. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## See Also

### Postback Errors

- [SKAdTestError.Code.excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestError.Code.malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [SKAdTestError.Code.missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [SKAdTestError.Code.misplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [SKAdTestError.Code.missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [SKAdTestError.Code.noPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [SKAdTestError.Code.unlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
- [SKAdTestError.Code.excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestError.Code.malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.

# SKAdTestErrorCodeInvalidRunnerUpPostback (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A non-winning postback is defined with a version prior to version 3, in the testing environment.

## Declaration

```objectivec
SKAdTestErrorCodeInvalidRunnerUpPostback
```

<a id="discussion"></a>

## Discussion

Check that all non-winning postback you create with [initWithVersion:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:](../../skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md) in [SKAdTestPostback](../../skadtestpostback.md) specify version 3 ([SKAdTestPostbackVersion3_0](../../skadtestpostbackversion/version3_0.md)) or later. Non-winning postbacks are available starting in version 3. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## See Also

### Postback Errors

- [SKAdTestErrorCodeExcessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestErrorCodeInvalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestErrorCodeMalformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [SKAdTestErrorCodeMissingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [SKAdTestErrorCodeMisplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [SKAdTestErrorCodeMissingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [SKAdTestErrorCodeNoPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [SKAdTestErrorCodeUnlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
- [SKAdTestErrorCodeExcessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestErrorCodeInvalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestErrorCodeMalformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
