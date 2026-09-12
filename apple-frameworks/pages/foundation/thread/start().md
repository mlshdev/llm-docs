> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/start()](https://developer.apple.com/documentation/foundation/thread/start())

# start() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts the receiver.

## Declaration

```swift
func start()
```

<a id="Discussion"></a>

## Discussion

This method asynchronously spawns the new thread and invokes the receiver’s [main()](main%28%29.md) method on the new thread. The [isExecuting](isexecuting.md) property returns [true](https://developer.apple.com/documentation/swift/true) once the thread starts executing, which may occur after the [start()](start%28%29.md) method returns.

If you initialized the receiver with a target and selector, the default [main()](main%28%29.md) method invokes that selector automatically.

If this thread is the first thread detached in the application, this method posts the [NSWillBecomeMultiThreaded](../nsnotification/name-swift.struct/nswillbecomemultithreaded.md) with object `nil` to the default notification center.

## See Also

### Related Documentation

- [init(target:selector:object:)](init%28target_selector_object_%29.md): Returns an `NSThread` object initialized with the given arguments.
- [init()](init%28%29.md): Returns an initialized `NSThread` object.

### Starting a Thread

- [detachNewThreadSelector(\_:toTarget:with:)](detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.
- [main()](main%28%29.md): The main entry point routine for the thread.

# start (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts the receiver.

## Declaration

```objectivec
- (void) start;
```

<a id="Discussion"></a>

## Discussion

This method asynchronously spawns the new thread and invokes the receiver’s [main](main%28%29.md) method on the new thread. The [executing](isexecuting.md) property returns [true](https://developer.apple.com/documentation/swift/true) once the thread starts executing, which may occur after the [start](start%28%29.md) method returns.

If you initialized the receiver with a target and selector, the default [main](main%28%29.md) method invokes that selector automatically.

If this thread is the first thread detached in the application, this method posts the [NSWillBecomeMultiThreadedNotification](../nsnotification/name-swift.struct/nswillbecomemultithreaded.md) with object `nil` to the default notification center.

## See Also

### Related Documentation

- [initWithTarget:selector:object:](init%28target_selector_object_%29.md): Returns an `NSThread` object initialized with the given arguments.
- [init](init%28%29.md): Returns an initialized `NSThread` object.

### Starting a Thread

- [detachNewThreadSelector:toTarget:withObject:](detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.
- [main](main%28%29.md): The main entry point routine for the thread.
