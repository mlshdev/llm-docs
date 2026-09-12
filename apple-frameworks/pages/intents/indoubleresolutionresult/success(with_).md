> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indoubleresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/indoubleresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```swift
class func success(with resolvedValue: Double) -> Self
```

## Parameters

- `resolvedValue`: The value that resolves the requested property of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDoubleResolutionResult](../indoubleresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully to a value in your own internal data structures.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedValue: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```objectivec
+ (instancetype) successWithResolvedValue:(double) resolvedValue;
```

## Parameters

- `resolvedValue`: The value that resolves the requested property of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDoubleResolutionResult](../indoubleresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully to a value in your own internal data structures.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/indoubleresolutionresult/confirmationrequiredwithvaluetoconfirm:): Creates an object whose resolution requires that the user must confirm the value before proceeding.
