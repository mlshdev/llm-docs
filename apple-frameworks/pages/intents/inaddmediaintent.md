> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintent](https://developer.apple.com/documentation/intents/inaddmediaintent)

# INAddMediaIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A request to add a media item.

## Declaration

```swift
class INAddMediaIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

Siri creates an [INAddMediaIntent](inaddmediaintent.md) object when the user asks to add a media item. The intents object contains the media to add.

To handle this intent, the handler object in your Intents extension must adopt the [INAddMediaIntentHandling](inaddmediaintenthandling.md) protocol. Your handler should confirm the request and create an [INAddMediaIntentResponse](inaddmediaintentresponse.md) object that contains the media to add.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Creating an Add Media Intent

- [init(mediaItems:mediaSearch:mediaDestination:)](inaddmediaintent/init%28mediaitems_mediasearch_mediadestination_%29.md): Creates an intent that describes the media items to add and where to add them.

### Accessing the Media

- [mediaItems](inaddmediaintent/mediaitems.md): The media content to add.
- [mediaSearch](inaddmediaintent/mediasearch.md): The location to search for the media item to add.
- [mediaDestination](inaddmediaintent/mediadestination.md): The location for the media to add.
- [INMediaDestination](inmediadestination-swift.enum.md): An object that describes the destination for a media item.
- [INMediaDestinationReference](inmediadestinationreference.md): An object that describes the destination for a media item.

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

### Add Media

- [INAddMediaIntentHandling](inaddmediaintenthandling.md): The handler interface that adds media.
- [INAddMediaIntentResponse](inaddmediaintentresponse.md): An intents handler’s response to an add media intent.

# INAddMediaIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A request to add a media item.

## Declaration

```objectivec
@interface INAddMediaIntent : INIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

Siri creates an [INAddMediaIntent](inaddmediaintent.md) object when the user asks to add a media item. The intents object contains the media to add.

To handle this intent, the handler object in your Intents extension must adopt the [INAddMediaIntentHandling](inaddmediaintenthandling.md) protocol. Your handler should confirm the request and create an [INAddMediaIntentResponse](inaddmediaintentresponse.md) object that contains the media to add.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Creating an Add Media Intent

- [initWithMediaItems:mediaSearch:mediaDestination:](inaddmediaintent/init%28mediaitems_mediasearch_mediadestination_%29.md): Creates an intent that describes the media items to add and where to add them.

### Accessing the Media

- [mediaItems](inaddmediaintent/mediaitems.md): The media content to add.
- [mediaSearch](inaddmediaintent/mediasearch.md): The location to search for the media item to add.
- [mediaDestination](inaddmediaintent/mediadestination.md): The location for the media to add.
- [INMediaDestination](inmediadestinationreference.md): An object that describes the destination for a media item.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Add Media

- [INAddMediaIntentHandling](inaddmediaintenthandling.md): The handler interface that adds media.
- [INAddMediaIntentResponse](inaddmediaintentresponse.md): An intents handler’s response to an add media intent.
