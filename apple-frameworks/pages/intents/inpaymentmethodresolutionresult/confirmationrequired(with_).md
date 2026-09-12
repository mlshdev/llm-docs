> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethodresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inpaymentmethodresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with paymentMethodToConfirm: INPaymentMethod?) -> Self
```

## Parameters

- `paymentMethodToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new `INPaymentMethodResolutionResult` object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified object but you want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithPaymentMethodToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithPaymentMethodToConfirm:(INPaymentMethod *) paymentMethodToConfirm;
```

## Parameters

- `paymentMethodToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new `INPaymentMethodResolutionResult` object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified object but you want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [disambiguationWithPaymentMethodsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
- [successWithResolvedPaymentMethod:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
