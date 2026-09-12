> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/additional-writing-directions](https://developer.apple.com/documentation/appkit/additional-writing-directions)

# Additional Writing Directions (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Constants that specify additional options when setting the writing direction of attributed strings.

<a id="overview"></a>

## Overview

You can use the logical `OR` operator to combine these constants with [NSWritingDirection.leftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirection.rightToLeft](nswritingdirection/righttoleft.md) when used with [writingDirection](https://developer.apple.com/documentation/foundation/nsattributedstring/key/writingdirection) to specify formatting controls defined by the Unicode Bidirectional Algorithm in Unicode Standard Annex #9.

## Topics

### Constants

- [NSTextWritingDirectionEmbedding](nstextwritingdirectionembedding.md): Deprecated. Text is embedded in text with another writing direction.
- [NSTextWritingDirectionOverride](nstextwritingdirectionoverride.md): Deprecated.

## See Also

### Enumerations

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSOpenGLGlobalOption](nsopenglglobaloption.md): Deprecated. Constants that specify OpenGL options.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModal(for:)](nsapplication/runmodal%28for_%29.md) and [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.

# Additional Writing Directions (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Constants that specify additional options when setting the writing direction of attributed strings.

<a id="overview"></a>

## Overview

You can use the logical `OR` operator to combine these constants with [NSWritingDirectionLeftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirectionRightToLeft](nswritingdirection/righttoleft.md) when used with [writingDirection](https://developer.apple.com/documentation/foundation/nsattributedstring/key/writingdirection) to specify formatting controls defined by the Unicode Bidirectional Algorithm in Unicode Standard Annex #9.

## Topics

### Constants

- [NSTextWritingDirectionEmbedding](nstextwritingdirectionembedding.md): Deprecated. Text is embedded in text with another writing direction.
- [NSTextWritingDirectionOverride](nstextwritingdirectionoverride.md): Deprecated.

## See Also

### Enumerations

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSOpenGLGlobalOption](nsopenglglobaloption.md): Deprecated. Constants that specify OpenGL options.
- [NSInterfaceStyle](nsinterfacestyle.md): Deprecated. These constants are used in `NSResponder`’s [interfaceStyle](nsresponder/interfacestyle.md) method.
- [NSNoUnderlineStyle](nsnounderlinestyle.md): Deprecated.
- [NSSingleUnderlineStyle](nssingleunderlinestyle.md): Deprecated.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModalForWindow:](nsapplication/runmodal%28for_%29.md) and [runModalSession:](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.
