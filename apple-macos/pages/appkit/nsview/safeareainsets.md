> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/safeareainsets](https://developer.apple.com/documentation/appkit/nsview/safeareainsets)

# safeAreaInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The distances from the edges of your view that define the safe area.

## Declaration

```swift
var safeAreaInsets: NSEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

A view’s safe area reflects the portion of the view not covered by the window’s title bar or any ancestor views. This property reflects the superview’s safe area plus any additional insets you specify in the [additionalSafeAreaInsets](additionalsafeareainsets.md) property. If the view is not currently installed in a view hierarchy, or is not yet visible onscreen, the insets in this property are `0`.

## See Also

### Respecting the View’s Safe Area

- [safeAreaRect](safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.

# safeAreaInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The distances from the edges of your view that define the safe area.

## Declaration

```objectivec
@property (readonly) NSEdgeInsets safeAreaInsets;
```

<a id="Discussion"></a>

## Discussion

A view’s safe area reflects the portion of the view not covered by the window’s title bar or any ancestor views. This property reflects the superview’s safe area plus any additional insets you specify in the [additionalSafeAreaInsets](additionalsafeareainsets.md) property. If the view is not currently installed in a view hierarchy, or is not yet visible onscreen, the insets in this property are `0`.

## See Also

### Respecting the View’s Safe Area

- [safeAreaRect](safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.
