> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/schedule(in:formode:)](https://developer.apple.com/documentation/foundation/netservicebrowser/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds the receiver to the specified run loop.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
func schedule(in aRunLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `aRunLoop`: Run loop in which to schedule the receiver.
- `mode`: Run loop mode in which to perform this operation, such as [default](../runloop/mode/default.md). See the Run Loop Modes section of the [RunLoop](../runloop.md) class for other run loop mode values.

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [remove(from:forMode:)](remove%28from_formode_%29.md) to transfer the receiver to a run loop other than the default one. You should not attempt to run the receiver on multiple run loops.

## See Also

### Managing Run Loops

- [remove(from:forMode:)](remove%28from_formode_%29.md): Deprecated. Removes the receiver from the specified run loop.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds the receiver to the specified run loop.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) aRunLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aRunLoop`: Run loop in which to schedule the receiver.
- `mode`: Run loop mode in which to perform this operation, such as [NSDefaultRunLoopMode](../runloop/mode/default.md). See the Run Loop Modes section of the [NSRunLoop](../runloop.md) class for other run loop mode values.

<a id="Discussion"></a>

## Discussion

You can use this method in conjunction with [removeFromRunLoop:forMode:](remove%28from_formode_%29.md) to transfer the receiver to a run loop other than the default one. You should not attempt to run the receiver on multiple run loops.

## See Also

### Managing Run Loops

- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Deprecated. Removes the receiver from the specified run loop.
