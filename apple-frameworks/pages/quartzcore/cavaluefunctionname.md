> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cavaluefunctionname](https://developer.apple.com/documentation/quartzcore/cavaluefunctionname)

# CAValueFunctionName (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
struct CAValueFunctionName
```

## Topics

### Initializers

- [init(rawValue:)](cavaluefunctionname/init%28rawvalue_%29.md)

### Type Properties

- [rotateX](cavaluefunctionname/rotatex.md): A value function that rotates by the input value, in radians, around the x-axis. This value function expects a single input value.
- [rotateY](cavaluefunctionname/rotatey.md): A value function that rotates by the input value, in radians, around the y-axis. This value function expects a single input value.
- [rotateZ](cavaluefunctionname/rotatez.md): A value function that rotates by the input value, in radians, around the z-axis. This value function expects a single input value.
- [scale](cavaluefunctionname/scale.md): A value function scales by the input value along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) scale values.
- [scaleX](cavaluefunctionname/scalex.md): A value function scales by the input value along the x-axis. Animations referencing this value transform function must provide a single animation value.
- [scaleY](cavaluefunctionname/scaley.md): A value function scales by the input value along the y-axis. Animations referencing this value function must provide a single animation value.
- [scaleZ](cavaluefunctionname/scalez.md): A value function that scales by the input value along the z-axis. Animations referencing this value function must provide a single animation value.
- [translate](cavaluefunctionname/translate.md): A value function that translates by the input values along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) translate values.
- [translateX](cavaluefunctionname/translatex.md): A value function translates by the input value along the x-axis. Animations referencing this value function must provide a single input value.
- [translateY](cavaluefunctionname/translatey.md): A value function translates by the input value along the y-axis. Animations referencing this value function must provide a single input value.
- [translateZ](cavaluefunctionname/translatez.md): A value function translates by the input value along the z-axis. Animations referencing this value function must provide a single input value.

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
- [CAMediaTimingFillMode](camediatimingfillmode.md)
- [CAMediaTimingFunctionName](camediatimingfunctionname.md)
- [CAScrollLayerScrollMode](cascrolllayerscrollmode.md)
- [CAShapeLayerFillRule](cashapelayerfillrule.md)
- [CAShapeLayerLineCap](cashapelayerlinecap.md)

# CAValueFunctionName (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Alias  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
typedef NSString * CAValueFunctionName;
```

## Topics

### Type Properties

- [kCAValueFunctionRotateX](cavaluefunctionname/rotatex.md): A value function that rotates by the input value, in radians, around the x-axis. This value function expects a single input value.
- [kCAValueFunctionRotateY](cavaluefunctionname/rotatey.md): A value function that rotates by the input value, in radians, around the y-axis. This value function expects a single input value.
- [kCAValueFunctionRotateZ](cavaluefunctionname/rotatez.md): A value function that rotates by the input value, in radians, around the z-axis. This value function expects a single input value.
- [kCAValueFunctionScale](cavaluefunctionname/scale.md): A value function scales by the input value along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) scale values.
- [kCAValueFunctionScaleX](cavaluefunctionname/scalex.md): A value function scales by the input value along the x-axis. Animations referencing this value transform function must provide a single animation value.
- [kCAValueFunctionScaleY](cavaluefunctionname/scaley.md): A value function scales by the input value along the y-axis. Animations referencing this value function must provide a single animation value.
- [kCAValueFunctionScaleZ](cavaluefunctionname/scalez.md): A value function that scales by the input value along the z-axis. Animations referencing this value function must provide a single animation value.
- [kCAValueFunctionTranslate](cavaluefunctionname/translate.md): A value function that translates by the input values along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) translate values.
- [kCAValueFunctionTranslateX](cavaluefunctionname/translatex.md): A value function translates by the input value along the x-axis. Animations referencing this value function must provide a single input value.
- [kCAValueFunctionTranslateY](cavaluefunctionname/translatey.md): A value function translates by the input value along the y-axis. Animations referencing this value function must provide a single input value.
- [kCAValueFunctionTranslateZ](cavaluefunctionname/translatez.md): A value function translates by the input value along the z-axis. Animations referencing this value function must provide a single input value.

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
- [CAMediaTimingFillMode](camediatimingfillmode.md)
- [CAMediaTimingFunctionName](camediatimingfunctionname.md)
- [CAScrollLayerScrollMode](cascrolllayerscrollmode.md)
- [CAShapeLayerFillRule](cashapelayerfillrule.md)
- [CAShapeLayerLineCap](cashapelayerlinecap.md)
