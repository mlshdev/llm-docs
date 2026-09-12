> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayeeresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inbillpayeeresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func disambiguation(with billPayeesToDisambiguate: [INBillPayee]) -> Self
```

## Parameters

- `billPayeesToDisambiguate`: An array of payee objects from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INBillPayeeResolutionResult](../inbillpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the payee uniquely and need the user to select from a limited set of possible options.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithBillPayeesToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) disambiguationWithBillPayeesToDisambiguate:(NSArray<INBillPayee *> *) billPayeesToDisambiguate;
```

## Parameters

- `billPayeesToDisambiguate`: An array of payee objects from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INBillPayeeResolutionResult](../inbillpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the payee uniquely and need the user to select from a limited set of possible options.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedBillPayee:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithBillPayeeToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
