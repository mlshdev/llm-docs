> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/unknownerror](https://developer.apple.com/documentation/storekittest/skadtesterror/unknownerror)

# unknownError

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An unknown error occurred in the testing environment.

## Declaration

```swift
static var unknownError: SKAdTestError.Code { get }
```

## See Also

### Getting Other Errors

- [invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [invalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [invalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [invalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [invalidSourceIdentifier](invalidsourceidentifier.md): The postback’s identifier isn’t two, three, or four digits.
