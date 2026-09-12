> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/setactiveremoteparticipant(_:channeluuid:completionhandler:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/setactiveremoteparticipant(_:channeluuid:completionhandler:))

# setActiveRemoteParticipant(\_:channelUUID:completionHandler:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the active remote participant with the channel identifier.

## Declaration

```swift
func setActiveRemoteParticipant(_ participant: PTParticipant?, channelUUID: UUID, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setActiveRemoteParticipant(_ participant: PTParticipant?, channelUUID: UUID) async throws
```

## Parameters

- `participant`: The remote participant to become active.
- `channelUUID`: The channel identifier the participant becomes active in.
- `completionHandler`: The completion handler that contains an optional error.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the active participant.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setActiveRemoteParticipant(_ participant: PTParticipant?, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When you receive incoming audio from a remote participant, set the participant value, which updates the system user interface and blocks transmission by the local user. When the user stops speaking, set the active participant to `nil`.

# setActiveRemoteParticipant:forChannelUUID:completionHandler: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the active remote participant with the channel identifier.

## Declaration

```objectivec
- (void) setActiveRemoteParticipant:(PTParticipant *) participant forChannelUUID:(NSUUID *) channelUUID completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `participant`: The remote participant to become active.
- `channelUUID`: The channel identifier the participant becomes active in.
- `completionHandler`: The completion handler that contains an optional error.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the active participant.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setActiveRemoteParticipant(_ participant: PTParticipant?, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When you receive incoming audio from a remote participant, set the participant value, which updates the system user interface and blocks transmission by the local user. When the user stops speaking, set the active participant to `nil`.
