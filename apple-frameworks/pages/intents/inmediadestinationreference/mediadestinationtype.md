> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationreference/mediadestinationtype](https://developer.apple.com/documentation/intents/inmediadestinationreference/mediadestinationtype)

# mediaDestinationType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The destination of the media your app adds.

## Declaration

```swift
var mediaDestinationType: INMediaDestinationType { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether to add the media item to the library or a playlist.

## See Also

### Describing the Media Destination

- [playlistName](playlistname.md): The name of the playlist to which you add the media.
- [INMediaDestinationType](../inmediadestinationtype.md): Constants that describe the different media destination types.

# mediaDestinationType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The destination of the media your app adds.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INMediaDestinationType mediaDestinationType;
```

```objectivec
@property (atomic, assign, readonly) INMediaDestinationType mediaDestinationType;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether to add the media item to the library or a playlist.

## See Also

### Describing the Media Destination

- [playlistName](playlistname.md): The name of the playlist to which you add the media.
- [INMediaDestinationType](../inmediadestinationtype.md): Constants that describe the different media destination types.
