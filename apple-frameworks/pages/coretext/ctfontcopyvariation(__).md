> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyvariation(_:)](https://developer.apple.com/documentation/coretext/ctfontcopyvariation(_:))

# CTFontCopyVariation(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a variation dictionary from the font reference.

## Declaration

```swift
func CTFontCopyVariation(_ font: CTFont) -> CFDictionary?
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The current variation instance as a dictionary.

<a id="Discussion"></a>

## Discussion

The keys for each variation correspond to the variation identifier obtained via [kCTFontVariationAxisIdentifierKey](kctfontvariationaxisidentifierkey.md), which represents the four-character axis code as a CFNumber object.

## See Also

### Working With Font Variations

- [CTFontCopyVariationAxes(\_:)](ctfontcopyvariationaxes%28__%29.md): Returns an array of variation axes.

# CTFontCopyVariation (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a variation dictionary from the font reference.

## Declaration

```objectivec
extern CFDictionaryRefCTFontCopyVariation(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The current variation instance as a dictionary.

<a id="Discussion"></a>

## Discussion

The keys for each variation correspond to the variation identifier obtained via [kCTFontVariationAxisIdentifierKey](kctfontvariationaxisidentifierkey.md), which represents the four-character axis code as a CFNumber object.

## See Also

### Working With Font Variations

- [CTFontCopyVariationAxes](ctfontcopyvariationaxes%28__%29.md): Returns an array of variation axes.
