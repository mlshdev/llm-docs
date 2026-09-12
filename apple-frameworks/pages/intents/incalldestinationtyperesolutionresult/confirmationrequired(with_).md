> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incalldestinationtyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/incalldestinationtyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with callDestinationTypeToConfirm: INCallDestinationType) -> Self
```

## Parameters

- `callDestinationTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INCallDestinationTypeResolutionResult](../incalldestinationtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter but want the user to confirm the value before proceeding.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithCallDestinationTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithCallDestinationTypeToConfirm:(INCallDestinationType) callDestinationTypeToConfirm;
```

## Parameters

- `callDestinationTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INCallDestinationTypeResolutionResult](../incalldestinationtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter but want the user to confirm the value before proceeding.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedCallDestinationType:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
