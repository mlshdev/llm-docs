> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintent/mediasearch](https://developer.apple.com/documentation/intents/insearchformediaintent/mediasearch)

# mediaSearch (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The location to search for the media item.

## Declaration

```swift
@NSCopying var mediaSearch: INMediaSearch? { get }
```

<a id="Discussion"></a>

## Discussion

Depending on the user’s request, you may need to search for a particular media item. For example, adding a specific song would set `mediaSearch` to [mediaName](../inmediasearch/medianame.md) to “name” and [mediaType](../inmediasearch/mediatype.md) to [INMediaItemType.song](../inmediaitemtype/song.md).

## See Also

### Searching for Media

- [mediaItems](mediaitems.md): The media items for which to search.

# mediaSearch (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The location to search for the media item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INMediaSearch * mediaSearch;
```

```objectivec
@property (atomic, copy, readonly, nullable) INMediaSearch * mediaSearch;
```

<a id="Discussion"></a>

## Discussion

Depending on the user’s request, you may need to search for a particular media item. For example, adding a specific song would set `mediaSearch` to [mediaName](../inmediasearch/medianame.md) to “name” and [mediaType](../inmediasearch/mediatype.md) to [INMediaItemTypeSong](../inmediaitemtype/song.md).

## See Also

### Searching for Media

- [mediaItems](mediaitems.md): The media items for which to search.
