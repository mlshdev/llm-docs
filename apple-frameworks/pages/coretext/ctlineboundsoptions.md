> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlineboundsoptions](https://developer.apple.com/documentation/coretext/ctlineboundsoptions)

# CTLineBoundsOptions (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for getting the bounds of a line of text.

## Declaration

```swift
struct CTLineBoundsOptions
```

<a id="overview"></a>

## Overview

Passing `0` (no options) returns the typographic bounds, including typographic leading and shifts.

## Topics

### Line Bounds Options

- [excludeTypographicLeading](ctlineboundsoptions/excludetypographicleading.md): An option to exclude typographic leading.
- [excludeTypographicShifts](ctlineboundsoptions/excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [includeLanguageExtents](ctlineboundsoptions/includelanguageextents.md): An option to include additional space based on common glyph sequences for various languages.
- [useGlyphPathBounds](ctlineboundsoptions/useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [useHangingPunctuation](ctlineboundsoptions/usehangingpunctuation.md): An option to enable hanging punctuation.
- [useOpticalBounds](ctlineboundsoptions/useopticalbounds.md): An option to use optical bounds.

### Initializers

- [init(rawValue:)](ctlineboundsoptions/init%28rawvalue_%29.md): Creates a line bound options enumeration with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.

# CTLineBoundsOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for getting the bounds of a line of text.

## Declaration

```objectivec
enum CTLineBoundsOptions : CFOptionFlags;
```

<a id="overview"></a>

## Overview

Passing `0` (no options) returns the typographic bounds, including typographic leading and shifts.

## Topics

### Line Bounds Options

- [kCTLineBoundsExcludeTypographicLeading](ctlineboundsoptions/excludetypographicleading.md): An option to exclude typographic leading.
- [kCTLineBoundsExcludeTypographicShifts](ctlineboundsoptions/excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [kCTLineBoundsIncludeLanguageExtents](ctlineboundsoptions/includelanguageextents.md): An option to include additional space based on common glyph sequences for various languages.
- [kCTLineBoundsUseGlyphPathBounds](ctlineboundsoptions/useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [kCTLineBoundsUseHangingPunctuation](ctlineboundsoptions/usehangingpunctuation.md): An option to enable hanging punctuation.
- [kCTLineBoundsUseOpticalBounds](ctlineboundsoptions/useopticalbounds.md): An option to use optical bounds.

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerError](ctfontmanagererror.md): Errors that prevent unregistration of fonts for a specified font file URL.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.
