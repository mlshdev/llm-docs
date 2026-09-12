> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconverter/isconverting](https://developer.apple.com/documentation/coregraphics/cgpsconverter/isconverting)

# isConverting (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Checks whether the converter is currently converting data.

## Declaration

```swift
var isConverting: Bool { get }
```

# CGPSConverterIsConverting (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Checks whether the converter is currently converting data.

## Declaration

```objectivec
extern bool CGPSConverterIsConverting(CGPSConverterRef converter);
```

## Parameters

- `converter`: A PostScript converter.

<a id="return-value"></a>

## Return Value

Returns `true` if the conversion is in progress.

## See Also

### Miscellaneous Functions

- [CGPSConverterConvert](convert%28__consumer_options_%29.md): Uses a PostScript converter to convert PostScript data to PDF data.
- [CGPSConverterAbort](abort%28%29.md): Tells a PostScript converter to abort a conversion at the next available opportunity.
