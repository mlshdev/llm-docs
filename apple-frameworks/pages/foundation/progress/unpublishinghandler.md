> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/unpublishinghandler](https://developer.apple.com/documentation/foundation/progress/unpublishinghandler)

# Progress.UnpublishingHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block that the system calls when an observed progress object terminates the subscription.

## Declaration

```swift
typealias UnpublishingHandler = @Sendable () -> Void
```

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber(\_:)](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [isOld](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [Progress.PublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.

# NSProgressUnpublishingHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block that the system calls when an observed progress object terminates the subscription.

## Declaration

```objectivec
typedef void (^)(void) NSProgressUnpublishingHandler;
```

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber:](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [old](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [NSProgressPublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
