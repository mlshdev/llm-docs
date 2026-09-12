> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmgyrohandler](https://developer.apple.com/documentation/coremotion/cmgyrohandler)

# CMGyroHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling gyroscope data.

## Declaration

```swift
typealias CMGyroHandler = (CMGyroData?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

Blocks of type `CMGyroHandler` are called when there is gyroscope data to process. You pass the block into [startGyroUpdates(to:withHandler:)](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value but take two arguments:

- **`gyroData`**: An object that encapsulates a [CMRotationRate](cmrotationrate.md) structure with fields holding rotation-rate values for the three axes of movement.
- **`error`**: An error object representing an error encountered in providing gyroscope data. If an error occurs, you should stop gyroscope updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](cmmotionmanager/gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdates(to:withHandler:)](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates()](cmmotionmanager/startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates()](cmmotionmanager/stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](cmmotionmanager/gyrodata.md): The latest sample of gyroscope data.

# CMGyroHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling gyroscope data.

## Declaration

```objectivec
typedef void (^)(CMGyroData *, NSError *) CMGyroHandler;
```

<a id="Discussion"></a>

## Discussion

Blocks of type `CMGyroHandler` are called when there is gyroscope data to process. You pass the block into [startGyroUpdatesToQueue:withHandler:](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value but take two arguments:

- **`gyroData`**: An object that encapsulates a [CMRotationRate](cmrotationrate.md) structure with fields holding rotation-rate values for the three axes of movement.
- **`error`**: An error object representing an error encountered in providing gyroscope data. If an error occurs, you should stop gyroscope updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Gyroscope Updates

- [gyroUpdateInterval](cmmotionmanager/gyroupdateinterval.md): The interval, in seconds, for providing gyroscope updates to the block handler.
- [startGyroUpdatesToQueue:withHandler:](cmmotionmanager/startgyroupdates%28to_withhandler_%29.md): Starts gyroscope updates on an operation queue and with a specified handler.
- [startGyroUpdates](cmmotionmanager/startgyroupdates%28%29.md): Starts gyroscope updates without a handler.
- [stopGyroUpdates](cmmotionmanager/stopgyroupdates%28%29.md): Stops gyroscope updates.
- [gyroData](cmmotionmanager/gyrodata.md): The latest sample of gyroscope data.
