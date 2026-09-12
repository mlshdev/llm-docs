> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/setchanneldescriptor(_:channeluuid:completionhandler:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/setchanneldescriptor(_:channeluuid:completionhandler:))

# setChannelDescriptor(\_:channelUUID:completionHandler:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the channel description.

## Declaration

```swift
func setChannelDescriptor(_ channelDescriptor: PTChannelDescriptor, channelUUID: UUID, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setChannelDescriptor(_ channelDescriptor: PTChannelDescriptor, channelUUID: UUID) async throws
```

## Parameters

- `channelDescriptor`: The channel description.
- `channelUUID`: The channel identifier.
- `completionHandler`: The completion handler.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the channel descriptor.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setChannelDescriptor(_ channelDescriptor: PTChannelDescriptor, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# setChannelDescriptor:forChannelUUID:completionHandler: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the channel description.

## Declaration

```objectivec
- (void) setChannelDescriptor:(PTChannelDescriptor *) channelDescriptor forChannelUUID:(NSUUID *) channelUUID completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `channelDescriptor`: The channel description.
- `channelUUID`: The channel identifier.
- `completionHandler`: The completion handler.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the channel descriptor.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setChannelDescriptor(_ channelDescriptor: PTChannelDescriptor, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
