> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemetadataitem/extendedlanguagetag](https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/extendedlanguagetag)

# extendedLanguageTag (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

## Declaration

```swift
var extendedLanguageTag: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value may be `nil` if no language tag information is available.

## See Also

### Accessing language support

- [locale](locale.md): The locale for a mutable metadata item.

# extendedLanguageTag (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The IETF BCP 47 (RFC 4646) language identifier of the metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * extendedLanguageTag;
```

<a id="Discussion"></a>

## Discussion

The value may be `nil` if no language tag information is available.

## See Also

### Accessing language support

- [locale](locale.md): The locale for a mutable metadata item.
