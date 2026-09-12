> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtriggertypeoptionsresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/intemporaleventtriggertypeoptionsresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```swift
class func success(with resolvedTemporalEventTriggerTypeOptions: INTemporalEventTriggerTypeOptions = []) -> Self
```

## Parameters

- `resolvedTemporalEventTriggerTypeOptions`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerTypeOptionsResolutionResult](../intemporaleventtriggertypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to search through the user’s notes based on a specified temporal trigger event.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the value before proceeding.

# successWithResolvedTemporalEventTriggerTypeOptions: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedTemporalEventTriggerTypeOptions:(INTemporalEventTriggerTypeOptions) resolvedTemporalEventTriggerTypeOptions;
```

## Parameters

- `resolvedTemporalEventTriggerTypeOptions`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerTypeOptionsResolutionResult](../intemporaleventtriggertypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to search through the user’s notes based on a specified temporal trigger event.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithTemporalEventTriggerTypeOptionsToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the value before proceeding.
