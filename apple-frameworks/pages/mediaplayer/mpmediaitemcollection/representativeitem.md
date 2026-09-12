> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemcollection/representativeitem](https://developer.apple.com/documentation/mediaplayer/mpmediaitemcollection/representativeitem)

# representativeItem (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A media item whose properties are representative of the other media items in a collection.

## Declaration

```swift
var representativeItem: MPMediaItem? { get }
```

<a id="Discussion"></a>

## Discussion

The media items in a collection typically share common property values, owing to how you built the collection. For example, if you build a collection based on a predicate that uses the [MPMediaItemPropertyArtist](../mpmediaitempropertyartist.md) property, all items in the collection share the same artist name. You can use the `representativeItem` property to efficiently obtain values for such common properties—often more efficiently than fetching an item from the [items](items.md) array.

## See Also

### Using a media item collection

- [items](items.md): The media items in a media item collection.
- [count](count.md): The number of media items in a collection.
- [mediaTypes](mediatypes.md): The types of the media items in a collection.

# representativeItem (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A media item whose properties are representative of the other media items in a collection.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MPMediaItem * representativeItem;
```

<a id="Discussion"></a>

## Discussion

The media items in a collection typically share common property values, owing to how you built the collection. For example, if you build a collection based on a predicate that uses the [MPMediaItemPropertyArtist](../mpmediaitempropertyartist.md) property, all items in the collection share the same artist name. You can use the `representativeItem` property to efficiently obtain values for such common properties—often more efficiently than fetching an item from the [items](items.md) array.

## See Also

### Using a media item collection

- [items](items.md): The media items in a media item collection.
- [count](count.md): The number of media items in a collection.
- [mediaTypes](mediatypes.md): The types of the media items in a collection.
