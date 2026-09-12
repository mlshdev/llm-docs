> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisemanticcontentattribute](https://developer.apple.com/documentation/uikit/uisemanticcontentattribute)

# UISemanticContentAttribute (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```swift
enum UISemanticContentAttribute
```

## Topics

### Constants

- [UISemanticContentAttribute.unspecified](uisemanticcontentattribute/unspecified.md): The default value for views.
- [UISemanticContentAttribute.playback](uisemanticcontentattribute/playback.md): A view representing the playback controls, such as Play, Rewind, or Fast Forward buttons or playhead scrubbers.
- [UISemanticContentAttribute.spatial](uisemanticcontentattribute/spatial.md): A view representing a directional control, such as a segment control for text alignment, or a D-pad control for a game.
- [UISemanticContentAttribute.forceLeftToRight](uisemanticcontentattribute/forcelefttoright.md): A view that’s always displayed using a left-to-right layout.
- [UISemanticContentAttribute.forceRightToLeft](uisemanticcontentattribute/forcerighttoleft.md): A view that’s always displayed using a right-to-left layout.

### Initializers

- [init(rawValue:)](uisemanticcontentattribute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIView.AnimationCurve](uiview/animationcurve.md): Specifies the supported animation curves.
- [UIView.AnimationOptions](uiview/animationoptions.md): Options for animating views using block objects.
- [UIView.AnimationTransition](uiview/animationtransition.md): Animation transition options for use in an animation block object.
- [UIView.SystemAnimation](uiview/systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIView.KeyframeAnimationOptions](uiview/keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [NSLayoutConstraint.Axis](nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIView.TintAdjustmentMode](uiview/tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [layoutFittingCompressedSize](uiview/layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [layoutFittingExpandedSize](uiview/layoutfittingexpandedsize.md): The option to use the largest possible size.
- [noIntrinsicMetric](uiview/nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIView.AutoresizingMask](uiview/autoresizingmask-swift.struct.md): Options for automatic view resizing.

# UISemanticContentAttribute (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```objectivec
enum UISemanticContentAttribute : NSInteger;
```

## Topics

### Constants

- [UISemanticContentAttributeUnspecified](uisemanticcontentattribute/unspecified.md): The default value for views.
- [UISemanticContentAttributePlayback](uisemanticcontentattribute/playback.md): A view representing the playback controls, such as Play, Rewind, or Fast Forward buttons or playhead scrubbers.
- [UISemanticContentAttributeSpatial](uisemanticcontentattribute/spatial.md): A view representing a directional control, such as a segment control for text alignment, or a D-pad control for a game.
- [UISemanticContentAttributeForceLeftToRight](uisemanticcontentattribute/forcelefttoright.md): A view that’s always displayed using a left-to-right layout.
- [UISemanticContentAttributeForceRightToLeft](uisemanticcontentattribute/forcerighttoleft.md): A view that’s always displayed using a right-to-left layout.

## See Also

### Constants

- [UIViewAnimationCurve](uiview/animationcurve.md): Specifies the supported animation curves.
- [UIViewAnimationOptions](uiview/animationoptions.md): Options for animating views using block objects.
- [UIViewAnimationTransition](uiview/animationtransition.md): Animation transition options for use in an animation block object.
- [UISystemAnimation](uiview/systemanimation.md): Option to remove the views from the hierarchy when animation is complete.
- [UIViewKeyframeAnimationOptions](uiview/keyframeanimationoptions.md): Options for configuring keyframe-based animations.
- [UILayoutConstraintAxis](nslayoutconstraint/axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [UIViewTintAdjustmentMode](uiview/tintadjustmentmode-swift.enum.md): The tint adjustment mode for the view.
- [UILayoutFittingCompressedSize](uiview/layoutfittingcompressedsize.md): The option to use the smallest possible size.
- [UILayoutFittingExpandedSize](uiview/layoutfittingexpandedsize.md): The option to use the largest possible size.
- [UIViewNoIntrinsicMetric](uiview/nointrinsicmetric.md): The absence of an intrinsic metric for a given numeric view property.
- [UIViewAutoresizing](uiview/autoresizingmask-swift.struct.md): Options for automatic view resizing.
