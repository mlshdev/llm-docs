> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheelinput/nextinputstate()](https://developer.apple.com/documentation/gamecontroller/gcracingwheelinput/nextinputstate())

# nextInputState() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Returns the next input state of the racing wheel from the queue.

## Declaration

```swift
func nextInputState() -> (any GCRacingWheelInputState & GCDevicePhysicalInputStateDiff)?
```

<a id="return-value"></a>

## Return Value

The next input state in the queue or `nil` if the queue is empty.

<a id="Discussion"></a>

## Discussion

This method removes the next input state from the queue.

# nextInputState (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Returns the next input state of the racing wheel from the queue.

## Declaration

```objectivec
- (GCRacingWheelInputState<GCDevicePhysicalInputStateDiff> *) nextInputState;
```

<a id="return-value"></a>

## Return Value

The next input state in the queue or `nil` if the queue is empty.

<a id="Discussion"></a>

## Discussion

This method removes the next input state from the queue.
