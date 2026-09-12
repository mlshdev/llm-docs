> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemetadataitem/locale](https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/locale)

# locale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locale for a mutable metadata item.

## Declaration

```swift
var locale: Locale? { get set }
```

<a id="Discussion"></a>

## Discussion

The locale may be `nil` if no locale information is available for the item.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

# locale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The locale for a mutable metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

The locale may be `nil` if no locale information is available for the item.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): The IETF BCP 47 (RFC 4646) language identifier of the metadata item.
