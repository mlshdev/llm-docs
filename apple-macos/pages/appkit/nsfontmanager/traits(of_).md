> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/traits(of:)](https://developer.apple.com/documentation/appkit/nsfontmanager/traits(of:))

# traits(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the traits of the given font.

## Declaration

```swift
func traits(of fontObj: NSFont) -> NSFontTraitMask
```

## Parameters

- `fontObj`: The font whose traits are returned.

<a id="return-value"></a>

## Return Value

The font traits, returned as a mask created by combining values listed in `Constants` with the C bitwise OR operator.

## See Also

### Examining Fonts

- [fontNamed(\_:hasTraits:)](fontnamed%28__hastraits_%29.md): Indicates whether the given font has all the specified traits.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [weight(of:)](weight%28of_%29.md): Returns an approximation of the specified font’s weight.

# traitsOfFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the traits of the given font.

## Declaration

```objectivec
- (NSFontTraitMask) traitsOfFont:(NSFont *) fontObj;
```

## Parameters

- `fontObj`: The font whose traits are returned.

<a id="return-value"></a>

## Return Value

The font traits, returned as a mask created by combining values listed in `Constants` with the C bitwise OR operator.

## See Also

### Examining Fonts

- [fontNamed:hasTraits:](fontnamed%28__hastraits_%29.md): Indicates whether the given font has all the specified traits.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [weightOfFont:](weight%28of_%29.md): Returns an approximation of the specified font’s weight.
