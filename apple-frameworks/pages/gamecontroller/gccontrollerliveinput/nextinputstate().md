> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerliveinput/nextinputstate()](https://developer.apple.com/documentation/gamecontroller/gccontrollerliveinput/nextinputstate())

# nextInputState() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the next device input state from the queue.

## Declaration

```swift
func nextInputState() -> (any GCControllerInputState & GCDevicePhysicalInputStateDiff)?
```

<a id="return-value"></a>

## Return Value

The next input state in the queue or `nil` if the queue is empty.

## See Also

### Handling device input

- [capture()](capture%28%29.md): Returns a snapshot of the physical device inputs.

# nextInputState (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the next device input state from the queue.

## Declaration

```objectivec
- (GCControllerInputState<GCDevicePhysicalInputStateDiff> *) nextInputState;
```

<a id="return-value"></a>

## Return Value

The next input state in the queue or `nil` if the queue is empty.

## See Also

### Handling device input

- [capture](capture%28%29.md): Returns a snapshot of the physical device inputs.
