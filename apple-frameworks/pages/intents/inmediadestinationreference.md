> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationreference](https://developer.apple.com/documentation/intents/inmediadestinationreference)

# INMediaDestinationReference (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes the destination for a media item.

## Declaration

```swift
class INMediaDestinationReference
```

## Topics

### Creating a Media Destination Object

- [library()](inmediadestinationreference/library%28%29.md): Creates a new library destination for the media item.
- [playlistDestination(withName:)](inmediadestinationreference/playlistdestination%28withname_%29.md): Creates a new playlist destination for the media item.

### Describing the Media Destination

- [playlistName](inmediadestinationreference/playlistname.md): The name of the playlist to which you add the media.
- [mediaDestinationType](inmediadestinationreference/mediadestinationtype.md): The destination of the media your app adds.
- [INMediaDestinationType](inmediadestinationtype.md): Constants that describe the different media destination types.

### Initializers

- [init(coder:)](inmediadestinationreference/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing the Media

- [mediaItems](inaddmediaintent/mediaitems.md): The media content to add.
- [mediaSearch](inaddmediaintent/mediasearch.md): The location to search for the media item to add.
- [mediaDestination](inaddmediaintent/mediadestination.md): The location for the media to add.
- [INMediaDestination](inmediadestination-swift.enum.md): An object that describes the destination for a media item.

# INMediaDestination (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes the destination for a media item.

## Declaration

```objectivec
@interface INMediaDestination : NSObject
```

## Topics

### Creating a Media Destination Object

- [libraryDestination](inmediadestinationreference/library%28%29.md): Creates a new library destination for the media item.
- [playlistDestinationWithName:](inmediadestinationreference/playlistdestination%28withname_%29.md): Creates a new playlist destination for the media item.

### Describing the Media Destination

- [playlistName](inmediadestinationreference/playlistname.md): The name of the playlist to which you add the media.
- [mediaDestinationType](inmediadestinationreference/mediadestinationtype.md): The destination of the media your app adds.
- [INMediaDestinationType](inmediadestinationtype.md): Constants that describe the different media destination types.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing the Media

- [mediaItems](inaddmediaintent/mediaitems.md): The media content to add.
- [mediaSearch](inaddmediaintent/mediasearch.md): The location to search for the media item to add.
- [mediaDestination](inaddmediaintent/mediadestination.md): The location for the media to add.
