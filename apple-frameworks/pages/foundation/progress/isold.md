> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/isold](https://developer.apple.com/documentation/foundation/progress/isold)

# isOld (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.

## Declaration

```swift
var isOld: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The publish and subscribe mechanism is generally *level-triggered*, in that when you invoke [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md), the system invokes your block for every relevant published and unpublished progress object. Sometimes you need to implement *edge-triggered* behavior, in which you do something either exactly when new progress begins or not at all.

In the example above, the Dock doesn’t animate file icons when this method returns [true](https://developer.apple.com/documentation/swift/true).

There’s no reliable definition of *before* in this case, which involves multiple processes in a preemptively scheduled system. Don’t use this method for anything more important than best efforts at animating. It can be inaccurate due to processes coming and going from unpredictable user actions.

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber(\_:)](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [Progress.PublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [Progress.UnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.

# old (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.

## Declaration

```objectivec
@property (readonly, getter=isOld) BOOL old;
```

<a id="Discussion"></a>

## Discussion

The publish and subscribe mechanism is generally *level-triggered*, in that when you invoke [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md), the system invokes your block for every relevant published and unpublished progress object. Sometimes you need to implement *edge-triggered* behavior, in which you do something either exactly when new progress begins or not at all.

In the example above, the Dock doesn’t animate file icons when this method returns [true](https://developer.apple.com/documentation/swift/true).

There’s no reliable definition of *before* in this case, which involves multiple processes in a preemptively scheduled system. Don’t use this method for anything more important than best efforts at animating. It can be inaccurate due to processes coming and going from unpredictable user actions.

## See Also

### Observing and Controlling File Progress by Other Processes

- [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber:](removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [NSProgressPublishingHandler](publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [NSProgressUnpublishingHandler](unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.
