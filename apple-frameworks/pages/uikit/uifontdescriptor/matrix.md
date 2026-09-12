> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/matrix](https://developer.apple.com/documentation/uikit/uifontdescriptor/matrix)

# matrix (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The current transform matrix of the font descriptor.

## Declaration

```swift
var matrix: CGAffineTransform { get }
```

## See Also

### Querying a font descriptor

- [fontAttributes](fontattributes.md): The font descriptor’s dictionary of attributes.
- [object(forKey:)](object%28forkey_%29.md): Returns the font attribute that the corresponding key specifies.
- [pointSize](pointsize.md): The point size of the font descriptor.
- [postscriptName](postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.

# matrix (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The current transform matrix of the font descriptor.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform matrix;
```

## See Also

### Querying a font descriptor

- [fontAttributes](fontattributes.md): The font descriptor’s dictionary of attributes.
- [objectForKey:](object%28forkey_%29.md): Returns the font attribute that the corresponding key specifies.
- [pointSize](pointsize.md): The point size of the font descriptor.
- [postscriptName](postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
