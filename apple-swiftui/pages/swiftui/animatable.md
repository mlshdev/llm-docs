> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animatable](https://developer.apple.com/documentation/swiftui/animatable)

# Animatable

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that describes how to animate a property of a view.

## Declaration

```swift
protocol Animatable
```

<a id="overview"></a>

## Overview

When an animatable value changes inside a [withAnimation(\_:\_:)](withanimation%28____%29.md) block (or is affected by an `animation(_:value:)` modifier), SwiftUI reads the old and new [animatableData](animatable/animatabledata-6nydg.md) values, then interpolates between them over successive frames using [VectorArithmetic](vectorarithmetic.md) operations. The framework calls the [animatableData](animatable/animatabledata-6nydg.md) setter on each frame, giving your type a chance to update any derived state.

<a id="Use-the-Animatable-macro"></a>

### Use the Animatable macro

To conform a type to the `Animatable` protocol, use the [Animatable()](animatable%28%29.md) macro to avoid writing the [animatableData](animatable/animatabledata-6nydg.md) property by hand:

```swift
@Animatable
struct RingSegment: Shape {
    var startAngle: Angle
    var endAngle: Angle
    // ...
}
```

The macro inspects every stored property. Properties whose types conform to `VectorArithmetic` or `Animatable` are included in the synthesized [animatableData](animatable/animatabledata-6nydg.md). If a property cannot participate, the macro emits an error suggesting you mark it with [AnimatableIgnored()](animatableignored%28%29.md) or conform its type to `VectorArithmetic` or `Animatable`:

```swift
@Animatable
struct RingSegment: Shape {
    var startAngle: Angle
    var endAngle: Angle
    @AnimatableIgnored var isOpaque: Bool
    // ...
}
```

<a id="Manual-conformance-for-custom-interpolation"></a>

### Manual conformance for custom interpolation

Reach for a handwritten [animatableData](animatable/animatabledata-6nydg.md) when the interpolated value needs custom logic that does not correspond one-to-one with a stored property, such as normalization, clamping, or driving a derived value.

Use [AnimatableValues](animatablevalues.md) (26.0+ releases) to group multiple animated properties, or [AnimatablePair](animatablepair.md) on earlier deployment targets:

```swift
struct WaveShape: Shape {
    var amplitude: CGFloat
    var phase: CGFloat
    var maxAmplitude: CGFloat

    var animatableData:
        AnimatableValues<CGFloat, CGFloat>
    {
        get {
            AnimatableValues(amplitude, phase)
        }
        set {
            amplitude = min(
                max(newValue.value.0, 0),
                maxAmplitude)
            phase = newValue.value.1
                .truncatingRemainder(
                    dividingBy: 2 * .pi)
        }
    }

    // ...
}
```

## Topics

### Animating data

- [Animatable()](animatable%28%29.md): A member and extension macro that, when applied to a struct, class or enum declaration, synthesizes the conformance to `Animatable` and its requirement, the `animatableData` property using the existing animatable properties of the type this macro is applied to.
- [AnimatableIgnored()](animatableignored%28%29.md): An accessor macro that marks a property of a type to be excluded from the `animatableData` synthesis:
- [animatableData](animatable/animatabledata-6nydg.md): The data to animate.
- [AnimatableData](animatable/animatabledata-swift.associatedtype.md): The type defining the data to animate.

## Relationships

### Inherited By

- [AnimatableModifier](animatablemodifier.md)
- [GeometryEffect](geometryeffect.md)
- [InsettableShape](insettableshape.md)
- [Layout](layout.md)
- [RoundedRectangularShape](roundedrectangularshape.md)
- [Shape](shape.md)
- [TextRenderer](textrenderer.md)
- [VisualEffect](visualeffect.md)

### Conforming Types

- [Angle](angle.md)
- [AnyLayout](anylayout.md)
- [AnyShape](anyshape.md)
- [ButtonBorderShape](buttonbordershape.md)
- [Capsule](capsule.md)
- [Circle](circle.md)
- [Color.Resolved](color/resolved.md)
- [Color.ResolvedHDR](color/resolvedhdr.md)
- [ConcentricRectangle](concentricrectangle.md)
- [ContainerRelativeShape](containerrelativeshape.md)
- [DefaultGlassEffectShape](defaultglasseffectshape.md)
- [Edge.Corner.Style](edge/corner/style.md)
- [EdgeInsets](edgeinsets.md)
- [EdgeInsets3D](edgeinsets3d.md)
- [Ellipse](ellipse.md)
- [EmptyVisualEffect](emptyvisualeffect.md)
- [GridLayout](gridlayout.md)
- [HStackLayout](hstacklayout.md)
- [LayoutRotationUnaryLayout](layoutrotationunarylayout.md)
- [ModifiedContent](modifiedcontent.md)
- [OffsetShape](offsetshape.md)
- [Path](path.md)
- [Rectangle](rectangle.md)
- [RectangleCornerRadii](rectanglecornerradii.md)
- [RotatedShape](rotatedshape.md)
- [RoundedRectangle](roundedrectangle.md)
- [RoundedRectangularShapeCorners](roundedrectangularshapecorners.md)
- [ScaledShape](scaledshape.md)
- [SpatialContainer](spatialcontainer.md)
- [StrokeStyle](strokestyle.md)
- [TextInputBorderShape](textinputbordershape.md)
- [TransformedShape](transformedshape.md)
- [UnevenRoundedRectangle](unevenroundedrectangle.md)
- [UnitPoint](unitpoint.md)
- [UnitPoint3D](unitpoint3d.md)
- [VStackLayout](vstacklayout.md)
- [ZStackLayout](zstacklayout.md)

## See Also

### Making data animatable

- [AnimatableValues](animatablevalues.md)
- [AnimatablePair](animatablepair.md): A pair of animatable values, which is itself animatable.
- [VectorArithmetic](vectorarithmetic.md): A type that can serve as the animatable data of an animatable type.
- [EmptyAnimatableData](emptyanimatabledata.md): An empty type for animatable data.
