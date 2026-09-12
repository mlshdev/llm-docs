> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintent/mediaitems](https://developer.apple.com/documentation/intents/insearchformediaintent/mediaitems)

# mediaItems (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media items for which to search.

## Declaration

```swift
var mediaItems: [INMediaItem]? { get }
```

<a id="Discussion"></a>

## Discussion

A media item such as a song, TV show, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](mediaitems.md) when creating the [INSearchForMediaIntent](../insearchformediaintent.md) object.

## See Also

### Searching for Media

- [mediaSearch](mediasearch.md): The location to search for the media item.

# mediaItems (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media items for which to search.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

<a id="Discussion"></a>

## Discussion

A media item such as a song, TV show, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](mediaitems.md) when creating the [INSearchForMediaIntent](../insearchformediaintent.md) object.

## See Also

### Searching for Media

- [mediaSearch](mediasearch.md): The location to search for the media item.
