> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/reportoutgoingcall(with:connectedat:)](https://developer.apple.com/documentation/callkit/cxprovider/reportoutgoingcall(with:connectedat:))

# reportOutgoingCall(with:connectedAt:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.

## Declaration

```swift
func reportOutgoingCall(with UUID: UUID, connectedAt dateConnected: Date?)
```

## Parameters

- `UUID`: The unique identifier of the call.
- `dateConnected`: The time at which the call connected. A call is considered connected when both caller and callee can start communicating.

  If `nil`, the current time is used.

<a id="Discussion"></a>

## Discussion

An outgoing call should call this method after calling the [reportOutgoingCall(with:startedConnectingAt:)](reportoutgoingcall%28with_startedconnectingat_%29.md) and after the call is connected.

## See Also

### Reporting Calls

- [reportNewIncomingCall(with:update:completion:)](reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [reportNewIncomingVoIPPushPayload(\_:completion:)](reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCall(with:startedConnectingAt:)](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportCall(with:updated:)](reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCall(with:endedAt:reason:)](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.

# reportOutgoingCallWithUUID:connectedAtDate: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.

## Declaration

```objectivec
- (void) reportOutgoingCallWithUUID:(NSUUID *) UUID connectedAtDate:(NSDate *) dateConnected;
```

## Parameters

- `UUID`: The unique identifier of the call.
- `dateConnected`: The time at which the call connected. A call is considered connected when both caller and callee can start communicating.

  If `nil`, the current time is used.

<a id="Discussion"></a>

## Discussion

An outgoing call should call this method after calling the [reportOutgoingCallWithUUID:startedConnectingAtDate:](reportoutgoingcall%28with_startedconnectingat_%29.md) and after the call is connected.

## See Also

### Reporting Calls

- [reportNewIncomingCallWithUUID:update:completion:](reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [reportNewIncomingVoIPPushPayload:completion:](reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCallWithUUID:startedConnectingAtDate:](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportCallWithUUID:updated:](reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCallWithUUID:endedAtDate:reason:](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.
