> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaplaybackspeedresolutionresult](https://developer.apple.com/documentation/intents/inplaymediaplaybackspeedresolutionresult)

# INPlayMediaPlaybackSpeedResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result that determines the playback speed of a media item.

## Declaration

```swift
class INPlayMediaPlaybackSpeedResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md) object when resolving parameters containing an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [init(doubleResolutionResult:)](inplaymediaplaybackspeedresolutionresult/init%28doubleresolutionresult_%29.md): Creates an object whose resolution involves successfulling changing the playback speed of a media item.
- [unsupported(forReason:)](inplaymediaplaybackspeedresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.
- [INPlayMediaPlaybackSpeedUnsupportedReason](inplaymediaplaybackspeedunsupportedreason.md): Constants that describe why the app can’t change the playback speed of the media item.

## Relationships

### Inherits From

- [INDoubleResolutionResult](indoubleresolutionresult.md)

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
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

# INPlayMediaPlaybackSpeedResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result that determines the playback speed of a media item.

## Declaration

```objectivec
@interface INPlayMediaPlaybackSpeedResolutionResult : INDoubleResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md) object when resolving parameters containing an [INMediaItemResolutionResult](inmediaitemresolutionresult.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [initWithDoubleResolutionResult:](inplaymediaplaybackspeedresolutionresult/init%28doubleresolutionresult_%29.md): Creates an object whose resolution involves successfulling changing the playback speed of a media item.
- [unsupportedForReason:](inplaymediaplaybackspeedresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.
- [INPlayMediaPlaybackSpeedUnsupportedReason](inplaymediaplaybackspeedunsupportedreason.md): Constants that describe why the app can’t change the playback speed of the media item.

## Relationships

### Inherits From

- [INDoubleResolutionResult](indoubleresolutionresult.md)

## See Also

### Resolution Results

- [INAddMediaMediaDestinationResolutionResult](inaddmediamediadestinationresolutionresult.md): A resolution result for the types of destinations when adding media.
- [INAddMediaMediaItemResolutionResult](inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.
