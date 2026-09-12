> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/isemphasized](https://developer.apple.com/documentation/appkit/nsvisualeffectview/isemphasized)

# isEmphasized (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value indicating whether to emphasize the look of the material.

## Declaration

```swift
var isEmphasized: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Some materials change their appearance when they are emphasized. For example, the first responder view conveys its status.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the Effect Appearance

- [blendingMode](blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [NSVisualEffectView.BlendingMode](blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The view’s interior background style.

# emphasized (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value indicating whether to emphasize the look of the material.

## Declaration

```objectivec
@property (getter=isEmphasized) BOOL emphasized;
```

<a id="Discussion"></a>

## Discussion

Some materials change their appearance when they are emphasized. For example, the first responder view conveys its status.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the Effect Appearance

- [blendingMode](blendingmode-swift.property.md): A value indicating how the view’s contents blend with the surrounding content.
- [NSVisualEffectBlendingMode](blendingmode-swift.enum.md): Constants that specify whether the visual effect view blends with what’s either behind or within the window.
- [interiorBackgroundStyle](interiorbackgroundstyle.md): The view’s interior background style.
