> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/remove(from:formode:)](https://developer.apple.com/documentation/foundation/netservicebrowser/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Removes the receiver from the specified run loop.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
func remove(from aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: Run loop from which to remove the receiver.
- `mode`: Run loop mode in which to perform this operation, such as [default](../runloop/mode/default.md). See the Run Loop Modes section of the [RunLoop](../runloop.md) class for other run loop mode values.

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [schedule(in:forMode:)](schedule%28in_formode_%29.md) to transfer the receiver to a run loop other than the default one. Although it is possible to remove an `NSNetService` object completely from any run loop and then attempt actions on it, you must not do it.

## See Also

### Managing Run Loops

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Deprecated. Adds the receiver to the specified run loop.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Removes the receiver from the specified run loop.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: Run loop from which to remove the receiver.
- `mode`: Run loop mode in which to perform this operation, such as [NSDefaultRunLoopMode](../runloop/mode/default.md). See the Run Loop Modes section of the [NSRunLoop](../runloop.md) class for other run loop mode values.

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md) to transfer the receiver to a run loop other than the default one. Although it is possible to remove an `NSNetService` object completely from any run loop and then attempt actions on it, you must not do it.

## See Also

### Managing Run Loops

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Deprecated. Adds the receiver to the specified run loop.
