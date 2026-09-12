> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/reportnewincomingcall(with:update:completion:)](https://developer.apple.com/documentation/callkit/cxprovider/reportnewincomingcall(with:update:completion:))

# reportNewIncomingCall(with:update:completion:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Reports a new incoming call with the specified unique identifier to the provider.

## Declaration

```swift
func reportNewIncomingCall(with UUID: UUID, update: CXCallUpdate, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func reportNewIncomingCall(with UUID: UUID, update: CXCallUpdate) async throws
```

## Parameters

- `UUID`: The unique identifier of the call.
- `update`: The information for the call.
- `completion`: A block to be executed once the call is allowed or disallowed by the system. The block is executed on the delegate queue set by the [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md) method, or on a private serial queue if none is specified.

  - **error**: If an error occurred, an error object indicating that the call was disallowed by the system, otherwise `nil`.

## Mentioned In

- [Making and receiving VoIP calls](../making-and-receiving-voip-calls.md)
- [Sending End-to-End Encrypted VoIP Calls](../sending-end-to-end-encrypted-voip-calls.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reportNewIncomingCall(with UUID: UUID, update: CXCallUpdate) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

An incoming call may be disallowed by the system if, for example, the caller handle is blocked, or the user has Do Not Disturb enabled.

## See Also

### Reporting Calls

- [reportNewIncomingVoIPPushPayload(\_:completion:)](reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCall(with:startedConnectingAt:)](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCall(with:connectedAt:)](reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCall(with:updated:)](reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCall(with:endedAt:reason:)](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.

# reportNewIncomingCallWithUUID:update:completion: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Reports a new incoming call with the specified unique identifier to the provider.

## Declaration

```objectivec
- (void) reportNewIncomingCallWithUUID:(NSUUID *) UUID update:(CXCallUpdate *) update completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `UUID`: The unique identifier of the call.
- `update`: The information for the call.
- `completion`: A block to be executed once the call is allowed or disallowed by the system. The block is executed on the delegate queue set by the [setDelegate:queue:](setdelegate%28__queue_%29.md) method, or on a private serial queue if none is specified.

  - **error**: If an error occurred, an error object indicating that the call was disallowed by the system, otherwise `nil`.

## Mentioned In

- [Making and receiving VoIP calls](../making-and-receiving-voip-calls.md)
- [Sending End-to-End Encrypted VoIP Calls](../sending-end-to-end-encrypted-voip-calls.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reportNewIncomingCall(with UUID: UUID, update: CXCallUpdate) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

An incoming call may be disallowed by the system if, for example, the caller handle is blocked, or the user has Do Not Disturb enabled.

## See Also

### Reporting Calls

- [reportNewIncomingVoIPPushPayload:completion:](reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCallWithUUID:startedConnectingAtDate:](reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCallWithUUID:connectedAtDate:](reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCallWithUUID:updated:](reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCallWithUUID:endedAtDate:reason:](reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.
