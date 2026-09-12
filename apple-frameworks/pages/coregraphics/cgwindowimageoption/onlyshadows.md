> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowimageoption/onlyshadows](https://developer.apple.com/documentation/coregraphics/cgwindowimageoption/onlyshadows)

# onlyShadows (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var onlyShadows: CGWindowImageOption { get }
```

<a id="Discussion"></a>

## Discussion

When capturing the window, only the shadow effects are captured.

## See Also

### Type Properties

- [bestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [boundsIgnoreFraming](boundsignoreframing.md)
- [nominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [shouldBeOpaque](shouldbeopaque.md)

# kCGWindowImageOnlyShadows (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowImageOnlyShadows
```

<a id="Discussion"></a>

## Discussion

When capturing the window, only the shadow effects are captured.

## See Also

### Type Properties

- [kCGWindowImageBestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [kCGWindowImageBoundsIgnoreFraming](boundsignoreframing.md)
- [kCGWindowImageDefault](kcgwindowimagedefault.md)
- [kCGWindowImageNominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [kCGWindowImageShouldBeOpaque](shouldbeopaque.md)
