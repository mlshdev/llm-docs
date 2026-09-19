> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaynewframeeventhandler

# PGDisplayNewFrameEventHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that handles frame updates from the guest.

## Declaration

```swift
typealias PGDisplayNewFrameEventHandler = () -> Void
```

## See Also

### Handling Frame Events

- [newFrameEventHandler](pgdisplaydescriptor/newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.

# PGDisplayNewFrameEventHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that handles frame updates from the guest.

## Declaration

```objectivec
typedef void (^)(void) PGDisplayNewFrameEventHandler;
```

## See Also

### Handling Frame Events

- [newFrameEventHandler](pgdisplaydescriptor/newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.
