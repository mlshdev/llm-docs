> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpsconverter/typeid

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Returns the Core Foundation type identifier for PostScript converters.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGPSConverterGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Returns the Core Foundation type identifier for PostScript converters.

## Declaration

```objectivec
extern CFTypeID CGPSConverterGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation identifier for the opaque type [CGPSConverterRef](../cgpsconverter.md).
