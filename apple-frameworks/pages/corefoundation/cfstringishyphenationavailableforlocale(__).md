> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfstringishyphenationavailableforlocale(_:)

# CFStringIsHyphenationAvailableForLocale(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether hyphenation data is available.

## Declaration

```swift
func CFStringIsHyphenationAvailableForLocale(_ locale: CFLocale!) -> Bool
```

## Parameters

- `locale`: A valid locale that specifies which language’s hyphenation conventions to use. Hyphenation data is not available for all locales.

## See Also

### Working With Hyphenation

- [CFStringGetHyphenationLocationBeforeIndex(\_:\_:\_:\_:\_:\_:)](cfstringgethyphenationlocationbeforeindex%28____________%29.md): Retrieve the first potential hyphenation location found before the specified location.

# CFStringIsHyphenationAvailableForLocale (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether hyphenation data is available.

## Declaration

```objectivec
extern Boolean CFStringIsHyphenationAvailableForLocale(CFLocaleRef locale);
```

## Parameters

- `locale`: A valid locale that specifies which language’s hyphenation conventions to use. Hyphenation data is not available for all locales.

## See Also

### Working With Hyphenation

- [CFStringGetHyphenationLocationBeforeIndex](cfstringgethyphenationlocationbeforeindex%28____________%29.md): Retrieve the first potential hyphenation location found before the specified location.
