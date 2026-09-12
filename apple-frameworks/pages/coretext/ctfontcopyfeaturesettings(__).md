> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyfeaturesettings(_:)](https://developer.apple.com/documentation/coretext/ctfontcopyfeaturesettings(_:))

# CTFontCopyFeatureSettings(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font feature-setting tuples.

## Declaration

```swift
func CTFontCopyFeatureSettings(_ font: CTFont) -> CFArray?
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A normalized array of font feature-setting dictionaries. The array contains only the non-default settings that should be applied to the font, or `NULL` if the default settings should be used.

<a id="Discussion"></a>

## Discussion

A feature-setting dictionary is a tuple of a [kCTFontFeatureTypeIdentifierKey](kctfontfeaturetypeidentifierkey.md) key-value pair and a [kCTFontFeatureSelectorIdentifierKey](kctfontfeatureselectoridentifierkey.md) key-value pair. Each setting dictionary indicates which setting is enabled. It is the caller’s responsibility to handle exclusive and nonexclusive settings as necessary.

The feature settings are verified against those that the font supports and any that do not apply are removed. Further, feature settings that represent a default setting for the font are also removed.

## See Also

### Getting Font Features

- [CTFontCopyFeatures(\_:)](ctfontcopyfeatures%28__%29.md): Returns an array of font features.

# CTFontCopyFeatureSettings (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font feature-setting tuples.

## Declaration

```objectivec
extern CFArrayRefCTFontCopyFeatureSettings(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

A normalized array of font feature-setting dictionaries. The array contains only the non-default settings that should be applied to the font, or `NULL` if the default settings should be used.

<a id="Discussion"></a>

## Discussion

A feature-setting dictionary is a tuple of a [kCTFontFeatureTypeIdentifierKey](kctfontfeaturetypeidentifierkey.md) key-value pair and a [kCTFontFeatureSelectorIdentifierKey](kctfontfeatureselectoridentifierkey.md) key-value pair. Each setting dictionary indicates which setting is enabled. It is the caller’s responsibility to handle exclusive and nonexclusive settings as necessary.

The feature settings are verified against those that the font supports and any that do not apply are removed. Further, feature settings that represent a default setting for the font are also removed.

## See Also

### Getting Font Features

- [CTFontCopyFeatures](ctfontcopyfeatures%28__%29.md): Returns an array of font features.
