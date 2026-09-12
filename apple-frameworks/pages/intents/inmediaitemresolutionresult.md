> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitemresolutionresult](https://developer.apple.com/documentation/intents/inmediaitemresolutionresult)

# INMediaItemResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

A resolution result for media item types.

## Declaration

```swift
class INMediaItemResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) object when resolving parameters containing an [INMediaItem](inmediaitem.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inmediaitemresolutionresult/success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [successes(with:)](inmediaitemresolutionresult/successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [confirmationRequired(with:)](inmediaitemresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguation(with:)](inmediaitemresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md)
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md)
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md)
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INAddMediaMediaDestinationResolutionResult](inaddmediamediadestinationresolutionresult.md): A resolution result for the types of destinations when adding media.
- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

# INMediaItemResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

A resolution result for media item types.

## Declaration

```objectivec
@interface INMediaItemResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) object when resolving parameters containing an [INMediaItem](inmediaitem.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedMediaItem:](inmediaitemresolutionresult/success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [successesWithResolvedMediaItems:](inmediaitemresolutionresult/successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [confirmationRequiredWithMediaItemToConfirm:](inmediaitemresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguationWithMediaItemsToDisambiguate:](inmediaitemresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md)
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md)
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md)
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md)

## See Also

### Resolution Results

- [INAddMediaMediaDestinationResolutionResult](inaddmediamediadestinationresolutionresult.md): A resolution result for the types of destinations when adding media.
- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.
