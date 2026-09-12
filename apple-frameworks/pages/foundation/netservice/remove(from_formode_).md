> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/remove(from:formode:)](https://developer.apple.com/documentation/foundation/netservice/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Removes the service from the given run loop for a given mode.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
func remove(from aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: The run loop from which to remove the receiver.
- `mode`: The run loop mode from which to remove the receiver. Possible values for `mode` are discussed in the “Constants” section of [RunLoop](../runloop.md).

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [schedule(in:forMode:)](schedule%28in_formode_%29.md) to transfer the service to a different run loop. Although it is possible to remove an `NSNetService` object completely from any run loop and then attempt actions on it, it is an error to do so.

## See Also

### Managing Run Loops

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Deprecated. Adds the service to the specified run loop.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Removes the service from the given run loop for a given mode.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: The run loop from which to remove the receiver.
- `mode`: The run loop mode from which to remove the receiver. Possible values for `mode` are discussed in the “Constants” section of [NSRunLoop](../runloop.md).

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md) to transfer the service to a different run loop. Although it is possible to remove an `NSNetService` object completely from any run loop and then attempt actions on it, it is an error to do so.

## See Also

### Managing Run Loops

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Deprecated. Adds the service to the specified run loop.
