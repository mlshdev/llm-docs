> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollectionoptions](https://developer.apple.com/documentation/appkit/nsfontcollectionoptions)

# NSFontCollectionOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that support font collection management.

## Declaration

```swift
struct NSFontCollectionOptions
```

## Topics

### Options

- [applicationOnlyMask](nsfontcollectionoptions/applicationonlymask.md): Makes the collection available only to the application.

### Initializers

- [init(rawValue:)](nsfontcollectionoptions/init%28rawvalue_%29.md)

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

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.

# NSFontCollectionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that support font collection management.

## Declaration

```objectivec
enum NSFontCollectionOptions : NSUInteger;
```

## Topics

### Options

- [NSFontCollectionApplicationOnlyMask](nsfontcollectionoptions/applicationonlymask.md): Makes the collection available only to the application.

## See Also

### Management

- [NSFontManager](nsfontmanager.md): The center of activity for the font-conversion system.
- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
