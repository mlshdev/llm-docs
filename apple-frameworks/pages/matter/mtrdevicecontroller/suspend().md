> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/suspend()](https://developer.apple.com/documentation/matter/mtrdevicecontroller/suspend())

# suspend() (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Suspend the controller.  This will attempt to stop all network traffic associated with the controller.  The controller will remain suspended until it is resumed.

## Declaration

```swift
func suspend()
```

<a id="discussion"></a>

## Discussion

Suspending an already-suspended controller has no effect.

# suspend (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Suspend the controller.  This will attempt to stop all network traffic associated with the controller.  The controller will remain suspended until it is resumed.

## Declaration

```objectivec
- (void) suspend;
```

<a id="discussion"></a>

## Discussion

Suspending an already-suspended controller has no effect.
