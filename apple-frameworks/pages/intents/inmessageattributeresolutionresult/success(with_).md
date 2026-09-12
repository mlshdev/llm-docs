> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattributeresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inmessageattributeresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```swift
class func success(with resolvedMessageAttribute: INMessageAttribute) -> Self
```

## Parameters

- `resolvedMessageAttribute`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMessageAttributeResolutionResult](../inmessageattributeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedMessageAttribute: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```objectivec
+ (instancetype) successWithResolvedMessageAttribute:(INMessageAttribute) resolvedMessageAttribute;
```

## Parameters

- `resolvedMessageAttribute`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMessageAttributeResolutionResult](../inmessageattributeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithMessageAttributeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inmessageattributeresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inmessageattributeresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
