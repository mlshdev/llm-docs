> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatesearchtyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/indatesearchtyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> INDateSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func confirmationRequired(with dateSearchTypeToConfirm: INDateSearchType) -> Self
```

## Parameters

- `dateSearchTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INDateSearchTypeResolutionResult](../indatesearchtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a date type that’s similar to, but not equal to, the one specified in the intent. Don’t use this method to resolve date types that your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithDateSearchTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> INDateSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithDateSearchTypeToConfirm:(INDateSearchType) dateSearchTypeToConfirm;
```

## Parameters

- `dateSearchTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INDateSearchTypeResolutionResult](../indatesearchtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a date type that’s similar to, but not equal to, the one specified in the intent. Don’t use this method to resolve date types that your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedDateSearchType:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
