> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintent/datecreated](https://developer.apple.com/documentation/intents/insearchforphotosintent/datecreated)

# dateCreated (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The range of dates during which someone took the pictures.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var dateCreated: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the scope of the search to photos taken within the specified dates.

## See Also

### Getting the Search Attributes

- [locationCreated](locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
- [INPhotoAttributeOptions](../inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.

# dateCreated (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The range of dates during which someone took the pictures.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * dateCreated;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * dateCreated;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the scope of the search to photos taken within the specified dates.

## See Also

### Getting the Search Attributes

- [locationCreated](locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
- [INPhotoAttributeOptions](../inphotoattributeoptions.md): Deprecated. Constants indicating attributes of a photo.
