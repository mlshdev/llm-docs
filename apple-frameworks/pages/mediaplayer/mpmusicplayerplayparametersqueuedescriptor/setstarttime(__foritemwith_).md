> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/setstarttime(_:foritemwith:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/setstarttime(_:foritemwith:))

# setStartTime(\_:forItemWith:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the item with the associated play parameters is to start playing.

## Declaration

```swift
func setStartTime(_ startTime: TimeInterval, forItemWith playParameters: MPMusicPlayerPlayParameters)
```

## Parameters

- `startTime`: The [TimeInterval](../../foundation/timeinterval.md) describing when the item with designated play parameters starts playing.
- `playParameters`: The play parameters associated with the item in the queue that has a changed start time.

## See Also

### Setting start and end times

- [setEndTime(\_:forItemWith:)](setendtime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to stop playing.

# setStartTime:forItemWithPlayParameters: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the item with the associated play parameters is to start playing.

## Declaration

```objectivec
- (void) setStartTime:(NSTimeInterval) startTime forItemWithPlayParameters:(MPMusicPlayerPlayParameters *) playParameters;
```

## Parameters

- `startTime`: The [NSTimeInterval](../../foundation/timeinterval.md) describing when the item with designated play parameters starts playing.
- `playParameters`: The play parameters associated with the item in the queue that has a changed start time.

## See Also

### Setting start and end times

- [setEndTime:forItemWithPlayParameters:](setendtime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to stop playing.
