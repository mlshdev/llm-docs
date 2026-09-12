> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror](https://developer.apple.com/documentation/storekittest/skadtesterror)

# SKAdTestError

**Framework:** StoreKit Test  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An error the testing environment returns for SKAdNetwork testing errors.

## Declaration

```swift
struct SKAdTestError
```

<a id="overview"></a>

## Overview

Unit tests that call [setPostbacks(\_:)](skadtestsession/setpostbacks%28__%29.md), [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md), [validateImpression(parameters:publicKey:)](skadtestsession/validateimpression%28parameters_publickey_%29.md), and [validate(\_:publicKey:)](skadtestsession/validate%28__publickey_%29.md), can throw [SKAdTestError](skadtesterror.md) errors.

When you call the unit test methods [validateImpression(parameters:publicKey:)](skadtestsession/validateimpression%28parameters_publickey_%29.md), [validate(\_:publicKey:)](skadtestsession/validate%28__publickey_%29.md), or [validateWebAdImpressionPayload(\_:publicKey:)](skadtestsession/validatewebadimpressionpayload%28__publickey_%29.md) to validate your ad impression, the system may return signature-related errors.

When you call [setPostbacks(\_:)](skadtestsession/setpostbacks%28__%29.md) and [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md), you may get postback-related errors.

## Topics

### Getting Signature Errors

- [missingSignature](skadtesterror/missingsignature.md): The signature for the ad is missing, in the testing environment.
- [signatureInvalidKey](skadtesterror/signatureinvalidkey.md): The public key isn’t a valid cryptographic key, in the testing environment.
- [signatureInvalidOrder](skadtesterror/signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
- [signatureMissingAdNetworkId](skadtesterror/signaturemissingadnetworkid.md): The signature is missing an ad network identifier, in the testing environment.
- [signatureMissingAppAdamId](skadtesterror/signaturemissingappadamid.md): The signature is missing the app item identifier for the advertised app, in the testing environment.
- [signatureMissingFidelityType](skadtesterror/signaturemissingfidelitytype.md): The signature is missing the fidelity type, in the testing environment.
- [signatureMissingNonce](skadtesterror/signaturemissingnonce.md): The signature is missing the nonce, in the testing environment.
- [signatureMissingSourceAppAdamId](skadtesterror/signaturemissingsourceappadamid.md): The signature is missing the source app item identifier, in the testing environment.
- [signatureMissingSourceDomain](skadtesterror/signaturemissingsourcedomain.md): The signature is missing the source domain, in the testing environment.
- [signatureMissingSourceIdentifier](skadtesterror/signaturemissingsourceidentifier.md): The signature is missing the source identifier, in the testing environment.
- [signatureMissingTimestamp](skadtesterror/signaturemissingtimestamp.md): The signature is missing a timestamp, in the testing environment.
- [signatureUnknownError](skadtesterror/signatureunknownerror.md): An unknown error occurred with the signature in the testing environment.
- [signatureVerificationFailed](skadtesterror/signatureverificationfailed.md): The signature verification failed in the testing environment.

### Getting Postback Errors

- [excessivePostbacks](skadtesterror/excessivepostbacks.md): Too many postbacks submitted to the test session.
- [invalidConversionValue](skadtesterror/invalidconversionvalue.md): The conversion value isn’t valid, in the testing environment.
- [invalidPostbackURL](skadtesterror/invalidpostbackurl.md): The URL for the postback isn’t valid, in the testing environment.
- [invalidRunnerUpPostback](skadtesterror/invalidrunneruppostback.md): A non-winning postback is defined with a version prior to version 3, in the testing environment.
- [invalidWinningPostbackCount](skadtesterror/invalidwinningpostbackcount.md): The number of winning postbacks isn’t valid, in the testing environment.
- [malformedPostbacks](skadtesterror/malformedpostbacks.md): The postback in the testing environment is malformed.
- [missingPostbacks](skadtesterror/missingpostbacks.md): The testing environment doesn’t have any postbacks.
- [misplacedWinnerPostback](skadtesterror/misplacedwinnerpostback.md): A winning postback wasn’t found in the first position, in the testing environment.
- [missingWinningPostback](skadtesterror/missingwinningpostback.md): The testing environment is missing a winning postback.
- [noPendingPostbacks](skadtesterror/nopendingpostbacks.md): The test session doesn’t have any pending postbacks to send.
- [unlinkedWinningPostbacks](skadtesterror/unlinkedwinningpostbacks.md): The postbacks aren’t correctly related to one another.

### Getting Other Errors

- [invalidVersion](skadtesterror/invalidversion.md): A postback contains an incorrect version number.
- [invalidImpressionId](skadtesterror/invalidimpressionid.md): The impression ID isn’t a valid UUID string.
- [invalidSourceAppAdamId](skadtesterror/invalidsourceappadamid.md): The app ID is less than zero.
- [invalidSourceDomain](skadtesterror/invalidsourcedomain.md): The source domain isn’t in the correct format.
- [invalidSourceIdentifier](skadtesterror/invalidsourceidentifier.md): The postback’s identifier isn’t two, three, or four digits.
- [unknownError](skadtesterror/unknownerror.md): An unknown error occurred in the testing environment.

### Getting Older Errors

These errors can occur in version 3 and earlier.

- [invalidCampaignId](skadtesterror/invalidcampaignid.md): The campaign ID isn’t an integer between one and one hundred.
- [signatureMissingCampaignId](skadtesterror/signaturemissingcampaignid.md): The signature is missing the campaign identifier, in the testing environment.
- [conflictingSource](skadtesterror/conflictingsource.md): This error code is unused.

### Initializing the Error Objects

- [SKAdTestError.Code](skadtesterror/code.md): Enumerated error codes related to ad network testing in the testing environment.

### Type Properties

- [errorDomain](skadtesterror/errordomain.md): The domain of the error.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Ad impression and postback errors

- [SKAdTestErrorDomain](skadtesterrordomain.md): A string that identifies the error domain for SKAdNetwork testing in the testing environment.
