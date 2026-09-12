> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaccounttyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inaccounttyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with accountTypeToConfirm: INAccountType) -> Self
```

## Parameters

- `accountTypeToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INAccountTypeResolutionResult](../inaccounttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the account type to a single value that is similar to the type specified by the user, but not exactly the same.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.

# confirmationRequiredWithAccountTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithAccountTypeToConfirm:(INAccountType) accountTypeToConfirm;
```

## Parameters

- `accountTypeToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INAccountTypeResolutionResult](../inaccounttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the account type to a single value that is similar to the type specified by the user, but not exactly the same.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedAccountType:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inaccounttyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inaccounttyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
