> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/addsubscriber(forfileurl:withpublishinghandler:)](https://developer.apple.com/documentation/foundation/progress/addsubscriber(forfileurl:withpublishinghandler:))

# addSubscriber(forFileURL:withPublishingHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Registers a file URL to hear about the progress of a file operation.

## Declaration

```swift
class func addSubscriber(forFileURL url: URL, withPublishingHandler publishingHandler: @escaping Progress.PublishingHandler) -> Any
```

## Parameters

- `url`: The URL of the file to observe.
- `publishingHandler`: A closure that the system invokes when a progress object that represents a file operation matching the specified URL calls [publish()](publish%28%29.md).

<a id="return-value"></a>

## Return Value

A proxy of the progress object to observe.

<a id="Discussion"></a>

## Discussion

The system invokes the passed-in block when a progress object calls [publish()](publish%28%29.md) with a [fileURLKey](../progressuserinfokey/fileurlkey.md) user info dictionary entry that’s a URL that is the same as this method’s URL, or that is an item that the URL directly contains. The progress object that passes to your block is a proxy of the published progress object. The passed-in block may return another block. If it does, the system invokes the returned block when the observed progress object invokes [unpublish()](unpublish%28%29.md), the publishing process terminates, or you invoke [removeSubscriber(\_:)](removesubscriber%28__%29.md). The system invokes the blocks you provide on the main thread.

## See Also

### Observing and Controlling File Progress by Other Processes

- [removeSubscriber(\_:)](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [isOld](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [Progress.PublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [Progress.UnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.

# addSubscriberForFileURL:withPublishingHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Registers a file URL to hear about the progress of a file operation.

## Declaration

```objectivec
+ (id) addSubscriberForFileURL:(NSURL *) url withPublishingHandler:(NSProgressPublishingHandler) publishingHandler;
```

## Parameters

- `url`: The URL of the file to observe.
- `publishingHandler`: A closure that the system invokes when a progress object that represents a file operation matching the specified URL calls [publish](publish%28%29.md).

<a id="return-value"></a>

## Return Value

A proxy of the progress object to observe.

<a id="Discussion"></a>

## Discussion

The system invokes the passed-in block when a progress object calls [publish](publish%28%29.md) with a [NSProgressFileURLKey](../progressuserinfokey/fileurlkey.md) user info dictionary entry that’s a URL that is the same as this method’s URL, or that is an item that the URL directly contains. The progress object that passes to your block is a proxy of the published progress object. The passed-in block may return another block. If it does, the system invokes the returned block when the observed progress object invokes [unpublish](unpublish%28%29.md), the publishing process terminates, or you invoke [removeSubscriber:](removesubscriber%28__%29.md). The system invokes the blocks you provide on the main thread.

## See Also

### Observing and Controlling File Progress by Other Processes

- [removeSubscriber:](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [old](isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [NSProgressPublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [NSProgressUnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.
