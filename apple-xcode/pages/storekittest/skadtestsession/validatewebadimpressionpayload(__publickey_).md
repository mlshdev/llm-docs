> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession/validatewebadimpressionpayload(_:publickey:)](https://developer.apple.com/documentation/storekittest/skadtestsession/validatewebadimpressionpayload(_:publickey:))

# validateWebAdImpressionPayload(\_:publicKey:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Validates an impression for a web ad.

## Declaration

```swift
func validateWebAdImpressionPayload(_ impressionData: Data, publicKey: String) throws
```

## See Also

### Validating impressions

- [validate(\_:publicKey:)](validate%28__publickey_%29.md): Validates an impression for a view-through ad.
- [validateImpression(parameters:publicKey:)](validateimpression%28parameters_publickey_%29.md): Validates an impression for a StoreKit-rendered ad.

# validateWebAdImpressionPayload:publicKey:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Validates an impression for a web ad.

## Declaration

```objectivec
- (BOOL) validateWebAdImpressionPayload:(NSData *) impressionData publicKey:(NSString *) publicKey error:(NSError **) error;
```

## See Also

### Validating impressions

- [validateImpression:publicKey:error:](validate%28__publickey_%29.md): Validates an impression for a view-through ad.
- [validateImpressionWithParameters:publicKey:error:](validateimpression%28parameters_publickey_%29.md): Validates an impression for a StoreKit-rendered ad.
