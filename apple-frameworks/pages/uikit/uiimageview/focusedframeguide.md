> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/focusedframeguide](https://developer.apple.com/documentation/uikit/uiimageview/focusedframeguide)

# focusedFrameGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The layout guide to use when the image view is focused.

## Declaration

```swift
var focusedFrameGuide: UILayoutGuide { get }
```

<a id="Discussion"></a>

## Discussion

The layout guide in this property represents the display frame of the image view when it’s focused. You can use this property to align other elements of your interface to the image view or to adjust the constraints of your interface.

When the [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md) property is set to [true](https://developer.apple.com/documentation/swift/true), the image view automatically applies this layout guide when the image view becomes focused.

## See Also

### Managing focus-related behaviors

- [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md): A Boolean value that determines whether the image view responds when an ancestor gains focus.
- [masksFocusEffectToContents](masksfocuseffecttocontents.md): A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.

# focusedFrameGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The layout guide to use when the image view is focused.

## Declaration

```objectivec
@property (strong, readonly) UILayoutGuide * focusedFrameGuide;
```

<a id="Discussion"></a>

## Discussion

The layout guide in this property represents the display frame of the image view when it’s focused. You can use this property to align other elements of your interface to the image view or to adjust the constraints of your interface.

When the [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md) property is set to [true](https://developer.apple.com/documentation/swift/true), the image view automatically applies this layout guide when the image view becomes focused.

## See Also

### Managing focus-related behaviors

- [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md): A Boolean value that determines whether the image view responds when an ancestor gains focus.
- [masksFocusEffectToContents](masksfocuseffecttocontents.md): A Boolean value indicating whether the floating focused appearance uses the image’s alpha channel.
