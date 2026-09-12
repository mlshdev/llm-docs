> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglglobaloption](https://developer.apple.com/documentation/appkit/nsopenglglobaloption)

# NSOpenGLGlobalOption (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Constants that specify OpenGL options.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```swift
enum NSOpenGLGlobalOption
```

<a id="overview"></a>

## Overview

These constants are option names for [NSOpenGLSetOption](nsopenglsetoption.md) and [NSOpenGLGetOption](nsopenglgetoption.md).

## Topics

### Constants

- [NSOpenGLGlobalOption.formatCacheSize](nsopenglglobaloption/formatcachesize.md): Deprecated. Sets the size of the pixel format cache.
- [NSOpenGLGlobalOption.clearFormatCache](nsopenglglobaloption/clearformatcache.md): Deprecated. Resets the pixel format cache if true.
- [NSOpenGLGlobalOption.retainRenderers](nsopenglglobaloption/retainrenderers.md): Deprecated. Whether to retain loaded renderers in memory.
- [NSOpenGLGlobalOption.useBuildCache](nsopenglglobaloption/usebuildcache.md): Deprecated. Whether to enable the function compilation block cache. This is off by default. It must be enabled at startup.

### Deprecated

- [globalValue](nsopenglglobaloption/globalvalue.md): Deprecated.

### Initializers

- [init(rawValue:)](nsopenglglobaloption/init%28rawvalue_%29.md): Deprecated.

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

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Additional Writing Directions](additional-writing-directions.md): Constants that specify additional options when setting the writing direction of attributed strings.
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModal(for:)](nsapplication/runmodal%28for_%29.md) and [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.

# NSOpenGLGlobalOption (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Constants that specify OpenGL options.

> The OpenGL API is deprecated. Use [Metal](https://developer.apple.com/documentation/metal) and [MetalKit](https://developer.apple.com/documentation/metalkit) instead.

## Declaration

```objectivec
enum NSOpenGLGlobalOption : uint32_t;
```

<a id="overview"></a>

## Overview

These constants are option names for [NSOpenGLSetOption](nsopenglsetoption.md) and [NSOpenGLGetOption](nsopenglgetoption.md).

## Topics

### Constants

- [NSOpenGLGOFormatCacheSize](nsopenglglobaloption/formatcachesize.md): Deprecated. Sets the size of the pixel format cache.
- [NSOpenGLGOClearFormatCache](nsopenglglobaloption/clearformatcache.md): Deprecated. Resets the pixel format cache if true.
- [NSOpenGLGORetainRenderers](nsopenglglobaloption/retainrenderers.md): Deprecated. Whether to retain loaded renderers in memory.
- [NSOpenGLGOUseBuildCache](nsopenglglobaloption/usebuildcache.md): Deprecated. Whether to enable the function compilation block cache. This is off by default. It must be enabled at startup.

### Deprecated

- [NSOpenGLGOResetLibrary](nsopenglglobaloption/nsopenglgoresetlibrary.md): Deprecated. Does a soft reset of the CGL library if true.

## See Also

### Enumerations

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSInterfaceStyle](nsinterfacestyle.md): Deprecated. These constants are used in `NSResponder`’s [interfaceStyle](nsresponder/interfacestyle.md) method.
- [NSNoUnderlineStyle](nsnounderlinestyle.md): Deprecated.
- [NSSingleUnderlineStyle](nssingleunderlinestyle.md): Deprecated.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Additional Writing Directions](additional-writing-directions.md): Constants that specify additional options when setting the writing direction of attributed strings.
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModalForWindow:](nsapplication/runmodal%28for_%29.md) and [runModalSession:](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.
