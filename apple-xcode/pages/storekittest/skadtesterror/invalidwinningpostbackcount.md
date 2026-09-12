> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/invalidwinningpostbackcount](https://developer.apple.com/documentation/storekittest/skadtesterror/invalidwinningpostbackcount)

# invalidWinningPostbackCount

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The number of winning postbacks isn’t valid, in the testing environment.

## Declaration

```swift
static var invalidWinningPostbackCount: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

A valid session has one or three winning postbacks.

## See Also

### Getting Postback Errors

- [excessivePostbacks](excessivepostbacks.md): Too many postbacks submitted to the test session.
- [invalidConversionValue](invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [invalidPostbackURL](invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [invalidRunnerUpPostback](invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [malformedPostbacks](malformedpostbacks.md): The postback in the testing environment is malformed.
- [missingPostbacks](missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [misplacedWinnerPostback](misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [missingWinningPostback](missingwinningpostback.md): The testing environment is missing a winning postback.
- [noPendingPostbacks](nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [unlinkedWinningPostbacks](unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.
