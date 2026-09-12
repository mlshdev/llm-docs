> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/main](https://developer.apple.com/documentation/foundation/operationqueue/main)

# main (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the operation queue associated with the main thread.

## Declaration

```swift
class var main: OperationQueue { get }
```

<a id="return-value"></a>

## Return Value

The default operation queue bound to the main thread.

<a id="Discussion"></a>

## Discussion

The returned queue executes one operation at a time on the app’s main thread. The execution of operations on the main thread is interleaved with the other tasks that must execute on the main thread, such as the servicing of events and the updating of an app’s user interface. The queue executes those operations in the run loop common modes, as represented by the [common](../runloop/mode/common.md) constant. The value of the [underlyingQueue](underlyingqueue.md) property for the queue is the dispatch queue for the main thread; this property cannot be set to another value.

## See Also

### Accessing Specific Operation Queues

- [current](current.md): Returns the operation queue that launched the current operation.

# mainQueue (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the operation queue associated with the main thread.

## Declaration

```objectivec
@property (class, strong, readonly) NSOperationQueue * mainQueue;
```

<a id="return-value"></a>

## Return Value

The default operation queue bound to the main thread.

<a id="Discussion"></a>

## Discussion

The returned queue executes one operation at a time on the app’s main thread. The execution of operations on the main thread is interleaved with the other tasks that must execute on the main thread, such as the servicing of events and the updating of an app’s user interface. The queue executes those operations in the run loop common modes, as represented by the [NSRunLoopCommonModes](../runloop/mode/common.md) constant. The value of the [underlyingQueue](underlyingqueue.md) property for the queue is the dispatch queue for the main thread; this property cannot be set to another value.

## See Also

### Accessing Specific Operation Queues

- [currentQueue](current.md): Returns the operation queue that launched the current operation.
