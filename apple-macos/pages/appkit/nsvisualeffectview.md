> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview](https://developer.apple.com/documentation/appkit/nsvisualeffectview)

# NSVisualEffectView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A view that adds translucency and vibrancy effects to the views in your interface.

## Declaration

```swift
class NSVisualEffectView
```

<a id="overview"></a>

## Overview

Use visual effect views primarily as background views for your app’s content. A visual effect view makes your foreground content more prominent by employing the following effects:

- **Translucency** and the blurring of background content adds depth to your interface.
- **Vibrancy** is a subtle blending of foreground and background colors to increase the contrast and make the foreground content stand out visually.

The material and blending mode you assign determines the exact appearance of the visual effect. Not all materials support transparency, and materials apply vibrancy in different ways. The appearance and behavior of materials can also change based on system settings, so always pick a material based on its intended use. For example, use the [NSVisualEffectView.Material.sidebar](nsvisualeffectview/material-swift.enum/sidebar.md) material when your view serves as the background of your window’s sidebar.  Don’t select materials based on the apparent colors they impart on your interface.

AppKit creates visual effect views automatically for window titlebars, popovers, and source list table views. You don’t need to add visual effect views to those elements of your interface.

<a id="Choosing-a-Translucency-Effect-for-Your-View"></a>

### Choosing a Translucency Effect for Your View

For visual effect views you create yourself, use the [blendingMode](nsvisualeffectview/blendingmode-swift.property.md) property to specify how and where you want the translucency applied.

- **Behind-window blending** uses the content behind the window as the background for your visual effect view. Behind-window blending makes your entire window stand out above other windows and apps on the desktop. Sheets and popovers use behind-window blending.
- **In-window blending** uses the window’s content as the background for your visual effect view. Typically, you use in-window blending with scrolling content, so that the scrolled content remains partially visible under other parts of your window chrome. Toolbars always use in-window blending.

![An illustration of a window whose title bar and side bar use visual effect views with different blending options. The title bar uses in-window blending which blends content from the window with the bar. The side bar uses behind-window blending, which allows part of the desktop to show through. ](https://developer.apple.com/images/com.apple.appkit/media-3198506@2x.png)

<a id="Enabling-Vibrancy-for-Foreground-Content"></a>

### Enabling Vibrancy for Foreground Content

The presence of a visual effect view in your view hierarchy does not automatically add vibrancy to your content. For custom views, you must explicitly enable vibrancy by overriding the [allowsVibrancy](nsview/allowsvibrancy.md) property and returning [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  AppKit views and controls automatically add vibrancy where appropriate. For example, [NSTextField](nstextfield.md) enables vibrancy to increase the contrast between the text and background. Don’t change the vibrancy settings of standard AppKit views and controls.

It is recommended that you enable vibrancy only in the leaf views of your view hierarchy. Subviews inherit the vibrancy of their parent. Once enabled in a parent view, a subview cannot turn off vibrancy. As a result, enabling vibrancy in a parent view can lead to subviews that look incorrect if they are not designed to take advantage of the vibrancy effect.

Vibrancy works best when your custom views contain grayscale content. Combining a grayscale foreground with a color background works well, because AppKit improves the contrast while only subtly changing the foreground hue. The same isn’t always true when blending two different color values. Dramatically different foreground and background hues can cancel each other out or result in colors that don’t match your original designs.

Instead of defining custom grayscale color assets, consider using the built-in colors [labelColor](nscolor/labelcolor.md), [secondaryLabelColor](nscolor/secondarylabelcolor.md), [tertiaryLabelColor](nscolor/tertiarylabelcolor.md), and [quaternaryLabelColor](nscolor/quaternarylabelcolor.md). While typically used with text, these colors are applicable with any app content. The built-in colors represent varying levels of contrast for your content, with [labelColor](nscolor/labelcolor.md) offering the most contrast, and [quaternaryLabelColor](nscolor/quaternarylabelcolor.md) offering the least contrast.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you subclass `NSVisualEffectView`:

- Always call `super` if you override [viewDidMoveToWindow()](nsview/viewdidmovetowindow%28%29.md) or [viewWillMove(toWindow:)](nsview/viewwillmove%28towindow_%29.md).
- Do not override [draw(\_:)](nsview/draw%28__%29.md) or [updateLayer()](nsview/updatelayer%28%29.md).

## Topics

### Specifying the Background Material

- [material](nsvisualeffectview/material-swift.property.md): The material shown by the visual effect view.
- [NSVisualEffectView.Material](nsvisualeffectview/material-swift.enum.md): Constants to specify the material shown by the visual effect view.

### Specifying the Effect Appearance

- [blendingMode](nsvisualeffectview/blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [NSVisualEffectView.BlendingMode](nsvisualeffectview/blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [isEmphasized](nsvisualeffectview/isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
- [interiorBackgroundStyle](nsvisualeffectview/interiorbackgroundstyle.md): The view’s interior background style.

### Masking the Visual Effect

- [maskImage](nsvisualeffectview/maskimage.md): An image whose alpha channel masks the visual effect view’s material.

### Enabling or Disabling the Effect

- [state](nsvisualeffectview/state-swift.property.md): A value that indicates whether a view has a visual effect applied.
- [NSVisualEffectView.State](nsvisualeffectview/state-swift.enum.md): Constants to specify how the material appearance should reflect window activity state.

### Handling Moves to a Different Window

- [viewDidMoveToWindow()](nsvisualeffectview/viewdidmovetowindow%28%29.md): Notifies the view that it moved to a new window.
- [viewWillMove(toWindow:)](nsvisualeffectview/viewwillmove%28towindow_%29.md): Notifies the view immediately before it moves to a new window (which may be `nil`).

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual adornments

- [NSBox](nsbox.md): A stylized rectangular box with an optional title.

# NSVisualEffectView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A view that adds translucency and vibrancy effects to the views in your interface.

## Declaration

```objectivec
@interface NSVisualEffectView : NSView
```

<a id="overview"></a>

## Overview

Use visual effect views primarily as background views for your app’s content. A visual effect view makes your foreground content more prominent by employing the following effects:

- **Translucency** and the blurring of background content adds depth to your interface.
- **Vibrancy** is a subtle blending of foreground and background colors to increase the contrast and make the foreground content stand out visually.

The material and blending mode you assign determines the exact appearance of the visual effect. Not all materials support transparency, and materials apply vibrancy in different ways. The appearance and behavior of materials can also change based on system settings, so always pick a material based on its intended use. For example, use the [NSVisualEffectMaterialSidebar](nsvisualeffectview/material-swift.enum/sidebar.md) material when your view serves as the background of your window’s sidebar.  Don’t select materials based on the apparent colors they impart on your interface.

AppKit creates visual effect views automatically for window titlebars, popovers, and source list table views. You don’t need to add visual effect views to those elements of your interface.

<a id="Choosing-a-Translucency-Effect-for-Your-View"></a>

### Choosing a Translucency Effect for Your View

For visual effect views you create yourself, use the [blendingMode](nsvisualeffectview/blendingmode-swift.property.md) property to specify how and where you want the translucency applied.

- **Behind-window blending** uses the content behind the window as the background for your visual effect view. Behind-window blending makes your entire window stand out above other windows and apps on the desktop. Sheets and popovers use behind-window blending.
- **In-window blending** uses the window’s content as the background for your visual effect view. Typically, you use in-window blending with scrolling content, so that the scrolled content remains partially visible under other parts of your window chrome. Toolbars always use in-window blending.

![An illustration of a window whose title bar and side bar use visual effect views with different blending options. The title bar uses in-window blending which blends content from the window with the bar. The side bar uses behind-window blending, which allows part of the desktop to show through. ](https://developer.apple.com/images/com.apple.appkit/media-3198506@2x.png)

<a id="Enabling-Vibrancy-for-Foreground-Content"></a>

### Enabling Vibrancy for Foreground Content

The presence of a visual effect view in your view hierarchy does not automatically add vibrancy to your content. For custom views, you must explicitly enable vibrancy by overriding the [allowsVibrancy](nsview/allowsvibrancy.md) property and returning [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  AppKit views and controls automatically add vibrancy where appropriate. For example, [NSTextField](nstextfield.md) enables vibrancy to increase the contrast between the text and background. Don’t change the vibrancy settings of standard AppKit views and controls.

It is recommended that you enable vibrancy only in the leaf views of your view hierarchy. Subviews inherit the vibrancy of their parent. Once enabled in a parent view, a subview cannot turn off vibrancy. As a result, enabling vibrancy in a parent view can lead to subviews that look incorrect if they are not designed to take advantage of the vibrancy effect.

Vibrancy works best when your custom views contain grayscale content. Combining a grayscale foreground with a color background works well, because AppKit improves the contrast while only subtly changing the foreground hue. The same isn’t always true when blending two different color values. Dramatically different foreground and background hues can cancel each other out or result in colors that don’t match your original designs.

Instead of defining custom grayscale color assets, consider using the built-in colors [labelColor](nscolor/labelcolor.md), [secondaryLabelColor](nscolor/secondarylabelcolor.md), [tertiaryLabelColor](nscolor/tertiarylabelcolor.md), and [quaternaryLabelColor](nscolor/quaternarylabelcolor.md). While typically used with text, these colors are applicable with any app content. The built-in colors represent varying levels of contrast for your content, with [labelColor](nscolor/labelcolor.md) offering the most contrast, and [quaternaryLabelColor](nscolor/quaternarylabelcolor.md) offering the least contrast.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If you subclass `NSVisualEffectView`:

- Always call `super` if you override [viewDidMoveToWindow](nsview/viewdidmovetowindow%28%29.md) or [viewWillMoveToWindow:](nsview/viewwillmove%28towindow_%29.md).
- Do not override [drawRect:](nsview/draw%28__%29.md) or [updateLayer](nsview/updatelayer%28%29.md).

## Topics

### Specifying the Background Material

- [material](nsvisualeffectview/material-swift.property.md): The material shown by the visual effect view.
- [NSVisualEffectMaterial](nsvisualeffectview/material-swift.enum.md): Constants to specify the material shown by the visual effect view.

### Specifying the Effect Appearance

- [blendingMode](nsvisualeffectview/blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [NSVisualEffectBlendingMode](nsvisualeffectview/blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [emphasized](nsvisualeffectview/isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
- [interiorBackgroundStyle](nsvisualeffectview/interiorbackgroundstyle.md): The view’s interior background style.

### Masking the Visual Effect

- [maskImage](nsvisualeffectview/maskimage.md): An image whose alpha channel masks the visual effect view’s material.

### Enabling or Disabling the Effect

- [state](nsvisualeffectview/state-swift.property.md): A value that indicates whether a view has a visual effect applied.
- [NSVisualEffectState](nsvisualeffectview/state-swift.enum.md): Constants to specify how the material appearance should reflect window activity state.

### Handling Moves to a Different Window

- [viewDidMoveToWindow](nsvisualeffectview/viewdidmovetowindow%28%29.md): Notifies the view that it moved to a new window.
- [viewWillMoveToWindow:](nsvisualeffectview/viewwillmove%28towindow_%29.md): Notifies the view immediately before it moves to a new window (which may be `nil`).

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Visual adornments

- [NSBox](nsbox.md): A stylized rectangular box with an optional title.
