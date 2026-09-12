> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/setendtime(_:foritemwithstoreid:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/setendtime(_:foritemwithstoreid:))

# setEndTime(\_:forItemWithStoreID:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the designated store item is to stop playing.

## Declaration

```swift
func setEndTime(_ endTime: TimeInterval, forItemWithStoreID storeID: String)
```

## Parameters

- `endTime`: The [TimeInterval](../../foundation/timeinterval.md) describing when the store item stops playing.
- `storeID`: The store identifier associated with the item in the queue that has a changed end time.

## See Also

### Setting start and end times

- [setStartTime(\_:forItemWithStoreID:)](setstarttime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to start playing.

# setEndTime:forItemWithStoreID: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Sets the time the designated store item is to stop playing.

## Declaration

```objectivec
- (void) setEndTime:(NSTimeInterval) endTime forItemWithStoreID:(NSString *) storeID;
```

## Parameters

- `endTime`: The [NSTimeInterval](../../foundation/timeinterval.md) describing when the store item stops playing.
- `storeID`: The store identifier associated with the item in the queue that has a changed end time.

## See Also

### Setting start and end times

- [setStartTime:forItemWithStoreID:](setstarttime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to start playing.
