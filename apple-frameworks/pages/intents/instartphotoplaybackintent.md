> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintent](https://developer.apple.com/documentation/intents/instartphotoplaybackintent)

# INStartPhotoPlaybackIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request to search for photos and initiate a slideshow with the results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INStartPhotoPlaybackIntent
```

<a id="overview"></a>

## Overview

The system creates an [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md) object when the user asks to start a slideshow of a set of photos. This intent object contains the parameters to use when searching for the photos, including the possible name of a photo album, the people in the photos, or the location of the photos. Use this intent object to perform the search and initiate the slideshow in your app. When performing the search, use only the parameters provided and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md) protocol. Your handler should confirm the request and create an [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md) object with the results of the search. After a successful search, Siri launches your app so that it can begin the slideshow.

For a list of other intents in the photos domain, see [INPhotosDomainHandling](inphotosdomainhandling.md).

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(dateCreated:locationCreated:albumName:searchTerms:includedAttributes:excludedAttributes:peopleInPhoto:)](instartphotoplaybackintent/init%28datecreated_locationcreated_albumname_searchterms_includedattributes_excludedattributes_peopleinphoto_%29.md): Deprecated. Initializes an intent object with the specified search parameters.

### Getting the People in the Photos

- [peopleInPhoto](instartphotoplaybackintent/peopleinphoto.md): Deprecated. The people in the photos.
- [peopleInPhotoOperator](instartphotoplaybackintent/peopleinphotooperator.md): Deprecated. The operator that defines how to search for people in the photos.

### Getting the Search Terms

- [searchTerms](instartphotoplaybackintent/searchterms.md): Deprecated. An array of terms to look for in the photos.
- [searchTermsOperator](instartphotoplaybackintent/searchtermsoperator.md): Deprecated. The operator that defines how to incorporate the search terms when performing the search.

### Getting the Search Attributes

- [dateCreated](instartphotoplaybackintent/datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](instartphotoplaybackintent/locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](instartphotoplaybackintent/albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](instartphotoplaybackintent/includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](instartphotoplaybackintent/excludedattributes.md): Deprecated. The attributes that must not be present in the photos.

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

### Photo Playback

- [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md): Deprecated. The handler interface for searching the user’s photos and the playback of the results.
- [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md): Deprecated. Your app’s response to a start photo playback intent.

# INStartPhotoPlaybackIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request to search for photos and initiate a slideshow with the results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INStartPhotoPlaybackIntent : INIntent
```

<a id="overview"></a>

## Overview

The system creates an [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md) object when the user asks to start a slideshow of a set of photos. This intent object contains the parameters to use when searching for the photos, including the possible name of a photo album, the people in the photos, or the location of the photos. Use this intent object to perform the search and initiate the slideshow in your app. When performing the search, use only the parameters provided and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md) protocol. Your handler should confirm the request and create an [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md) object with the results of the search. After a successful search, Siri launches your app so that it can begin the slideshow.

For a list of other intents in the photos domain, see [INPhotosDomainHandling](inphotosdomainhandling.md).

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithDateCreated:locationCreated:albumName:searchTerms:includedAttributes:excludedAttributes:peopleInPhoto:](instartphotoplaybackintent/init%28datecreated_locationcreated_albumname_searchterms_includedattributes_excludedattributes_peopleinphoto_%29.md): Deprecated. Initializes an intent object with the specified search parameters.

### Getting the People in the Photos

- [peopleInPhoto](instartphotoplaybackintent/peopleinphoto.md): Deprecated. The people in the photos.
- [peopleInPhotoOperator](instartphotoplaybackintent/peopleinphotooperator.md): Deprecated. The operator that defines how to search for people in the photos.

### Getting the Search Terms

- [searchTerms](instartphotoplaybackintent/searchterms.md): Deprecated. An array of terms to look for in the photos.
- [searchTermsOperator](instartphotoplaybackintent/searchtermsoperator.md): Deprecated. The operator that defines how to incorporate the search terms when performing the search.

### Getting the Search Attributes

- [dateCreated](instartphotoplaybackintent/datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](instartphotoplaybackintent/locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](instartphotoplaybackintent/albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](instartphotoplaybackintent/includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](instartphotoplaybackintent/excludedattributes.md): Deprecated. The attributes that must not be present in the photos.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Photo Playback

- [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md): Deprecated. The handler interface for searching the user’s photos and the playback of the results.
- [INStartPhotoPlaybackIntentResponse](instartphotoplaybackintentresponse.md): Deprecated. Your app’s response to a start photo playback intent.
