> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowimageoption/shouldbeopaque](https://developer.apple.com/documentation/coregraphics/cgwindowimageoption/shouldbeopaque)

# shouldBeOpaque (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var shouldBeOpaque: CGWindowImageOption { get }
```

<a id="Discussion"></a>

## Discussion

When capturing the window, partially transparent areas are backed by a solid white color so that the resulting image is fully opaque. You can combine this option with other options.

## See Also

### Type Properties

- [bestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [boundsIgnoreFraming](boundsignoreframing.md)
- [nominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [onlyShadows](onlyshadows.md)

# kCGWindowImageShouldBeOpaque (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowImageShouldBeOpaque
```

<a id="Discussion"></a>

## Discussion

When capturing the window, partially transparent areas are backed by a solid white color so that the resulting image is fully opaque. You can combine this option with other options.

## See Also

### Type Properties

- [kCGWindowImageBestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [kCGWindowImageBoundsIgnoreFraming](boundsignoreframing.md)
- [kCGWindowImageDefault](kcgwindowimagedefault.md)
- [kCGWindowImageNominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [kCGWindowImageOnlyShadows](onlyshadows.md)
