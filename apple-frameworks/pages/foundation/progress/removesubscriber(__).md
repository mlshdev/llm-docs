> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/removesubscriber(_:)](https://developer.apple.com/documentation/foundation/progress/removesubscriber(_:))

# removeSubscriber(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Removes a proxy progress object that the add subscriber method returns.

## Declaration

```swift
class func removeSubscriber(_ subscriber: Any)
```

## Parameters

- `subscriber`: The proxy of the progress object to observe.

<a id="Discussion"></a>

## Discussion

If the block for [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md) returns a closure, the system invokes that closure on the main thread when you invoke [removeSubscriber(\_:)](removesubscriber%28__%29.md).

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [isOld](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [Progress.PublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [Progress.UnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.

# removeSubscriber: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Removes a proxy progress object that the add subscriber method returns.

## Declaration

```objectivec
+ (void) removeSubscriber:(id) subscriber;
```

## Parameters

- `subscriber`: The proxy of the progress object to observe.

<a id="Discussion"></a>

## Discussion

If the block for [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md) returns a closure, the system invokes that closure on the main thread when you invoke [removeSubscriber:](removesubscriber%28__%29.md).

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [old](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [NSProgressPublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [NSProgressUnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.
