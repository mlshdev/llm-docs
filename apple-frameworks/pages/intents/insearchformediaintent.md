> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintent](https://developer.apple.com/documentation/intents/insearchformediaintent)

# INSearchForMediaIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A request to search for a media item.

## Declaration

```swift
class INSearchForMediaIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

The system creates an [INSearchForMediaIntent](insearchformediaintent.md) object when the user asks Siri to search for a media item, or searches for a musician or band in Spotlight.

To handle this intent, provide a handler that conforms to the [INSearchForMediaIntentHandling](insearchformediaintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForMediaIntentResponse](insearchformediaintentresponse.md) object with the media to search for.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Initializing the Intent Object

- [init(mediaItems:mediaSearch:)](insearchformediaintent/init%28mediaitems_mediasearch_%29.md): Creates an intent that describes the media items for which to search and where to search for them.

### Searching for Media

- [mediaItems](insearchformediaintent/mediaitems.md): The media items for which to search.
- [mediaSearch](insearchformediaintent/mediasearch.md): The location to search for the media item.

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

### Search for Media

- [INSearchForMediaIntentHandling](insearchformediaintenthandling.md): The interface that handles media search requests.
- [INSearchForMediaIntentResponse](insearchformediaintentresponse.md): An intents handler’s response to a search media intent.

# INSearchForMediaIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A request to search for a media item.

## Declaration

```objectivec
@interface INSearchForMediaIntent : INIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

The system creates an [INSearchForMediaIntent](insearchformediaintent.md) object when the user asks Siri to search for a media item, or searches for a musician or band in Spotlight.

To handle this intent, provide a handler that conforms to the [INSearchForMediaIntentHandling](insearchformediaintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForMediaIntentResponse](insearchformediaintentresponse.md) object with the media to search for.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Initializing the Intent Object

- [initWithMediaItems:mediaSearch:](insearchformediaintent/init%28mediaitems_mediasearch_%29.md): Creates an intent that describes the media items for which to search and where to search for them.

### Searching for Media

- [mediaItems](insearchformediaintent/mediaitems.md): The media items for which to search.
- [mediaSearch](insearchformediaintent/mediasearch.md): The location to search for the media item.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Search for Media

- [INSearchForMediaIntentHandling](insearchformediaintenthandling.md): The interface that handles media search requests.
- [INSearchForMediaIntentResponse](insearchformediaintentresponse.md): An intents handler’s response to a search media intent.
