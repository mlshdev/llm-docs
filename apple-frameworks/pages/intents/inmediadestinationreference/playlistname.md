> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inmediadestinationreference/playlistname

# playlistName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The name of the playlist to which you add the media.

## Declaration

```swift
var playlistName: String? { get }
```

## See Also

### Describing the Media Destination

- [mediaDestinationType](mediadestinationtype.md): The destination of the media your app adds.
- [INMediaDestinationType](../inmediadestinationtype.md): Constants that describe the different media destination types.

# playlistName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The name of the playlist to which you add the media.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * playlistName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * playlistName;
```

## See Also

### Describing the Media Destination

- [mediaDestinationType](mediadestinationtype.md): The destination of the media your app adds.
- [INMediaDestinationType](../inmediadestinationtype.md): Constants that describe the different media destination types.
