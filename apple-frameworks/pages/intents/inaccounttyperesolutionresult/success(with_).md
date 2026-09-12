> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaccounttyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inaccounttyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```swift
class func success(with resolvedAccountType: INAccountType) -> Self
```

## Parameters

- `resolvedAccountType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INAccountTypeResolutionResult](../inaccounttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the account successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedAccountType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```objectivec
+ (instancetype) successWithResolvedAccountType:(INAccountType) resolvedAccountType;
```

## Parameters

- `resolvedAccountType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INAccountTypeResolutionResult](../inaccounttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the account successfully to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithAccountTypeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inaccounttyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inaccounttyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
