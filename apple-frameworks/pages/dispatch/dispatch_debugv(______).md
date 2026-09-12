> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_debugv(_:_:_:)](https://developer.apple.com/documentation/dispatch/dispatch_debugv(_:_:_:))

# dispatch_debugv(\_:\_:\_:) (Swift)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 4.0+ (deprecated in 6.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

## Declaration

```swift
func dispatch_debugv(_ object: dispatch_object_t, _ message: UnsafePointer<CChar>, _ ap: CVaListPointer)
```

## See Also

### Functions

- [dispatch_get_current_queue()](dispatch_get_current_queue%28%29.md): Deprecated. Returns the queue on which the currently executing block is running.

# dispatch_debugv (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

## Declaration

```objectivec
extern void dispatch_debugv(dispatch_object_t object, const char *message, va_list ap);
```

## See Also

### Functions

- [dispatch_debug](dispatch_debug.md): Deprecated. Programmatically logs debug information about a dispatch object.
- [dispatch_get_current_queue](dispatch_get_current_queue%28%29.md): Deprecated. Returns the queue on which the currently executing block is running.
