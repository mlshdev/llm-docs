> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/code/misplacedwinnerpostback](https://developer.apple.com/documentation/storekittest/skadtesterror/code/misplacedwinnerpostback)

# SKAdTestError.Code.misplacedWinnerPostback (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A winning postback wasn’t found in the first position, in the testing environment.

## Declaration

```swift
case misplacedWinnerPostback
```

<a id="discussion"></a>

## Discussion

Check that the first postback in the `postbacks` array you provide to [setPostbacks(\_:)](../../skadtestsession/setpostbacks%28__%29.md) is marked as a winning postback, with `didWin` set to `true`. Check that the winning postback is in no other position in the array.

## See Also

### Postback Errors

- [SKAdTestError.Code.excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestError.Code.invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestError.Code.malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [SKAdTestError.Code.missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [SKAdTestError.Code.missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [SKAdTestError.Code.noPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [SKAdTestError.Code.unlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
- [SKAdTestError.Code.excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestError.Code.invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestError.Code.invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestError.Code.invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.

# SKAdTestErrorCodeMisplacedWinnerPostback (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A winning postback wasn’t found in the first position, in the testing environment.

## Declaration

```objectivec
SKAdTestErrorCodeMisplacedWinnerPostback
```

<a id="discussion"></a>

## Discussion

Check that the first postback in the `postbacks` array you provide to [setPostbacks:error:](../../skadtestsession/setpostbacks%28__%29.md) is marked as a winning postback, with `didWin` set to `true`. Check that the winning postback is in no other position in the array.

## See Also

### Postback Errors

- [SKAdTestErrorCodeExcessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestErrorCodeInvalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestErrorCodeInvalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [SKAdTestErrorCodeMalformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [SKAdTestErrorCodeMissingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [SKAdTestErrorCodeMissingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [SKAdTestErrorCodeNoPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [SKAdTestErrorCodeUnlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
- [SKAdTestErrorCodeExcessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [SKAdTestErrorCodeInvalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [SKAdTestErrorCodeInvalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [SKAdTestErrorCodeInvalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
