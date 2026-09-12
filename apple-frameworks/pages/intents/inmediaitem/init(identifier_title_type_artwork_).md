> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitem/init(identifier:title:type:artwork:)](https://developer.apple.com/documentation/intents/inmediaitem/init(identifier:title:type:artwork:))

# init(identifier:title:type:artwork:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a media item with an identifier, title, type, and artwork.

## Declaration

```swift
convenience init(identifier: String?, title: String?, type: INMediaItemType, artwork: INImage?)
```

## Parameters

- `identifier`: The value your app uses to identify the media item.
- `title`: The media title.
- `type`: The media type.
- `artwork`: An image that represents a media item such as an album cover.

<a id="return-value"></a>

## Return Value

A newly initialized media item object.

## See Also

### Creating a Media Item

- [init(identifier:title:type:artwork:artist:)](init%28identifier_title_type_artwork_artist_%29.md): Creates a media item with an identifier, title, type, artwork, and artist.

# initWithIdentifier:title:type:artwork: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a media item with an identifier, title, type, and artwork.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier title:(NSString *) title type:(INMediaItemType) type artwork:(INImage *) artwork;
```

## Parameters

- `identifier`: The value your app uses to identify the media item.
- `title`: The media title.
- `type`: The media type.
- `artwork`: An image that represents a media item such as an album cover.

<a id="return-value"></a>

## Return Value

A newly initialized media item object.

## See Also

### Creating a Media Item

- [initWithIdentifier:title:type:artwork:artist:](init%28identifier_title_type_artwork_artist_%29.md): Creates a media item with an identifier, title, type, artwork, and artist.
