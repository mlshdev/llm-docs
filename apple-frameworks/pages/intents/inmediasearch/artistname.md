> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch/artistname](https://developer.apple.com/documentation/intents/inmediasearch/artistname)

# artistName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The name of the artist to search for.

## Declaration

```swift
var artistName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Only use this property for combination queries in conjunction with the [mediaName](medianame.md) property. For example, “Play the song requestedSongName on the album requestedAlbumName by requestedArtistName”.

```swift
{
  mediaName: requestedSongName
  mediaType: song
  albumName: requestedAlbumName
  artistName: requestedArtistName
}
```

Do not use this property when the user requests to play an artist. For example, “Play the band requestedArtistName”.

```swift
{
  mediaName: requestedArtistName
  mediaType: artist
}
```

## See Also

### Modifying the Media Name

- [albumName](albumname.md): The name of the album to search for.

# artistName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The name of the artist to search for.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * artistName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * artistName;
```

<a id="Discussion"></a>

## Discussion

Only use this property for combination queries in conjunction with the [mediaName](medianame.md) property. For example, “Play the song requestedSongName on the album requestedAlbumName by requestedArtistName”.

```swift
{
  mediaName: requestedSongName
  mediaType: song
  albumName: requestedAlbumName
  artistName: requestedArtistName
}
```

Do not use this property when the user requests to play an artist. For example, “Play the band requestedArtistName”.

```swift
{
  mediaName: requestedArtistName
  mediaType: artist
}
```

## See Also

### Modifying the Media Name

- [albumName](albumname.md): The name of the album to search for.
