> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintenthandling](https://developer.apple.com/documentation/intents/insearchforphotosintenthandling)

# INSearchForPhotosIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching the user’s photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSearchForPhotosIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md) protocol to resolve, confirm, and handle requests to search the photos in your app. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and determining the number of results. Siri doesn’t display the photos found during the search. After a successful search, Siri launches your app to display the photos.

Siri delivers an [INSearchForPhotosIntent](insearchforphotosintent.md) object to your handler when the user asks to search their photos. The provided intent object contains the parameters to use when searching for the photos. Use the methods of this protocol to resolve the search parameters, to perform the search, and to return the number of photos that match the criteria.

## Topics

### Resolving the Intent Parameters

- [resolveDateCreated(for:with:)](insearchforphotosintenthandling/resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreated(for:with:)](insearchforphotosintenthandling/resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhoto(for:with:)](insearchforphotosintenthandling/resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumName(for:with:)](insearchforphotosintenthandling/resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.
- [resolveSearchTerms(for:with:)](insearchforphotosintenthandling/resolvesearchterms%28for_with_%29.md): Deprecated. Resolves any search terms provided by the user.

### Confirming the Response

- [confirm(intent:completion:)](insearchforphotosintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](insearchforphotosintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles searching the photos and returning the number of results.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPhotosDomainHandling](inphotosdomainhandling.md)

## See Also

### Photo Search

- [INSearchForPhotosIntent](insearchforphotosintent.md): Deprecated. A request for the list of photos that match the specified criteria.
- [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md): Deprecated. Your app’s response to a search for photos intent.

# INSearchForPhotosIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching the user’s photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSearchForPhotosIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md) protocol to resolve, confirm, and handle requests to search the photos in your app. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and determining the number of results. Siri doesn’t display the photos found during the search. After a successful search, Siri launches your app to display the photos.

Siri delivers an [INSearchForPhotosIntent](insearchforphotosintent.md) object to your handler when the user asks to search their photos. The provided intent object contains the parameters to use when searching for the photos. Use the methods of this protocol to resolve the search parameters, to perform the search, and to return the number of photos that match the criteria.

## Topics

### Resolving the Intent Parameters

- [resolveDateCreatedForSearchForPhotos:withCompletion:](insearchforphotosintenthandling/resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreatedForSearchForPhotos:withCompletion:](insearchforphotosintenthandling/resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhotoForSearchForPhotos:withCompletion:](insearchforphotosintenthandling/resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumNameForSearchForPhotos:withCompletion:](insearchforphotosintenthandling/resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.
- [resolveSearchTermsForSearchForPhotos:withCompletion:](insearchforphotosintenthandling/resolvesearchterms%28for_with_%29.md): Deprecated. Resolves any search terms provided by the user.

### Confirming the Response

- [confirmSearchForPhotos:completion:](insearchforphotosintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handleSearchForPhotos:completion:](insearchforphotosintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles searching the photos and returning the number of results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPhotosDomainHandling](inphotosdomainhandling.md)

## See Also

### Photo Search

- [INSearchForPhotosIntent](insearchforphotosintent.md): Deprecated. A request for the list of photos that match the specified criteria.
- [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md): Deprecated. Your app’s response to a search for photos intent.
