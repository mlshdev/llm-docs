> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatusresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inpaymentstatusresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```swift
class func success(with resolvedPaymentStatus: INPaymentStatus) -> Self
```

## Parameters

- `resolvedPaymentStatus`: The value that resolves the requested value of the intent. You may specify a different payment status if your app treats that value as equivalent to the status requested by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentStatusResolutionResult](../inpaymentstatusresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to perform a search based on the requested payment status.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.

# successWithResolvedPaymentStatus: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```objectivec
+ (instancetype) successWithResolvedPaymentStatus:(INPaymentStatus) resolvedPaymentStatus;
```

## Parameters

- `resolvedPaymentStatus`: The value that resolves the requested value of the intent. You may specify a different payment status if your app treats that value as equivalent to the status requested by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentStatusResolutionResult](../inpaymentstatusresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to perform a search based on the requested payment status.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithPaymentStatusToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inpaymentstatusresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inpaymentstatusresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
