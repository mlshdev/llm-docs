> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/fontnamed(_:hastraits:)](https://developer.apple.com/documentation/appkit/nsfontmanager/fontnamed(_:hastraits:))

# fontNamed(\_:hasTraits:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the given font has all the specified traits.

## Declaration

```swift
func fontNamed(_ fName: String, hasTraits someTraits: NSFontTraitMask) -> Bool
```

## Parameters

- `fName`: The name of the font.
- `someTraits`: The font traits to test, specified by combining the font trait mask values described in `Constants` using the C bitwise OR operator.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the font named `typeface` has all the traits specified in `fontTraitMask`; [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

<a id="Discussion"></a>

## Discussion

Using `NSUnboldFontMask` returns [true](https://developer.apple.com/documentation/swift/true) if the font is not bold, [false](https://developer.apple.com/documentation/swift/false) otherwise. Using `NSUnitalicFontMask` returns [true](https://developer.apple.com/documentation/swift/true) if the font is not italic, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Examining Fonts

- [traits(of:)](traits%28of_%29.md): Returns the traits of the given font.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [weight(of:)](weight%28of_%29.md): Returns an approximation of the specified font’s weight.

# fontNamed:hasTraits: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the given font has all the specified traits.

## Declaration

```objectivec
- (BOOL) fontNamed:(NSString *) fName hasTraits:(NSFontTraitMask) someTraits;
```

## Parameters

- `fName`: The name of the font.
- `someTraits`: The font traits to test, specified by combining the font trait mask values described in `Constants` using the C bitwise OR operator.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the font named `typeface` has all the traits specified in `fontTraitMask`; [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

<a id="Discussion"></a>

## Discussion

Using `NSUnboldFontMask` returns [true](https://developer.apple.com/documentation/swift/true) if the font is not bold, [false](https://developer.apple.com/documentation/swift/false) otherwise. Using `NSUnitalicFontMask` returns [true](https://developer.apple.com/documentation/swift/true) if the font is not italic, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Examining Fonts

- [traitsOfFont:](traits%28of_%29.md): Returns the traits of the given font.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [weightOfFont:](weight%28of_%29.md): Returns an approximation of the specified font’s weight.
