> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/desktopimageoptionkey/allowclipping](https://developer.apple.com/documentation/appkit/nsworkspace/desktopimageoptionkey/allowclipping)

# allowClipping (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

A key that contains the behavior to use when clipping the image.

## Declaration

```swift
static let allowClipping: NSWorkspace.DesktopImageOptionKey
```

<a id="Discussion"></a>

## Discussion

The value is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing a Boolean, which affects the interpretation of Proportional scaling types. When the value is [false](https://developer.apple.com/documentation/swift/false), the workspace object makes the image fully visible, but it may include empty space on the sides or top and bottom. When the value is [true](https://developer.apple.com/documentation/swift/true), the image fills the entire screen, but may be clipped. If you don’t specify this key, the workspace assumes a value of [false](https://developer.apple.com/documentation/swift/false).  Non-proportional scaling types ignore this value.

## See Also

### Option Keys

- [imageScaling](imagescaling.md): A key that contains the behavior to use when scaling the image.
- [fillColor](fillcolor.md): A key that contains the behavior to use when filling the empty space around the image.

# NSWorkspaceDesktopImageAllowClippingKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

A key that contains the behavior to use when clipping the image.

## Declaration

```objectivec
extern NSWorkspaceDesktopImageOptionKey const NSWorkspaceDesktopImageAllowClippingKey;
```

<a id="Discussion"></a>

## Discussion

The value is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing a Boolean, which affects the interpretation of Proportional scaling types. When the value is [false](https://developer.apple.com/documentation/swift/false), the workspace object makes the image fully visible, but it may include empty space on the sides or top and bottom. When the value is [true](https://developer.apple.com/documentation/swift/true), the image fills the entire screen, but may be clipped. If you don’t specify this key, the workspace assumes a value of [false](https://developer.apple.com/documentation/swift/false).  Non-proportional scaling types ignore this value.

## See Also

### Option Keys

- [NSWorkspaceDesktopImageScalingKey](imagescaling.md): A key that contains the behavior to use when scaling the image.
- [NSWorkspaceDesktopImageFillColorKey](fillcolor.md): A key that contains the behavior to use when filling the empty space around the image.
