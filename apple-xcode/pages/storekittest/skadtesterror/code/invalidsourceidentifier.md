> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/code/invalidsourceidentifier](https://developer.apple.com/documentation/storekittest/skadtesterror/code/invalidsourceidentifier)

# SKAdTestError.Code.invalidSourceIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The postback’s identifier isn’t two, three, or four digits.

## Declaration

```swift
case invalidSourceIdentifier
```

<a id="discussion"></a>

## Discussion

A valid postback includes two to four digits of the impression’s [sourceIdentifier](https://developer.apple.com/documentation/storekit/skadimpression/sourceidentifier). For more information about the varying length of source identifiers, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Other Errors

- [SKAdTestError.Code.invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [SKAdTestError.Code.invalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [SKAdTestError.Code.invalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [SKAdTestError.Code.invalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [SKAdTestError.Code.unknownError](unknownerror.md): An unknown error occurred in the testing environment.
- [SKAdTestError.Code.invalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [SKAdTestError.Code.invalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [SKAdTestError.Code.invalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [SKAdTestError.Code.invalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [SKAdTestError.Code.unknownError](unknownerror.md): An unknown error occurred in the testing environment.

# SKAdTestErrorCodeInvalidSourceIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The postback’s identifier isn’t two, three, or four digits.

## Declaration

```objectivec
SKAdTestErrorCodeInvalidSourceIdentifier
```

<a id="discussion"></a>

## Discussion

A valid postback includes two to four digits of the impression’s [sourceIdentifier](https://developer.apple.com/documentation/storekit/skadimpression/sourceidentifier). For more information about the varying length of source identifiers, see [Receiving postbacks in multiple conversion windows](https://developer.apple.com/documentation/storekit/receiving-postbacks-in-multiple-conversion-windows).

## See Also

### Other Errors

- [SKAdTestErrorCodeInvalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [SKAdTestErrorCodeInvalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [SKAdTestErrorCodeInvalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [SKAdTestErrorCodeInvalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [SKAdTestErrorCodeUnknownError](unknownerror.md): An unknown error occurred in the testing environment.
- [SKAdTestErrorCodeInvalidVersion](invalidversion.md): A postback contains an incorrect version number.
- [SKAdTestErrorCodeInvalidImpressionId](invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [SKAdTestErrorCodeInvalidSourceAppAdamId](invalidsourceappadamid.md): The app ID is less than zero.
- [SKAdTestErrorCodeInvalidSourceDomain](invalidsourcedomain.md): The source domain isn’t in the correct format.
- [SKAdTestErrorCodeUnknownError](unknownerror.md): An unknown error occurred in the testing environment.
