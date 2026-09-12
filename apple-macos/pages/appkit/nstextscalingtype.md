> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextscalingtype](https://developer.apple.com/documentation/appkit/nstextscalingtype)

# NSTextScalingType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Constants that specify the text scaling.

## Declaration

```swift
enum NSTextScalingType
```

## Topics

### Constants

- [NSTextScalingType.standard](nstextscalingtype/standard.md): Font sizes throughout the document appear visually similar to how they would render in macOS and non-Apple platforms.
- [NSTextScalingType.iOS](nstextscalingtype/ios.md): Font sizes throughout the document appear visually similar to how they would render in iOS.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/appkit/nstextscalingtype/init%28rawvalue:%29)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [textScaling](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/textscaling): The text-scaling mode to use when displaying the text.
- [sourceTextScaling](https://developer.apple.com/documentation/foundation/nsattributedstring/documentattributekey/sourcetextscaling): The text-scaling mode you used when creating the text.
- [targetTextScaling](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/targettextscaling): The text scaling mode to use after reading the text from disk.
- [sourceTextScaling](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/sourcetextscaling): The text-scaling mode to associate with the document’s content.

# NSTextScalingType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Constants that specify the text scaling.

## Declaration

```objectivec
enum NSTextScalingType : NSInteger;
```

## Topics

### Constants

- [NSTextScalingStandard](nstextscalingtype/standard.md): Font sizes throughout the document appear visually similar to how they would render in macOS and non-Apple platforms.
- [NSTextScalingiOS](nstextscalingtype/ios.md): Font sizes throughout the document appear visually similar to how they would render in iOS.

## See Also

### Getting document-wide attributes

- [NSAttributedStringDocumentAttributeKey](nsattributedstringdocumentattributekey.md): The attributes you apply to an entire document.
- [Document reading option keys](document-reading-option-keys.md): Keys for constructing an attributed string from data on disk.
- [NSAttributedStringDocumentType](nsattributedstringdocumenttype.md): Constants for the document type document attribute key.
- [NSTextLayoutSectionKey](nstextlayoutsectionkey.md): Constants for the text layout sections document attribute key.
