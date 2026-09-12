> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobservercallback](https://developer.apple.com/documentation/corefoundation/cfrunloopobservercallback)

# CFRunLoopObserverCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFRunLoopObserver object is fired.

## Declaration

```swift
typealias CFRunLoopObserverCallBack = (CFRunLoopObserver?, CFRunLoopActivity, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `observer`: The run loop observer that is firing.
- `activity`: The current activity stage of the run loop.
- `info`: The `info` member of the [CFRunLoopObserverContext](cfrunloopobservercontext.md) structure that was used when creating the run loop observer.

<a id="Discussion"></a>

## Discussion

You specify this callback when you create the run loop observer with [CFRunLoopObserverCreate(\_:\_:\_:\_:\_:\_:)](cfrunloopobservercreate%28____________%29.md).

# CFRunLoopObserverCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFRunLoopObserver object is fired.

## Declaration

```objectivec
typedef void (*)(struct __CFRunLoopObserver *, enum CFRunLoopActivity, void *) CFRunLoopObserverCallBack;
```

## Parameters

- `observer`: The run loop observer that is firing.
- `activity`: The current activity stage of the run loop.
- `info`: The `info` member of the [CFRunLoopObserverContext](cfrunloopobservercontext.md) structure that was used when creating the run loop observer.

<a id="Discussion"></a>

## Discussion

You specify this callback when you create the run loop observer with [CFRunLoopObserverCreate](cfrunloopobservercreate%28____________%29.md).
