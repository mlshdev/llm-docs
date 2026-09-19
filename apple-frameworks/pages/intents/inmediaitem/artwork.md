> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inmediaitem/artwork

# artwork (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Artwork for the media item.

## Declaration

```swift
@NSCopying var artwork: INImage? { get }
```

## See Also

### Describing the Media Item

- [identifier](identifier.md): The value your app uses to identify the media item.
- [title](title.md): The media item title.
- [artist](artist.md): The artist associated with the media item.
- [type](type.md): The media item type.
- [INMediaItemType](../inmediaitemtype.md): The type of content the media item describes.

# artwork (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Artwork for the media item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INImage * artwork;
```

```objectivec
@property (atomic, copy, readonly, nullable) INImage * artwork;
```

## See Also

### Describing the Media Item

- [identifier](identifier.md): The value your app uses to identify the media item.
- [title](title.md): The media item title.
- [artist](artist.md): The artist associated with the media item.
- [type](type.md): The media item type.
- [INMediaItemType](../inmediaitemtype.md): The type of content the media item describes.
