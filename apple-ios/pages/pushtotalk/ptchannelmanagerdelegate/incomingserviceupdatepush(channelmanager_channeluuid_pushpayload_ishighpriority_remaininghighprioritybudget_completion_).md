> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/incomingserviceupdatepush(channelmanager:channeluuid:pushpayload:ishighpriority:remaininghighprioritybudget:completion:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/incomingserviceupdatepush(channelmanager:channeluuid:pushpayload:ishighpriority:remaininghighprioritybudget:completion:))

# incomingServiceUpdatePush(channelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:completion:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Extracts the service update data from the notification’s payload to perform the relevant task for that data.

## Declaration

```swift
optional func incomingServiceUpdatePush(channelManager: PTChannelManager, channelUUID: UUID, pushPayload: [String : Any], isHighPriority: Bool, remainingHighPriorityBudget: Int, completion: @escaping @Sendable () -> Void)
```

```swift
optional func incomingServiceUpdatePush(channelManager: PTChannelManager, channelUUID: UUID, pushPayload: [String : Any], isHighPriority: Bool, remainingHighPriorityBudget: Int) async
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `pushPayload`: The push payload metadata.
- `isHighPriority`: A flag indicating if this notification is a high priority.
- `remainingHighPriorityBudget`: Monitors the number of remaining high-priority push notifications available to your app. Use low-priority push notifications (priority \<= 5) whenever possible, as they aren’t subject to a budget limit.
- `completion`: Execute to inform the Push to Talk framework you’ve finished your task.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func incomingServiceUpdatePush(channelManager: PTChannelManager, channelUUID: UUID, pushPayload: [String : Any], isHighPriority: Bool, remainingHighPriorityBudget: Int) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Beginning or ending transmission

- [channelManager(\_:channelUUID:didBeginTransmittingFrom:)](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager(\_:channelUUID:didEndTransmittingFrom:)](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager(\_:failedToBeginTransmittingInChannel:error:)](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager(\_:failedToStopTransmittingInChannel:error:)](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.

# incomingServiceUpdatePushForChannelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:withCompletionHandler: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Extracts the service update data from the notification’s payload to perform the relevant task for that data.

## Declaration

```objectivec
- (void) incomingServiceUpdatePushForChannelManager:(PTChannelManager *) channelManager channelUUID:(NSUUID *) channelUUID pushPayload:(NSDictionary<NSString *,id> *) pushPayload isHighPriority:(BOOL) isHighPriority remainingHighPriorityBudget:(NSInteger) remainingHighPriorityBudget withCompletionHandler:(void (^)()) completion;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `pushPayload`: The push payload metadata.
- `isHighPriority`: A flag indicating if this notification is a high priority.
- `remainingHighPriorityBudget`: Monitors the number of remaining high-priority push notifications available to your app. Use low-priority push notifications (priority \<= 5) whenever possible, as they aren’t subject to a budget limit.
- `completion`: Execute to inform the Push to Talk framework you’ve finished your task.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func incomingServiceUpdatePush(channelManager: PTChannelManager, channelUUID: UUID, pushPayload: [String : Any], isHighPriority: Bool, remainingHighPriorityBudget: Int) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Beginning or ending transmission

- [channelManager:channelUUID:didBeginTransmittingFromSource:](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager:channelUUID:didEndTransmittingFromSource:](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager:failedToBeginTransmittingInChannelWithUUID:error:](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager:failedToStopTransmittingInChannelWithUUID:error:](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
