> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalancetyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inbalancetyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```swift
class func success(with resolvedBalanceType: INBalanceType) -> Self
```

## Parameters

- `resolvedBalanceType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INBalanceTypeResolutionResult](../inbalancetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the balance type to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedBalanceType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified attribute.

## Declaration

```objectivec
+ (instancetype) successWithResolvedBalanceType:(INBalanceType) resolvedBalanceType;
```

## Parameters

- `resolvedBalanceType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INBalanceTypeResolutionResult](../inbalancetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the balance type to a recognizable value in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithBalanceTypeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
