> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmultibyteglyphpacking](https://developer.apple.com/documentation/appkit/nsmultibyteglyphpacking)

# NSMultibyteGlyphPacking (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A constant for glyph packing.

## Declaration

```swift
enum NSMultibyteGlyphPacking
```

<a id="overview"></a>

## Overview

Cocoa stores all text data as Unicode. The text system converts Unicode into glyph IDs and places them in 1-, 2-, or 4-byte storage depending on the context. To render text, you must convert the storage into a format the text engine understands. The following constants describe the glyph packing schemes the text rendering engine can use. They are used to extract glyphs from a font for making a multibyte (or single-byte) array of glyphs for passing to an interpreter, such as the window server, which expects a big-endian multibyte stream (that is, “packed glyphs”) instead of a pure `NSGlyph` stream. They’re used by `glyphPacking`. With Quartz, the engine always expects the format to be in 2-byte short array, so `NSNativeShortGlyphPacking` is the only format currently in use.

## Topics

### Packing Options

- [NSMultibyteGlyphPacking.nativeShortGlyphPacking](nsmultibyteglyphpacking/nativeshortglyphpacking.md): Deprecated. The native format for macOS.

### Initializers

- [init(rawValue:)](nsmultibyteglyphpacking/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSOpenGLGlobalOption](nsopenglglobaloption.md): Deprecated. Constants that specify OpenGL options.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Additional Writing Directions](additional-writing-directions.md): Constants that specify additional options when setting the writing direction of attributed strings.
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModal(for:)](nsapplication/runmodal%28for_%29.md) and [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.

# NSMultibyteGlyphPacking (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A constant for glyph packing.

## Declaration

```objectivec
enum NSMultibyteGlyphPacking : NSUInteger;
```

<a id="overview"></a>

## Overview

Cocoa stores all text data as Unicode. The text system converts Unicode into glyph IDs and places them in 1-, 2-, or 4-byte storage depending on the context. To render text, you must convert the storage into a format the text engine understands. The following constants describe the glyph packing schemes the text rendering engine can use. They are used to extract glyphs from a font for making a multibyte (or single-byte) array of glyphs for passing to an interpreter, such as the window server, which expects a big-endian multibyte stream (that is, “packed glyphs”) instead of a pure `NSGlyph` stream. They’re used by `glyphPacking`. With Quartz, the engine always expects the format to be in 2-byte short array, so `NSNativeShortGlyphPacking` is the only format currently in use.

## Topics

### Packing Options

- [NSNativeShortGlyphPacking](nsmultibyteglyphpacking/nativeshortglyphpacking.md): Deprecated. The native format for macOS.

## See Also

### Enumerations

- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSOpenGLGlobalOption](nsopenglglobaloption.md): Deprecated. Constants that specify OpenGL options.
- [NSInterfaceStyle](nsinterfacestyle.md): Deprecated. These constants are used in `NSResponder`’s [interfaceStyle](nsresponder/interfacestyle.md) method.
- [NSNoUnderlineStyle](nsnounderlinestyle.md): Deprecated.
- [NSSingleUnderlineStyle](nssingleunderlinestyle.md): Deprecated.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Additional Writing Directions](additional-writing-directions.md): Constants that specify additional options when setting the writing direction of attributed strings.
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModalForWindow:](nsapplication/runmodal%28for_%29.md) and [runModalSession:](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.
