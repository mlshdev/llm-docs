> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/delegatequeue](https://developer.apple.com/documentation/arkit/arsession/delegatequeue)

# delegateQueue (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The dispatch queue through which the session calls your delegate methods.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is `nil` (the default), the session calls your delegate methods on the main queue.

## See Also

### Responding to events

- [delegate](delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [ARSessionDelegate](../arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
- [ARSessionObserver](../arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.

# delegateQueue (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The dispatch queue through which the session calls your delegate methods.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) dispatch_queue_t delegateQueue;
```

<a id="Discussion"></a>

## Discussion

If this value is `nil` (the default), the session calls your delegate methods on the main queue.

## See Also

### Responding to events

- [delegate](delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [ARSessionDelegate](../arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
- [ARSessionObserver](../arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.
