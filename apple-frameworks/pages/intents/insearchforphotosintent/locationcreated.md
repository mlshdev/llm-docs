> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintent/locationcreated](https://developer.apple.com/documentation/intents/insearchforphotosintent/locationcreated)

# locationCreated (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The location where someone took the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var locationCreated: CLPlacemark? { get }
```

<a id="Discussion"></a>

## Discussion

Use the placemark information to limit the scope of your search to photos in the given area. Define the area as precisely as you can given the available information. For example, if the placemark includes a specific address, limit your search to photos taken at that address.

## See Also

### Getting the Search Attributes

- [dateCreated](datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [albumName](albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
- [INPhotoAttributeOptions](../inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.

# locationCreated (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The location where someone took the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * locationCreated;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * locationCreated;
```

<a id="Discussion"></a>

## Discussion

Use the placemark information to limit the scope of your search to photos in the given area. Define the area as precisely as you can given the available information. For example, if the placemark includes a specific address, limit your search to photos taken at that address.

## See Also

### Getting the Search Attributes

- [dateCreated](datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [albumName](albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
- [INPhotoAttributeOptions](../inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.
