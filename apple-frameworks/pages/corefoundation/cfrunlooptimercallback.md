> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimercallback](https://developer.apple.com/documentation/corefoundation/cfrunlooptimercallback)

# CFRunLoopTimerCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFRunLoopTimer object fires.

## Declaration

```swift
typealias CFRunLoopTimerCallBack = (CFRunLoopTimer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `timer`: The run loop timer that is firing.
- `info`: The `info` member of the [CFRunLoopTimerContext](cfrunlooptimercontext.md) structure that was used when creating the run loop timer.

<a id="Discussion"></a>

## Discussion

If `timer` repeats, the run loop automatically schedules the next firing time after calling this function, unless you manually update the firing time within this callback by calling [CFRunLoopTimerSetNextFireDate(\_:\_:)](cfrunlooptimersetnextfiredate%28____%29.md). If `timer` does not repeat, the run loop invalidates `timer`.

You specify this callback when you create the timer with [CFRunLoopTimerCreate(\_:\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreate%28______________%29.md).

# CFRunLoopTimerCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked when a CFRunLoopTimer object fires.

## Declaration

```objectivec
typedef void (*)(struct __CFRunLoopTimer *, void *) CFRunLoopTimerCallBack;
```

## Parameters

- `timer`: The run loop timer that is firing.
- `info`: The `info` member of the [CFRunLoopTimerContext](cfrunlooptimercontext.md) structure that was used when creating the run loop timer.

<a id="Discussion"></a>

## Discussion

If `timer` repeats, the run loop automatically schedules the next firing time after calling this function, unless you manually update the firing time within this callback by calling [CFRunLoopTimerSetNextFireDate](cfrunlooptimersetnextfiredate%28____%29.md). If `timer` does not repeat, the run loop invalidates `timer`.

You specify this callback when you create the timer with [CFRunLoopTimerCreate](cfrunlooptimercreate%28______________%29.md).
