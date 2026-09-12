> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlocationsearchtyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inlocationsearchtyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INLocationSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func confirmationRequired(with locationSearchTypeToConfirm: INLocationSearchType) -> Self
```

## Parameters

- `locationSearchTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INLocationSearchTypeResolutionResult](../inlocationsearchtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the parameter to the specified type and want the user to confirm the use of a different type. Do not use this method to resolve location types if you do not support searching by location.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithLocationSearchTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INLocationSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithLocationSearchTypeToConfirm:(INLocationSearchType) locationSearchTypeToConfirm;
```

## Parameters

- `locationSearchTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INLocationSearchTypeResolutionResult](../inlocationsearchtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the parameter to the specified type and want the user to confirm the use of a different type. Do not use this method to resolve location types if you do not support searching by location.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedLocationSearchType:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
