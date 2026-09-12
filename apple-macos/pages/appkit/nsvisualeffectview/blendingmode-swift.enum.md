> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/blendingmode-swift.enum](https://developer.apple.com/documentation/appkit/nsvisualeffectview/blendingmode-swift.enum)

# NSVisualEffectView.BlendingMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Constants that specify whether the visual effect view blends with what’s either behind or within the window.

## Declaration

```swift
enum BlendingMode
```

## Topics

### Blend Modes

- [NSVisualEffectView.BlendingMode.behindWindow](blendingmode-swift.enum/behindwindow.md): A mode that blends and blurs the visual effect view with the contents behind the window, such as the desktop or other windows.
- [NSVisualEffectView.BlendingMode.withinWindow](blendingmode-swift.enum/withinwindow.md): A mode that blends and blurs the visual effect view with contents behind the view in the current window only.

### Initializers

- [init(rawValue:)](blendingmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the Effect Appearance

- [blendingMode](blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [isEmphasized](isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The view’s interior background style.

# NSVisualEffectBlendingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Constants that specify whether the visual effect view blends with what’s either behind or within the window.

## Declaration

```objectivec
enum NSVisualEffectBlendingMode : NSInteger;
```

## Topics

### Blend Modes

- [NSVisualEffectBlendingModeBehindWindow](blendingmode-swift.enum/behindwindow.md): A mode that blends and blurs the visual effect view with the contents behind the window, such as the desktop or other windows.
- [NSVisualEffectBlendingModeWithinWindow](blendingmode-swift.enum/withinwindow.md): A mode that blends and blurs the visual effect view with contents behind the view in the current window only.

## See Also

### Specifying the Effect Appearance

- [blendingMode](blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [emphasized](isemphasized.md): A Boolean value indicating whether to emphasize the look of the material.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The view’s interior background style.
