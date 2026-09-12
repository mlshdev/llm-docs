> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarseatresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/incarseatresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func confirmationRequired(with carSeatToConfirm: INCarSeat) -> Self
```

## Parameters

- `carSeatToConfirm`: The value that resolves the request but the user needs to confirm it.

<a id="return-value"></a>

## Return Value

A new [INCarSeatResolutionResult](../incarseatresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to an equivalent seat position and want the user to confirm the replacement value before proceeding.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithCarSeatToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithCarSeatToConfirm:(INCarSeat) carSeatToConfirm;
```

## Parameters

- `carSeatToConfirm`: The value that resolves the request but the user needs to confirm it.

<a id="return-value"></a>

## Return Value

A new [INCarSeatResolutionResult](../incarseatresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to an equivalent seat position and want the user to confirm the replacement value before proceeding.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedCarSeat:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/incarseatresolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/incarseatresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
