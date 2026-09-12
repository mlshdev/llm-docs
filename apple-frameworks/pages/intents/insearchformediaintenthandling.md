> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintenthandling](https://developer.apple.com/documentation/intents/insearchformediaintenthandling)

# INSearchForMediaIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The interface that handles media search requests.

## Declaration

```swift
protocol INSearchForMediaIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForMediaIntentHandling](insearchformediaintenthandling.md) protocol to resolve, confirm, and handle requests to search for media. Adopt this protocol in an object of your Intents extension capable of searching for media.

Siri delivers an [INSearchForMediaIntent](insearchformediaintent.md) object to your handler when the user asks Siri to search for media using your app, or when Spotlight search results include an artist. Use the methods of this protocol to resolve the parameters and search for the media.

## Topics

### Resolving Details of the Intent

- [resolveMediaItems(for:with:)](insearchformediaintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items for which to search.

### Confirming the Response

- [confirm(intent:completion:)](insearchformediaintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the media search request.

### Handling the Intent

- [handle(intent:completion:)](insearchformediaintenthandling/handle%28intent_completion_%29.md): Handles the media search request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Search for Media

- [INSearchForMediaIntent](insearchformediaintent.md): A request to search for a media item.
- [INSearchForMediaIntentResponse](insearchformediaintentresponse.md): An intents handler’s response to a search media intent.

# INSearchForMediaIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The interface that handles media search requests.

## Declaration

```objectivec
@protocol INSearchForMediaIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForMediaIntentHandling](insearchformediaintenthandling.md) protocol to resolve, confirm, and handle requests to search for media. Adopt this protocol in an object of your Intents extension capable of searching for media.

Siri delivers an [INSearchForMediaIntent](insearchformediaintent.md) object to your handler when the user asks Siri to search for media using your app, or when Spotlight search results include an artist. Use the methods of this protocol to resolve the parameters and search for the media.

## Topics

### Resolving Details of the Intent

- [resolveMediaItemsForSearchForMedia:withCompletion:](insearchformediaintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items for which to search.

### Confirming the Response

- [confirmSearchForMedia:completion:](insearchformediaintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the media search request.

### Handling the Intent

- [handleSearchForMedia:completion:](insearchformediaintenthandling/handle%28intent_completion_%29.md): Handles the media search request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Search for Media

- [INSearchForMediaIntent](insearchformediaintent.md): A request to search for a media item.
- [INSearchForMediaIntentResponse](insearchformediaintentresponse.md): An intents handler’s response to a search media intent.
