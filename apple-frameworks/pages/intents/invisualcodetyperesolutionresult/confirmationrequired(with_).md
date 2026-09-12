> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invisualcodetyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/invisualcodetyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Creates an object whose resolution requires that the user confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func confirmationRequired(with visualCodeTypeToConfirm: INVisualCodeType) -> Self
```

## Parameters

- `visualCodeTypeToConfirm`: The value that resolves the request, for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INVisualCodeTypeResolutionResult](../invisualcodetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t provide the requested type of code but can provide a code of some type.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.

# confirmationRequiredWithVisualCodeTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Creates an object whose resolution requires that the user confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithVisualCodeTypeToConfirm:(INVisualCodeType) visualCodeTypeToConfirm;
```

## Parameters

- `visualCodeTypeToConfirm`: The value that resolves the request, for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INVisualCodeTypeResolutionResult](../invisualcodetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t provide the requested type of code but can provide a code of some type.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedVisualCodeType:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
