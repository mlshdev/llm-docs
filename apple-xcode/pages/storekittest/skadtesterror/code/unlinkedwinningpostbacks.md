> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/code/unlinkedwinningpostbacks](https://developer.apple.com/documentation/storekittest/skadtesterror/code/unlinkedwinningpostbacks)

# SKAdTestError.Code.unlinkedWinningPostbacks (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The postbacks aren’t correctly related to one another.

## Declaration

```swift
case unlinkedWinningPostbacks
```

<a id="discussion"></a>

## Discussion

To create multiple winning postbacks for testing multiple conversion windows, use the [winningPostbacks(withVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:)](../../skadtestpostback/winningpostbacks%28withversion_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_postbackurl_%29.md) method.

## See Also

### Postback Errors

- [SKAdTestError.Code.excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestError.Code.invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestError.Code.malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [SKAdTestError.Code.missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [SKAdTestError.Code.misplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [SKAdTestError.Code.missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [SKAdTestError.Code.noPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [SKAdTestError.Code.excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestError.Code.invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.

# SKAdTestErrorCodeUnlinkedWinningPostbacks (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The postbacks aren’t correctly related to one another.

## Declaration

```objectivec
SKAdTestErrorCodeUnlinkedWinningPostbacks
```

<a id="discussion"></a>

## Discussion

To create multiple winning postbacks for testing multiple conversion windows, use the [winningPostbacksWithVersion:adNetworkIdentifier:sourceIdentifier:appStoreItemIdentifier:sourceAppStoreItemIdentifier:sourceDomain:fidelityType:isRedownload:postbackURL:](../../skadtestpostback/winningpostbacks%28withversion_adnetworkidentifier_sourceidentifier_appstoreitemidentifier_sourceappstoreitemidentifier_sourcedomain_fidelitytype_isredownload_postbackurl_%29.md) method.

## See Also

### Postback Errors

- [SKAdTestErrorCodeExcessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestErrorCodeInvalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestErrorCodeInvalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestErrorCodeMalformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [SKAdTestErrorCodeMissingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [SKAdTestErrorCodeMisplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [SKAdTestErrorCodeMissingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [SKAdTestErrorCodeNoPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [SKAdTestErrorCodeExcessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestErrorCodeInvalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestErrorCodeInvalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
