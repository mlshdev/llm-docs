> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/overlay(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/overlay(alignment:content:))

# overlay(alignment:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Layers the views that you specify in front of this view.

## Declaration

```swift
nonisolated func overlay<V>(alignment: Alignment = .center, @ContentBuilder content: () -> V) -> some View where V : View

```

## Parameters

- `alignment`: The alignment that the modifier uses to position the implicit [ZStack](../zstack.md) that groups the foreground views. The default is [center](../alignment/center.md).
- `content`: A [ContentBuilder](../contentbuilder.md) that you use to declare the views to draw in front of this view, stacked in the order that you list them. The last view that you list appears at the front of the stack.

<a id="return-value"></a>

## Return Value

A view that uses the specified content as a foreground.

<a id="discussion"></a>

## Discussion

Use this modifier to place one or more views in front of another view. For example, you can place a group of stars on a [RoundedRectangle](../roundedrectangle.md):

```swift
RoundedRectangle(cornerRadius: 8)
    .frame(width: 200, height: 100)
    .overlay(alignment: .topLeading) { Star(color: .red) }
    .overlay(alignment: .topTrailing) { Star(color: .yellow) }
    .overlay(alignment: .bottomLeading) { Star(color: .green) }
    .overlay(alignment: .bottomTrailing) { Star(color: .blue) }
```

The example above assumes that you’ve defined a `Star` view with a parameterized color:

```swift
struct Star: View {
    var color = Color.yellow

    var body: some View {
        Image(systemName: "star.fill")
            .foregroundStyle(color)
    }
}
```

By setting different `alignment` values for each modifier, you make the stars appear in different places on the rectangle:

![A screenshot of a rounded rectangle with a star in each corner. The](https://developer.apple.com/images/com.apple.SwiftUI/View-overlay-2@2x.png)

If you specify more than one view in the `content` closure, the modifier collects all of the views in the closure into an implicit [ZStack](../zstack.md), taking them in order from back to front. For example, you can place a star and a [Circle](../circle.md) on a field of [blue](../shapestyle/blue.md):

```swift
Color.blue
    .frame(width: 200, height: 200)
    .overlay {
        Circle()
            .frame(width: 100, height: 100)
        Star()
    }
```

Both the overlay modifier and the implicit [ZStack](../zstack.md) composed from the overlay content — the circle and the star — use a default [center](../alignment/center.md) alignment. The star appears centered on the circle, and both appear as a composite view centered in front of the square:

![A screenshot of a star centered on a circle, which is](https://developer.apple.com/images/com.apple.SwiftUI/View-overlay-3@2x.png)

If you specify an alignment for the overlay, it applies to the implicit stack rather than to the individual views in the closure. You can see this if you add the [bottom](../alignment/bottom.md) alignment:

```swift
Color.blue
    .frame(width: 200, height: 200)
    .overlay(alignment: .bottom) {
        Circle()
            .frame(width: 100, height: 100)
        Star()
    }
```

The circle and the star move down as a unit to align the stack’s bottom edge with the bottom edge of the square, while the star remains centered on the circle:

![A screenshot of a star centered on a circle, which is on a square.](https://developer.apple.com/images/com.apple.SwiftUI/View-overlay-3a@2x.png)

To control the placement of individual items inside the `content` closure, either use a different overlay modifier for each item, as the earlier example of stars in the corners of a rectangle demonstrates, or add an explicit [ZStack](../zstack.md) inside the content closure with its own alignment:

```swift
Color.blue
    .frame(width: 200, height: 200)
    .overlay(alignment: .bottom) {
        ZStack(alignment: .bottom) {
            Circle()
                .frame(width: 100, height: 100)
            Star()
        }
    }
```

The stack alignment ensures that the star’s bottom edge aligns with the circle’s, while the overlay aligns the composite view with the square:

![A screenshot of a star, a circle, and a square with all their](https://developer.apple.com/images/com.apple.SwiftUI/View-overlay-4@2x.png)

You can achieve layering without an overlay modifier by putting both the modified view and the overlay content into a [ZStack](../zstack.md). This can produce a simpler view hierarchy, but changes the layout priority that SwiftUI applies to the views. Use the overlay modifier when you want the modified view to dominate the layout.

If you want to specify a [ShapeStyle](../shapestyle.md) like a [Color](../color.md) or a [Material](../material.md) as the overlay, use [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md) instead. To specify a [Shape](../shape.md), use [overlay(\_:in:fillStyle:)](overlay%28__in_fillstyle_%29.md).

## See Also

### Layering views

- [Adding a background to your view](../adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [ZStack](../zstack.md): A view that overlays its subviews, aligning them in both axes.
- [zIndex(\_:)](zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [backgroundMaterial](../environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](../containerbackgroundplacement.md): The placement of a container background.
