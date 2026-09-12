> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintent/albumname](https://developer.apple.com/documentation/intents/instartphotoplaybackintent/albumname)

# albumName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The name of the album that contains the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var albumName: String? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains an [NSString](../../foundation/nsstring.md) object, your search should return only photos from the album specified by that string. Apps may register a user’s custom photo album names using the [INVocabulary](../invocabulary.md) class. Registering custom names helps the system identify those albums when the user speaks them.

## See Also

### Getting the Search Attributes

- [dateCreated](datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](locationcreated.md): Deprecated. The location where someone took the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](excludedattributes.md): Deprecated. The attributes that must not be present in the photos.

# albumName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The name of the album that contains the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * albumName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * albumName;
```

<a id="Discussion"></a>

## Discussion

When this property contains an [NSString](../../foundation/nsstring.md) object, your search should return only photos from the album specified by that string. Apps may register a user’s custom photo album names using the [INVocabulary](../invocabulary.md) class. Registering custom names helps the system identify those albums when the user speaks them.

## See Also

### Getting the Search Attributes

- [dateCreated](datecreated.md): Deprecated. The range of dates during which someone took the pictures.
- [locationCreated](locationcreated.md): Deprecated. The location where someone took the photos.
- [includedAttributes](includedattributes.md): Deprecated. The attributes that must be present in the photos.
- [excludedAttributes](excludedattributes.md): Deprecated. The attributes that must not be present in the photos.
