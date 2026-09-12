> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfillmode](https://developer.apple.com/documentation/quartzcore/camediatimingfillmode)

# CAMediaTimingFillMode (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
struct CAMediaTimingFillMode
```

## Topics

### Initializers

- [init(rawValue:)](camediatimingfillmode/init%28rawvalue_%29.md)

### Type Properties

- [backwards](camediatimingfillmode/backwards.md): The receiver clamps values before zero to zero when the animation is completed.
- [both](camediatimingfillmode/both.md): The receiver clamps values at both ends of the object’s time space
- [forwards](camediatimingfillmode/forwards.md): The receiver remains visible in its final state when the animation is completed.
- [removed](camediatimingfillmode/removed.md): The receiver is removed from the presentation when the animation is completed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CAAnimationCalculationMode](caanimationcalculationmode.md)
- [CAAnimationRotationMode](caanimationrotationmode.md)
- [CAEmitterLayerEmitterMode](caemitterlayeremittermode.md)
- [CAEmitterLayerEmitterShape](caemitterlayeremittershape.md)
- [CAEmitterLayerRenderMode](caemitterlayerrendermode.md)
- [CAGradientLayerType](cagradientlayertype.md)
- [CALayerContentsFilter](calayercontentsfilter.md)
- [CALayerContentsFormat](calayercontentsformat.md)
- [CALayerContentsGravity](calayercontentsgravity.md)
- [CALayerCornerCurve](calayercornercurve.md)
- [CAMediaTimingFunctionName](camediatimingfunctionname.md)
- [CAScrollLayerScrollMode](cascrolllayerscrollmode.md)
- [CAShapeLayerFillRule](cashapelayerfillrule.md)
- [CAShapeLayerLineCap](cashapelayerlinecap.md)
- [CAShapeLayerLineJoin](cashapelayerlinejoin.md)

# CAMediaTimingFillMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
typedef NSString * CAMediaTimingFillMode;
```

## Topics

### Type Properties

- [kCAFillModeBackwards](camediatimingfillmode/backwards.md): The receiver clamps values before zero to zero when the animation is completed.
- [kCAFillModeBoth](camediatimingfillmode/both.md): The receiver clamps values at both ends of the object’s time space
- [kCAFillModeForwards](camediatimingfillmode/forwards.md): The receiver remains visible in its final state when the animation is completed.
- [kCAFillModeRemoved](camediatimingfillmode/removed.md): The receiver is removed from the presentation when the animation is completed.

## See Also

### Data Types

- [CAAnimationCalculationMode](caanimationcalculationmode.md)
- [CAAnimationRotationMode](caanimationrotationmode.md)
- [CAEmitterLayerEmitterMode](caemitterlayeremittermode.md)
- [CAEmitterLayerEmitterShape](caemitterlayeremittershape.md)
- [CAEmitterLayerRenderMode](caemitterlayerrendermode.md)
- [CAGradientLayerType](cagradientlayertype.md)
- [CALayerContentsFilter](calayercontentsfilter.md)
- [CALayerContentsFormat](calayercontentsformat.md)
- [CALayerContentsGravity](calayercontentsgravity.md)
- [CALayerCornerCurve](calayercornercurve.md)
- [CAMediaTimingFunctionName](camediatimingfunctionname.md)
- [CAScrollLayerScrollMode](cascrolllayerscrollmode.md)
- [CAShapeLayerFillRule](cashapelayerfillrule.md)
- [CAShapeLayerLineCap](cashapelayerlinecap.md)
- [CAShapeLayerLineJoin](cashapelayerlinejoin.md)
