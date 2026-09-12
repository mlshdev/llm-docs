> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerliveinput/capture()](https://developer.apple.com/documentation/gamecontroller/gccontrollerliveinput/capture())

# capture() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a snapshot of the physical device inputs.

## Declaration

```swift
func capture() -> GCControllerInputState
```

<a id="return-value"></a>

## Return Value

A new instance containing the current state of the physical device input.

## See Also

### Handling device input

- [nextInputState()](nextinputstate%28%29.md): Returns the next device input state from the queue.

# capture (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a snapshot of the physical device inputs.

## Declaration

```objectivec
- (GCControllerInputState *) capture;
```

<a id="return-value"></a>

## Return Value

A new instance containing the current state of the physical device input.

## See Also

### Handling device input

- [nextInputState](nextinputstate%28%29.md): Returns the next device input state from the queue.
