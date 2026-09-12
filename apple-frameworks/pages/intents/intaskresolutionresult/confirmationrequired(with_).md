> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/intaskresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INTaskResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func confirmationRequired(with taskToConfirm: INTask?) -> Self
```

## Parameters

- `taskToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTaskResolutionResult](../intaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you locate a single task but cannot determine with enough certainty that it is the one intended by the user. For example, you might ask for confirmation when the task’s title text does not match precisely. Provide an [INTask](../intask.md) object with as much information about the task as you have available.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithTaskToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INTaskResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithTaskToConfirm:(INTask *) taskToConfirm;
```

## Parameters

- `taskToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTaskResolutionResult](../intaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you locate a single task but cannot determine with enough certainty that it is the one intended by the user. For example, you might ask for confirmation when the task’s title text does not match precisely. Provide an [INTask](../intask.md) object with as much information about the task as you have available.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTask:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithTasksToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
