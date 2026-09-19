> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmbatchedsensormanager/startaccelerometerupdates(handler:)

# startAccelerometerUpdates(handler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func startAccelerometerUpdates(handler: @escaping ([CMAccelerometerData]?, (any Error)?) -> Void)
```

## See Also

### Collecting accelerometer data

- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md)
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md)
- [accelerometerBatch](accelerometerbatch.md)
- [accelerometerUpdates()](accelerometerupdates%28%29.md)
- [CMBatchedSensorManager.AccelerometerUpdates](accelerometerupdates.md)
- [isAccelerometerActive](isaccelerometeractive.md)

# startAccelerometerUpdatesWithHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) startAccelerometerUpdatesWithHandler:(void (^)(NSArray<CMAccelerometerData *> *data, NSError *error)) handler;
```

## See Also

### Collecting accelerometer data

- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md)
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md)
- [accelerometerBatch](accelerometerbatch.md)
- [accelerometerActive](isaccelerometeractive.md)
