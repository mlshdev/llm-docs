> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyvariationaxes(_:)](https://developer.apple.com/documentation/coretext/ctfontcopyvariationaxes(_:))

# CTFontCopyVariationAxes(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of variation axes.

## Declaration

```swift
func CTFontCopyVariationAxes(_ font: CTFont) -> CFArray?
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

An array of variation axes dictionaries. Each variation axis dictionary contains the five variation axis keys listed in [Font Variation Axis Dictionary Keys](font-variation-axis-dictionary-keys.md).

## See Also

### Working With Font Variations

- [CTFontCopyVariation(\_:)](ctfontcopyvariation%28__%29.md): Returns a variation dictionary from the font reference.

# CTFontCopyVariationAxes (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of variation axes.

## Declaration

```objectivec
extern CFArrayRefCTFontCopyVariationAxes(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

An array of variation axes dictionaries. Each variation axis dictionary contains the five variation axis keys listed in [Font Variation Axis Dictionary Keys](font-variation-axis-dictionary-keys.md).

## See Also

### Working With Font Variations

- [CTFontCopyVariation](ctfontcopyvariation%28__%29.md): Returns a variation dictionary from the font reference.
