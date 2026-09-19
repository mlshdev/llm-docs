> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/hoverstyle

# hoverStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The hover style for the view.

## Declaration

```swift
@NSCopying var hoverStyle: UIHoverStyle? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property defaults to `nil`, which indicates that the view doesn’t have any hover effect. Subclasses can configure this style to use a different default value.

## See Also

### Managing the hover appearance

- [UIHoverStyle](../uihoverstyle.md): The hover style to apply to a view, including an effect and a shape to use for displaying that effect.
- [UIHoverEffectLayer](../uihovereffectlayer.md): A layer type that can be used to apply a hover effect to its sublayers.

# hoverStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The hover style for the view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIHoverStyle * hoverStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property defaults to `nil`, which indicates that the view doesn’t have any hover effect. Subclasses can configure this style to use a different default value.

## See Also

### Managing the hover appearance

- [UIHoverStyle](../uihoverstyle.md): The hover style to apply to a view, including an effect and a shape to use for displaying that effect.
- [UIHoverEffectLayer](../uihovereffectlayer.md): A layer type that can be used to apply a hover effect to its sublayers.
