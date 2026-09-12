> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/displayname(with:)](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/displayname(with:))

# displayName(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a string suitable for display using the specified locale.

## Declaration

```swift
func displayName(with locale: Locale) -> String
```

## Parameters

- `locale`: The locale to use in generating the display name.

<a id="return-value"></a>

## Return Value

A string containing the localized display name.

<a id="Discussion"></a>

## Discussion

The string takes into account this option’s common metadata, media characteristics and locale properties in addition to the provided locale to formulate a string intended for display

## See Also

### Getting the language and locale settings

- [displayName](displayname.md): A string suitable for display using the current system locale.
- [locale](locale.md): The locale for which the media option was authored.
- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 language tag associated with the option

# displayNameWithLocale: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a string suitable for display using the specified locale.

## Declaration

```objectivec
- (NSString *) displayNameWithLocale:(NSLocale *) locale;
```

## Parameters

- `locale`: The locale to use in generating the display name.

<a id="return-value"></a>

## Return Value

A string containing the localized display name.

<a id="Discussion"></a>

## Discussion

The string takes into account this option’s common metadata, media characteristics and locale properties in addition to the provided locale to formulate a string intended for display

## See Also

### Getting the language and locale settings

- [displayName](displayname.md): A string suitable for display using the current system locale.
- [locale](locale.md): The locale for which the media option was authored.
- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 language tag associated with the option
