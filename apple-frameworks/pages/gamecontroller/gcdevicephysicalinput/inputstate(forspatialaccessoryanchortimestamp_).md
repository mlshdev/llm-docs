> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/inputstate(forspatialaccessoryanchortimestamp:)](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/inputstate(forspatialaccessoryanchortimestamp:))

# inputState(forSpatialAccessoryAnchorTimestamp:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Returns the buffered input state that best aligns with the provided spatial accessory anchor timestamp.

## Declaration

```swift
func inputState(forSpatialAccessoryAnchorTimestamp timestamp: TimeInterval) -> (any GCDevicePhysicalInputState)?
```

## Parameters

- `timestamp`: The timestamp obtained from `ar_accessory_anchor_get_timestamp` for a spatial accessory anchor.

<a id="return-value"></a>

## Return Value

The buffered accessory input state that most closely aligns with the provided spatial accessory anchor timestamp.

# inputStateForSpatialAccessoryAnchorTimestamp: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Returns the buffered input state that best aligns with the provided spatial accessory anchor timestamp.

## Declaration

```objectivec
- (id<GCDevicePhysicalInputState>) inputStateForSpatialAccessoryAnchorTimestamp:(NSTimeInterval) timestamp;
```

## Parameters

- `timestamp`: The timestamp obtained from `ar_accessory_anchor_get_timestamp` for a spatial accessory anchor.

<a id="return-value"></a>

## Return Value

The buffered accessory input state that most closely aligns with the provided spatial accessory anchor timestamp.
