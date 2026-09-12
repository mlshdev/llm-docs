> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/font(withfamily:traits:weight:size:)](https://developer.apple.com/documentation/appkit/nsfontmanager/font(withfamily:traits:weight:size:))

# font(withFamily:traits:weight:size:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to load a font with the specified characteristics.

## Declaration

```swift
func font(withFamily family: String, traits: NSFontTraitMask, weight: Int, size: CGFloat) -> NSFont?
```

## Parameters

- `family`: The generic name of the desired font, such as Times or Helvetica.
- `traits`: The font traits, specified by combining the font trait mask values described in `Constants` using the C bitwise OR operator. Using `NSUnboldFontMask` or `NSUnitalicFontMask` loads a font that doesn’t have either the bold or italic trait, respectively.
- `weight`: A hint for the weight desired, on a scale of 0 to 15: a value of 5 indicates a normal or book weight, and 9 or more a bold or heavier weight. The weight is ignored if `fontTraitMask` includes `NSBoldFontMask`.
- `size`: The point size of the desired font.

<a id="return-value"></a>

## Return Value

A font with the specified characteristics if successful, or `nil` if not.

# fontWithFamily:traits:weight:size: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to load a font with the specified characteristics.

## Declaration

```objectivec
- (NSFont *) fontWithFamily:(NSString *) family traits:(NSFontTraitMask) traits weight:(NSInteger) weight size:(CGFloat) size;
```

## Parameters

- `family`: The generic name of the desired font, such as Times or Helvetica.
- `traits`: The font traits, specified by combining the font trait mask values described in `Constants` using the C bitwise OR operator. Using `NSUnboldFontMask` or `NSUnitalicFontMask` loads a font that doesn’t have either the bold or italic trait, respectively.
- `weight`: A hint for the weight desired, on a scale of 0 to 15: a value of 5 indicates a normal or book weight, and 9 or more a bold or heavier weight. The weight is ignored if `fontTraitMask` includes `NSBoldFontMask`.
- `size`: The point size of the desired font.

<a id="return-value"></a>

## Return Value

A font with the specified characteristics if successful, or `nil` if not.
