> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinitymediaitemresolutionresult](https://developer.apple.com/documentation/intents/inupdatemediaaffinitymediaitemresolutionresult)

# INUpdateMediaAffinityMediaItemResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for updating the user’s affinity for a media item.

## Declaration

```swift
class INUpdateMediaAffinityMediaItemResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md) object when resolving parameters containing an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Providing Successful Results

- [init(mediaItemResolutionResult:)](inupdatemediaaffinitymediaitemresolutionresult/init%28mediaitemresolutionresult_%29.md): Creates a result that involves successfully updating the user’s affinity for a media item.
- [successes(with:)](inupdatemediaaffinitymediaitemresolutionresult/successes%28with_%29.md): Creates an array of resolution results based on a set of media items you provide.

### Reporting a Problem

- [unsupported(forReason:)](inupdatemediaaffinitymediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your is unable to support the current request.
- [INUpdateMediaAffinityMediaItemUnsupportedReason](inupdatemediaaffinitymediaitemunsupportedreason.md): Reasons the app can’t update the user’s affinity for the media item.

## Relationships

### Inherits From

- [INMediaItemResolutionResult](inmediaitemresolutionresult.md)

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
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.

# INUpdateMediaAffinityMediaItemResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for updating the user’s affinity for a media item.

## Declaration

```objectivec
@interface INUpdateMediaAffinityMediaItemResolutionResult : INMediaItemResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md) object when resolving parameters containing an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Providing Successful Results

- [initWithMediaItemResolutionResult:](inupdatemediaaffinitymediaitemresolutionresult/init%28mediaitemresolutionresult_%29.md): Creates a result that involves successfully updating the user’s affinity for a media item.
- [successesWithResolvedMediaItems:](inupdatemediaaffinitymediaitemresolutionresult/successes%28with_%29.md): Creates an array of resolution results based on a set of media items you provide.

### Reporting a Problem

- [unsupportedForReason:](inupdatemediaaffinitymediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your is unable to support the current request.
- [INUpdateMediaAffinityMediaItemUnsupportedReason](inupdatemediaaffinitymediaitemunsupportedreason.md): Reasons the app can’t update the user’s affinity for the media item.

## Relationships

### Inherits From

- [INMediaItemResolutionResult](inmediaitemresolutionresult.md)

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
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
