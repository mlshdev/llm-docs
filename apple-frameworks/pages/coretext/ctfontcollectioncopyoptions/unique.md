> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncopyoptions/unique](https://developer.apple.com/documentation/coretext/ctfontcollectioncopyoptions/unique)

# unique (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Passing this option indicates that duplicate values should be removed from the results.

## Declaration

```swift
static var unique: CTFontCollectionCopyOptions { get }
```

## See Also

### Constants

- [standardSort](standardsort.md): Passing this option indicates that the return values should be sorted in standard UI order, suitable for display to the user. This is the same sorting behavior used by `NSFontPanel` and Font Book.

# kCTFontCollectionCopyUnique (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Passing this option indicates that duplicate values should be removed from the results.

## Declaration

```objectivec
kCTFontCollectionCopyUnique
```

## See Also

### Constants

- [kCTFontCollectionCopyDefaultOptions](kctfontcollectioncopydefaultoptions.md): Passing this option indicates that defaults are to be used.
- [kCTFontCollectionCopyStandardSort](standardsort.md): Passing this option indicates that the return values should be sorted in standard UI order, suitable for display to the user. This is the same sorting behavior used by `NSFontPanel` and Font Book.
