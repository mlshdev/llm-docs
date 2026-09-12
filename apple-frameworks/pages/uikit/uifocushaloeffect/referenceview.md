> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocushaloeffect/referenceview](https://developer.apple.com/documentation/uikit/uifocushaloeffect/referenceview)

# referenceView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view to place the halo effect above.

## Declaration

```swift
weak var referenceView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property, the halo effect appears above this view. If you also set [containerView](containerview.md), this reference view must be a descendant of the container view. The system ensures that the halo effect is in the container but visually above the reference view.

## See Also

### Configuring a halo effect

- [containerView](containerview.md): The container view to place the halo effect into.
- [position](position-swift.property.md): The position of the halo effect relative to its shape.
- [UIFocusHaloEffect.Position](position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.

# referenceView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view to place the halo effect above.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIView * referenceView;
```

<a id="Discussion"></a>

## Discussion

If you set this property, the halo effect appears above this view. If you also set [containerView](containerview.md), this reference view must be a descendant of the container view. The system ensures that the halo effect is in the container but visually above the reference view.

## See Also

### Configuring a halo effect

- [containerView](containerview.md): The container view to place the halo effect into.
- [position](position-swift.property.md): The position of the halo effect relative to its shape.
- [UIFocusHaloEffectPosition](position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.
