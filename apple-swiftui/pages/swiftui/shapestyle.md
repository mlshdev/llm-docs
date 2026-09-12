> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle](https://developer.apple.com/documentation/swiftui/shapestyle)

# ShapeStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A color or pattern to use when rendering a shape.

## Declaration

```swift
protocol ShapeStyle : Sendable
```

<a id="overview"></a>

## Overview

You create custom shape styles by declaring a type that conforms to the `ShapeStyle` protocol and implementing the required `resolve` function to return a shape style that represents the desired appearance based on the current environment.

For example this shape style reads the current color scheme from the environment to choose the blend mode its color will be composited with:

```swift
struct MyShapeStyle: ShapeStyle {
    func resolve(in environment: EnvironmentValues) -> some ShapeStyle {
        if environment.colorScheme == .light {
            return Color.red.blendMode(.lighten)
        } else {
            return Color.red.blendMode(.darken)
        }
    }
}
```

In addition to creating a custom shape style, you can also use one of the concrete styles that SwiftUI defines. To indicate a specific color or pattern, you can use [Color](color.md) or the style returned by [image(\_:sourceRect:scale:)](shapestyle/image%28__sourcerect_scale_%29.md), or one of the gradient types, like the one returned by [radialGradient(\_:center:startRadius:endRadius:)](shapestyle/radialgradient%28__center_startradius_endradius_%29.md). To set a color that’s appropriate for a given context on a given platform, use one of the semantic styles, like [background](shapestyle/background.md) or [primary](shapestyle/primary.md).

You can use a shape style by:

- Filling a shape with a style with the [fill(\_:style:)](shape/fill%28__style_%29.md) modifier:

  ```swift
  Path { path in
      path.move(to: .zero)
      path.addLine(to: CGPoint(x: 50, y: 0))
      path.addArc(
          center: .zero,
          radius: 50,
          startAngle: .zero,
          endAngle: .degrees(90),
          clockwise: false)
  }
  .fill(.radialGradient(
      Gradient(colors: [.yellow, .red]),
      center: .topLeading,
      startRadius: 15,
      endRadius: 80))
  ```

  ![A screenshot of a quarter of a circle filled with](https://developer.apple.com/images/com.apple.SwiftUI/ShapeStyle-1@2x.png)
- Tracing the outline of a shape with a style with either the [stroke(\_:lineWidth:)](shape/stroke%28__linewidth_%29.md) or the [stroke(\_:style:)](shape/stroke%28__style_%29.md) modifier:

  ```swift
  RoundedRectangle(cornerRadius: 10)
      .stroke(.mint, lineWidth: 10)
      .frame(width: 200, height: 50)
  ```

  ![A screenshot of a rounded rectangle, outlined in mint.](https://developer.apple.com/images/com.apple.SwiftUI/ShapeStyle-2@2x.png)
- Styling the foreground elements in a view with the [foregroundStyle(\_:)](view/foregroundstyle%28__%29.md) modifier:

  ```swift
  VStack(alignment: .leading) {
      Text("Primary")
          .font(.title)
      Text("Secondary")
          .font(.caption)
          .foregroundStyle(.secondary)
  }
  ```

  ![A screenshot of a title in the primary content color above a](https://developer.apple.com/images/com.apple.SwiftUI/ShapeStyle-3@2x.png)

## Topics

### System colors

- [black](shapestyle/black.md): Conforms when `Self` is `Color`. A black color suitable for use in UI elements.
- [blue](shapestyle/blue.md): Conforms when `Self` is `Color`. A context-dependent blue color suitable for use in UI elements.
- [brown](shapestyle/brown.md): Conforms when `Self` is `Color`. A context-dependent brown color suitable for use in UI elements.
- [clear](shapestyle/clear.md): Conforms when `Self` is `Color`. A clear color suitable for use in UI elements.
- [cyan](shapestyle/cyan.md): Conforms when `Self` is `Color`. A context-dependent cyan color suitable for use in UI elements.
- [gray](shapestyle/gray.md): Conforms when `Self` is `Color`. A context-dependent gray color suitable for use in UI elements.
- [green](shapestyle/green.md): Conforms when `Self` is `Color`. A context-dependent green color suitable for use in UI elements.
- [indigo](shapestyle/indigo.md): Conforms when `Self` is `Color`. A context-dependent indigo color suitable for use in UI elements.
- [mint](shapestyle/mint.md): Conforms when `Self` is `Color`. A context-dependent mint color suitable for use in UI elements.
- [orange](shapestyle/orange.md): Conforms when `Self` is `Color`. A context-dependent orange color suitable for use in UI elements.
- [pink](shapestyle/pink.md): Conforms when `Self` is `Color`. A context-dependent pink color suitable for use in UI elements.
- [purple](shapestyle/purple.md): Conforms when `Self` is `Color`. A context-dependent purple color suitable for use in UI elements.
- [red](shapestyle/red.md): Conforms when `Self` is `Color`. A context-dependent red color suitable for use in UI elements.
- [teal](shapestyle/teal.md): Conforms when `Self` is `Color`. A context-dependent teal color suitable for use in UI elements.
- [white](shapestyle/white.md): Conforms when `Self` is `Color`. A white color suitable for use in UI elements.
- [yellow](shapestyle/yellow.md): Conforms when `Self` is `Color`. A context-dependent yellow color suitable for use in UI elements.

### Angular gradients

- [angularGradient(\_:center:startAngle:endAngle:)](shapestyle/angulargradient%28__center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient, which applies the color function as the angle changes between the start and end angles, and anchored to a relative center point within the filled shape.
- [angularGradient(colors:center:startAngle:endAngle:)](shapestyle/angulargradient%28colors_center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient defined by a collection of colors.
- [angularGradient(stops:center:startAngle:endAngle:)](shapestyle/angulargradient%28stops_center_startangle_endangle_%29.md): Conforms when `Self` is `AngularGradient`. An angular gradient defined by a collection of color stops.

### Conic gradients

- [conicGradient(\_:center:angle:)](shapestyle/conicgradient%28__center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient that completes a full turn, optionally starting from a given angle and anchored to a relative center point within the filled shape.
- [conicGradient(colors:center:angle:)](shapestyle/conicgradient%28colors_center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient defined by a collection of colors that completes a full turn.
- [conicGradient(stops:center:angle:)](shapestyle/conicgradient%28stops_center_angle_%29.md): Conforms when `Self` is `AngularGradient`. A conic gradient defined by a collection of color stops that completes a full turn.

### Elliptical gradients

- [ellipticalGradient(\_:center:startRadiusFraction:endRadiusFraction:)](shapestyle/ellipticalgradient%28__center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse.
- [ellipticalGradient(colors:center:startRadiusFraction:endRadiusFraction:)](shapestyle/ellipticalgradient%28colors_center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse defined by a collection of colors.
- [ellipticalGradient(stops:center:startRadiusFraction:endRadiusFraction:)](shapestyle/ellipticalgradient%28stops_center_startradiusfraction_endradiusfraction_%29.md): Conforms when `Self` is `EllipticalGradient`. A radial gradient that draws an ellipse defined by a collection of color stops.

### Linear gradients

- [linearGradient(\_:startPoint:endPoint:)](shapestyle/lineargradient%28__startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient.
- [linearGradient(colors:startPoint:endPoint:)](shapestyle/lineargradient%28colors_startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient defined by a collection of colors.
- [linearGradient(stops:startPoint:endPoint:)](shapestyle/lineargradient%28stops_startpoint_endpoint_%29.md): Conforms when `Self` is `LinearGradient`. A linear gradient defined by a collection of color stops.

### Radial gradients

- [radialGradient(\_:center:startRadius:endRadius:)](shapestyle/radialgradient%28__center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient.
- [radialGradient(colors:center:startRadius:endRadius:)](shapestyle/radialgradient%28colors_center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient defined by a collection of colors.
- [radialGradient(stops:center:startRadius:endRadius:)](shapestyle/radialgradient%28stops_center_startradius_endradius_%29.md): Conforms when `Self` is `RadialGradient`. A radial gradient defined by a collection of color stops.

### Materials

- [ultraThinMaterial](shapestyle/ultrathinmaterial.md): Conforms when `Self` is `Material`. A mostly translucent material.
- [thinMaterial](shapestyle/thinmaterial.md): Conforms when `Self` is `Material`. A material that’s more translucent than opaque.
- [regularMaterial](shapestyle/regularmaterial.md): Conforms when `Self` is `Material`. A material that’s somewhat translucent.
- [thickMaterial](shapestyle/thickmaterial.md): Conforms when `Self` is `Material`. A material that’s more opaque than translucent.
- [ultraThickMaterial](shapestyle/ultrathickmaterial.md): Conforms when `Self` is `Material`. A mostly opaque material.
- [bar](shapestyle/bar.md): Conforms when `Self` is `Material`. A material matching the style of system toolbars.

### Image paint styles

- [image(\_:sourceRect:scale:)](shapestyle/image%28__sourcerect_scale_%29.md): Conforms when `Self` is `ImagePaint`. A shape style that fills a shape by repeating a region of an image.

### Hierarchical styles

- [secondary](shapestyle/secondary-swift.property.md): Returns the second level of this shape style.
- [tertiary](shapestyle/tertiary-swift.property.md): Returns the third level of this shape style.
- [quaternary](shapestyle/quaternary-swift.property.md): Returns the fourth level of this shape style.
- [quinary](shapestyle/quinary-swift.property.md): Returns the fifth level of this shape style.
- [primary](shapestyle/primary.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the first level of the current content style.
- [secondary](shapestyle/secondary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the second level of the current content style.
- [tertiary](shapestyle/tertiary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the third level of the current content style.
- [quaternary](shapestyle/quaternary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the fourth level of the current content style.
- [quinary](shapestyle/quinary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the fifth level of the current content style.

### Semantic styles

- [foreground](shapestyle/foreground.md): Conforms when `Self` is `ForegroundStyle`. The foreground style in the current context.
- [background](shapestyle/background.md): Conforms when `Self` is `BackgroundStyle`. The background style in the current context.
- [selection](shapestyle/selection.md): Conforms when `Self` is `SelectionShapeStyle`. A style used to visually indicate selection following platform conventional colors and behaviors.
- [separator](shapestyle/separator.md): Conforms when `Self` is `SeparatorShapeStyle`. A style appropriate for foreground separator or border lines.
- [tint](shapestyle/tint.md): Conforms when `Self` is `TintShapeStyle`. A style that reflects the current tint color.
- [placeholder](shapestyle/placeholder.md): Conforms when `Self` is `PlaceholderTextShapeStyle`. A style appropriate for placeholder text.
- [link](shapestyle/link.md): Conforms when `Self` is `LinkShapeStyle`. A style appropriate for links.
- [fill](shapestyle/fill.md): Conforms when `Self` is `FillShapeStyle`. An overlay fill style for filling shapes.
- [windowBackground](shapestyle/windowbackground.md): Conforms when `Self` is `WindowBackgroundShapeStyle`. A style appropriate for elements that should match the background of their containing window.

### Modifying a shape style

- [blendMode(\_:)](shapestyle/blendmode%28__%29-swift.method.md): Returns a new style based on `self` that applies the specified blend mode when drawing.
- [opacity(\_:)](shapestyle/opacity%28__%29-swift.method.md): Returns a new style based on `self` that multiplies by the specified opacity when drawing.
- [shadow(\_:)](shapestyle/shadow%28__%29-swift.method.md): Applies the specified shadow effect to the shape style.

### Configuring the default shape style

- [blendMode(\_:)](shapestyle/blendmode%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a new style based on the current style that uses `mode` as its blend mode when drawing.
- [opacity(\_:)](shapestyle/opacity%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a new style based on the current style that multiplies by `opacity` when drawing.
- [shadow(\_:)](shapestyle/shadow%28__%29-swift.type.method.md): Conforms when `Self` is `AnyShapeStyle`. Returns a shape style that applies the specified shadow style to the current style.

### Mapping to absolute coordinates

- [in(\_:)](shapestyle/in%28__%29.md): Maps a shape style’s unit-space coordinates to the absolute coordinates of a given rectangle.

### Resolving a shape style in an environment

- [resolve(in:)](shapestyle/resolve%28in_%29.md): Evaluate to a resolved shape style given the current `environment`.
- [Resolved](shapestyle/resolved.md): The type of shape style this will resolve to.

### Using a shape style as a view

- [body](shapestyle/body.md): Conforms when `Self` conforms to `View` and `Body` is `_ShapeView<Rectangle, Self>`. A rectangular view that’s filled with the shape style.

### Supporting types

Construct instances of these styles using the properties and methods of the shape style protocol.

- [AngularGradient](angulargradient.md): An angular gradient.
- [EllipticalGradient](ellipticalgradient.md): A radial gradient that draws an ellipse.
- [LinearGradient](lineargradient.md): A linear gradient.
- [RadialGradient](radialgradient.md): A radial gradient.
- [Material](material.md): A background material type.
- [ImagePaint](imagepaint.md): A shape style that fills a shape by repeating a region of an image.
- [HierarchicalShapeStyle](hierarchicalshapestyle.md): A shape style that maps to one of the numbered content styles.
- [HierarchicalShapeStyleModifier](hierarchicalshapestylemodifier.md): Styles that you can apply to hierarchical shapes.
- [ForegroundStyle](foregroundstyle.md): The foreground style in the current context.
- [BackgroundStyle](backgroundstyle.md): The background style in the current context.
- [SelectionShapeStyle](selectionshapestyle.md): A style used to visually indicate selection following platform conventional colors and behaviors.
- [SeparatorShapeStyle](separatorshapestyle.md): A style appropriate for foreground separator or border lines.
- [TintShapeStyle](tintshapestyle.md): A style that reflects the current tint color.
- [FillShapeStyle](fillshapestyle.md): A shape style that displays one of the overlay fills.
- [LinkShapeStyle](linkshapestyle.md): A style appropriate for links.
- [PlaceholderTextShapeStyle](placeholdertextshapestyle.md): A style appropriate for placeholder text.
- [WindowBackgroundShapeStyle](windowbackgroundshapestyle.md): A style appropriate for elements that should match the background of their containing window.

### Instance Methods

- [materialActiveAppearance(\_:)](shapestyle/materialactiveappearance%28__%29.md): Sets an explicit active appearance for materials created by this style.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AngularGradient](angulargradient.md)
- [AnyGradient](anygradient.md)
- [AnyShapeStyle](anyshapestyle.md)
- [BackgroundStyle](backgroundstyle.md)
- [Color](color.md)
- [Color.Resolved](color/resolved.md)
- [Color.ResolvedHDR](color/resolvedhdr.md)
- [EllipticalGradient](ellipticalgradient.md)
- [FillShapeStyle](fillshapestyle.md)
- [ForegroundStyle](foregroundstyle.md)
- [Gradient](gradient.md)
- [HierarchicalShapeStyle](hierarchicalshapestyle.md)
- [HierarchicalShapeStyleModifier](hierarchicalshapestylemodifier.md)
- [ImagePaint](imagepaint.md)
- [LinearGradient](lineargradient.md)
- [LinkShapeStyle](linkshapestyle.md)
- [Material](material.md)
- [MeshGradient](meshgradient.md)
- [PlaceholderTextShapeStyle](placeholdertextshapestyle.md)
- [RadialGradient](radialgradient.md)
- [SelectionShapeStyle](selectionshapestyle.md)
- [SeparatorShapeStyle](separatorshapestyle.md)
- [Shader](shader.md)
- [TintShapeStyle](tintshapestyle.md)
- [WindowBackgroundShapeStyle](windowbackgroundshapestyle.md)

## See Also

### Styling content

- [border(\_:width:)](view/border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [foregroundStyle(\_:)](view/foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](view/foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](view/foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
- [backgroundStyle(\_:)](view/backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [backgroundStyle](environmentvalues/backgroundstyle.md): An optional style that overrides the default system background style when set.
- [AnyShapeStyle](anyshapestyle.md): A type-erased ShapeStyle value.
- [Gradient](gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](anygradient.md): A color gradient.
- [ShadowStyle](shadowstyle.md): A style to use when rendering shadows.
- [Glass](glass.md): A structure that defines the configuration of the Liquid Glass material.
