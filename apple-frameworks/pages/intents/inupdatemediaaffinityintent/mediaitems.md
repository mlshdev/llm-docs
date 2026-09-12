> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintent/mediaitems](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintent/mediaitems)

# mediaItems (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media items to update.

## Declaration

```swift
var mediaItems: [INMediaItem]? { get }
```

<a id="Discussion"></a>

## Discussion

A media item such as a song, audiobook, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](mediaitems.md) when creating the [INSearchForMediaIntent](../insearchformediaintent.md) object.

## See Also

### Getting the Media Information

- [affinityType](affinitytype.md): The user’s affinity for the media item.
- [INMediaAffinityType](../inmediaaffinitytype.md): Constants that describe a user’s affinity for a media item.
- [mediaSearch](mediasearch.md): The type of item to search for.

# mediaItems (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media items to update.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

<a id="Discussion"></a>

## Discussion

A media item such as a song, audiobook, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](mediaitems.md) when creating the [INSearchForMediaIntent](../insearchformediaintent.md) object.

## See Also

### Getting the Media Information

- [affinityType](affinitytype.md): The user’s affinity for the media item.
- [INMediaAffinityType](../inmediaaffinitytype.md): Constants that describe a user’s affinity for a media item.
- [mediaSearch](mediasearch.md): The type of item to search for.
