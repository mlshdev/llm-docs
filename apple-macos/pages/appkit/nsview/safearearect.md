> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/safearearect](https://developer.apple.com/documentation/appkit/nsview/safearearect)

# safeAreaRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A rectangle in the view’s coordinate system that contains the unobscured portion of the view.

## Declaration

```swift
var safeAreaRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The safe area of a view reflects the area not covered by navigation bars, tab bars, toolbars, and other ancestor views that might obscure the current view. Draw content inside this rectangle to ensure it isn’t covered by other content.

## See Also

### Respecting the View’s Safe Area

- [safeAreaInsets](safeareainsets.md): The distances from the edges of your view that define the safe area.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.

# safeAreaRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A rectangle in the view’s coordinate system that contains the unobscured portion of the view.

## Declaration

```objectivec
@property (readonly) NSRect safeAreaRect;
```

<a id="Discussion"></a>

## Discussion

The safe area of a view reflects the area not covered by navigation bars, tab bars, toolbars, and other ancestor views that might obscure the current view. Draw content inside this rectangle to ensure it isn’t covered by other content.

## See Also

### Respecting the View’s Safe Area

- [safeAreaInsets](safeareainsets.md): The distances from the edges of your view that define the safe area.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide you use to position content inside your view’s safe area.
