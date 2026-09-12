> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/query](https://developer.apple.com/documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/query)

# query (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Contains the media items found by the query used to create the queue descriptor.

## Declaration

```swift
@NSCopying var query: MPMediaQuery { get }
```

## See Also

### Media item queue descriptor properties

- [itemCollection](itemcollection.md): Contains the media item collection used to create the queue descriptor.
- [startItem](startitem.md): Designates the media item to play first.

# query (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Contains the media items found by the query used to create the queue descriptor.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) MPMediaQuery * query;
```

## See Also

### Media item queue descriptor properties

- [itemCollection](itemcollection.md): Contains the media item collection used to create the queue descriptor.
- [startItem](startitem.md): Designates the media item to play first.
