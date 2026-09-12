> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattributeoptionsresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with messageAttributeOptionsToConfirm: INMessageAttributeOptions = []) -> Self
```

## Parameters

- `messageAttributeOptionsToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMessageAttributeOptionsResolutionResult](../inmessageattributeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.

# confirmationRequiredWithMessageAttributeOptionsToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithMessageAttributeOptionsToConfirm:(INMessageAttributeOptions) messageAttributeOptionsToConfirm;
```

## Parameters

- `messageAttributeOptionsToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMessageAttributeOptionsResolutionResult](../inmessageattributeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedMessageAttributeOptions:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
