> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/blendingmode-swift.property](https://developer.apple.com/documentation/appkit/nsvisualeffectview/blendingmode-swift.property)

# blendingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value indicating how the view’s contents blend with the surrounding content.

## Declaration

```swift
var blendingMode: NSVisualEffectView.BlendingMode { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [NSVisualEffectView.BlendingMode.behindWindow](blendingmode-swift.enum/behindwindow.md) (the default), the visual effect view blurs the content behind the window. When the value is [NSVisualEffectView.BlendingMode.withinWindow](blendingmode-swift.enum/withinwindow.md), it blurs the content behind the view of the current window.

If the visual effect view’s material is [NSVisualEffectView.Material.titlebar](material-swift.enum/titlebar.md), set the blending mode to [NSVisualEffectView.BlendingMode.withinWindow](blendingmode-swift.enum/withinwindow.md).

## See Also

### Specifying the Effect Appearance

- [NSVisualEffectView.BlendingMode](blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [isEmphasized](isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The view’s interior background style.

# blendingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value indicating how the view’s contents blend with the surrounding content.

## Declaration

```objectivec
@property NSVisualEffectBlendingMode blendingMode;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [NSVisualEffectBlendingModeBehindWindow](blendingmode-swift.enum/behindwindow.md) (the default), the visual effect view blurs the content behind the window. When the value is [NSVisualEffectBlendingModeWithinWindow](blendingmode-swift.enum/withinwindow.md), it blurs the content behind the view of the current window.

If the visual effect view’s material is [NSVisualEffectMaterialTitlebar](material-swift.enum/titlebar.md), set the blending mode to [NSVisualEffectBlendingModeWithinWindow](blendingmode-swift.enum/withinwindow.md).

## See Also

### Specifying the Effect Appearance

- [NSVisualEffectBlendingMode](blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [emphasized](isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The view’s interior background style.
