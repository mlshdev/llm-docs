> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncopyoptions](https://developer.apple.com/documentation/coretext/ctfontcollectioncopyoptions)

# CTFontCollectionCopyOptions (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Option bits for use with CTFontCollectionCopyFontAttribute(s).

## Declaration

```swift
struct CTFontCollectionCopyOptions
```

## Topics

### Constants

- [standardSort](ctfontcollectioncopyoptions/standardsort.md): Passing this option indicates that the return values should be sorted in standard UI order, suitable for display to the user. This is the same sorting behavior used by `NSFontPanel` and Font Book.
- [unique](ctfontcollectioncopyoptions/unique.md): Passing this option indicates that duplicate values should be removed from the results.

### Initializers

- [init(rawValue:)](ctfontcollectioncopyoptions/init%28rawvalue_%29.md): Creates a copy options structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [kCTFontCollectionRemoveDuplicatesOption](kctfontcollectionremoveduplicatesoption.md)

# CTFontCollectionCopyOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Option bits for use with CTFontCollectionCopyFontAttribute(s).

## Declaration

```objectivec
enum CTFontCollectionCopyOptions : uint32_t;
```

## Topics

### Constants

- [kCTFontCollectionCopyDefaultOptions](ctfontcollectioncopyoptions/kctfontcollectioncopydefaultoptions.md): Passing this option indicates that defaults are to be used.
- [kCTFontCollectionCopyStandardSort](ctfontcollectioncopyoptions/standardsort.md): Passing this option indicates that the return values should be sorted in standard UI order, suitable for display to the user. This is the same sorting behavior used by `NSFontPanel` and Font Book.
- [kCTFontCollectionCopyUnique](ctfontcollectioncopyoptions/unique.md): Passing this option indicates that duplicate values should be removed from the results.

## See Also

### Constants

- [kCTFontCollectionRemoveDuplicatesOption](kctfontcollectionremoveduplicatesoption.md)
