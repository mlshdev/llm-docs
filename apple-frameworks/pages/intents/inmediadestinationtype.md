> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationtype](https://developer.apple.com/documentation/intents/inmediadestinationtype)

# INMediaDestinationType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the different media destination types.

## Declaration

```swift
enum INMediaDestinationType
```

## Topics

### Constants

- [INMediaDestinationType.unknown](inmediadestinationtype/unknown.md): A type where the media destination is unknown.
- [INMediaDestinationType.library](inmediadestinationtype/library.md): A type where the media destination is a library.
- [INMediaDestinationType.playlist](inmediadestinationtype/playlist.md): A type where the media destination is a playlist.

### Initializers

- [init(rawValue:)](inmediadestinationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the Media Destination

- [playlistName](inmediadestinationreference/playlistname.md): The name of the playlist to which you add the media.
- [mediaDestinationType](inmediadestinationreference/mediadestinationtype.md): The destination of the media your app adds.

# INMediaDestinationType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the different media destination types.

## Declaration

```objectivec
enum INMediaDestinationType : NSInteger;
```

## Topics

### Constants

- [INMediaDestinationTypeUnknown](inmediadestinationtype/unknown.md): A type where the media destination is unknown.
- [INMediaDestinationTypeLibrary](inmediadestinationtype/library.md): A type where the media destination is a library.
- [INMediaDestinationTypePlaylist](inmediadestinationtype/playlist.md): A type where the media destination is a playlist.

## See Also

### Describing the Media Destination

- [playlistName](inmediadestinationreference/playlistname.md): The name of the playlist to which you add the media.
- [mediaDestinationType](inmediadestinationreference/mediadestinationtype.md): The destination of the media your app adds.
