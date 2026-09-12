> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/settransmissionmode(_:channeluuid:completionhandler:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/settransmissionmode(_:channeluuid:completionhandler:))

# setTransmissionMode(\_:channelUUID:completionHandler:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the audio transmission mode for the channel you specify.

## Declaration

```swift
func setTransmissionMode(_ transmissionMode: PTTransmissionMode, channelUUID: UUID, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setTransmissionMode(_ transmissionMode: PTTransmissionMode, channelUUID: UUID) async throws
```

## Parameters

- `transmissionMode`: The transmission mode.
- `channelUUID`: The channel identifier the participant becomes active in.
- `completionHandler`: The completion handler that contains an optional error.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the transmission mode.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setTransmissionMode(_ transmissionMode: PTTransmissionMode, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

By default, a channel’s transmission mode is [PTTransmissionMode.halfDuplex](../pttransmissionmode/halfduplex.md) — indicating that only one participant can send or receive audio at a time. Use [PTTransmissionMode.fullDuplex](../pttransmissionmode/fullduplex.md) to allow a person to transmit and receive audio simultaneously.

Set the transmission mode to [PTTransmissionMode.listenOnly](../pttransmissionmode/listenonly.md) to prevent a participant from transmitting any audio.

# setTransmissionMode:forChannelUUID:completionHandler: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the audio transmission mode for the channel you specify.

## Declaration

```objectivec
- (void) setTransmissionMode:(PTTransmissionMode) transmissionMode forChannelUUID:(NSUUID *) channelUUID completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `transmissionMode`: The transmission mode.
- `channelUUID`: The channel identifier the participant becomes active in.
- `completionHandler`: The completion handler that contains an optional error.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the transmission mode.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setTransmissionMode(_ transmissionMode: PTTransmissionMode, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

By default, a channel’s transmission mode is [PTTransmissionModeHalfDuplex](../pttransmissionmode/halfduplex.md) — indicating that only one participant can send or receive audio at a time. Use [PTTransmissionModeFullDuplex](../pttransmissionmode/fullduplex.md) to allow a person to transmit and receive audio simultaneously.

Set the transmission mode to [PTTransmissionModeListenOnly](../pttransmissionmode/listenonly.md) to prevent a participant from transmitting any audio.
