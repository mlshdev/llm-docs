> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskpriorityresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/intaskpriorityresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully matching the specified parameter.

> INTaskPriorityResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func success(with resolvedTaskPriority: INTaskPriority) -> Self
```

## Parameters

- `resolvedTaskPriority`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskPriorityResolutionResult](../intaskpriorityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you successfully identify the task priority to modify.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires user confirmation before proceeding.

# successWithResolvedTaskPriority: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully matching the specified parameter.

> INTaskPriorityResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) successWithResolvedTaskPriority:(INTaskPriority) resolvedTaskPriority;
```

## Parameters

- `resolvedTaskPriority`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskPriorityResolutionResult](../intaskpriorityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you successfully identify the task priority to modify.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithTaskPriorityToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires user confirmation before proceeding.
