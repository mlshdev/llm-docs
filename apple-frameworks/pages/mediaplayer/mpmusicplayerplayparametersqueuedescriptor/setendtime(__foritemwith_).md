> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/setendtime(_:foritemwith:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/setendtime(_:foritemwith:))

# setEndTime(\_:forItemWith:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the item with the associated play parameters is to stop playing.

## Declaration

```swift
func setEndTime(_ endTime: TimeInterval, forItemWith playParameters: MPMusicPlayerPlayParameters)
```

## Parameters

- `endTime`: The [TimeInterval](../../foundation/timeinterval.md) describing when the item with designated play parameters stops playing.
- `playParameters`: The play parameters associated with the item in the queue that has a changed end time.

## See Also

### Setting start and end times

- [setStartTime(\_:forItemWith:)](setstarttime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to start playing.

# setEndTime:forItemWithPlayParameters: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the item with the associated play parameters is to stop playing.

## Declaration

```objectivec
- (void) setEndTime:(NSTimeInterval) endTime forItemWithPlayParameters:(MPMusicPlayerPlayParameters *) playParameters;
```

## Parameters

- `endTime`: The [NSTimeInterval](../../foundation/timeinterval.md) describing when the item with designated play parameters stops playing.
- `playParameters`: The play parameters associated with the item in the queue that has a changed end time.

## See Also

### Setting start and end times

- [setStartTime:forItemWithPlayParameters:](setstarttime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to start playing.
