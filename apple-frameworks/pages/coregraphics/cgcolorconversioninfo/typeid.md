> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfo/typeid

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the Core Foundation type identifier for a color conversion info data type.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGColorConversionInfoGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the Core Foundation type identifier for a color conversion info data type.

## Declaration

```objectivec
extern CFTypeID CGColorConversionInfoGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for [CGColorConversionInfoRef](../cgcolorconversioninfo.md).
