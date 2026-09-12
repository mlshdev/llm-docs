> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/setaccessorybuttoneventsenabled(_:channeluuid:completionhandler:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/setaccessorybuttoneventsenabled(_:channeluuid:completionhandler:))

# setAccessoryButtonEventsEnabled(\_:channelUUID:completionHandler:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Maps supported accessory button events to actions that begin and end transmission.

## Declaration

```swift
func setAccessoryButtonEventsEnabled(_ enabled: Bool, channelUUID: UUID, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setAccessoryButtonEventsEnabled(_ enabled: Bool, channelUUID: UUID) async throws
```

## Parameters

- `enabled`: A flag that accessory button events map to begin and end transmission actions. If your app doesn’t map these button events to transmission actions, you can disable them by setting the value to [false](https://developer.apple.com/documentation/swift/false).
- `channelUUID`: The unique channel identifier of the active participant.
- `completionHandler`: An error that indicates the reason why the system couldn’t set the supported accessory button events.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setAccessoryButtonEventsEnabled(_ enabled: Bool, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Starting and stopping transmission

- [requestBeginTransmitting(channelUUID:)](requestbegintransmitting%28channeluuid_%29.md): Begins an audio transmission with the channel identifer you specify.
- [stopTransmitting(channelUUID:)](stoptransmitting%28channeluuid_%29.md): Stops an audio transmission with the channel identifer you specify.

# setAccessoryButtonEventsEnabled:forChannelUUID:completionHandler: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Maps supported accessory button events to actions that begin and end transmission.

## Declaration

```objectivec
- (void) setAccessoryButtonEventsEnabled:(BOOL) enabled forChannelUUID:(NSUUID *) channelUUID completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `enabled`: A flag that accessory button events map to begin and end transmission actions. If your app doesn’t map these button events to transmission actions, you can disable them by setting the value to [false](https://developer.apple.com/documentation/swift/false).
- `channelUUID`: The unique channel identifier of the active participant.
- `completionHandler`: An error that indicates the reason why the system couldn’t set the supported accessory button events.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setAccessoryButtonEventsEnabled(_ enabled: Bool, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Starting and stopping transmission

- [requestBeginTransmittingWithChannelUUID:](requestbegintransmitting%28channeluuid_%29.md): Begins an audio transmission with the channel identifer you specify.
- [stopTransmittingWithChannelUUID:](stoptransmitting%28channeluuid_%29.md): Stops an audio transmission with the channel identifer you specify.
