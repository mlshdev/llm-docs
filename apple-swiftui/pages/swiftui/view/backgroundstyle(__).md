> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/backgroundstyle(_:)](https://developer.apple.com/documentation/swiftui/view/backgroundstyle(_:))

# backgroundStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the specified style to render backgrounds within the view.

## Declaration

```swift
nonisolated func backgroundStyle<S>(_ style: S) -> some View where S : ShapeStyle

```

<a id="discussion"></a>

## Discussion

The following example uses this modifier to set the [backgroundStyle](../environmentvalues/backgroundstyle.md) environment value to a [blue](../shapestyle/blue.md) color that includes a subtle [gradient](../color/gradient.md). SwiftUI fills the [Circle](../circle.md) shape that acts as a background element with this style:

```swift
Image(systemName: "swift")
    .padding()
    .background(in: Circle())
    .backgroundStyle(.blue.gradient)
```

![An image of the Swift logo inside a circle that’s blue with a slight](https://developer.apple.com/images/com.apple.SwiftUI/View-backgroundStyle-1-iOS@2x.png)

To restore the default background style, set the [backgroundStyle](../environmentvalues/backgroundstyle.md) environment value to `nil` using the [environment(\_:\_:)](environment%28____%29.md) modifer:

```swift
.environment(\.backgroundStyle, nil)
```

## See Also

### Styling content

- [border(\_:width:)](border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
- [backgroundStyle](../environmentvalues/backgroundstyle.md): An optional style that overrides the default system background style when set.
- [ShapeStyle](../shapestyle.md): A color or pattern to use when rendering a shape.
- [AnyShapeStyle](../anyshapestyle.md): A type-erased ShapeStyle value.
- [Gradient](../gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](../meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](../anygradient.md): A color gradient.
- [ShadowStyle](../shadowstyle.md): A style to use when rendering shadows.
- [Glass](../glass.md): A structure that defines the configuration of the Liquid Glass material.
