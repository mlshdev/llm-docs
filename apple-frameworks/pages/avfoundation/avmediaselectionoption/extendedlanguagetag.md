> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/extendedlanguagetag](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/extendedlanguagetag)

# extendedLanguageTag (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The IETF BCP 47 language tag associated with the option

## Declaration

```swift
var extendedLanguageTag: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property may be `nil` indicating that the underlying media presented when the option is selected carries no language information. This can occur with media formats for which language information is optional, such as HTTP Live Streaming playlists, or that do not accommodate language information in machine-readable form.

Clients that are filtering media selection options by language should be prepared to handle cases in which this value is `nil`. Further, they should be prepared to handle cases in which an `extendedLanguageTag` is present but indicates that the language is “undetermined” (a language value of @“und”, as defined in ISO 639-2).

## See Also

### Getting the language and locale settings

- [displayName](displayname.md): A string suitable for display using the current system locale.
- [displayName(with:)](displayname%28with_%29.md): Returns a string suitable for display using the specified locale.
- [locale](locale.md): The locale for which the media option was authored.

# extendedLanguageTag (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The IETF BCP 47 language tag associated with the option

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * extendedLanguageTag;
```

<a id="Discussion"></a>

## Discussion

This property may be `nil` indicating that the underlying media presented when the option is selected carries no language information. This can occur with media formats for which language information is optional, such as HTTP Live Streaming playlists, or that do not accommodate language information in machine-readable form.

Clients that are filtering media selection options by language should be prepared to handle cases in which this value is `nil`. Further, they should be prepared to handle cases in which an `extendedLanguageTag` is present but indicates that the language is “undetermined” (a language value of @“und”, as defined in ISO 639-2).

## See Also

### Getting the language and locale settings

- [displayName](displayname.md): A string suitable for display using the current system locale.
- [displayNameWithLocale:](displayname%28with_%29.md): Returns a string suitable for display using the specified locale.
- [locale](locale.md): The locale for which the media option was authored.
