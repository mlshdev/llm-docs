> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayeeresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inbillpayeeresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Creates an object whose resolution involves the successful matching of the specified value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func success(with resolvedBillPayee: INBillPayee) -> Self
```

## Parameters

- `resolvedBillPayee`: The value that resolves the requested value of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INBillPayeeResolutionResult](../inbillpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to resolve the parameter successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedBillPayee: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Creates an object whose resolution involves the successful matching of the specified value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) successWithResolvedBillPayee:(INBillPayee *) resolvedBillPayee;
```

## Parameters

- `resolvedBillPayee`: The value that resolves the requested value of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INBillPayeeResolutionResult](../inbillpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to resolve the parameter successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithBillPayeeToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithBillPayeesToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
