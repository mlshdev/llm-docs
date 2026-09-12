> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/desktopimageoptionkey/imagescaling](https://developer.apple.com/documentation/appkit/nsworkspace/desktopimageoptionkey/imagescaling)

# imageScaling (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

A key that contains the behavior to use when scaling the image.

## Declaration

```swift
static let imageScaling: NSWorkspace.DesktopImageOptionKey
```

<a id="Discussion"></a>

## Discussion

The value is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object that contains an [NSImageScaling](../../nsimagescaling.md) constant as declared in [NSCell](../../nscell.md). If you don’t include this key, the workspace object uses [NSImageScaling.scaleProportionallyUpOrDown](../../nsimagescaling/scaleproportionallyupordown.md). [NSImageScaling.scaleProportionallyDown](../../nsimagescaling/scaleproportionallydown.md) isn’t supported.

## See Also

### Option Keys

- [allowClipping](allowclipping.md): A key that contains the behavior to use when clipping the image.
- [fillColor](fillcolor.md): A key that contains the behavior to use when filling the empty space around the image.

# NSWorkspaceDesktopImageScalingKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

A key that contains the behavior to use when scaling the image.

## Declaration

```objectivec
extern NSWorkspaceDesktopImageOptionKey const NSWorkspaceDesktopImageScalingKey;
```

<a id="Discussion"></a>

## Discussion

The value is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object that contains an [NSImageScaling](../../nsimagescaling.md) constant as declared in [NSCell](../../nscell.md). If you don’t include this key, the workspace object uses [NSImageScaleProportionallyUpOrDown](../../nsimagescaling/scaleproportionallyupordown.md). [NSImageScaleProportionallyDown](../../nsimagescaling/scaleproportionallydown.md) isn’t supported.

## See Also

### Option Keys

- [NSWorkspaceDesktopImageAllowClippingKey](allowclipping.md): A key that contains the behavior to use when clipping the image.
- [NSWorkspaceDesktopImageFillColorKey](fillcolor.md): A key that contains the behavior to use when filling the empty space around the image.
