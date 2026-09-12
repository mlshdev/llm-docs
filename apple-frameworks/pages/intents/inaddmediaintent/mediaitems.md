> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintent/mediaitems](https://developer.apple.com/documentation/intents/inaddmediaintent/mediaitems)

# mediaItems (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media content to add.

## Declaration

```swift
var mediaItems: [INMediaItem]? { get }
```

<a id="Discussion"></a>

## Discussion

A media item such as a song, audiobook, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](../inplaymediaintent/mediaitems.md) when creating the [INAddMediaIntent](../inaddmediaintent.md) object.

## See Also

### Accessing the Media

- [mediaSearch](mediasearch.md): The location to search for the media item to add.
- [mediaDestination](mediadestination.md): The location for the media to add.
- [INMediaDestination](../inmediadestination-swift.enum.md): An object that describes the destination for a media item.
- [INMediaDestinationReference](../inmediadestinationreference.md): An object that describes the destination for a media item.

# mediaItems (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media content to add.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

<a id="Discussion"></a>

## Discussion

A media item such as a song, audiobook, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](../inplaymediaintent/mediaitems.md) when creating the [INAddMediaIntent](../inaddmediaintent.md) object.

## See Also

### Accessing the Media

- [mediaSearch](mediasearch.md): The location to search for the media item to add.
- [mediaDestination](mediadestination.md): The location for the media to add.
- [INMediaDestination](../inmediadestinationreference.md): An object that describes the destination for a media item.
