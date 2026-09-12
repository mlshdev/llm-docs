> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/invalidimpressionid](https://developer.apple.com/documentation/storekittest/skadtesterror/invalidimpressionid)

# invalidImpressionId

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The impression ID isn’t a valid UUID string.

## Declaration

```swift
static var invalidImpressionId: SKAdTestError.Code { get }
```

## See Also

### Getting Other Errors

- [invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [invalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [invalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [invalidSourceIdentifier](invalidsourceidentifier.md): The postback’s identifier isn’t two, three, or four digits.
- [unknownError](unknownerror.md): An unknown error occurred in the testing environment.
