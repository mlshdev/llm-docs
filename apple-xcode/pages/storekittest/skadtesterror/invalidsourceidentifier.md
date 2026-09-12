> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/invalidsourceidentifier](https://developer.apple.com/documentation/storekittest/skadtesterror/invalidsourceidentifier)

# invalidSourceIdentifier

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The postback’s identifier isn’t two, three, or four digits.

## Declaration

```swift
static var invalidSourceIdentifier: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

A valid postback includes two to four digits of the impression’s [sourceIdentifier](https://developer.apple.com/documentation/storekit/skadimpression/sourceidentifier). For more information about the varying length of source identifiers, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Getting Other Errors

- [invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [invalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [invalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [invalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [unknownError](unknownerror.md): An unknown error occurred in the testing environment.
