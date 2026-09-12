> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaymodechangehandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaymodechangehandler)

# PGDisplayModeChangeHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that handles changes to the display’s graphics mode.

## Declaration

```swift
typealias PGDisplayModeChangeHandler = (PGDisplayCoord_t, OSType) -> Void
```

## Parameters

- `sizeInPixels`: The dimensions of the new display mode.
- `pixelFormat`: The pixel format of the new display mode.

## See Also

### Handling Mode Changes

- [modeChangeHandler](pgdisplaydescriptor/modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.

# PGDisplayModeChangeHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that handles changes to the display’s graphics mode.

## Declaration

```objectivec
typedef void (^)(PGDisplayCoord_t, unsigned int) PGDisplayModeChangeHandler;
```

## Parameters

- `sizeInPixels`: The dimensions of the new display mode.
- `pixelFormat`: The pixel format of the new display mode.

## See Also

### Handling Mode Changes

- [modeChangeHandler](pgdisplaydescriptor/modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
