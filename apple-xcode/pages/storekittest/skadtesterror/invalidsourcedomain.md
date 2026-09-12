> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/invalidsourcedomain](https://developer.apple.com/documentation/storekittest/skadtesterror/invalidsourcedomain)

# invalidSourceDomain

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The source domain isn’t in the correct format.

## Declaration

```swift
static var invalidSourceDomain: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

For more information about formatting source domains, see the `source_domain` property of [AdImpressionResponse](https://developer.apple.com/documentation/skadnetworkforwebads/adimpressionresponse).

## See Also

### Getting Other Errors

- [invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [invalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [invalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [invalidSourceIdentifier](invalidsourceidentifier.md): The postback’s identifier isn’t two, three, or four digits.
- [unknownError](unknownerror.md): An unknown error occurred in the testing environment.
