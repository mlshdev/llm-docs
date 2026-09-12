> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/code/signatureinvalidkey](https://developer.apple.com/documentation/storekittest/skadtesterror/code/signatureinvalidkey)

# SKAdTestError.Code.signatureInvalidKey (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The public key isn’t a valid cryptographic key, in the testing environment.

## Declaration

```swift
case signatureInvalidKey
```

<a id="discussion"></a>

## Discussion

The public key that you provide in the [validate(\_:publicKey:)](../../skadtestsession/validate%28__publickey_%29.md) or [validateImpression(parameters:publicKey:)](../../skadtestsession/validateimpression%28parameters_publickey_%29.md) methods must be a key that uses Elliptic Curve Digital Signature Algorithm (ECDSA) with a prime256v1 curve. For more information about the key, see [Registering an ad network](https://developer.apple.com/documentation/storekit/registering-an-ad-network).

## See Also

### Signature Errors

- [SKAdTestError.Code.missingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestError.Code.signatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
- [SKAdTestError.Code.signatureMissingAdNetworkId](signaturemissingadnetworkid.md): The signature is missing an ad network identifier, in the testing environment.
- [SKAdTestError.Code.signatureMissingAppAdamId](signaturemissingappadamid.md): The signature is missing the app item identifier for the advertised app, in the testing environment.
- [SKAdTestError.Code.signatureMissingFidelityType](signaturemissingfidelitytype.md): The signature is missing the fidelity type, in the testing environment.
- [SKAdTestError.Code.signatureMissingNonce](signaturemissingnonce.md): The signature is missing the nonce, in the testing environment.
- [SKAdTestError.Code.signatureMissingSourceAppAdamId](signaturemissingsourceappadamid.md): The signature is missing the source app item identifier, in the testing environment.
- [SKAdTestError.Code.signatureMissingSourceDomain](signaturemissingsourcedomain.md): The signature is missing the source domain, in the testing environment.
- [SKAdTestError.Code.signatureMissingSourceIdentifier](signaturemissingsourceidentifier.md): The signature is missing the source identifier, in the testing environment.
- [SKAdTestError.Code.signatureMissingTimestamp](signaturemissingtimestamp.md): The signature is missing a timestamp, in the testing environment.
- [SKAdTestError.Code.signatureUnknownError](signatureunknownerror.md): An unknown error occurred with the signature in the testing environment.
- [SKAdTestError.Code.signatureVerificationFailed](signatureverificationfailed.md): The signature verification failed in the testing environment.
- [SKAdTestError.Code.missingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestError.Code.signatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
- [SKAdTestError.Code.signatureMissingAdNetworkId](signaturemissingadnetworkid.md): The signature is missing an ad network identifier, in the testing environment.

# SKAdTestErrorCodeSignatureInvalidKey (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The public key isn’t a valid cryptographic key, in the testing environment.

## Declaration

```objectivec
SKAdTestErrorCodeSignatureInvalidKey
```

<a id="discussion"></a>

## Discussion

The public key that you provide in the [validateImpression:publicKey:error:](../../skadtestsession/validate%28__publickey_%29.md) or [validateImpressionWithParameters:publicKey:error:](../../skadtestsession/validateimpression%28parameters_publickey_%29.md) methods must be a key that uses Elliptic Curve Digital Signature Algorithm (ECDSA) with a prime256v1 curve. For more information about the key, see [Registering an ad network](https://developer.apple.com/documentation/storekit/registering-an-ad-network).

## See Also

### Signature Errors

- [SKAdTestErrorCodeMissingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestErrorCodeSignatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingAdNetworkId](signaturemissingadnetworkid.md): The signature is missing an ad network identifier, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingAppAdamId](signaturemissingappadamid.md): The signature is missing the app item identifier for the advertised app, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingFidelityType](signaturemissingfidelitytype.md): The signature is missing the fidelity type, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingNonce](signaturemissingnonce.md): The signature is missing the nonce, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingSourceAppAdamId](signaturemissingsourceappadamid.md): The signature is missing the source app item identifier, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingSourceDomain](signaturemissingsourcedomain.md): The signature is missing the source domain, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingSourceIdentifier](signaturemissingsourceidentifier.md): The signature is missing the source identifier, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingTimestamp](signaturemissingtimestamp.md): The signature is missing a timestamp, in the testing environment.
- [SKAdTestErrorCodeSignatureUnknownError](signatureunknownerror.md): An unknown error occurred with the signature in the testing environment.
- [SKAdTestErrorCodeSignatureVerificationFailed](signatureverificationfailed.md): The signature verification failed in the testing environment.
- [SKAdTestErrorCodeMissingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestErrorCodeSignatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
- [SKAdTestErrorCodeSignatureMissingAdNetworkId](signaturemissingadnetworkid.md): The signature is missing an ad network identifier, in the testing environment.
