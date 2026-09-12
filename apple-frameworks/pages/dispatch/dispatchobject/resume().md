> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchobject/resume()](https://developer.apple.com/documentation/dispatch/dispatchobject/resume())

# resume() (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resumes the invocation of block objects on a dispatch object.

## Declaration

```swift
func resume()
```

<a id="Discussion"></a>

## Discussion

Calling this function decrements the suspension count of a suspended dispatch queue or dispatch event source object. While the count is greater than zero, the object remains suspended. When the suspension count returns to zero, any blocks submitted to the dispatch queue or any events observed by the dispatch source while suspended are delivered.

With one exception, each call to [resume()](resume%28%29.md) must balance a call to [suspend()](suspend%28%29.md). New dispatch event source objects returned by [dispatch_source_create](../dispatch_source_create.md) have a suspension count of 1 and must be resumed before any events are delivered. This approach allows your application to fully configure the dispatch event source object prior to delivery of the first event. In all other cases, it is undefined to call [resume()](resume%28%29.md) more times than [suspend()](suspend%28%29.md), which would result in a negative suspension count.

## See Also

### Activating, Suspending, and Resuming

- [activate()](activate%28%29.md): Activates the dispatch object.
- [suspend()](suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.

# dispatch_resume (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Resumes the invocation of block objects on a dispatch object.

## Declaration

```objectivec
extern void dispatch_resume(dispatch_object_t object);
```

## Parameters

- `object`: The object to be resumed. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

Calling this function decrements the suspension count of a suspended dispatch queue or dispatch event source object. While the count is greater than zero, the object remains suspended. When the suspension count returns to zero, any blocks submitted to the dispatch queue or any events observed by the dispatch source while suspended are delivered.

With one exception, each call to [dispatch_resume](resume%28%29.md) must balance a call to [dispatch_suspend](suspend%28%29.md). New dispatch event source objects returned by [dispatch_source_create](../dispatch_source_create.md) have a suspension count of 1 and must be resumed before any events are delivered. This approach allows your application to fully configure the dispatch event source object prior to delivery of the first event. In all other cases, it is undefined to call [dispatch_resume](resume%28%29.md) more times than [dispatch_suspend](suspend%28%29.md), which would result in a negative suspension count.

## See Also

### Activating, Suspending, and Resuming

- [dispatch_activate](activate%28%29.md): Activates the dispatch object.
- [dispatch_suspend](suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.
