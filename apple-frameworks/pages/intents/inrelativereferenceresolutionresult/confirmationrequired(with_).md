> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelativereferenceresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inrelativereferenceresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func confirmationRequired(with relativeReferenceToConfirm: INRelativeReference) -> Self
```

## Parameters

- `relativeReferenceToConfirm`: The value that resolves the request but the user needs to confirm it.

<a id="return-value"></a>

## Return Value

A new [INRelativeReferenceResolutionResult](../inrelativereferenceresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified value but you want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithRelativeReferenceToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithRelativeReferenceToConfirm:(INRelativeReference) relativeReferenceToConfirm;
```

## Parameters

- `relativeReferenceToConfirm`: The value that resolves the request but the user needs to confirm it.

<a id="return-value"></a>

## Return Value

A new [INRelativeReferenceResolutionResult](../inrelativereferenceresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified value but you want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedRelativeReference:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inrelativereferenceresolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inrelativereferenceresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
