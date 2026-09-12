> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/misplacedwinnerpostback](https://developer.apple.com/documentation/storekittest/skadtesterror/misplacedwinnerpostback)

# misplacedWinnerPostback

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A winning postback wasn’t found in the first position, in the testing environment.

## Declaration

```swift
static var misplacedWinnerPostback: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

Check that the first postback in the `postbacks` array you provide to [setPostbacks(\_:)](../skadtestsession/setpostbacks%28__%29.md) is marked as a winning postback, with `didWin` set to `true`. Check that the winning postback is in no other position in the array.

## See Also

### Getting Postback Errors

- [excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [noPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [unlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
