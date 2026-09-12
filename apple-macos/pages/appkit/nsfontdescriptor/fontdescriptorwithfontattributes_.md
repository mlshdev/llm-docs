> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/fontdescriptorwithfontattributes:](https://developer.apple.com/documentation/appkit/nsfontdescriptor/fontdescriptorwithfontattributes:)

# fontDescriptorWithFontAttributes:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a font descriptor with a dictionary of attributes.

## Declaration

```objectivec
+ (NSFontDescriptor *) fontDescriptorWithFontAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: The attributes for the font descriptor. If `nil`, the font descriptor’s dictionary will be empty.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Creating a Font Descriptor

- [preferredFontDescriptorForTextStyle:options:](preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [fontDescriptorWithName:matrix:](init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [fontDescriptorWithName:size:](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [initWithFontAttributes:](init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.
