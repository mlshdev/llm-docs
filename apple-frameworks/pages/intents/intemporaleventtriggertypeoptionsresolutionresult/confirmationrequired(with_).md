> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtriggertypeoptionsresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/intemporaleventtriggertypeoptionsresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with temporalEventTriggerTypeOptionsToConfirm: INTemporalEventTriggerTypeOptions = []) -> Self
```

## Parameters

- `temporalEventTriggerTypeOptionsToConfirm`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerTypeOptionsResolutionResult](../intemporaleventtriggertypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a similar but not equal temporal event type than the one specified in the intent. Don’t use this method to resolve temporal event types that your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified parameter.

# confirmationRequiredWithTemporalEventTriggerTypeOptionsToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithTemporalEventTriggerTypeOptionsToConfirm:(INTemporalEventTriggerTypeOptions) temporalEventTriggerTypeOptionsToConfirm;
```

## Parameters

- `temporalEventTriggerTypeOptionsToConfirm`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerTypeOptionsResolutionResult](../intemporaleventtriggertypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a similar but not equal temporal event type than the one specified in the intent. Don’t use this method to resolve temporal event types that your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTemporalEventTriggerTypeOptions:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified parameter.
