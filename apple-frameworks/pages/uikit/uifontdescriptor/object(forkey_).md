> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/object(forkey:)](https://developer.apple.com/documentation/uikit/uifontdescriptor/object(forkey:))

# object(forKey:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font attribute that the corresponding key specifies.

## Declaration

```swift
func object(forKey anAttribute: UIFontDescriptor.AttributeName) -> Any?
```

## Parameters

- `anAttribute`: The font attribute key.

<a id="return-value"></a>

## Return Value

The font attribute corresponding to `anAttribute`. For valid values of `anAttribute`, see [UIFontDescriptor.AttributeName](attributename.md).

## See Also

### Querying a font descriptor

- [fontAttributes](fontattributes.md): The font descriptor’s dictionary of attributes.
- [matrix](matrix.md): The current transform matrix of the font descriptor.
- [pointSize](pointsize.md): The point size of the font descriptor.
- [postscriptName](postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.

# objectForKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font attribute that the corresponding key specifies.

## Declaration

```objectivec
- (id) objectForKey:(UIFontDescriptorAttributeName) anAttribute;
```

## Parameters

- `anAttribute`: The font attribute key.

<a id="return-value"></a>

## Return Value

The font attribute corresponding to `anAttribute`. For valid values of `anAttribute`, see [UIFontDescriptorAttributeName](attributename.md).

## See Also

### Related Documentation

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.

### Querying a font descriptor

- [fontAttributes](fontattributes.md): The font descriptor’s dictionary of attributes.
- [matrix](matrix.md): The current transform matrix of the font descriptor.
- [pointSize](pointsize.md): The point size of the font descriptor.
- [postscriptName](postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
