> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/displayname](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/displayname)

# displayName (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A string suitable for display using the current system locale.

## Declaration

```swift
var displayName: String { get }
```

<a id="Discussion"></a>

## Discussion

The string takes into account this option’s common metadata, media characteristics, and locale properties in addition to the provided locale to formulate a string intended for display

## See Also

### Getting the language and locale settings

- [displayName(with:)](displayname%28with_%29.md): Returns a string suitable for display using the specified locale.
- [locale](locale.md): The locale for which the media option was authored.
- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 language tag associated with the option

# displayName (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A string suitable for display using the current system locale.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

The string takes into account this option’s common metadata, media characteristics, and locale properties in addition to the provided locale to formulate a string intended for display

## See Also

### Getting the language and locale settings

- [displayNameWithLocale:](displayname%28with_%29.md): Returns a string suitable for display using the specified locale.
- [locale](locale.md): The locale for which the media option was authored.
- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 language tag associated with the option
