> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/init(name:matrix:)](https://developer.apple.com/documentation/appkit/nsfont/init(name:matrix:))

# init(name:matrix:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a font object for the specified font name and matrix.

## Declaration

```swift
init?(name fontName: String, matrix fontMatrix: UnsafePointer<CGFloat>)
```

## Parameters

- `fontName`: The fully specified family-face name of the font.
- `fontMatrix`: A transformation matrix applied to the font.

<a id="return-value"></a>

## Return Value

A font object for the specified name and transformation matrix.

<a id="Discussion"></a>

## Discussion

The  `fontName` is a fully specified family-face name, such as Helvetica-BoldOblique or Times-Roman (not a name as shown in the Font Panel). The `fontMatrix` is a standard 6-element transformation matrix as used in the PostScript language, specifically with the `makefont` operator. In most cases, you can simply use [init(name:size:)](init%28name_size_%29.md) to create standard scaled fonts.

You can use the defined value `NSFontIdentityMatrix` for \[1 0 0 1 0 0\]. Fonts created with a matrix other than `NSFontIdentityMatrix` don’t automatically flip themselves in flipped views.

## See Also

### Related Documentation

- [isFlipped](../nsview/isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.

### Creating Arbitrary Fonts

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [init(descriptor:textTransform:)](init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.

# fontWithName:matrix: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a font object for the specified font name and matrix.

## Declaration

```objectivec
+ (NSFont *) fontWithName:(NSString *) fontName matrix:(const CGFloat *) fontMatrix;
```

## Parameters

- `fontName`: The fully specified family-face name of the font.
- `fontMatrix`: A transformation matrix applied to the font.

<a id="return-value"></a>

## Return Value

A font object for the specified name and transformation matrix.

<a id="Discussion"></a>

## Discussion

The  `fontName` is a fully specified family-face name, such as Helvetica-BoldOblique or Times-Roman (not a name as shown in the Font Panel). The `fontMatrix` is a standard 6-element transformation matrix as used in the PostScript language, specifically with the `makefont` operator. In most cases, you can simply use [fontWithName:size:](init%28name_size_%29.md) to create standard scaled fonts.

You can use the defined value `NSFontIdentityMatrix` for \[1 0 0 1 0 0\]. Fonts created with a matrix other than `NSFontIdentityMatrix` don’t automatically flip themselves in flipped views.

## See Also

### Related Documentation

- [flipped](../nsview/isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.

### Creating Arbitrary Fonts

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [fontWithDescriptor:textTransform:](init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
