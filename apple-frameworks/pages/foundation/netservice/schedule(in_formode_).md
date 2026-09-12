> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/schedule(in:formode:)](https://developer.apple.com/documentation/foundation/netservice/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds the service to the specified run loop.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
func schedule(in aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode to which to add the receiver. Possible values for `mode` are discussed in the “Constants” section of [RunLoop](../runloop.md).

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [remove(from:forMode:)](remove%28from_formode_%29.md) to transfer a service to a different run loop. You should not attempt to run a service on multiple run loops.

## See Also

### Managing Run Loops

- [remove(from:forMode:)](remove%28from_formode_%29.md): Deprecated. Removes the service from the given run loop for a given mode.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds the service to the specified run loop.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode to which to add the receiver. Possible values for `mode` are discussed in the “Constants” section of [NSRunLoop](../runloop.md).

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [removeFromRunLoop:forMode:](remove%28from_formode_%29.md) to transfer a service to a different run loop. You should not attempt to run a service on multiple run loops.

## See Also

### Managing Run Loops

- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Deprecated. Removes the service from the given run loop for a given mode.
