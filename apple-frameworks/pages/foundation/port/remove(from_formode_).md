> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/remove(from:formode:)](https://developer.apple.com/documentation/foundation/port/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method should be implemented by a subclass to stop monitoring of a port when removed from a give run loop in a given input mode.

## Declaration

```swift
func remove(from runLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runLoop`: The run loop from which to remove the receiver.
- `mode`: The run loop mode from which to remove the receiver

<a id="Discussion"></a>

## Discussion

This method should not be called directly.

## See Also

### Port monitoring

- [schedule(in:forMode:)](schedule%28in_formode_%29.md): This method should be implemented by a subclass to set up monitoring of a port when added to a given run loop in a given input mode.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method should be implemented by a subclass to stop monitoring of a port when removed from a give run loop in a given input mode.

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) runLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runLoop`: The run loop from which to remove the receiver.
- `mode`: The run loop mode from which to remove the receiver

<a id="Discussion"></a>

## Discussion

This method should not be called directly.

## See Also

### Port monitoring

- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): This method should be implemented by a subclass to set up monitoring of a port when added to a given run loop in a given input mode.
