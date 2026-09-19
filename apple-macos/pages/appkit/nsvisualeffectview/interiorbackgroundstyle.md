> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsvisualeffectview/interiorbackgroundstyle

# interiorBackgroundStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view’s interior background style.

## Declaration

```swift
var interiorBackgroundStyle: NSView.BackgroundStyle { get }
```

<a id="Discussion"></a>

## Discussion

The background style may be light or dark, depending on the selected material.

## See Also

### Specifying the Effect Appearance

- [blendingMode](blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [NSVisualEffectView.BlendingMode](blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [isEmphasized](isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.

# interiorBackgroundStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view’s interior background style.

## Declaration

```objectivec
@property (readonly) NSBackgroundStyle interiorBackgroundStyle;
```

<a id="Discussion"></a>

## Discussion

The background style may be light or dark, depending on the selected material.

## See Also

### Specifying the Effect Appearance

- [blendingMode](blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [NSVisualEffectBlendingMode](blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [emphasized](isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
