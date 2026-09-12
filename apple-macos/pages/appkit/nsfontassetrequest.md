> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontassetrequest](https://developer.apple.com/documentation/appkit/nsfontassetrequest)

# NSFontAssetRequest (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

## Declaration

```swift
class NSFontAssetRequest
```

## Topics

### Creating a Font Asset Request

- [init(fontDescriptors:options:)](nsfontassetrequest/init%28fontdescriptors_options_%29.md)
- [NSFontAssetRequest.Options](nsfontassetrequest/options.md)

### Downloading a Font Asset

- [download(withCompletionHandler:)](nsfontassetrequest/download%28withcompletionhandler_%29.md)
- [downloadedFontDescriptors](nsfontassetrequest/downloadedfontdescriptors.md)

### Getting the Download Progress

- [progress](nsfontassetrequest/progress.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [ProgressReporting](https://developer.apple.com/documentation/foundation/progressreporting)

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFontAssetRequest (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

## Declaration

```objectivec
@interface NSFontAssetRequest : NSObject
```

## Topics

### Creating a Font Asset Request

- [initWithFontDescriptors:options:](nsfontassetrequest/init%28fontdescriptors_options_%29.md)
- [NSFontAssetRequestOptions](nsfontassetrequest/options.md)

### Downloading a Font Asset

- [downloadFontAssetsWithCompletionHandler:](nsfontassetrequest/download%28withcompletionhandler_%29.md)
- [downloadedFontDescriptors](nsfontassetrequest/downloadedfontdescriptors.md)

### Getting the Download Progress

- [progress](nsfontassetrequest/progress.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSProgressReporting](https://developer.apple.com/documentation/foundation/progressreporting)

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
