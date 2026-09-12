> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/remove(from:formode:)](https://developer.apple.com/documentation/quartzcore/cadisplaylink/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

Removes the display link from the run loop for the given mode.

## Declaration

```swift
func remove(from runloop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runloop`: The run loop you associate with the display link.
- `mode`: The run loop mode in which the display link is running.

<a id="Discussion"></a>

## Discussion

The run loop releases the display link if it’s no longer associated with any run modes.

## See Also

### Scheduling a Display Link to Send Notifications

- [add(to:forMode:)](add%28to_formode_%29.md): Registers the display link with a run loop.
- [invalidate()](invalidate%28%29.md): Removes the display link from all run loop modes.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

Removes the display link from the run loop for the given mode.

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) runloop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runloop`: The run loop you associate with the display link.
- `mode`: The run loop mode in which the display link is running.

<a id="Discussion"></a>

## Discussion

The run loop releases the display link if it’s no longer associated with any run modes.

## See Also

### Scheduling a Display Link to Send Notifications

- [addToRunLoop:forMode:](add%28to_formode_%29.md): Registers the display link with a run loop.
- [invalidate](invalidate%28%29.md): Removes the display link from all run loop modes.
