> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskstatusresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/intaskstatusresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INTaskStatusResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func success(with resolvedTaskStatus: INTaskStatus) -> Self
```

## Parameters

- `resolvedTaskStatus`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskStatusResolutionResult](../intaskstatusresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you support searching for tasks with the specified status or applying the status to a task.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

# successWithResolvedTaskStatus: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INTaskStatusResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) successWithResolvedTaskStatus:(INTaskStatus) resolvedTaskStatus;
```

## Parameters

- `resolvedTaskStatus`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskStatusResolutionResult](../intaskstatusresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you support searching for tasks with the specified status or applying the status to a task.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithTaskStatusToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
