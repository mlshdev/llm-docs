> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invisualcodetyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/invisualcodetyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Creates an object whose resolution involves the successful matching of the specified value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func success(with resolvedVisualCodeType: INVisualCodeType) -> Self
```

## Parameters

- `resolvedVisualCodeType`: The value that resolves the requested value of the intent.

<a id="return-value"></a>

## Return Value

A new [INVisualCodeTypeResolutionResult](../invisualcodetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to provide a visual code of the specified type.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user confirm the value before proceeding.

# successWithResolvedVisualCodeType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Creates an object whose resolution involves the successful matching of the specified value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) successWithResolvedVisualCodeType:(INVisualCodeType) resolvedVisualCodeType;
```

## Parameters

- `resolvedVisualCodeType`: The value that resolves the requested value of the intent.

<a id="return-value"></a>

## Return Value

A new [INVisualCodeTypeResolutionResult](../invisualcodetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to provide a visual code of the specified type.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithVisualCodeTypeToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user confirm the value before proceeding.
