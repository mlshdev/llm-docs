> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/startitem](https://developer.apple.com/documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/startitem)

# startItem (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Designates the media item to play first.

## Declaration

```swift
var startItem: MPMediaItem? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property isn’t set, the value is [nil](../../objectivec/nil-227m0.md) and the first item in the queue is the first item to play.

## See Also

### Media item queue descriptor properties

- [itemCollection](itemcollection.md): Contains the media item collection used to create the queue descriptor.
- [query](query.md): Contains the media items found by the query used to create the queue descriptor.

# startItem (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Designates the media item to play first.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) MPMediaItem * startItem;
```

<a id="Discussion"></a>

## Discussion

When this property isn’t set, the value is [nil](../../objectivec/nil-227m0.md) and the first item in the queue is the first item to play.

## See Also

### Media item queue descriptor properties

- [itemCollection](itemcollection.md): Contains the media item collection used to create the queue descriptor.
- [query](query.md): Contains the media items found by the query used to create the queue descriptor.
