> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchobject/suspend()](https://developer.apple.com/documentation/dispatch/dispatchobject/suspend())

# suspend() (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Suspends the invocation of block objects on a dispatch object.

## Declaration

```swift
func suspend()
```

<a id="Discussion"></a>

## Discussion

By suspending a dispatch object, your application can temporarily prevent the execution of any blocks associated with that object. The suspension occurs after completion of any blocks running at the time of the call. Calling this function increments the suspension count of the object, and calling [resume()](resume%28%29.md) decrements it. While the count is greater than zero, the object remains suspended, so you must balance each [suspend()](suspend%28%29.md) call with a matching [resume()](resume%28%29.md) call.

Any blocks submitted to a dispatch queue or events observed by a dispatch source are delivered once the object is resumed.

> **Important**

>  It is a programmer error to release an object that is currently suspended, because suspension implies that there is still work to be done. Therefore, always balance calls to this method with a corresponding call to [resume()](resume%28%29.md) before disposing of the object. The behavior when releasing the last reference to a dispatch object while it is in a suspended state is undefined.

## See Also

### Activating, Suspending, and Resuming

- [activate()](activate%28%29.md): Activates the dispatch object.
- [resume()](resume%28%29.md): Resumes the invocation of block objects on a dispatch object.

# dispatch_suspend (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Suspends the invocation of block objects on a dispatch object.

## Declaration

```objectivec
extern void dispatch_suspend(dispatch_object_t object);
```

## Parameters

- `object`: The dispatch queue or dispatch source to suspend. (You cannot suspend other types of dispatch objects.) This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

By suspending a dispatch object, your application can temporarily prevent the execution of any blocks associated with that object. The suspension occurs after completion of any blocks running at the time of the call. Calling this function increments the suspension count of the object, and calling [dispatch_resume](resume%28%29.md) decrements it. While the count is greater than zero, the object remains suspended, so you must balance each [dispatch_suspend](suspend%28%29.md) call with a matching [dispatch_resume](resume%28%29.md) call.

Any blocks submitted to a dispatch queue or events observed by a dispatch source are delivered once the object is resumed.

> **Important**

>  It is a programmer error to release an object that is currently suspended, because suspension implies that there is still work to be done. Therefore, always balance calls to this method with a corresponding call to [dispatch_resume](resume%28%29.md) before disposing of the object. The behavior when releasing the last reference to a dispatch object while it is in a suspended state is undefined.

## See Also

### Activating, Suspending, and Resuming

- [dispatch_activate](activate%28%29.md): Activates the dispatch object.
- [dispatch_resume](resume%28%29.md): Resumes the invocation of block objects on a dispatch object.
