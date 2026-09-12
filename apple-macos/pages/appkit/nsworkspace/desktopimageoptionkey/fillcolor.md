> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/desktopimageoptionkey/fillcolor](https://developer.apple.com/documentation/appkit/nsworkspace/desktopimageoptionkey/fillcolor)

# fillColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

A key that contains the behavior to use when filling the empty space around the image.

## Declaration

```swift
static let fillColor: NSWorkspace.DesktopImageOptionKey
```

<a id="Discussion"></a>

## Discussion

The value is the [NSColor](../../nscolor.md) object to use when filling any empty space around the image. If you don’t specify this key, the workspace object uses a default color. Currently, the system supports only colors that use or can be converted to use the [calibratedRGB](../../nscolorspacename/calibratedrgb.md) color space. The system also ignores any alpha value in the color you specify.

## See Also

### Option Keys

- [imageScaling](imagescaling.md): A key that contains the behavior to use when scaling the image.
- [allowClipping](allowclipping.md): A key that contains the behavior to use when clipping the image.

# NSWorkspaceDesktopImageFillColorKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

A key that contains the behavior to use when filling the empty space around the image.

## Declaration

```objectivec
extern NSWorkspaceDesktopImageOptionKey const NSWorkspaceDesktopImageFillColorKey;
```

<a id="Discussion"></a>

## Discussion

The value is the [NSColor](../../nscolor.md) object to use when filling any empty space around the image. If you don’t specify this key, the workspace object uses a default color. Currently, the system supports only colors that use or can be converted to use the [NSCalibratedRGBColorSpace](../../nscolorspacename/calibratedrgb.md) color space. The system also ignores any alpha value in the color you specify.

## See Also

### Option Keys

- [NSWorkspaceDesktopImageScalingKey](imagescaling.md): A key that contains the behavior to use when scaling the image.
- [NSWorkspaceDesktopImageAllowClippingKey](allowclipping.md): A key that contains the behavior to use when clipping the image.
