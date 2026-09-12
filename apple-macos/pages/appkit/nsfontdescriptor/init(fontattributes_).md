> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/init(fontattributes:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/init(fontattributes:))

# init(fontAttributes:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a new font descriptor with the specified attributes.

## Declaration

```swift
init(fontAttributes attributes: [NSFontDescriptor.AttributeName : Any]? = nil)
```

## Parameters

- `attributes`: The attributes for the new font descriptor. If `nil`, the font descriptor’s attribute dictionary will be empty.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Creating a Font Descriptor

- [preferredFontDescriptor(forTextStyle:options:)](preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [init(name:size:)](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.

# initWithFontAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a new font descriptor with the specified attributes.

## Declaration

```objectivec
- (instancetype) initWithFontAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: The attributes for the new font descriptor. If `nil`, the font descriptor’s attribute dictionary will be empty.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Related Documentation

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.

### Creating a Font Descriptor

- [preferredFontDescriptorForTextStyle:options:](preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.
- [fontDescriptorWithName:matrix:](init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [fontDescriptorWithName:size:](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
