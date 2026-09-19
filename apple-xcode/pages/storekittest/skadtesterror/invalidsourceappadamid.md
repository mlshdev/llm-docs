> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekittest/skadtesterror/invalidsourceappadamid

# invalidSourceAppAdamId

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The app ID is less than zero.

## Declaration

```swift
static var invalidSourceAppAdamId: SKAdTestError.Code { get }
```

## See Also

### Getting Other Errors

- [invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [invalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [invalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [invalidSourceIdentifier](invalidsourceidentifier.md): The postback’s identifier isn’t two, three, or four digits.
- [unknownError](unknownerror.md): An unknown error occurred in the testing environment.
