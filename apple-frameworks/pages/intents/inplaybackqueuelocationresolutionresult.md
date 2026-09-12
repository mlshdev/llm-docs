> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaybackqueuelocationresolutionresult](https://developer.apple.com/documentation/intents/inplaybackqueuelocationresolutionresult)

# INPlaybackQueueLocationResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the requested playback queue location.

## Declaration

```swift
class INPlaybackQueueLocationResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md) object when resolving parameters containing an [INPlaybackQueueLocation](inplaybackqueuelocation.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Constants

- [success(with:)](inplaybackqueuelocationresolutionresult/success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequired(with:)](inplaybackqueuelocationresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [INPlaybackQueueLocation](inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

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
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

# INPlaybackQueueLocationResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the requested playback queue location.

## Declaration

```objectivec
@interface INPlaybackQueueLocationResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md) object when resolving parameters containing an [INPlaybackQueueLocation](inplaybackqueuelocation.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Constants

- [successWithResolvedPlaybackQueueLocation:](inplaybackqueuelocationresolutionresult/success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequiredWithPlaybackQueueLocationToConfirm:](inplaybackqueuelocationresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [INPlaybackQueueLocation](inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INAddMediaMediaDestinationResolutionResult](inaddmediamediadestinationresolutionresult.md): A resolution result for the types of destinations when adding media.
- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.
