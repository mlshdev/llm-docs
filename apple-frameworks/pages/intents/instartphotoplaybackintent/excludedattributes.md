> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintent/excludedattributes](https://developer.apple.com/documentation/intents/instartphotoplaybackintent/excludedattributes)

# excludedAttributes (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The attributes that must not be present in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var excludedAttributes: INPhotoAttributeOptions { get }
```

<a id="Discussion"></a>

## Discussion

None of the specified attributes may be present in the photos.

## See Also

### Getting the Search Attributes

- [dateCreated](datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.

# excludedAttributes (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The attributes that must not be present in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INPhotoAttributeOptions excludedAttributes;
```

```objectivec
@property (atomic, assign, readonly) INPhotoAttributeOptions excludedAttributes;
```

<a id="Discussion"></a>

## Discussion

None of the specified attributes may be present in the photos.

## See Also

### Getting the Search Attributes

- [dateCreated](datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](locationcreated.md): Deprecated. The location where someone took the photos.
- [albumName](albumname.md): Deprecated. The name of the album that contains the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
