> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetadataitem/locale

# locale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locale of the metadata item.

## Declaration

```swift
var locale: Locale? { get }
```

<a id="Discussion"></a>

## Discussion

The locale may be `nil` if no locale information is available for the metadata item.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

# locale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locale of the metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

The locale may be `nil` if no locale information is available for the metadata item.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.
