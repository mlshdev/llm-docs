> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession/validateimpression(parameters:publickey:)](https://developer.apple.com/documentation/storekittest/skadtestsession/validateimpression(parameters:publickey:))

# validateImpression(parameters:publicKey:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Validates an impression for a StoreKit-rendered ad.

## Declaration

```swift
func validateImpression(parameters: [String : Any], publicKey: String) throws
```

## Parameters

- `parameters`: A dictionary containing version-specific key values that associate an app installation with an ad campaign for StoreKit-rendered ads. See [Ad network install-validation keys](https://developer.apple.com/documentation/storekit/ad-network-install-validation-keys) for the list of required keys.
- `publicKey`: The public key of the elliptic curve cryptographic key pair you used to generate the signature for the ad impression.

<a id="discussion"></a>

## Discussion

The cryptographic key pair you use for testing may be a different key pair than you use in production. For testing, use keys from the same key pair when you sign the ad impression and when you call [validateImpression(parameters:publicKey:)](validateimpression%28parameters_publickey_%29.md).

For more information about signing ad impressions, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads).

## See Also

### Validating impressions

- [validate(\_:publicKey:)](validate%28__publickey_%29.md): Validates an impression for a view-through ad.
- [validateWebAdImpressionPayload(\_:publicKey:)](validatewebadimpressionpayload%28__publickey_%29.md): Validates an impression for a web ad.

# validateImpressionWithParameters:publicKey:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Validates an impression for a StoreKit-rendered ad.

## Declaration

```objectivec
- (BOOL) validateImpressionWithParameters:(NSDictionary<NSString *,id> *) parameters publicKey:(NSString *) publicKey error:(NSError **) error;
```

## Parameters

- `parameters`: A dictionary containing version-specific key values that associate an app installation with an ad campaign for StoreKit-rendered ads. See [Ad network install-validation keys](https://developer.apple.com/documentation/storekit/ad-network-install-validation-keys) for the list of required keys.
- `publicKey`: The public key of the elliptic curve cryptographic key pair you used to generate the signature for the ad impression.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns `true` if the test impression is valid. If the test impression is invalid, it returns `false` and sets the appropriate error in the error pointer.

<a id="discussion"></a>

## Discussion

The cryptographic key pair you use for testing may be a different key pair than you use in production. For testing, use keys from the same key pair when you sign the ad impression and when you call [validateImpressionWithParameters:publicKey:error:](validateimpression%28parameters_publickey_%29.md).

For more information about signing ad impressions, see [Signing and providing ads](https://developer.apple.com/documentation/storekit/signing-and-providing-ads).

## See Also

### Validating impressions

- [validateImpression:publicKey:error:](validate%28__publickey_%29.md): Validates an impression for a view-through ad.
- [validateWebAdImpressionPayload:publicKey:error:](validatewebadimpressionpayload%28__publickey_%29.md): Validates an impression for a web ad.
