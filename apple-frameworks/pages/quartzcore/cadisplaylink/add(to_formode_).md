> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/add(to:formode:)](https://developer.apple.com/documentation/quartzcore/cadisplaylink/add(to:formode:))

# add(to:forMode:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

Registers the display link with a run loop.

## Declaration

```swift
func add(to runloop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runloop`: The run loop to associate with the display link.
- `mode`: The mode in which to add the display link to the run loop.

<a id="Discussion"></a>

## Discussion

You can associate a display link with multiple input modes. While the run loop is executing in a mode you specify, the display link notifies the target when the system requires new frames.

You can specify a custom mode or use one of the modes listed in [RunLoop](../../foundation/runloop.md).

The run loop retains the display link. To remove the display link from all run loops, call [invalidate()](invalidate%28%29.md).

## See Also

### Scheduling a Display Link to Send Notifications

- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the display link from the run loop for the given mode.
- [invalidate()](invalidate%28%29.md): Removes the display link from all run loop modes.

# addToRunLoop:forMode: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

Registers the display link with a run loop.

## Declaration

```objectivec
- (void) addToRunLoop:(NSRunLoop *) runloop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runloop`: The run loop to associate with the display link.
- `mode`: The mode in which to add the display link to the run loop.

<a id="Discussion"></a>

## Discussion

You can associate a display link with multiple input modes. While the run loop is executing in a mode you specify, the display link notifies the target when the system requires new frames.

You can specify a custom mode or use one of the modes listed in [NSRunLoop](../../foundation/runloop.md).

The run loop retains the display link. To remove the display link from all run loops, call [invalidate](invalidate%28%29.md).

## See Also

### Scheduling a Display Link to Send Notifications

- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the display link from the run loop for the given mode.
- [invalidate](invalidate%28%29.md): Removes the display link from all run loop modes.
