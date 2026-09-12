> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskpriorityresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/intaskpriorityresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires user confirmation before proceeding.

> INTaskPriorityResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func confirmationRequired(with taskPriorityToConfirm: INTaskPriority) -> Self
```

## Parameters

- `taskPriorityToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTaskPriorityResolutionResult](../intaskpriorityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you have to make assumptions about the time information specified by the user.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified parameter.

# confirmationRequiredWithTaskPriorityToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires user confirmation before proceeding.

> INTaskPriorityResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithTaskPriorityToConfirm:(INTaskPriority) taskPriorityToConfirm;
```

## Parameters

- `taskPriorityToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTaskPriorityResolutionResult](../intaskpriorityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you have to make assumptions about the time information specified by the user.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTaskPriority:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified parameter.
