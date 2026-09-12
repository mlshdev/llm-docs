> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/setstarttime(_:foritemwithstoreid:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/setstarttime(_:foritemwithstoreid:))

# setStartTime(\_:forItemWithStoreID:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the designated store item is to start playing.

## Declaration

```swift
func setStartTime(_ startTime: TimeInterval, forItemWithStoreID storeID: String)
```

## Parameters

- `startTime`: The [TimeInterval](../../foundation/timeinterval.md) describing when the store item starts playing.
- `storeID`: The store identifier associated with the item in the queue that has a changed start time.

## See Also

### Setting start and end times

- [setEndTime(\_:forItemWithStoreID:)](setendtime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to stop playing.

# setStartTime:forItemWithStoreID: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the designated store item is to start playing.

## Declaration

```objectivec
- (void) setStartTime:(NSTimeInterval) startTime forItemWithStoreID:(NSString *) storeID;
```

## Parameters

- `startTime`: The [NSTimeInterval](../../foundation/timeinterval.md) describing when the store item starts playing.
- `storeID`: The store identifier associated with the item in the queue that has a changed start time.

## See Also

### Setting start and end times

- [setEndTime:forItemWithStoreID:](setendtime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to stop playing.
