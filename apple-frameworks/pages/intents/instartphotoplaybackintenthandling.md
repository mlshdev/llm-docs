> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintenthandling](https://developer.apple.com/documentation/intents/instartphotoplaybackintenthandling)

# INStartPhotoPlaybackIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching the user’s photos and the playback of the results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INStartPhotoPlaybackIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md) protocol to resolve, confirm, and handle requests to search the user’s photos and initiate playback of a slideshow. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and determining the number of results. Siri doesn’t display the photos found during the search. After a successful search, Siri launches your app so that it can begin the slideshow.

Siri delivers an [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md) object to your handler when the user asks to start a slideshow. The provided intent object contains the search parameters to use for matching photos to include in the slideshow. Use the methods of this protocol to resolve the search parameters, to perform the search, and to return the number of photos that match the criteria.

## Topics

### Resolving the Intent Parameters

- [resolveDateCreated(for:with:)](instartphotoplaybackintenthandling/resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreated(for:with:)](instartphotoplaybackintenthandling/resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhoto(for:with:)](instartphotoplaybackintenthandling/resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumName(for:with:)](instartphotoplaybackintenthandling/resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.

### Confirming the Response

- [confirm(intent:completion:)](instartphotoplaybackintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](instartphotoplaybackintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles performing the search and returning the number of results.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPhotosDomainHandling](inphotosdomainhandling.md)

## See Also

### Photo Playback

- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md): Deprecated. A request to search for photos and initiate a slideshow with the results.
- [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md): Deprecated. Your app’s response to a start photo playback intent.

# INStartPhotoPlaybackIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching the user’s photos and the playback of the results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INStartPhotoPlaybackIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md) protocol to resolve, confirm, and handle requests to search the user’s photos and initiate playback of a slideshow. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and determining the number of results. Siri doesn’t display the photos found during the search. After a successful search, Siri launches your app so that it can begin the slideshow.

Siri delivers an [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md) object to your handler when the user asks to start a slideshow. The provided intent object contains the search parameters to use for matching photos to include in the slideshow. Use the methods of this protocol to resolve the search parameters, to perform the search, and to return the number of photos that match the criteria.

## Topics

### Resolving the Intent Parameters

- [resolveDateCreatedForStartPhotoPlayback:withCompletion:](instartphotoplaybackintenthandling/resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreatedForStartPhotoPlayback:withCompletion:](instartphotoplaybackintenthandling/resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhotoForStartPhotoPlayback:withCompletion:](instartphotoplaybackintenthandling/resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumNameForStartPhotoPlayback:withCompletion:](instartphotoplaybackintenthandling/resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.

### Confirming the Response

- [confirmStartPhotoPlayback:completion:](instartphotoplaybackintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handleStartPhotoPlayback:completion:](instartphotoplaybackintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles performing the search and returning the number of results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPhotosDomainHandling](inphotosdomainhandling.md)

## See Also

### Photo Playback

- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md): Deprecated. A request to search for photos and initiate a slideshow with the results.
- [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md): Deprecated. Your app’s response to a start photo playback intent.
