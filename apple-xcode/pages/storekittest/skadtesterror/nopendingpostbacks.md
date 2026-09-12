> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/nopendingpostbacks](https://developer.apple.com/documentation/storekittest/skadtesterror/nopendingpostbacks)

# noPendingPostbacks

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The test session doesn’t have any pending postbacks to send.

## Declaration

```swift
static var noPendingPostbacks: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

This error occurs if you call [flushPostbacks(responses:)](../skadtestsession/flushpostbacks%28responses_%29.md) before adding a postback to the test session ([SKAdTestSession](../skadtestsession.md)). To avoid this error, call [SKAdTestPostback](../skadtestpostback.md) to create a test postback, and [setPostbacks(\_:)](../skadtestsession/setpostbacks%28__%29.md) to add the test postback to the test session before calling [flushPostbacks(responses:)](../skadtestsession/flushpostbacks%28responses_%29.md).

## See Also

### Getting Postback Errors

- [excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [invalidWinningPostbackCount](invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [misplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [unlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
