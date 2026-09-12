> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintenthandling/resolvecontacts(for:with:)](https://developer.apple.com/documentation/intents/instartcallintenthandling/resolvecontacts(for:with:))

# resolveContacts(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the recipients of the call.

## Declaration

```swift
optional func resolveContacts(for intent: INStartCallIntent, with completion: @escaping @Sendable ([INStartCallContactResolutionResult]) -> Void)
```

```swift
optional func resolveContacts(for intent: INStartCallIntent) async -> [INStartCallContactResolutionResult]
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the [INPerson](../inperson.md) object with the information that you need to call the user later.

<a id="Discussion"></a>

## Discussion

This method verifies the identity of any intended call recipients. Always strive toward a successful resolution to a specific user, but feel free to ask the user for confirmation of the selected contact if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide only a few choices. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolveCallCapability(for:with:)](resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveDestinationType(for:with:)](resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
- [resolveCallRecordToCallBack(for:with:)](resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.

# resolveContactsForStartCall:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the recipients of the call.

## Declaration

```objectivec
- (void) resolveContactsForStartCall:(INStartCallIntent *) intent withCompletion:(void (^)(NSArray<INStartCallContactResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For a successful resolution, create a resolution result that includes the [INPerson](../inperson.md) object with the information that you need to call the user later.

<a id="Discussion"></a>

## Discussion

This method verifies the identity of any intended call recipients. Always strive toward a successful resolution to a specific user, but feel free to ask the user for confirmation of the selected contact if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide only a few choices. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolveCallCapabilityForStartCall:withCompletion:](resolvecallcapability%28for_with_%29.md): Resolves the type of call to start.
- [resolveDestinationTypeForStartCall:withCompletion:](resolvedestinationtype%28for_with_%29.md): Resolves the destination of the call.
- [resolveCallRecordToCallBackForStartCall:withCompletion:](resolvecallrecordtocallback%28for_with_%29.md): Resolves the redial of a missed call.
