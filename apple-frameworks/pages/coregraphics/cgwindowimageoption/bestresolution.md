> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowimageoption/bestresolution](https://developer.apple.com/documentation/coregraphics/cgwindowimageoption/bestresolution)

# bestResolution (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

When capturing the window, return the best image resolution. The returned image size may be different than the screen size.

## Declaration

```swift
static var bestResolution: CGWindowImageOption { get }
```

## See Also

### Type Properties

- [boundsIgnoreFraming](boundsignoreframing.md)
- [nominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [onlyShadows](onlyshadows.md)
- [shouldBeOpaque](shouldbeopaque.md)

# kCGWindowImageBestResolution (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

When capturing the window, return the best image resolution. The returned image size may be different than the screen size.

## Declaration

```objectivec
kCGWindowImageBestResolution
```

## See Also

### Type Properties

- [kCGWindowImageBoundsIgnoreFraming](boundsignoreframing.md)
- [kCGWindowImageDefault](kcgwindowimagedefault.md)
- [kCGWindowImageNominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [kCGWindowImageOnlyShadows](onlyshadows.md)
- [kCGWindowImageShouldBeOpaque](shouldbeopaque.md)
