> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihovereffectlayer/hoverstyle

# hoverStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The hover style to apply to the sublayers of this layer when this layer is hovered (e.g., when the user looks at this layer). Defaults to the automatic style.

## Declaration

```swift
@NSCopying var hoverStyle: UIHoverStyle { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Not all [UIHoverStyle](../uihoverstyle.md)s may be supported by [UIHoverEffectLayer](../uihovereffectlayer.md). If the provided style is not supported, a fallback style will be selected instead.

# hoverStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The hover style to apply to the sublayers of this layer when this layer is hovered (e.g., when the user looks at this layer). Defaults to the automatic style.

## Declaration

```objectivec
@property (nonatomic, copy) UIHoverStyle * hoverStyle;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Not all [UIHoverStyle](../uihoverstyle.md)s may be supported by [UIHoverEffectLayer](../uihovereffectlayer.md). If the provided style is not supported, a fallback style will be selected instead.
