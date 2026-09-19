> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmbatchedsensormanager/isaccelerometeractive

# isAccelerometerActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
var isAccelerometerActive: Bool { get }
```

## See Also

### Collecting accelerometer data

- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md)
- [startAccelerometerUpdates(handler:)](startaccelerometerupdates%28handler_%29.md)
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md)
- [accelerometerBatch](accelerometerbatch.md)
- [accelerometerUpdates()](accelerometerupdates%28%29.md)
- [CMBatchedSensorManager.AccelerometerUpdates](accelerometerupdates.md)

# accelerometerActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAccelerometerActive) BOOL accelerometerActive;
```

## See Also

### Collecting accelerometer data

- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md)
- [startAccelerometerUpdatesWithHandler:](startaccelerometerupdates%28handler_%29.md)
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md)
- [accelerometerBatch](accelerometerbatch.md)
