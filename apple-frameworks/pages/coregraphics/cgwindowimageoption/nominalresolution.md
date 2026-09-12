> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowimageoption/nominalresolution](https://developer.apple.com/documentation/coregraphics/cgwindowimageoption/nominalresolution)

# nominalResolution (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.

## Declaration

```swift
static var nominalResolution: CGWindowImageOption { get }
```

## See Also

### Type Properties

- [bestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [boundsIgnoreFraming](boundsignoreframing.md)
- [onlyShadows](onlyshadows.md)
- [shouldBeOpaque](shouldbeopaque.md)

# kCGWindowImageNominalResolution (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.

## Declaration

```objectivec
kCGWindowImageNominalResolution
```

## See Also

### Type Properties

- [kCGWindowImageBestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [kCGWindowImageBoundsIgnoreFraming](boundsignoreframing.md)
- [kCGWindowImageDefault](kcgwindowimagedefault.md)
- [kCGWindowImageOnlyShadows](onlyshadows.md)
- [kCGWindowImageShouldBeOpaque](shouldbeopaque.md)
