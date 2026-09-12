> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconverterbegindocumentcallback](https://developer.apple.com/documentation/coregraphics/cgpsconverterbegindocumentcallback)

# CGPSConverterBeginDocumentCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

Performs custom tasks at the beginning of a PostScript conversion process.

## Declaration

```swift
typealias CGPSConverterBeginDocumentCallback = (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(info:callbacks:options:)](cgpsconverter/init%28info_callbacks_options_%29.md).

# CGPSConverterBeginDocumentCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

Performs custom tasks at the beginning of a PostScript conversion process.

## Declaration

```objectivec
typedef void (*)(void *) CGPSConverterBeginDocumentCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [CGPSConverterCreate](cgpsconverter/init%28info_callbacks_options_%29.md).

## See Also

### Callbacks

- [CGPSConverterCallbacks](cgpsconvertercallbacks.md): A structure for holding the callbacks provided when you create a PostScript converter object.
- [CGPSConverterEndDocumentCallback](cgpsconverterenddocumentcallback.md): Performs custom tasks at the end of a PostScript conversion process.
- [CGPSConverterBeginPageCallback](cgpsconverterbeginpagecallback.md): Performs custom tasks at the beginning of each page in a PostScript conversion process.
- [CGPSConverterEndPageCallback](cgpsconverterendpagecallback.md): Performs custom tasks at the end of each page of a PostScript conversion process.
- [CGPSConverterProgressCallback](cgpsconverterprogresscallback.md): Reports progress periodically during a PostScript conversion process.
- [CGPSConverterMessageCallback](cgpsconvertermessagecallback.md): Passes messages generated during a PostScript conversion process.
- [CGPSConverterReleaseInfoCallback](cgpsconverterreleaseinfocallback.md): Performs custom tasks when a PostScript converter is released.
