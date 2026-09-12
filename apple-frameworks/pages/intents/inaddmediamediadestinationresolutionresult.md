> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediamediadestinationresolutionresult](https://developer.apple.com/documentation/intents/inaddmediamediadestinationresolutionresult)

# INAddMediaMediaDestinationResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the types of destinations when adding media.

## Declaration

```swift
class INAddMediaMediaDestinationResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INAddMediaMediaDestinationResolutionResult](inaddmediamediadestinationresolutionresult.md) object when resolving parameters containing an [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [init(mediaDestinationResolutionResult:)](inaddmediamediadestinationresolutionresult/init%28mediadestinationresolutionresult_%29.md): Creates an object whose resolution involves successfully adding a media item to a particular destination.
- [unsupported(forReason:)](inaddmediamediadestinationresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the media destination.
- [INAddMediaMediaDestinationUnsupportedReason](inaddmediamediadestinationunsupportedreason.md): Reasons describing why the destination is not supported.

## Relationships

### Inherits From

- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

# INAddMediaMediaDestinationResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the types of destinations when adding media.

## Declaration

```objectivec
@interface INAddMediaMediaDestinationResolutionResult : INMediaDestinationResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INAddMediaMediaDestinationResolutionResult](inaddmediamediadestinationresolutionresult.md) object when resolving parameters containing an [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [initWithMediaDestinationResolutionResult:](inaddmediamediadestinationresolutionresult/init%28mediadestinationresolutionresult_%29.md): Creates an object whose resolution involves successfully adding a media item to a particular destination.
- [unsupportedForReason:](inaddmediamediadestinationresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the media destination.
- [INAddMediaMediaDestinationUnsupportedReason](inaddmediamediadestinationunsupportedreason.md): Reasons describing why the destination is not supported.

## Relationships

### Inherits From

- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md)

## See Also

### Resolution Results

- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.
