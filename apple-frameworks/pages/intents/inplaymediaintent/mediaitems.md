> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inplaymediaintent/mediaitems

# mediaItems (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The media content.

## Declaration

```swift
var mediaItems: [INMediaItem]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is a media item such as a song, audiobook, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](mediaitems.md) when creating the [INPlayMediaIntent](../inplaymediaintent.md) object.

## See Also

### Accessing Media Items

- [mediaContainer](mediacontainer.md): The media item container.

# mediaItems (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The media content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INMediaItem *> * mediaItems;
```

<a id="Discussion"></a>

## Discussion

This property is a media item such as a song, audiobook, or podcast episode. Although the array can contain more than one [INMediaItem](../inmediaitem.md) object, the system uses only the first item in the array. You set [mediaItems](mediaitems.md) when creating the [INPlayMediaIntent](../inplaymediaintent.md) object.

## See Also

### Accessing Media Items

- [mediaContainer](mediacontainer.md): The media item container.
