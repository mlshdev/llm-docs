> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatusresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inpaymentstatusresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with paymentStatusToConfirm: INPaymentStatus) -> Self
```

## Parameters

- `paymentStatusToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentStatusResolutionResult](../inpaymentstatusresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value. For example, you might use this method if you cannot search based on the requested payment status but can search based on another value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.

# confirmationRequiredWithPaymentStatusToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithPaymentStatusToConfirm:(INPaymentStatus) paymentStatusToConfirm;
```

## Parameters

- `paymentStatusToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentStatusResolutionResult](../inpaymentstatusresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value. For example, you might use this method if you cannot search based on the requested payment status but can search based on another value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPaymentStatus:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inpaymentstatusresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inpaymentstatusresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
