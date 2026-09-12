> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueuedescriptor/feedbackqueue](https://developer.apple.com/documentation/metal/mtl4commandqueuedescriptor/feedbackqueue)

# feedbackQueue (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a dispatch queue to which Metal submits feedback notification blocks.

## Declaration

```swift
unowned(unsafe) var feedbackQueue: dispatch_queue_t? { get set }
```

<a id="discussion"></a>

## Discussion

When you assign a dispatch queue via this method, Metal requires that the queue parameter you provide is a serial queue.

If you set the value of property to `nil`, the default, Metal allocates an internal dispatch queue to service feedback notifications.

# feedbackQueue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a dispatch queue to which Metal submits feedback notification blocks.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) dispatch_queue_t feedbackQueue;
```

<a id="discussion"></a>

## Discussion

When you assign a dispatch queue via this method, Metal requires that the queue parameter you provide is a serial queue.

If you set the value of property to `nil`, the default, Metal allocates an internal dispatch queue to service feedback notifications.
