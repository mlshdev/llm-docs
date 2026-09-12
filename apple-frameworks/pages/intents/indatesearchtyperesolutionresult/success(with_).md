> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatesearchtyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/indatesearchtyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INDateSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func success(with resolvedDateSearchType: INDateSearchType) -> Self
```

## Parameters

- `resolvedDateSearchType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDateSearchTypeResolutionResult](../indatesearchtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to search for notes based on the specified date type.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedDateSearchType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INDateSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) successWithResolvedDateSearchType:(INDateSearchType) resolvedDateSearchType;
```

## Parameters

- `resolvedDateSearchType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDateSearchTypeResolutionResult](../indatesearchtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to search for notes based on the specified date type.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithDateSearchTypeToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
