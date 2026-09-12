> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/adjustsimagewhenancestorfocused](https://developer.apple.com/documentation/uikit/uiimageview/adjustsimagewhenancestorfocused)

# adjustsImageWhenAncestorFocused (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A Boolean value that determines whether the image view responds when an ancestor gains focus.

## Declaration

```swift
var adjustsImageWhenAncestorFocused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and an ancestor of the image view becomes focused, the image view adjusts the frame of its image using the [focusedFrameGuide](focusedframeguide.md) property. On supported Apple TV devices, setting this property to true renders the image with a Liquid Glass effect when it gains focus.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing focus-related behaviors

- [focusedFrameGuide](focusedframeguide.md): The layout guide to use when the image view is focused.
- [masksFocusEffectToContents](masksfocuseffecttocontents.md): A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.

# adjustsImageWhenAncestorFocused (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A Boolean value that determines whether the image view responds when an ancestor gains focus.

## Declaration

```objectivec
@property (nonatomic) BOOL adjustsImageWhenAncestorFocused;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and an ancestor of the image view becomes focused, the image view adjusts the frame of its image using the [focusedFrameGuide](focusedframeguide.md) property. On supported Apple TV devices, setting this property to true renders the image with a Liquid Glass effect when it gains focus.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing focus-related behaviors

- [focusedFrameGuide](focusedframeguide.md): The layout guide to use when the image view is focused.
- [masksFocusEffectToContents](masksfocuseffecttocontents.md): A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.
