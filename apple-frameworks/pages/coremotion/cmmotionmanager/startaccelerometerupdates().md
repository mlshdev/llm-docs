> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startaccelerometerupdates()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startaccelerometerupdates())

# startAccelerometerUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts accelerometer updates without a handler.

## Declaration

```swift
func startAccelerometerUpdates()
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

You can get the latest accelerometer data through the [accelerometerData](accelerometerdata.md) property. You must call [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md) when you no longer want your app to process accelerometer updates.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdates(to:withHandler:)](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.

# startAccelerometerUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts accelerometer updates without a handler.

## Declaration

```objectivec
- (void) startAccelerometerUpdates;
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

<a id="Discussion"></a>

## Discussion

You can get the latest accelerometer data through the [accelerometerData](accelerometerdata.md) property. You must call [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md) when you no longer want your app to process accelerometer updates.

## See Also

### Managing Accelerometer Updates

- [accelerometerUpdateInterval](accelerometerupdateinterval.md): The interval, in seconds, for providing accelerometer updates to the block handler.
- [startAccelerometerUpdatesToQueue:withHandler:](startaccelerometerupdates%28to_withhandler_%29.md): Starts accelerometer updates on an operation queue and with a specified handler.
- [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md): Stops accelerometer updates.
- [accelerometerData](accelerometerdata.md): The latest sample of accelerometer data.
- [CMAccelerometerHandler](../cmaccelerometerhandler.md): The type of block callback for handling accelerometer data.
