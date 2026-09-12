> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/preferredfontdescriptor(fortextstyle:options:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/preferredfontdescriptor(fortextstyle:options:))

# preferredFontDescriptor(forTextStyle:options:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns a font descriptor that contains the text style.

## Declaration

```swift
class func preferredFontDescriptor(forTextStyle style: NSFont.TextStyle, options: [NSFont.TextStyleOptionKey : Any] = [:]) -> NSFontDescriptor
```

## Parameters

- `style`: The text style for which to return a font descriptor. See [NSFont.TextStyle](../nsfont/textstyle.md) for available values.
- `options`: A dictionary you use to further configure the returned font descriptor. See [NSFont.TextStyleOptionKey](../nsfont/textstyleoptionkey.md) for a list of valid keys. Pass an empty dictionary to use the default configuration.

<a id="return-value"></a>

## Return Value

The font descriptor that contains the text style.

<a id="Discussion"></a>

## Discussion

The font descriptor contains a dictionary of attributes that you use to create an [NSFont](../nsfont.md) object. See [NSFontDescriptor](../nsfontdescriptor.md) for more information.

## See Also

### Creating a Font Descriptor

- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [init(name:size:)](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [init(fontAttributes:)](init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.

# preferredFontDescriptorForTextStyle:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns a font descriptor that contains the text style.

## Declaration

```objectivec
+ (NSFontDescriptor *) preferredFontDescriptorForTextStyle:(NSFontTextStyle) style options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `style`: The text style for which to return a font descriptor. See [NSFontTextStyle](../nsfont/textstyle.md) for available values.
- `options`: A dictionary you use to further configure the returned font descriptor. See [NSFontTextStyleOptionKey](../nsfont/textstyleoptionkey.md) for a list of valid keys. Pass an empty dictionary to use the default configuration.

<a id="return-value"></a>

## Return Value

The font descriptor that contains the text style.

<a id="Discussion"></a>

## Discussion

The font descriptor contains a dictionary of attributes that you use to create an [NSFont](../nsfont.md) object. See [NSFontDescriptor](../nsfontdescriptor.md) for more information.

## See Also

### Creating a Font Descriptor

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.
- [fontDescriptorWithName:matrix:](init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [fontDescriptorWithName:size:](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [initWithFontAttributes:](init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.
