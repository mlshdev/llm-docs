> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaydescriptor/modechangehandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/modechangehandler)

# modeChangeHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the virtual display’s graphics mode.

## Declaration

```swift
var modeChangeHandler: PGDisplayModeChangeHandler? { get set }
```

## See Also

### Handling Mode Changes

- [PGDisplayModeChangeHandler](../pgdisplaymodechangehandler.md): The block signature for a routine that handles changes to the display’s graphics mode.

# modeChangeHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the virtual display’s graphics mode.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGDisplayModeChangeHandler modeChangeHandler;
```

## See Also

### Handling Mode Changes

- [PGDisplayModeChangeHandler](../pgdisplaymodechangehandler.md): The block signature for a routine that handles changes to the display’s graphics mode.
