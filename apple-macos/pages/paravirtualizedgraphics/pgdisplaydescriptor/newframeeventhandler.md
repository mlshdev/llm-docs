> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaydescriptor/newframeeventhandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/newframeeventhandler)

# newFrameEventHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls when the guest environment has a new frame to display.

## Declaration

```swift
var newFrameEventHandler: PGDisplayNewFrameEventHandler? { get set }
```

## See Also

### Handling Frame Events

- [PGDisplayNewFrameEventHandler](../pgdisplaynewframeeventhandler.md): The block signature for a routine that handles frame updates from the guest.

# newFrameEventHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls when the guest environment has a new frame to display.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGDisplayNewFrameEventHandler newFrameEventHandler;
```

## See Also

### Handling Frame Events

- [PGDisplayNewFrameEventHandler](../pgdisplaynewframeeventhandler.md): The block signature for a routine that handles frame updates from the guest.
