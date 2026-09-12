> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediamediaitemresolutionresult](https://developer.apple.com/documentation/intents/insearchformediamediaitemresolutionresult)

# INSearchForMediaMediaItemResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the media item for which to search.

## Declaration

```swift
class INSearchForMediaMediaItemResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md) object when resolving parameters containing an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Providing Successful Results

- [init(mediaItemResolutionResult:)](insearchformediamediaitemresolutionresult/init%28mediaitemresolutionresult_%29.md): Creates a result that involves successfully searching for a media item.
- [successes(with:)](insearchformediamediaitemresolutionresult/successes%28with_%29.md): Creates an array of resolution results based on a set of media items you provide.

### Reporting a Problem

- [unsupported(forReason:)](insearchformediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request because your app is unable to support the current request.
- [INSearchForMediaMediaItemUnsupportedReason](insearchformediamediaitemunsupportedreason.md): Reasons the app can’t provide results for the search.

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
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

# INSearchForMediaMediaItemResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the media item for which to search.

## Declaration

```objectivec
@interface INSearchForMediaMediaItemResolutionResult : INMediaItemResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md) object when resolving parameters containing an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Providing Successful Results

- [initWithMediaItemResolutionResult:](insearchformediamediaitemresolutionresult/init%28mediaitemresolutionresult_%29.md): Creates a result that involves successfully searching for a media item.
- [successesWithResolvedMediaItems:](insearchformediamediaitemresolutionresult/successes%28with_%29.md): Creates an array of resolution results based on a set of media items you provide.

### Reporting a Problem

- [unsupportedForReason:](insearchformediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request because your app is unable to support the current request.
- [INSearchForMediaMediaItemUnsupportedReason](insearchformediamediaitemunsupportedreason.md): Reasons the app can’t provide results for the search.

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
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.
