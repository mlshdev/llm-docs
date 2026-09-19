> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpsconverter/abort()

# abort() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Tells a PostScript converter to abort a conversion at the next available opportunity.

## Declaration

```swift
func abort() -> Bool
```

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the converter is currently converting data (`true` if it is).

## See Also

### Instance Methods

- [convert(\_:consumer:options:)](convert%28__consumer_options_%29.md): Uses a PostScript converter to convert PostScript data to PDF data.

# CGPSConverterAbort (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Tells a PostScript converter to abort a conversion at the next available opportunity.

## Declaration

```objectivec
extern bool CGPSConverterAbort(CGPSConverterRef converter);
```

## Parameters

- `converter`: A PostScript converter.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the converter is currently converting data (`true` if it is).

## See Also

### Miscellaneous Functions

- [CGPSConverterConvert](convert%28__consumer_options_%29.md): Uses a PostScript converter to convert PostScript data to PDF data.
- [CGPSConverterIsConverting](isconverting.md): Checks whether the converter is currently converting data.
