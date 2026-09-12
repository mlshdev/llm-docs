> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/setcustomspacing(_:after:)](https://developer.apple.com/documentation/uikit/uistackview/setcustomspacing(_:after:))

# setCustomSpacing(\_:after:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Applies custom spacing after the specified view.

## Declaration

```swift
func setCustomSpacing(_ spacing: CGFloat, after arrangedSubview: UIView)
```

## See Also

### Adding space between items

- [customSpacing(after:)](customspacing%28after_%29.md): Returns the custom spacing after the specified view.
- [spacingUseDefault](spacingusedefault.md): The default spacing for subviews within a stack view.
- [spacingUseSystem](spacingusesystem.md): The system-defined spacing to the neighboring view.

# setCustomSpacing:afterView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Applies custom spacing after the specified view.

## Declaration

```objectivec
- (void) setCustomSpacing:(CGFloat) spacing afterView:(UIView *) arrangedSubview;
```

## See Also

### Adding space between items

- [customSpacingAfterView:](customspacing%28after_%29.md): Returns the custom spacing after the specified view.
- [UIStackViewSpacingUseDefault](spacingusedefault.md): The default spacing for subviews within a stack view.
- [UIStackViewSpacingUseSystem](spacingusesystem.md): The system-defined spacing to the neighboring view.
