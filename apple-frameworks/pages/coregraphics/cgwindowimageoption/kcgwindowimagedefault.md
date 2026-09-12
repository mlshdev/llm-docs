> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowimageoption/kcgwindowimagedefault](https://developer.apple.com/documentation/coregraphics/cgwindowimageoption/kcgwindowimagedefault)

# kCGWindowImageDefault

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowImageDefault
```

<a id="Discussion"></a>

## Discussion

When the requested capture rectangle is [CGRectNull](../cgrectnull.md), using this option captures the entire window plus the area required to display any framing effects, such as the window’s shadow. This is the default behavior.

## See Also

### Type Properties

- [kCGWindowImageBestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [kCGWindowImageBoundsIgnoreFraming](boundsignoreframing.md)
- [kCGWindowImageNominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [kCGWindowImageOnlyShadows](onlyshadows.md)
- [kCGWindowImageShouldBeOpaque](shouldbeopaque.md)
