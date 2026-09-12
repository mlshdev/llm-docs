> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incardefrosterresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/incardefrosterresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func success(with resolvedCarDefroster: INCarDefroster) -> Self
```

## Parameters

- `resolvedCarDefroster`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCarDefrosterResolutionResult](../incardefrosterresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the chosen defroster and are able to switch to it.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedCarDefroster: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) successWithResolvedCarDefroster:(INCarDefroster) resolvedCarDefroster;
```

## Parameters

- `resolvedCarDefroster`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCarDefrosterResolutionResult](../incardefrosterresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the chosen defroster and are able to switch to it.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithCarDefrosterToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/incardefrosterresolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/incardefrosterresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
