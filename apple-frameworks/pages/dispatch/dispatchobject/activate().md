> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchobject/activate()](https://developer.apple.com/documentation/dispatch/dispatchobject/activate())

# activate() (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Activates the dispatch object.

## Declaration

```swift
func activate()
```

<a id="Discussion"></a>

## Discussion

Once a dispatch object has been activated, it cannot change its target queue.

## See Also

### Activating, Suspending, and Resuming

- [resume()](resume%28%29.md): Resumes the invocation of block objects on a dispatch object.
- [suspend()](suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.

# dispatch_activate (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Activates the dispatch object.

## Declaration

```objectivec
extern void dispatch_activate(dispatch_object_t object);
```

<a id="Discussion"></a>

## Discussion

Once a dispatch object has been activated, it cannot change its target queue.

## See Also

### Activating, Suspending, and Resuming

- [dispatch_resume](resume%28%29.md): Resumes the invocation of block objects on a dispatch object.
- [dispatch_suspend](suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.
