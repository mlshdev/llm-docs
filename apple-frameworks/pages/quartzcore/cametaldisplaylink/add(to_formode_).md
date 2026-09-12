> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/add(to:formode:)](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/add(to:formode:))

# add(to:forMode:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Registers the display link with a run loop.

## Declaration

```swift
func add(to runloop: RunLoop, forMode mode: RunLoop.Mode)
```

## Parameters

- `runloop`: A run loop instance the method associates with the display link.
- `mode`: A run loop mode for the display link.

<a id="Discussion"></a>

## Discussion

You can associate the display link with any of the [RunLoop](../../foundation/runloop.md) modes, multiple input modes, or a custom mode. When the run loop is in `mode`, the display link notifies its delegate when the system prepares the next frame.

You can remove the display link from a run loop by calling [remove(from:forMode:)](remove%28from_formode_%29.md), or from all run loops with [invalidate()](invalidate%28%29.md).

# addToRunLoop:forMode: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Registers the display link with a run loop.

## Declaration

```objectivec
- (void) addToRunLoop:(NSRunLoop *) runloop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `runloop`: A run loop instance the method associates with the display link.
- `mode`: A run loop mode for the display link.

<a id="Discussion"></a>

## Discussion

You can associate the display link with any of the [NSRunLoop](../../foundation/runloop.md) modes, multiple input modes, or a custom mode. When the run loop is in `mode`, the display link notifies its delegate when the system prepares the next frame.

You can remove the display link from a run loop by calling [removeFromRunLoop:forMode:](remove%28from_formode_%29.md), or from all run loops with [invalidate](invalidate%28%29.md).
