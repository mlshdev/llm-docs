> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/reportcall(with:updated:)](https://developer.apple.com/documentation/callkit/cxprovider/reportcall(with:updated:))

# reportCall(with:updated:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Reports to the provider that an active call updated its information.

## Declaration

```swift
func reportCall(with UUID: UUID, updated update: CXCallUpdate)
```

## Parameters

- `UUID`: The unique identifier of the call.
- `update`: The updated information.

## See Also

### Reporting Calls

- [reportNewIncomingCall(with:update:completion:)](reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [reportNewIncomingVoIPPushPayload(\_:completion:)](reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCall(with:startedConnectingAt:)](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCall(with:connectedAt:)](reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCall(with:endedAt:reason:)](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.

# reportCallWithUUID:updated: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Reports to the provider that an active call updated its information.

## Declaration

```objectivec
- (void) reportCallWithUUID:(NSUUID *) UUID updated:(CXCallUpdate *) update;
```

## Parameters

- `UUID`: The unique identifier of the call.
- `update`: The updated information.

## See Also

### Reporting Calls

- [reportNewIncomingCallWithUUID:update:completion:](reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [reportNewIncomingVoIPPushPayload:completion:](reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCallWithUUID:startedConnectingAtDate:](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCallWithUUID:connectedAtDate:](reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCallWithUUID:endedAtDate:reason:](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.
