> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallcapabilityresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/incallcapabilityresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a result that asks Siri to verify the request that the user wants to continue.

## Declaration

```swift
class func confirmationRequired(with callCapabilityToConfirm: INCallCapability) -> Self
```

## Parameters

- `callCapabilityToConfirm`: The value which verifies the user’s request that the user wants to continue.

<a id="return-value"></a>

## Return Value

A new [INCallCapabilityResolutionResult](../incallcapabilityresolutionresult.md) object.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified call capability.

# confirmationRequiredWithCallCapabilityToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a result that asks Siri to verify the request that the user wants to continue.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithCallCapabilityToConfirm:(INCallCapability) callCapabilityToConfirm;
```

## Parameters

- `callCapabilityToConfirm`: The value which verifies the user’s request that the user wants to continue.

<a id="return-value"></a>

## Return Value

A new [INCallCapabilityResolutionResult](../incallcapabilityresolutionresult.md) object.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedCallCapability:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified call capability.
