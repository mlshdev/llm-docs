> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inoutgoingmessagetyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inoutgoingmessagetyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object with a resolution that requires the user to confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with outgoingMessageTypeToConfirm: INOutgoingMessageType) -> Self
```

## Parameters

- `outgoingMessageTypeToConfirm`: A message type for the user to accept or reject.

<a id="return-value"></a>

## Return Value

A new [INOutgoingMessageTypeResolutionResult](../inoutgoingmessagetyperesolutionresult.md) object.

## See Also

### Creating a Resolution Result

- [success(with:)](success%28with_%29.md): Creates an object with a resolution that involves the successful matching of the specified parameter.

# confirmationRequiredWithOutgoingMessageTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object with a resolution that requires the user to confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithOutgoingMessageTypeToConfirm:(INOutgoingMessageType) outgoingMessageTypeToConfirm;
```

## Parameters

- `outgoingMessageTypeToConfirm`: A message type for the user to accept or reject.

<a id="return-value"></a>

## Return Value

A new [INOutgoingMessageTypeResolutionResult](../inoutgoingmessagetyperesolutionresult.md) object.

## See Also

### Creating a Resolution Result

- [successWithResolvedOutgoingMessageType:](success%28with_%29.md): Creates an object with a resolution that involves the successful matching of the specified parameter.
