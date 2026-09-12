> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintent](https://developer.apple.com/documentation/intents/insearchforphotosintent)

# INSearchForPhotosIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request for the list of photos that match the specified criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSearchForPhotosIntent
```

<a id="overview"></a>

## Overview

The system creates an [INSearchForPhotosIntent](insearchforphotosintent.md) object when the user asks to search for photos in an app. The intent object contains the parameters to use during the search, including the possible name of a photo album, the people in the photos, or the location of the photos. Use this intent object to validate the search parameters and to begin the search process. When performing the search, use only the provided parameters and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md) object with the results of the search. For successful searches, Siri offers the user a way to launch your app and see the results.

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

- [init(dateCreated:locationCreated:albumName:searchTerms:includedAttributes:excludedAttributes:peopleInPhoto:)](insearchforphotosintent/init%28datecreated_locationcreated_albumname_searchterms_includedattributes_excludedattributes_peopleinphoto_%29.md): Deprecated. Initializes a search for photos intent object with the specified search parameters.

### Getting the People in the Photos

- [peopleInPhoto](insearchforphotosintent/peopleinphoto.md): Deprecated. The people identified in the photos.
- [peopleInPhotoOperator](insearchforphotosintent/peopleinphotooperator.md): Deprecated. The operator that defines how to search for people in the photos.

### Getting the Search Terms

- [searchTerms](insearchforphotosintent/searchterms.md): Deprecated. An array of terms to look for in the photos.
- [searchTermsOperator](insearchforphotosintent/searchtermsoperator.md): Deprecated. The operator that defines how to incorporate the search terms when performing the search.

### Getting the Search Attributes

- [dateCreated](insearchforphotosintent/datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](insearchforphotosintent/locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](insearchforphotosintent/albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](insearchforphotosintent/includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](insearchforphotosintent/excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
- [INPhotoAttributeOptions](inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.

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

### Photo Search

- [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md): Deprecated. The handler interface for searching the user’s photos.
- [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md): Deprecated. Your app’s response to a search for photos intent.

# INSearchForPhotosIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request for the list of photos that match the specified criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSearchForPhotosIntent : INIntent
```

<a id="overview"></a>

## Overview

The system creates an [INSearchForPhotosIntent](insearchforphotosintent.md) object when the user asks to search for photos in an app. The intent object contains the parameters to use during the search, including the possible name of a photo album, the people in the photos, or the location of the photos. Use this intent object to validate the search parameters and to begin the search process. When performing the search, use only the provided parameters and ignore any that have no values.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md) object with the results of the search. For successful searches, Siri offers the user a way to launch your app and see the results.

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

- [initWithDateCreated:locationCreated:albumName:searchTerms:includedAttributes:excludedAttributes:peopleInPhoto:](insearchforphotosintent/init%28datecreated_locationcreated_albumname_searchterms_includedattributes_excludedattributes_peopleinphoto_%29.md): Deprecated. Initializes a search for photos intent object with the specified search parameters.

### Getting the People in the Photos

- [peopleInPhoto](insearchforphotosintent/peopleinphoto.md): Deprecated. The people identified in the photos.
- [peopleInPhotoOperator](insearchforphotosintent/peopleinphotooperator.md): Deprecated. The operator that defines how to search for people in the photos.

### Getting the Search Terms

- [searchTerms](insearchforphotosintent/searchterms.md): Deprecated. An array of terms to look for in the photos.
- [searchTermsOperator](insearchforphotosintent/searchtermsoperator.md): Deprecated. The operator that defines how to incorporate the search terms when performing the search.

### Getting the Search Attributes

- [dateCreated](insearchforphotosintent/datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](insearchforphotosintent/locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](insearchforphotosintent/albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](insearchforphotosintent/includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](insearchforphotosintent/excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
- [INPhotoAttributeOptions](inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Photo Search

- [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md): Deprecated. The handler interface for searching the user’s photos.
- [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md): Deprecated. Your app’s response to a search for photos intent.
