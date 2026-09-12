> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyfeatures(_:)](https://developer.apple.com/documentation/coretext/ctfontcopyfeatures(_:))

# CTFontCopyFeatures(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font features.

## Declaration

```swift
func CTFontCopyFeatures(_ font: CTFont) -> CFArray?
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

An array of font feature dictionaries for the font reference.

## See Also

### Getting Font Features

- [CTFontCopyFeatureSettings(\_:)](ctfontcopyfeaturesettings%28__%29.md): Returns an array of font feature-setting tuples.

# CTFontCopyFeatures (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font features.

## Declaration

```objectivec
extern CFArrayRefCTFontCopyFeatures(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

An array of font feature dictionaries for the font reference.

## See Also

### Getting Font Features

- [CTFontCopyFeatureSettings](ctfontcopyfeaturesettings%28__%29.md): Returns an array of font feature-setting tuples.
