> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/fontattributes](https://developer.apple.com/documentation/uikit/uifontdescriptor/fontattributes)

# fontAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The font descriptor’s dictionary of attributes.

## Declaration

```swift
var fontAttributes: [UIFontDescriptor.AttributeName : Any] { get }
```

<a id="return-value"></a>

## Return Value

The attribute dictionary.

## See Also

### Querying a font descriptor

- [matrix](matrix.md): The current transform matrix of the font descriptor.
- [object(forKey:)](object%28forkey_%29.md): Returns the font attribute that the corresponding key specifies.
- [pointSize](pointsize.md): The point size of the font descriptor.
- [postscriptName](postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.

# fontAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The font descriptor’s dictionary of attributes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * fontAttributes;
```

<a id="return-value"></a>

## Return Value

The attribute dictionary.

## See Also

### Querying a font descriptor

- [matrix](matrix.md): The current transform matrix of the font descriptor.
- [objectForKey:](object%28forkey_%29.md): Returns the font attribute that the corresponding key specifies.
- [pointSize](pointsize.md): The point size of the font descriptor.
- [postscriptName](postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
