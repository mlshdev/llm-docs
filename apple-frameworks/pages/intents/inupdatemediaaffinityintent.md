> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintent](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintent)

# INUpdateMediaAffinityIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A request to update the user’s affinity for a media item.

## Declaration

```swift
class INUpdateMediaAffinityIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

Siri creates an [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md) object when the user expresses a preference for or disinterest in a media item. The intent object contains the media to update.

To handle this intent, the handler object in your Intents extension must adopt the [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md) protocol. Your handler should confirm the request and create an [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md) object with the media to update.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Initializing the Intent Object

- [init(mediaItems:mediaSearch:affinityType:)](inupdatemediaaffinityintent/init%28mediaitems_mediasearch_affinitytype_%29.md): Creates an intent that describes the media items, their location, and the affinity to update.

### Getting the Media Information

- [affinityType](inupdatemediaaffinityintent/affinitytype.md): The user’s affinity for the media item.
- [INMediaAffinityType](inmediaaffinitytype.md): Constants that describe a user’s affinity for a media item.
- [mediaItems](inupdatemediaaffinityintent/mediaitems.md): The media items to update.
- [mediaSearch](inupdatemediaaffinityintent/mediasearch.md): The type of item to search for.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Update Media Affinity

- [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md): The interface that handles requests to update the user’s preference for a media item.
- [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md): An intents handler’s response to an update media affinity intent.

# INUpdateMediaAffinityIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A request to update the user’s affinity for a media item.

## Declaration

```objectivec
@interface INUpdateMediaAffinityIntent : INIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

Siri creates an [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md) object when the user expresses a preference for or disinterest in a media item. The intent object contains the media to update.

To handle this intent, the handler object in your Intents extension must adopt the [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md) protocol. Your handler should confirm the request and create an [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md) object with the media to update.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Initializing the Intent Object

- [initWithMediaItems:mediaSearch:affinityType:](inupdatemediaaffinityintent/init%28mediaitems_mediasearch_affinitytype_%29.md): Creates an intent that describes the media items, their location, and the affinity to update.

### Getting the Media Information

- [affinityType](inupdatemediaaffinityintent/affinitytype.md): The user’s affinity for the media item.
- [INMediaAffinityType](inmediaaffinitytype.md): Constants that describe a user’s affinity for a media item.
- [mediaItems](inupdatemediaaffinityintent/mediaitems.md): The media items to update.
- [mediaSearch](inupdatemediaaffinityintent/mediasearch.md): The type of item to search for.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Update Media Affinity

- [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md): The interface that handles requests to update the user’s preference for a media item.
- [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md): An intents handler’s response to an update media affinity intent.
