> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/masksfocuseffecttocontents](https://developer.apple.com/documentation/uikit/uiimageview/masksfocuseffecttocontents)

# masksFocusEffectToContents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.

## Declaration

```swift
var masksFocusEffectToContents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [false](https://developer.apple.com/documentation/swift/false) when using multi-layer images or when using images that are completely opaque. Set this property to [true](https://developer.apple.com/documentation/swift/true) only when the image view contains a single-layer image with transparency. When set to [true](https://developer.apple.com/documentation/swift/true), the system uses the image’s alpha channel to create an appropriate floating focused appearance. For example, the system masks the shadow based on the alpha channel of the image.

The aspect ratio of the image view and its displayed image must be the same. Rendering with transparency affects performance, so enable this option only when needed.

## See Also

### Managing focus-related behaviors

- [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md): A Boolean value that determines whether the image view responds when an ancestor gains focus.
- [focusedFrameGuide](focusedframeguide.md): The layout guide to use when the image view is focused.

# masksFocusEffectToContents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.

## Declaration

```objectivec
@property (nonatomic) BOOL masksFocusEffectToContents;
```

<a id="Discussion"></a>

## Discussion

Set this property to [false](https://developer.apple.com/documentation/swift/false) when using multi-layer images or when using images that are completely opaque. Set this property to [true](https://developer.apple.com/documentation/swift/true) only when the image view contains a single-layer image with transparency. When set to [true](https://developer.apple.com/documentation/swift/true), the system uses the image’s alpha channel to create an appropriate floating focused appearance. For example, the system masks the shadow based on the alpha channel of the image.

The aspect ratio of the image view and its displayed image must be the same. Rendering with transparency affects performance, so enable this option only when needed.

## See Also

### Managing focus-related behaviors

- [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md): A Boolean value that determines whether the image view responds when an ancestor gains focus.
- [focusedFrameGuide](focusedframeguide.md): The layout guide to use when the image view is focused.
