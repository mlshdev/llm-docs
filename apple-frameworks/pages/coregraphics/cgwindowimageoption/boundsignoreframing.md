> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowimageoption/boundsignoreframing](https://developer.apple.com/documentation/coregraphics/cgwindowimageoption/boundsignoreframing)

# boundsIgnoreFraming (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var boundsIgnoreFraming: CGWindowImageOption { get }
```

<a id="Discussion"></a>

## Discussion

When the requested capture rectangle is [CGRectNull](../cgrectnull.md), using this option captures the window area only and does not capture the area occupied by any window framing effects.

## See Also

### Type Properties

- [bestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [nominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [onlyShadows](onlyshadows.md)
- [shouldBeOpaque](shouldbeopaque.md)

# kCGWindowImageBoundsIgnoreFraming (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGWindowImageBoundsIgnoreFraming
```

<a id="Discussion"></a>

## Discussion

When the requested capture rectangle is [CGRectNull](../cgrectnull.md), using this option captures the window area only and does not capture the area occupied by any window framing effects.

## See Also

### Type Properties

- [kCGWindowImageBestResolution](bestresolution.md): When capturing the window, return the best image resolution. The returned image size may be different than the screen size.
- [kCGWindowImageDefault](kcgwindowimagedefault.md)
- [kCGWindowImageNominalResolution](nominalresolution.md): When capturing the window, return the nominal image resolution. The returned image size is the same as the screen size.
- [kCGWindowImageOnlyShadows](onlyshadows.md)
- [kCGWindowImageShouldBeOpaque](shouldbeopaque.md)
