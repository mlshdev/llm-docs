> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/signaturemissingadnetworkid](https://developer.apple.com/documentation/storekittest/skadtesterror/signaturemissingadnetworkid)

# signatureMissingAdNetworkId

**Framework:** StoreKit Test  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The signature is missing an ad network identifier, in the testing environment.

## Declaration

```swift
static var signatureMissingAdNetworkId: SKAdTestError.Code { get }
```

<a id="discussion"></a>

## Discussion

Be sure to include an ad network identifier when you create and validate an ad impression in the testing environment.

## See Also

### Getting Signature Errors

- [missingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [signatureInvalidKey](signatureinvalidkey.md): The public key isn’t a valid cryptographic key, in the testing environment.
- [signatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
- [signatureMissingAppAdamId](signaturemissingappadamid.md): The signature is missing the app item identifier for the advertised app, in the testing environment.
- [signatureMissingFidelityType](signaturemissingfidelitytype.md): The signature is missing the fidelity type, in the testing environment.
- [signatureMissingNonce](signaturemissingnonce.md): The signature is missing the nonce, in the testing environment.
- [signatureMissingSourceAppAdamId](signaturemissingsourceappadamid.md): The signature is missing the source app item identifier, in the testing environment.
- [signatureMissingSourceDomain](signaturemissingsourcedomain.md): The signature is missing the source domain, in the testing environment.
- [signatureMissingSourceIdentifier](signaturemissingsourceidentifier.md): The signature is missing the source identifier, in the testing environment.
- [signatureMissingTimestamp](signaturemissingtimestamp.md): The signature is missing a timestamp, in the testing environment.
- [signatureUnknownError](signatureunknownerror.md): An unknown error occurred with the signature in the testing environment.
- [signatureVerificationFailed](signatureverificationfailed.md): The signature verification failed in the testing environment.
