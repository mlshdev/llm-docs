> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintenthandling/resolvecallrecordtocallback(for:with:)](https://developer.apple.com/documentation/intents/instartcallintenthandling/resolvecallrecordtocallback(for:with:))

# resolveCallRecordToCallBack(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Resolves the redial of a missed call.

## Declaration

```swift
optional func resolveCallRecordToCallBack(for intent: INStartCallIntent, with completion: @escaping @Sendable (INCallRecordResolutionResult) -> Void)
```

```swift
optional func resolveCallRecordToCallBack(for intent: INStartCallIntent) async -> INCallRecordResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

## See Also

### Resolving the Intent Parameters

- [resolveCallCapability(for:with:)](resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveContacts(for:with:)](resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveDestinationType(for:with:)](resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.

# resolveCallRecordToCallBackForStartCall:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Resolves the redial of a missed call.

## Declaration

```objectivec
- (void) resolveCallRecordToCallBackForStartCall:(INStartCallIntent *) intent withCompletion:(void (^)(INCallRecordResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

## See Also

### Resolving the Intent Parameters

- [resolveCallCapabilityForStartCall:withCompletion:](resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveContactsForStartCall:withCompletion:](resolvecontacts%28for_with_%29.md): Resolves the recipients of the call.
- [resolveDestinationTypeForStartCall:withCompletion:](resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
