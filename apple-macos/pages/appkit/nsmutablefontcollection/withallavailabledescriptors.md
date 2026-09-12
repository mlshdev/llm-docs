> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/withallavailabledescriptors](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/withallavailabledescriptors)

# withAllAvailableDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The mutable font collection that matches all registered fonts.

## Declaration

```swift
@NSCopying class var withAllAvailableDescriptors: NSMutableFontCollection { get }
```

## See Also

### Creating a Font Collection

- [init(descriptors:)](init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [init(locale:)](init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [init(name:)](init%28name_%29.md): Creates a mutable named font collection object.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.

# fontCollectionWithAllAvailableDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The mutable font collection that matches all registered fonts.

## Declaration

```objectivec
@property (class, copy, readonly) NSMutableFontCollection * fontCollectionWithAllAvailableDescriptors;
```

## See Also

### Creating a Font Collection

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [fontCollectionWithLocale:](init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [fontCollectionWithName:](init%28name_%29.md): Creates a mutable named font collection object.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
