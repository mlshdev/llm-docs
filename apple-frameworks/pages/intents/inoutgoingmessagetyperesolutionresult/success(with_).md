> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inoutgoingmessagetyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inoutgoingmessagetyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object with a resolution that involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedOutgoingMessageType: INOutgoingMessageType) -> Self
```

## Parameters

- `resolvedOutgoingMessageType`: The object that resolves the requested parameter of the intent. This value may be different than the one the intent object specifies.

<a id="return-value"></a>

## Return Value

A new [INOutgoingMessageTypeResolutionResult](../inoutgoingmessagetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you can send a message in the format the intent specifies.

## See Also

### Creating a Resolution Result

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object with a resolution that requires the user to confirm the value before proceeding.

# successWithResolvedOutgoingMessageType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object with a resolution that involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedOutgoingMessageType:(INOutgoingMessageType) resolvedOutgoingMessageType;
```

## Parameters

- `resolvedOutgoingMessageType`: The object that resolves the requested parameter of the intent. This value may be different than the one the intent object specifies.

<a id="return-value"></a>

## Return Value

A new [INOutgoingMessageTypeResolutionResult](../inoutgoingmessagetyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you can send a message in the format the intent specifies.

## See Also

### Creating a Resolution Result

- [confirmationRequiredWithOutgoingMessageTypeToConfirm:](confirmationrequired%28with_%29.md): Creates an object with a resolution that requires the user to confirm the value before proceeding.
