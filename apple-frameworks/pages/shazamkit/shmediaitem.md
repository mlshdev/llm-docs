> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem](https://developer.apple.com/documentation/shazamkit/shmediaitem)

# SHMediaItem (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents the metadata for a reference signature.

## Declaration

```swift
class SHMediaItem
```

<a id="overview"></a>

## Overview

This class uses subscripting for the data elements of a custom media item that an existing property doesn’t already represent.

Add a readable custom property by extending [SHMediaItemProperty](shmediaitemproperty.md) with a key for that property, and by extending this class with a property that uses the key. The following code shows the extensions for an episode number:

```swift
// Add an episode number to the list of properties.
extension SHMediaItemProperty {
    static let episode = SHMediaItemProperty("Episode")
}

// Add a property for returning the episode number using a subscript.
extension SHMediaItem {
    var episode: Int? {
        return self[.episode] as? Int
    }
}
```

Add your custom property when you create the media item as the following code shows:

```swift
// Create a new media item and set the title, subtitle, and episode properties.
let mediaItem = SHMediaItem(properties: [.episode: 42,
                                         .title: "Question",
                                         .subtitle: "The Answer"])
```

> **Note**

>  The class of the object that represents a custom object must be one of: `Dictionary`, `Array`, `URL`, `Number`, `String`, `Date`, or `Data`.

## Topics

### Creating a new media item object

- [init(properties:)](shmediaitem/init%28properties_%29.md): Creates a media item object with a dictionary of properties and their associated values.

### Working with media item properties

- [subscript(\_:)](shmediaitem/subscript%28__%29.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](shmediaitem/timeranges-8msna.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](shmediaitem/frequencyskewranges-1j7d3.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.

### Reading general media item properties

- [title](shmediaitem/title.md): A title for the media item.
- [subtitle](shmediaitem/subtitle.md): A subtitle for the media item.
- [artist](shmediaitem/artist.md): The name of the artist for the media item, such as the performer of a song.
- [artworkURL](shmediaitem/artworkurl.md): The URL for artwork for the media item, such as an album cover.
- [videoURL](shmediaitem/videourl.md): The URL for a video for the media item, such as a music video.
- [genres](shmediaitem/genres.md): An array of genre names for the media item.
- [explicitContent](shmediaitem/explicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [creationDate](shmediaitem/creationdate.md): The date the media item was created.
- [isrc](shmediaitem/isrc.md): The International Standard Recording Code (ISRC) for the media item.
- [id](shmediaitem/id.md): A unique identifier for this media item.

### Reading Apple Music properties

- [songs](shmediaitem/songs.md): Deprecated. An array of MusicKit song objects that represent the song.
- [appleMusicURL](shmediaitem/applemusicurl.md): A link to the Apple Music page that contains the full information for the song.
- [appleMusicID](shmediaitem/applemusicid.md): The Apple Music ID for the song.

### Working with Shazam music catalog media items

- [webURL](shmediaitem/weburl.md): A link to the Shazam Music catalog page that contains the full information for the song.
- [shazamID](shmediaitem/shazamid.md): The Shazam ID for the song.
- [fetch(shazamID:completionHandler:)](shmediaitem/fetch%28shazamid_completionhandler_%29.md): Requests the media item for the song with the specified Shazam ID.

### Initializers

- [init(coder:)](shmediaitem/init%28coder_%29.md)

### Instance Methods

- [songs()](shmediaitem/songs%28%29.md): An array of MusicKit song objects that represent the media item.

### Default Implementations

- [Identifiable Implementations](shmediaitem/identifiable-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SHMatchedMediaItem](shmatchedmediaitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHManagedSession](shmanagedsession.md): An object that records and matches a recording with captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.

# SHMediaItem (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents the metadata for a reference signature.

## Declaration

```objectivec
@interface SHMediaItem : NSObject
```

<a id="overview"></a>

## Overview

This class uses subscripting for the data elements of a custom media item that an existing property doesn’t already represent.

Add a readable custom property by extending [SHMediaItemProperty](shmediaitemproperty.md) with a key for that property, and by extending this class with a property that uses the key. The following code shows the extensions for an episode number:

```swift
// Add an episode number to the list of properties.
extension SHMediaItemProperty {
    static let episode = SHMediaItemProperty("Episode")
}

// Add a property for returning the episode number using a subscript.
extension SHMediaItem {
    var episode: Int? {
        return self[.episode] as? Int
    }
}
```

Add your custom property when you create the media item as the following code shows:

```swift
// Create a new media item and set the title, subtitle, and episode properties.
let mediaItem = SHMediaItem(properties: [.episode: 42,
                                         .title: "Question",
                                         .subtitle: "The Answer"])
```

> **Note**

>  The class of the object that represents a custom object must be one of: `Dictionary`, `Array`, `URL`, `Number`, `String`, `Date`, or `Data`.

## Topics

### Creating a new media item object

- [mediaItemWithProperties:](shmediaitem/mediaitemwithproperties_.md): Creates a media item object with a dictionary of properties and their associated values.

### Working with media item properties

- [objectForKeyedSubscript:](shmediaitem/subscript%28__%29.md): Accesses the property for the specified key for reading.
- [valueForProperty:](shmediaitem/valueforproperty_.md): Accesses the property for the specified key for reading.
- [SHMediaItemProperty](shmediaitemproperty.md): Constants for the media item property names.
- [timeRanges](shmediaitem/timeranges-43654.md): An array of ranges that indicate the offsets within the reference signature that this media item describes.
- [frequencySkewRanges](shmediaitem/frequencyskewranges-4yqx.md): An array of ranges that indicate the frequency skews in the reference signature that this media item describes.
- [SHRange](shrange.md): A half-open interval from a lower bound up to, but not including, an upper bound.

### Reading general media item properties

- [title](shmediaitem/title.md): A title for the media item.
- [subtitle](shmediaitem/subtitle.md): A subtitle for the media item.
- [artist](shmediaitem/artist.md): The name of the artist for the media item, such as the performer of a song.
- [artworkURL](shmediaitem/artworkurl.md): The URL for artwork for the media item, such as an album cover.
- [videoURL](shmediaitem/videourl.md): The URL for a video for the media item, such as a music video.
- [genres](shmediaitem/genres.md): An array of genre names for the media item.
- [explicitContent](shmediaitem/explicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [creationDate](shmediaitem/creationdate.md): The date the media item was created.
- [isrc](shmediaitem/isrc.md): The International Standard Recording Code (ISRC) for the media item.

### Reading Apple Music properties

- [appleMusicURL](shmediaitem/applemusicurl.md): A link to the Apple Music page that contains the full information for the song.
- [appleMusicID](shmediaitem/applemusicid.md): The Apple Music ID for the song.

### Working with Shazam music catalog media items

- [webURL](shmediaitem/weburl.md): A link to the Shazam Music catalog page that contains the full information for the song.
- [shazamID](shmediaitem/shazamid.md): The Shazam ID for the song.
- [fetchMediaItemWithShazamID:completionHandler:](shmediaitem/fetch%28shazamid_completionhandler_%29.md): Requests the media item for the song with the specified Shazam ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SHMatchedMediaItem](shmatchedmediaitem.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Match audio

- [SHSession](shsession.md): An object that matches a specific audio recording when a segment of that recording is part of captured sound in the Shazam catalog or your custom catalog.
- [SHSessionDelegate](shsessiondelegate.md): Methods that the session calls with the result of a match request.
- [SHMatch](shmatch.md): An object that represents the catalog media items that match a query.
- [SHMatchedMediaItem](shmatchedmediaitem.md): An object that represents the metadata for a matched reference signature.
