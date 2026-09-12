> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayerrendermode](https://developer.apple.com/documentation/quartzcore/caemitterlayerrendermode)

# CAEmitterLayerRenderMode (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
struct CAEmitterLayerRenderMode
```

## Topics

### Initializers

- [init(rawValue:)](caemitterlayerrendermode/init%28rawvalue_%29.md)

### Type Properties

- [additive](caemitterlayerrendermode/additive.md): The particles are rendered using source-additive compositing.
- [backToFront](caemitterlayerrendermode/backtofront.md): Particles are rendered from back to front, sorted by z-position. This mode uses source-over compositing.
- [oldestFirst](caemitterlayerrendermode/oldestfirst.md): Particles are rendered oldest first. This mode uses source-over compositing.
- [oldestLast](caemitterlayerrendermode/oldestlast.md): Particles are rendered oldest last. This mode uses source-over compositing.
- [unordered](caemitterlayerrendermode/unordered.md): Particles are rendered unordered. This mode uses source-over compositing.

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
- [CAGradientLayerType](cagradientlayertype.md)
- [CALayerContentsFilter](calayercontentsfilter.md)
- [CALayerContentsFormat](calayercontentsformat.md)
- [CALayerContentsGravity](calayercontentsgravity.md)
- [CALayerCornerCurve](calayercornercurve.md)
- [CAMediaTimingFillMode](camediatimingfillmode.md)
- [CAMediaTimingFunctionName](camediatimingfunctionname.md)
- [CAScrollLayerScrollMode](cascrolllayerscrollmode.md)
- [CAShapeLayerFillRule](cashapelayerfillrule.md)
- [CAShapeLayerLineCap](cashapelayerlinecap.md)
- [CAShapeLayerLineJoin](cashapelayerlinejoin.md)

# CAEmitterLayerRenderMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
typedef NSString * CAEmitterLayerRenderMode;
```

## Topics

### Type Properties

- [kCAEmitterLayerAdditive](caemitterlayerrendermode/additive.md): The particles are rendered using source-additive compositing.
- [kCAEmitterLayerBackToFront](caemitterlayerrendermode/backtofront.md): Particles are rendered from back to front, sorted by z-position. This mode uses source-over compositing.
- [kCAEmitterLayerOldestFirst](caemitterlayerrendermode/oldestfirst.md): Particles are rendered oldest first. This mode uses source-over compositing.
- [kCAEmitterLayerOldestLast](caemitterlayerrendermode/oldestlast.md): Particles are rendered oldest last. This mode uses source-over compositing.
- [kCAEmitterLayerUnordered](caemitterlayerrendermode/unordered.md): Particles are rendered unordered. This mode uses source-over compositing.

## See Also

### Data Types

- [CAAnimationCalculationMode](caanimationcalculationmode.md)
- [CAAnimationRotationMode](caanimationrotationmode.md)
- [CAEmitterLayerEmitterMode](caemitterlayeremittermode.md)
- [CAEmitterLayerEmitterShape](caemitterlayeremittershape.md)
- [CAGradientLayerType](cagradientlayertype.md)
- [CALayerContentsFilter](calayercontentsfilter.md)
- [CALayerContentsFormat](calayercontentsformat.md)
- [CALayerContentsGravity](calayercontentsgravity.md)
- [CALayerCornerCurve](calayercornercurve.md)
- [CAMediaTimingFillMode](camediatimingfillmode.md)
- [CAMediaTimingFunctionName](camediatimingfunctionname.md)
- [CAScrollLayerScrollMode](cascrolllayerscrollmode.md)
- [CAShapeLayerFillRule](cashapelayerfillrule.md)
- [CAShapeLayerLineCap](cashapelayerlinecap.md)
- [CAShapeLayerLineJoin](cashapelayerlinejoin.md)
