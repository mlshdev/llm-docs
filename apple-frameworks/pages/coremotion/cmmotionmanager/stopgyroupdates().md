> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/stopgyroupdates()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/stopgyroupdates())

# stopGyroUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Stops gyroscope updates.

## Declaration

```swift
func stopGyroUpdates()
```

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates(to:withHandler:)](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates()](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.

# stopGyroUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Stops gyroscope updates.

## Declaration

```objectivec
- (void) stopGyroUpdates;
```

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdatesToQueue:withHandler:](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [gyroData](gyrodata.md): The latest sample of gyroscope data.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.
