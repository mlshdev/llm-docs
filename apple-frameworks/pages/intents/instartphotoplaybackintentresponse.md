> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponse](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponse)

# INStartPhotoPlaybackIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a start photo playback intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INStartPhotoPlaybackIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md) object to specify the status of searching the user’s photos and the readiness of your app to begin playing those photos in a slideshow. After performing a search using the criteria specified in the [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md) object, create an instance of this class with the results. Siri communicates the status from your response to the user at appropriate times.

You create an [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md) object in the [confirm(intent:completion:)](instartphotoplaybackintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](instartphotoplaybackintenthandling/handle%28intent_completion_%29.md) methods of your start photo playback handler object. For more information about implementing your handler object, see [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](instartphotoplaybackintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartphotoplaybackintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INStartPhotoPlaybackIntentResponseCode](instartphotoplaybackintentresponsecode.md): Deprecated. Constants indicating the status of the response.

### Accessing the Response Details

- [searchResultsCount](instartphotoplaybackintentresponse/searchresultscount-5r7e7.md): Deprecated. The number of photos that match the search parameters.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Photo Playback

- [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md): Deprecated. The handler interface for searching the user’s photos and the playback of the results.
- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md): Deprecated. A request to search for photos and initiate a slideshow with the results.

# INStartPhotoPlaybackIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a start photo playback intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INStartPhotoPlaybackIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md) object to specify the status of searching the user’s photos and the readiness of your app to begin playing those photos in a slideshow. After performing a search using the criteria specified in the [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md) object, create an instance of this class with the results. Siri communicates the status from your response to the user at appropriate times.

You create an [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md) object in the [confirmStartPhotoPlayback:completion:](instartphotoplaybackintenthandling/confirm%28intent_completion_%29.md) and [handleStartPhotoPlayback:completion:](instartphotoplaybackintenthandling/handle%28intent_completion_%29.md) methods of your start photo playback handler object. For more information about implementing your handler object, see [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](instartphotoplaybackintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartphotoplaybackintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INStartPhotoPlaybackIntentResponseCode](instartphotoplaybackintentresponsecode.md): Deprecated. Constants indicating the status of the response.

### Accessing the Response Details

- [searchResultsCount](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponse/searchresultscount-6ns8y): Deprecated. The number of photos that match the search parameters.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Photo Playback

- [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md): Deprecated. The handler interface for searching the user’s photos and the playback of the results.
- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md): Deprecated. A request to search for photos and initiate a slideshow with the results.
