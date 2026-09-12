> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptionkey/urlreadingcontentsconformtotypes](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptionkey/urlreadingcontentsconformtotypes)

# urlReadingContentsConformToTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Option for reading URLs to restrict the results to URLs with contents that conform to any of the provided UTI types.

## Declaration

```swift
static let urlReadingContentsConformToTypes: NSPasteboard.ReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

If the content type of a URL cannot be determined, it will not be considered to match.  The value for this key is an array of UTI type strings.

## See Also

### Type Properties

- [urlReadingFileURLsOnly](urlreadingfileurlsonly.md): Option for reading URLs to restrict the results to file URLs only.

# NSPasteboardURLReadingContentsConformToTypesKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Option for reading URLs to restrict the results to URLs with contents that conform to any of the provided UTI types.

## Declaration

```objectivec
extern NSPasteboardReadingOptionKey const NSPasteboardURLReadingContentsConformToTypesKey;
```

<a id="Discussion"></a>

## Discussion

If the content type of a URL cannot be determined, it will not be considered to match.  The value for this key is an array of UTI type strings.

## See Also

### Type Properties

- [NSPasteboardURLReadingFileURLsOnlyKey](urlreadingfileurlsonly.md): Option for reading URLs to restrict the results to file URLs only.
