> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethodresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inpaymentmethodresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with paymentMethodsToDisambiguate: [INPaymentMethod]) -> Self
```

## Parameters

- `paymentMethodsToDisambiguate`: An array of [INPaymentMethod](../inpaymentmethod.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new `INPaymentMethodResolutionResult` object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there’s more one value that might match the given parameter. Siri asks the user to select from among the objects you provide.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

# disambiguationWithPaymentMethodsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithPaymentMethodsToDisambiguate:(NSArray<INPaymentMethod *> *) paymentMethodsToDisambiguate;
```

## Parameters

- `paymentMethodsToDisambiguate`: An array of [INPaymentMethod](../inpaymentmethod.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new `INPaymentMethodResolutionResult` object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there’s more one value that might match the given parameter. Siri asks the user to select from among the objects you provide.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithPaymentMethodToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedPaymentMethod:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
