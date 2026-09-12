> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasklistresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/intasklistresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INTaskListResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func success(with resolvedTaskList: INTaskList) -> Self
```

## Parameters

- `resolvedTaskList`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskListResolutionResult](../intasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you successfully locate the task list modified. Provide an [INTaskList](../intasklist.md) object with as much information about the task list as you have available.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedTaskList: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INTaskListResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) successWithResolvedTaskList:(INTaskList *) resolvedTaskList;
```

## Parameters

- `resolvedTaskList`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskListResolutionResult](../intasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you successfully locate the task list modified. Provide an [INTaskList](../intasklist.md) object with as much information about the task list as you have available.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithTaskListToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguationWithTaskListsToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
