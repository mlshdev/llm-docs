> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaaffinitytype](https://developer.apple.com/documentation/intents/inmediaaffinitytype)

# INMediaAffinityType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe a user’s affinity for a media item.

## Declaration

```swift
enum INMediaAffinityType
```

## Topics

### Constants

- [INMediaAffinityType.unknown](inmediaaffinitytype/unknown.md): A type that indicates the user’s affinity for the media item is unknown.
- [INMediaAffinityType.like](inmediaaffinitytype/like.md): A type that indicates the user likes the media item.
- [INMediaAffinityType.dislike](inmediaaffinitytype/dislike.md): A type that indicates the user dislikes the media item.

### Initializers

- [init(rawValue:)](inmediaaffinitytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Media Information

- [affinityType](inupdatemediaaffinityintent/affinitytype.md): The user’s affinity for the media item.
- [mediaItems](inupdatemediaaffinityintent/mediaitems.md): The media items to update.
- [mediaSearch](inupdatemediaaffinityintent/mediasearch.md): The type of item to search for.

# INMediaAffinityType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe a user’s affinity for a media item.

## Declaration

```objectivec
enum INMediaAffinityType : NSInteger;
```

## Topics

### Constants

- [INMediaAffinityTypeUnknown](inmediaaffinitytype/unknown.md): A type that indicates the user’s affinity for the media item is unknown.
- [INMediaAffinityTypeLike](inmediaaffinitytype/like.md): A type that indicates the user likes the media item.
- [INMediaAffinityTypeDislike](inmediaaffinitytype/dislike.md): A type that indicates the user dislikes the media item.

## See Also

### Getting the Media Information

- [affinityType](inupdatemediaaffinityintent/affinitytype.md): The user’s affinity for the media item.
- [mediaItems](inupdatemediaaffinityintent/mediaitems.md): The media items to update.
- [mediaSearch](inupdatemediaaffinityintent/mediasearch.md): The type of item to search for.
