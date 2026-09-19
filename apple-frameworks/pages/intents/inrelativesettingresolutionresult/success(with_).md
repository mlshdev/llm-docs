> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inrelativesettingresolutionresult/success(with:)

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func success(with resolvedRelativeSetting: INRelativeSetting) -> Self
```

## Parameters

- `resolvedRelativeSetting`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INRelativeSettingResolutionResult](../inrelativesettingresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to modify a setting using the specified value.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedRelativeSetting: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) successWithResolvedRelativeSetting:(INRelativeSetting) resolvedRelativeSetting;
```

## Parameters

- `resolvedRelativeSetting`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INRelativeSettingResolutionResult](../inrelativesettingresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to modify a setting using the specified value.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithRelativeSettingToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inrelativesettingresolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inrelativesettingresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
