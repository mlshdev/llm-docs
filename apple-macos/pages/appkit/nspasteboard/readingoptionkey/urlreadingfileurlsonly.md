> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspasteboard/readingoptionkey/urlreadingfileurlsonly

# urlReadingFileURLsOnly (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Option for reading URLs to restrict the results to file URLs only.

## Declaration

```swift
static let urlReadingFileURLsOnly: NSPasteboard.ReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

The value for this key is an `NSNumber` object with a boolean value.

## See Also

### Type Properties

- [urlReadingContentsConformToTypes](urlreadingcontentsconformtotypes.md): Option for reading URLs to restrict the results to URLs with contents that conform to any of the provided UTI types.

# NSPasteboardURLReadingFileURLsOnlyKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Option for reading URLs to restrict the results to file URLs only.

## Declaration

```objectivec
extern NSPasteboardReadingOptionKey const NSPasteboardURLReadingFileURLsOnlyKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an `NSNumber` object with a boolean value.

## See Also

### Type Properties

- [NSPasteboardURLReadingContentsConformToTypesKey](urlreadingcontentsconformtotypes.md): Option for reading URLs to restrict the results to URLs with contents that conform to any of the provided UTI types.
