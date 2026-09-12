> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediamediadestinationunsupportedreason](https://developer.apple.com/documentation/intents/inaddmediamediadestinationunsupportedreason)

# INAddMediaMediaDestinationUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons describing why the destination is not supported.

## Declaration

```swift
enum INAddMediaMediaDestinationUnsupportedReason
```

## Topics

### Reasons

- [INAddMediaMediaDestinationUnsupportedReason.playlistNameNotFound](inaddmediamediadestinationunsupportedreason/playlistnamenotfound.md): The app was unable to find a playlist with that name.
- [INAddMediaMediaDestinationUnsupportedReason.playlistNotEditable](inaddmediamediadestinationunsupportedreason/playlistnoteditable.md): The user can’t modify the destination playlist.

### Initializers

- [init(rawValue:)](inaddmediamediadestinationunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result

- [init(mediaDestinationResolutionResult:)](inaddmediamediadestinationresolutionresult/init%28mediadestinationresolutionresult_%29.md): Creates an object whose resolution involves successfully adding a media item to a particular destination.
- [unsupported(forReason:)](inaddmediamediadestinationresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the media destination.

# INAddMediaMediaDestinationUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons describing why the destination is not supported.

## Declaration

```objectivec
enum INAddMediaMediaDestinationUnsupportedReason : NSInteger;
```

## Topics

### Reasons

- [INAddMediaMediaDestinationUnsupportedReasonPlaylistNameNotFound](inaddmediamediadestinationunsupportedreason/playlistnamenotfound.md): The app was unable to find a playlist with that name.
- [INAddMediaMediaDestinationUnsupportedReasonPlaylistNotEditable](inaddmediamediadestinationunsupportedreason/playlistnoteditable.md): The user can’t modify the destination playlist.

## See Also

### Creating a Resolution Result

- [initWithMediaDestinationResolutionResult:](inaddmediamediadestinationresolutionresult/init%28mediadestinationresolutionresult_%29.md): Creates an object whose resolution involves successfully adding a media item to a particular destination.
- [unsupportedForReason:](inaddmediamediadestinationresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the media destination.
