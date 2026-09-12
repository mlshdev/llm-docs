> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintenthandling/resolvecallcapability(for:with:)](https://developer.apple.com/documentation/intents/instartcallintenthandling/resolvecallcapability(for:with:))

# resolveCallCapability(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the type of call to start.

## Declaration

```swift
optional func resolveCallCapability(for intent: INStartCallIntent, with completion: @escaping @Sendable (INStartCallCallCapabilityResolutionResult) -> Void)
```

```swift
optional func resolveCallCapability(for intent: INStartCallIntent) async -> INStartCallCallCapabilityResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that contains the types of calls you are able to start.

<a id="Discussion"></a>

## Discussion

This method lets SiriKit know which types of calls you can start. Your implementation should provide a successful resolution for the call types you support and an unsupported resolution for any call types you don’t support.

## See Also

### Resolving the Intent Parameters

- [resolveContacts(for:with:)](resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveDestinationType(for:with:)](resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
- [resolveCallRecordToCallBack(for:with:)](resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.

# resolveCallCapabilityForStartCall:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the type of call to start.

## Declaration

```objectivec
- (void) resolveCallCapabilityForStartCall:(INStartCallIntent *) intent withCompletion:(void (^)(INStartCallCallCapabilityResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that contains the types of calls you are able to start.

<a id="Discussion"></a>

## Discussion

This method lets SiriKit know which types of calls you can start. Your implementation should provide a successful resolution for the call types you support and an unsupported resolution for any call types you don’t support.

## See Also

### Resolving the Intent Parameters

- [resolveContactsForStartCall:withCompletion:](resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveDestinationTypeForStartCall:withCompletion:](resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
- [resolveCallRecordToCallBackForStartCall:withCompletion:](resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.
