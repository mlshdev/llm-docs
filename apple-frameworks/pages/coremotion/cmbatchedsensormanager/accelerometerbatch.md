> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmbatchedsensormanager/accelerometerbatch](https://developer.apple.com/documentation/coremotion/cmbatchedsensormanager/accelerometerbatch)

# accelerometerBatch (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
var accelerometerBatch: [CMAccelerometerData]? { get }
```

## See Also

### Collecting accelerometer data

- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md)
- [startAccelerometerUpdates(handler:)](startaccelerometerupdates%28handler_%29.md)
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md)
- [accelerometerUpdates()](accelerometerupdates%28%29.md)
- [CMBatchedSensorManager.AccelerometerUpdates](accelerometerupdates.md)
- [isAccelerometerActive](isaccelerometeractive.md)

# accelerometerBatch (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
@property (readonly, nullable) NSArray<CMAccelerometerData *> * accelerometerBatch;
```

## See Also

### Collecting accelerometer data

- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md)
- [startAccelerometerUpdatesWithHandler:](startaccelerometerupdates%28handler_%29.md)
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md)
- [accelerometerActive](isaccelerometeractive.md)
