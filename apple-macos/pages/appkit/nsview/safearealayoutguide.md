> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/safearealayoutguide](https://developer.apple.com/documentation/appkit/nsview/safearealayoutguide)

# safeAreaLayoutGuide (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The layout guide you use to position content inside your view’s safe area.

## Declaration

```swift
var safeAreaLayoutGuide: NSLayoutGuide { get }
```

<a id="Discussion"></a>

## Discussion

The layout guide in this property reflects the view’s frame minus its safe area insets. Use this guide to configure layout rules relative to this safe area.

## See Also

### Respecting the View’s Safe Area

- [safeAreaRect](safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [safeAreaInsets](safeareainsets.md): The distances from the edges of your view that define the safe area.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area

# safeAreaLayoutGuide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The layout guide you use to position content inside your view’s safe area.

## Declaration

```objectivec
@property (strong, readonly) NSLayoutGuide * safeAreaLayoutGuide;
```

<a id="Discussion"></a>

## Discussion

The layout guide in this property reflects the view’s frame minus its safe area insets. Use this guide to configure layout rules relative to this safe area.

## See Also

### Respecting the View’s Safe Area

- [safeAreaRect](safearearect.md): A rectangle in the view’s coordinate system that contains the unobscured portion of the view.
- [safeAreaInsets](safeareainsets.md): The distances from the edges of your view that define the safe area.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify your view’s safe area
