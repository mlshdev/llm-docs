> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/invalidate()](https://developer.apple.com/documentation/quartzcore/cadisplaylink/invalidate())

# invalidate() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

Removes the display link from all run loop modes.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

When you remove the display link from all run loop mode, the system releases it. The display link also releases the target.

This method is thread safe, so you can call it from a thread separate to the one in which the display link runs.

## See Also

### Scheduling a Display Link to Send Notifications

- [add(to:forMode:)](add%28to_formode_%29.md): Registers the display link with a run loop.
- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the display link from the run loop for the given mode.

# invalidate (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 9.0+ · visionOS 1.0+

Removes the display link from all run loop modes.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

When you remove the display link from all run loop mode, the system releases it. The display link also releases the target.

This method is thread safe, so you can call it from a thread separate to the one in which the display link runs.

## See Also

### Scheduling a Display Link to Send Notifications

- [addToRunLoop:forMode:](add%28to_formode_%29.md): Registers the display link with a run loop.
- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the display link from the run loop for the given mode.
