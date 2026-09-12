> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/locale](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/locale)

# locale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locale for which the media option was authored.

## Declaration

```swift
var locale: Locale? { get }
```

## See Also

### Getting the language and locale settings

- [displayName](displayname.md): A string suitable for display using the current system locale.
- [displayName(with:)](displayname%28with_%29.md): Returns a string suitable for display using the specified locale.
- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 language tag associated with the option

# locale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locale for which the media option was authored.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSLocale * locale;
```

## See Also

### Getting the language and locale settings

- [displayName](displayname.md): A string suitable for display using the current system locale.
- [displayNameWithLocale:](displayname%28with_%29.md): Returns a string suitable for display using the specified locale.
- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 language tag associated with the option
