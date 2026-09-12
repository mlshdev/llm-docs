> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/publishinghandler](https://developer.apple.com/documentation/foundation/progress/publishinghandler)

# Progress.PublishingHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block that the system calls when an observed progress object matches the subscription.

## Declaration

```swift
typealias PublishingHandler = @Sendable (Progress) -> Progress.UnpublishingHandler?
```

## Parameters

- `progress`: The proxy to the observed progress object.

<a id="return-value"></a>

## Return Value

An optional block that the system invokes when the observed progress object invokes [unpublish()](unpublish%28%29.md), the publishing process terminates, or you invoke [removeSubscriber(\_:)](removesubscriber%28__%29.md).

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber(\_:)](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [isOld](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [Progress.UnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.

# NSProgressPublishingHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block that the system calls when an observed progress object matches the subscription.

## Declaration

```objectivec
typedef void (^(^)(NSProgress *))(void) NSProgressPublishingHandler;
```

## Parameters

- `progress`: The proxy to the observed progress object.

<a id="return-value"></a>

## Return Value

An optional block that the system invokes when the observed progress object invokes [unpublish](unpublish%28%29.md), the publishing process terminates, or you invoke [removeSubscriber:](removesubscriber%28__%29.md).

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber:](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [old](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [NSProgressUnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.
