> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/schedule(in:formode:)](https://developer.apple.com/documentation/foundation/port/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method should be implemented by a subclass to set up monitoring of a port when added to a given run loop in a given input mode.

## Declaration

```swift
func schedule(in runLoop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode to which to add the receiver

<a id="Discussion"></a>

## Discussion

This method should not be called directly.

## See Also

### Port monitoring

- [remove(from:forMode:)](remove%28from_formode_%29.md): This method should be implemented by a subclass to stop monitoring of a port when removed from a give run loop in a given input mode.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method should be implemented by a subclass to set up monitoring of a port when added to a given run loop in a given input mode.

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) runLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode to which to add the receiver

<a id="Discussion"></a>

## Discussion

This method should not be called directly.

## See Also

### Port monitoring

- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): This method should be implemented by a subclass to stop monitoring of a port when removed from a give run loop in a given input mode.
