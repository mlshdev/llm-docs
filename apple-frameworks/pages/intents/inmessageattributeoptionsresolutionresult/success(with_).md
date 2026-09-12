> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattributeoptionsresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```swift
class func success(with resolvedMessageAttributeOptions: INMessageAttributeOptions = []) -> Self
```

## Parameters

- `resolvedMessageAttributeOptions`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMessageAttributeOptionsResolutionResult](../inmessageattributeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to resolve the parameter successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedMessageAttributeOptions: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```objectivec
+ (instancetype) successWithResolvedMessageAttributeOptions:(INMessageAttributeOptions) resolvedMessageAttributeOptions;
```

## Parameters

- `resolvedMessageAttributeOptions`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMessageAttributeOptionsResolutionResult](../inmessageattributeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to resolve the parameter successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithMessageAttributeOptionsToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
