> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/weight(of:)](https://developer.apple.com/documentation/appkit/nsfontmanager/weight(of:))

# weight(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an approximation of the specified font’s weight.

## Declaration

```swift
func weight(of fontObj: NSFont) -> Int
```

## Parameters

- `fontObj`: The font whose approximate weight is returned.

<a id="return-value"></a>

## Return Value

An approximation of the weight of the given font, where 0 indicates the lightest possible weight, 5 indicates a normal or book weight, and 9 or more indicates a bold or heavier weight. Because this method returns only an approximation of a font’s weight, it is not guaranteed to return the exact weight with which `fontObj` was initialized.

## See Also

### Examining Fonts

- [traits(of:)](traits%28of_%29.md): Returns the traits of the given font.
- [fontNamed(\_:hasTraits:)](fontnamed%28__hastraits_%29.md): Indicates whether the given font has all the specified traits.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.

# weightOfFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an approximation of the specified font’s weight.

## Declaration

```objectivec
- (NSInteger) weightOfFont:(NSFont *) fontObj;
```

## Parameters

- `fontObj`: The font whose approximate weight is returned.

<a id="return-value"></a>

## Return Value

An approximation of the weight of the given font, where 0 indicates the lightest possible weight, 5 indicates a normal or book weight, and 9 or more indicates a bold or heavier weight. Because this method returns only an approximation of a font’s weight, it is not guaranteed to return the exact weight with which `fontObj` was initialized.

## See Also

### Examining Fonts

- [traitsOfFont:](traits%28of_%29.md): Returns the traits of the given font.
- [fontNamed:hasTraits:](fontnamed%28__hastraits_%29.md): Indicates whether the given font has all the specified traits.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
