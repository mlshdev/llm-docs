> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocushaloeffect/containerview](https://developer.apple.com/documentation/uikit/uifocushaloeffect/containerview)

# containerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The container view to place the halo effect into.

## Declaration

```swift
weak var containerView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t set this property, the system automatically determines the container according to the focus item that provides the effect and [referenceView](referenceview.md), if present.

## See Also

### Configuring a halo effect

- [referenceView](referenceview.md): The view to place the halo effect above.
- [position](position-swift.property.md): The position of the halo effect relative to its shape.
- [UIFocusHaloEffect.Position](position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.

# containerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The container view to place the halo effect into.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIView * containerView;
```

<a id="Discussion"></a>

## Discussion

If you don’t set this property, the system automatically determines the container according to the focus item that provides the effect and [referenceView](referenceview.md), if present.

## See Also

### Configuring a halo effect

- [referenceView](referenceview.md): The view to place the halo effect above.
- [position](position-swift.property.md): The position of the halo effect relative to its shape.
- [UIFocusHaloEffectPosition](position-swift.enum.md): Constants that describe positions for drawing the halo focus effect.
