> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_get_current_queue()](https://developer.apple.com/documentation/dispatch/dispatch_get_current_queue())

# dispatch_get_current_queue() (Swift)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 4.0+ (deprecated in 6.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns the queue on which the currently executing block is running.

## Declaration

```swift
func dispatch_get_current_queue() -> dispatch_queue_t
```

<a id="return-value"></a>

## Return Value

Returns the current queue.

<a id="Discussion"></a>

## Discussion

This function is defined to never return `NULL`.

When called from outside of the context of a submitted block, this function returns the main queue if the call is executed from the main thread. If the call is made from any other thread, this function returns the default concurrent queue.

## See Also

### Functions

- [dispatch_debugv(\_:\_:\_:)](dispatch_debugv%28______%29.md): Deprecated.

# dispatch_get_current_queue (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns the queue on which the currently executing block is running.

## Declaration

```objectivec
extern dispatch_queue_tdispatch_get_current_queue();
```

<a id="return-value"></a>

## Return Value

Returns the current queue.

<a id="Discussion"></a>

## Discussion

This function is defined to never return `NULL`.

When called from outside of the context of a submitted block, this function returns the main queue if the call is executed from the main thread. If the call is made from any other thread, this function returns the default concurrent queue.

## See Also

### Functions

- [dispatch_debug](dispatch_debug.md): Deprecated. Programmatically logs debug information about a dispatch object.
- [dispatch_debugv](dispatch_debugv%28______%29.md): Deprecated.
