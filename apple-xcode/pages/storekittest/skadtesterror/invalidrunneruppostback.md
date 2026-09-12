> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/invalidrunneruppostback](https://developer.apple.com/documentation/storekittest/skadtesterror/invalidrunneruppostback)

# invalidRunnerUpPostback

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A non-winning postback is defined with a version prior to version 3, in the testing environment.

## Declaration

```swift
static var invalidRunnerUpPostback: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

Check that all non-winning postback you create with [init(version:adNetworkIdentifier:adCampaignIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:conversionValue:fidelityType:isRedownload:didWin:postbackURL:)](../skadtestpostback/init%28version_adnetworkidentifier_adcampaignidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_conversionvalue_fidelitytype_isredownload_didwin_postbackurl_%29.md) in [SKAdTestPostback](../skadtestpostback.md) specify version 3 ([version3_0](../skadtestpostbackversion/version3_0.md)) or later. Non-winning postbacks are available starting in version 3. For more information about versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).

## See Also

### Getting Postback Errors

- [excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [misplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [noPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [unlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
