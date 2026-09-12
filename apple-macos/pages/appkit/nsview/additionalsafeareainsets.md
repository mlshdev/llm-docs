> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/additionalsafeareainsets](https://developer.apple.com/documentation/appkit/nsview/additionalsafeareainsets)

# additionalSafeAreaInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

Custom insets that you specify to modify your view’s safe area

## Declaration

```swift
var additionalSafeAreaInsets: NSEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the safe area insets of your view by the specified amount. The safe area defines the portion of your view’s visible area that is guaranteed to be unobscured by the bars or other ancestor-provided views.

You might use this property if your view contains content that obscures its subviews. For example, a view that draws a custom tool palette might extend the safe area to prevent subviews from displaying their content underneath the palette.

## See Also

### Respecting the View’s Safe Area

- [safeAreaRect](safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [safeAreaInsets](safeareainsets.md): The distances from the edges of your view that define the safe area.
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.

# additionalSafeAreaInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

Custom insets that you specify to modify your view’s safe area

## Declaration

```objectivec
@property NSEdgeInsets additionalSafeAreaInsets;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the safe area insets of your view by the specified amount. The safe area defines the portion of your view’s visible area that is guaranteed to be unobscured by the bars or other ancestor-provided views.

You might use this property if your view contains content that obscures its subviews. For example, a view that draws a custom tool palette might extend the safe area to prevent subviews from displaying their content underneath the palette.

## See Also

### Respecting the View’s Safe Area

- [safeAreaRect](safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [safeAreaInsets](safeareainsets.md): The distances from the edges of your view that define the safe area.
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.
