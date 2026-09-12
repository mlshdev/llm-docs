> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallcapabilityresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/incallcapabilityresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the successful matching of the specified call capability.

## Declaration

```swift
class func success(with resolvedCallCapability: INCallCapability) -> Self
```

## Parameters

- `resolvedCallCapability`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCallCapabilityResolutionResult](../incallcapabilityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when you recognize the specified type of call capability and are able to use it to resolve an intent.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates a result that asks Siri to verify the request that the user wants to continue.

# successWithResolvedCallCapability: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the successful matching of the specified call capability.

## Declaration

```objectivec
+ (instancetype) successWithResolvedCallCapability:(INCallCapability) resolvedCallCapability;
```

## Parameters

- `resolvedCallCapability`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCallCapabilityResolutionResult](../incallcapabilityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when you recognize the specified type of call capability and are able to use it to resolve an intent.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithCallCapabilityToConfirm:](confirmationrequired%28with_%29.md): Creates a result that asks Siri to verify the request that the user wants to continue.
