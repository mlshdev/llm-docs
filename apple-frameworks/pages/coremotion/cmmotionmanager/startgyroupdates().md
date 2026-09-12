> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startgyroupdates()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startgyroupdates())

# startGyroUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts gyroscope updates without a handler.

## Declaration

```swift
func startGyroUpdates()
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

You can get the latest gyroscope data through the [gyroData](gyrodata.md) property. You must call [stopGyroUpdates()](stopgyroupdates%28%29.md) when you no longer want your app to process gyroscope updates.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates(to:withHandler:)](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [stopGyroUpdates()](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.

# startGyroUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts gyroscope updates without a handler.

## Declaration

```objectivec
- (void) startGyroUpdates;
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

You can get the latest gyroscope data through the [gyroData](gyrodata.md) property. You must call [stopGyroUpdates](stopgyroupdates%28%29.md) when you no longer want your app to process gyroscope updates.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdatesToQueue:withHandler:](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [stopGyroUpdates](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.
