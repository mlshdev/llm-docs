> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/gyrodata](https://developer.apple.com/documentation/coremotion/cmmotionmanager/gyrodata)

# gyroData (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The latest sample of gyroscope data.

## Declaration

```swift
var gyroData: CMGyroData? { get }
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

If no gyroscope data is available, the value of this property is `nil`. An app that is receiving gyroscope data after calling [startGyroUpdates()](startgyroupdates%28%29.md) periodically checks the value of this property and processes the gyroscope data.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates(to:withHandler:)](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates()](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates()](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.

# gyroData (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The latest sample of gyroscope data.

## Declaration

```objectivec
@property (readonly, nullable) CMGyroData * gyroData;
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

<a id="Discussion"></a>

## Discussion

If no gyroscope data is available, the value of this property is `nil`. An app that is receiving gyroscope data after calling [startGyroUpdates](startgyroupdates%28%29.md) periodically checks the value of this property and processes the gyroscope data.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdatesToQueue:withHandler:](startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates](startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates](stopgyroupdates%28%29.md): Stops gyroscope updates.
- [CMGyroHandler](../cmgyrohandler.md): The type of block callback for handling gyroscope data.
