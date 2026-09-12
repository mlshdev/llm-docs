> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintenthandling/resolvedestinationtype(for:with:)](https://developer.apple.com/documentation/intents/instartcallintenthandling/resolvedestinationtype(for:with:))

# resolveDestinationType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the destination of the call.

## Declaration

```swift
optional func resolveDestinationType(for intent: INStartCallIntent, with completion: @escaping @Sendable (INCallDestinationTypeResolutionResult) -> Void)
```

```swift
optional func resolveDestinationType(for intent: INStartCallIntent) async -> INCallDestinationTypeResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution result with the requested destination type.

<a id="Discussion"></a>

## Discussion

This method verifies that you can initiate the specified call type. Return a successful resolution if you can place the specified call type. If you don’t support the specified call type, return a not required resolution and report the failure in your [confirm(intent:completion:)](confirm%28intent_completion_%29.md) method.

## See Also

### Resolving the Intent Parameters

- [resolveCallCapability(for:with:)](resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveContacts(for:with:)](resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveCallRecordToCallBack(for:with:)](resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.

# resolveDestinationTypeForStartCall:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the destination of the call.

## Declaration

```objectivec
- (void) resolveDestinationTypeForStartCall:(INStartCallIntent *) intent withCompletion:(void (^)(INCallDestinationTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution result with the requested destination type.

<a id="Discussion"></a>

## Discussion

This method verifies that you can initiate the specified call type. Return a successful resolution if you can place the specified call type. If you don’t support the specified call type, return a not required resolution and report the failure in your [confirmStartCall:completion:](confirm%28intent_completion_%29.md) method.

## See Also

### Resolving the Intent Parameters

- [resolveCallCapabilityForStartCall:withCompletion:](resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveContactsForStartCall:withCompletion:](resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveCallRecordToCallBackForStartCall:withCompletion:](resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.
