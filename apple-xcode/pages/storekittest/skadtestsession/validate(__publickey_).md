> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession/validate(_:publickey:)](https://developer.apple.com/documentation/storekittest/skadtestsession/validate(_:publickey:))

# validate(\_:publicKey:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Validates an impression for a view-through ad.

## Declaration

```swift
func validate(_ impression: SKAdImpression, publicKey: String) throws
```

## Parameters

- `impression`: An [SKAdImpression](https://developer.apple.com/documentation/storekit/skadimpression) instance, representing your ad impression.
- `publicKey`: The public key of the elliptic curve cryptographic key pair you used to generate the signature for the ad impression.

<a id="discussion"></a>

## Discussion

The cryptographic key pair you use for testing may be a different key pair than you use in production. For testing, use keys from the same key pair to sign the ad impression for testing and call [validate(\_:publicKey:)](validate%28__publickey_%29.md).

For more information about signing ad impressions, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads).

## See Also

### Validating impressions

- [validateImpression(parameters:publicKey:)](validateimpression%28parameters_publickey_%29.md): Validates an impression for a StoreKit-rendered ad.
- [validateWebAdImpressionPayload(\_:publicKey:)](validatewebadimpressionpayload%28__publickey_%29.md): Validates an impression for a web ad.

# validateImpression:publicKey:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Validates an impression for a view-through ad.

## Declaration

```objectivec
- (BOOL) validateImpression:(SKAdImpression *) impression publicKey:(NSString *) publicKey error:(NSError **) error;
```

## Parameters

- `impression`: An [SKAdImpression](https://developer.apple.com/documentation/storekit/skadimpression) instance, representing your ad impression.
- `publicKey`: The public key of the elliptic curve cryptographic key pair you used to generate the signature for the ad impression.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns `true` if the test impression is valid. If the test impression is invalid, it returns `false` and sets the appropriate error in the error pointer.

<a id="discussion"></a>

## Discussion

The cryptographic key pair you use for testing may be a different key pair than you use in production. For testing, use keys from the same key pair to sign the ad impression for testing and call [validateImpression:publicKey:error:](validate%28__publickey_%29.md).

For more information about signing ad impressions, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads).

## See Also

### Validating impressions

- [validateImpressionWithParameters:publicKey:error:](validateimpression%28parameters_publickey_%29.md): Validates an impression for a StoreKit-rendered ad.
- [validateWebAdImpressionPayload:publicKey:error:](validatewebadimpressionpayload%28__publickey_%29.md): Validates an impression for a web ad.
