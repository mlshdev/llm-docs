> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsappearance/currentdrawingappearance

# currentDrawingAppearance

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.

## Declaration

```objectivec
@property (class, strong, readonly) NSAppearance * currentDrawingAppearance;
```

## See Also

### Getting and Setting the Current Appearance

- [performAsCurrentDrawingAppearance:](performascurrentdrawingappearance%28__%29.md): Sets the appearance to be the active drawing appearance and perform the specified block.
- [currentAppearance](current.md): Deprecated. Returns the appearance object that’s active on the current thread.
