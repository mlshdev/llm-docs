> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/stopaccelerometerupdates()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/stopaccelerometerupdates())

# stopAccelerometerUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Stops accelerometer updates.

## Declaration

```swift
func stopAccelerometerUpdates()
```

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates(to:withHandler:)](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

# stopAccelerometerUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Stops accelerometer updates.

## Declaration

```objectivec
- (void) stopAccelerometerUpdates;
```

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdatesToQueue:withHandler:](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [startAccelerometerUpdates](startaccelerometerupdates%28%29.md): Starts accelerometer updates without a handler.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.
