> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/intaskresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> INTaskResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func disambiguation(with tasksToDisambiguate: [INTask]) -> Self
```

## Parameters

- `tasksToDisambiguate`: An array of [INTask](../intask.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INTaskResolutionResult](../intaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one task matches the given information and you cannot pick one definitively. Ask the user to select from among the tasks that you specify.

For each [INTask](../intask.md) object that you provide, include enough information to be able to locate that task again later. When the user selects one of the tasks, SiriKit puts the details from your [INTask](../intask.md) object into the intent and asks you to resolve the task again. Therefore, you might assign a unique value to the [identifier](../intask/identifier.md) property of the task so that you can perform a fast lookup of the selected task during the second resolution pass.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

# disambiguationWithTasksToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> INTaskResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) disambiguationWithTasksToDisambiguate:(NSArray<INTask *> *) tasksToDisambiguate;
```

## Parameters

- `tasksToDisambiguate`: An array of [INTask](../intask.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INTaskResolutionResult](../intaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one task matches the given information and you cannot pick one definitively. Ask the user to select from among the tasks that you specify.

For each [INTask](../intask.md) object that you provide, include enough information to be able to locate that task again later. When the user selects one of the tasks, SiriKit puts the details from your [INTask](../intask.md) object into the intent and asks you to resolve the task again. Therefore, you might assign a unique value to the [identifier](../intask/identifier.md) property of the task so that you can perform a fast lookup of the selected task during the second resolution pass.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTask:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithTaskToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
