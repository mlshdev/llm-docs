> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/detachnewthreadselector(_:totarget:with:)](https://developer.apple.com/documentation/foundation/thread/detachnewthreadselector(_:totarget:with:))

# detachNewThreadSelector(\_:toTarget:with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Detaches a new thread and uses the specified selector as the thread entry point.

## Declaration

```swift
class func detachNewThreadSelector(_ selector: Selector, toTarget target: Any, with argument: Any?)
```

## Parameters

- `selector`: The selector for the message to send to the target. This selector must take only one argument and must not have a return value.
- `target`: The object that will receive the message `aSelector` on the new thread.
- `argument`: The single argument passed to the target. May be `nil`.

<a id="Discussion"></a>

## Discussion

The objects `aTarget` and `anArgument` are retained during the execution of the detached thread, then released. The detached thread is exited (using the [exit()](exit%28%29.md) class method) as soon as `aTarget` has completed executing the `aSelector` method.

If this thread is the first thread detached in the application, this method posts the [NSWillBecomeMultiThreaded](../nsnotification/name-swift.struct/nswillbecomemultithreaded.md) with object `nil` to the default notification center.

## See Also

### Related Documentation

- [isMultiThreaded()](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [current](current.md): Returns the thread object representing the current thread of execution.

### Starting a Thread

- [start()](start%28%29.md): Starts the receiver.
- [main()](main%28%29.md): The main entry point routine for the thread.

# detachNewThreadSelector:toTarget:withObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Detaches a new thread and uses the specified selector as the thread entry point.

## Declaration

```objectivec
+ (void) detachNewThreadSelector:(SEL) selector toTarget:(id) target withObject:(id) argument;
```

## Parameters

- `selector`: The selector for the message to send to the target. This selector must take only one argument and must not have a return value.
- `target`: The object that will receive the message `aSelector` on the new thread.
- `argument`: The single argument passed to the target. May be `nil`.

<a id="Discussion"></a>

## Discussion

The objects `aTarget` and `anArgument` are retained during the execution of the detached thread, then released. The detached thread is exited (using the [exit](exit%28%29.md) class method) as soon as `aTarget` has completed executing the `aSelector` method.

If this thread is the first thread detached in the application, this method posts the [NSWillBecomeMultiThreadedNotification](../nsnotification/name-swift.struct/nswillbecomemultithreaded.md) with object `nil` to the default notification center.

## See Also

### Related Documentation

- [isMultiThreaded](ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [currentThread](current.md): Returns the thread object representing the current thread of execution.

### Starting a Thread

- [start](start%28%29.md): Starts the receiver.
- [main](main%28%29.md): The main entry point routine for the thread.
