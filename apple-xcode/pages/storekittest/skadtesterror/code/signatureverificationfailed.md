> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtesterror/code/signatureverificationfailed](https://developer.apple.com/documentation/storekittest/skadtesterror/code/signatureverificationfailed)

# SKAdTestError.Code.signatureVerificationFailed (Swift)

**Framework:** StoreKit Test  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The signature verification failed in the testing environment.

## Declaration

```swift
case signatureVerificationFailed
```

<a id="discussion"></a>

## Discussion

The ad impression signature isn’t valid. Check the following:

- You use the same cryptographic key-pair when you sign the ad impression and validate it in the testing environment. If you use different key pairs in these two steps, signature verification will fail. For more information about signing the ad, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads). For more information about validating the ad impression in the testing environment, see [validate(\_:publicKey:)](../../skadtestsession/validate%28__publickey_%29.md) and [validateImpression(parameters:publicKey:)](../../skadtestsession/validateimpression%28parameters_publickey_%29.md).
- You use the correct signature instructions for the SKAdNetwork version that your app uses.For more information about SKAdNetwork versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).
- Your signature contains all the parameters in the correct order for the version you’re using.
- Your signature uses the correct separator character.

For more information about signatures, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads).

## See Also

### Signature Errors

- [SKAdTestError.Code.missingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestError.Code.signatureInvalidKey](signatureinvalidkey.md): The public key isn’t a valid cryptographic key, in the testing environment.
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
- [SKAdTestError.Code.missingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestError.Code.signatureInvalidKey](signatureinvalidkey.md): The public key isn’t a valid cryptographic key, in the testing environment.
- [SKAdTestError.Code.signatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.

# SKAdTestErrorCodeSignatureVerificationFailed (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The signature verification failed in the testing environment.

## Declaration

```objectivec
SKAdTestErrorCodeSignatureVerificationFailed
```

<a id="discussion"></a>

## Discussion

The ad impression signature isn’t valid. Check the following:

- You use the same cryptographic key-pair when you sign the ad impression and validate it in the testing environment. If you use different key pairs in these two steps, signature verification will fail. For more information about signing the ad, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads). For more information about validating the ad impression in the testing environment, see [validateImpression:publicKey:error:](../../skadtestsession/validate%28__publickey_%29.md) and [validateImpressionWithParameters:publicKey:error:](../../skadtestsession/validateimpression%28parameters_publickey_%29.md).
- You use the correct signature instructions for the SKAdNetwork version that your app uses.For more information about SKAdNetwork versions, see [SKAdNetwork release notes](https://developer.apple.com/documentation/storekit/skadnetwork-release-notes).
- Your signature contains all the parameters in the correct order for the version you’re using.
- Your signature uses the correct separator character.

For more information about signatures, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads).

## See Also

### Signature Errors

- [SKAdTestErrorCodeMissingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestErrorCodeSignatureInvalidKey](signatureinvalidkey.md): The public key isn’t a valid cryptographic key, in the testing environment.
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
- [SKAdTestErrorCodeMissingSignature](missingsignature.md): The signature for the ad is missing, in the testing environment.
- [SKAdTestErrorCodeSignatureInvalidKey](signatureinvalidkey.md): The public key isn’t a valid cryptographic key, in the testing environment.
- [SKAdTestErrorCodeSignatureInvalidOrder](signatureinvalidorder.md): The order of the parameters in the signature is invalid, in the testing environment.
