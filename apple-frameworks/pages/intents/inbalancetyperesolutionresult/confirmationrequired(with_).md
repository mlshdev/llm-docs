> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalancetyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inbalancetyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with balanceTypeToConfirm: INBalanceType) -> Self
```

## Parameters

- `balanceTypeToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INBalanceTypeResolutionResult](../inbalancetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the balance type to a single value that is similar to the type specified by the user, but not exactly the same.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.

# confirmationRequiredWithBalanceTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithBalanceTypeToConfirm:(INBalanceType) balanceTypeToConfirm;
```

## Parameters

- `balanceTypeToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INBalanceTypeResolutionResult](../inbalancetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the balance type to a single value that is similar to the type specified by the user, but not exactly the same.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedBalanceType:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
