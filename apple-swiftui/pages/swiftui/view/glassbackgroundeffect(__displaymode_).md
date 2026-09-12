> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/glassbackgroundeffect(_:displaymode:)](https://developer.apple.com/documentation/swiftui/view/glassbackgroundeffect(_:displaymode:))

# glassBackgroundEffect(\_:displayMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.4+

Fills the view’s background with a custom glass background effect and container-relative rounded rectangle shape.

## Declaration

```swift
nonisolated func glassBackgroundEffect<S>(_ effect: S, displayMode: GlassBackgroundDisplayMode = .always) -> some View where S : GlassBackgroundEffect

```

## Parameters

- `effect`: A [GlassBackgroundEffect](../glassbackgroundeffect.md) instance that SwiftUI uses to draw a background of the modified view.
- `displayMode`: When to display the glass background. The default is [GlassBackgroundDisplayMode.always](../glassbackgrounddisplaymode/always.md).

<a id="return-value"></a>

## Return Value

A view with a glass background.

<a id="discussion"></a>

## Discussion

Use this modifier to add a glass material that may include thickness, specularity, glass blur, shadows, and other effects. Because of its physical depth, the background influences z-axis layout. For different effect, the background may influences x-axis and y-axis layout.

To ensure that the effect renders properly when you add it to a collection of views in a [ZStack](../zstack.md), add the modifier to the stack rather to one of the views in the stack. This includes when you create an implicit stack with view modifiers like [overlay(alignment:content:)](overlay%28alignment_content_%29.md) or [background(alignment:content:)](background%28alignment_content_%29.md). In those cases, you might need to create an explicit [ZStack](../zstack.md) inside the `content` closure to have a place to add the background modifier.

Non closed shapes will be rendered as their convex hull.

## See Also

### Background elements

- [background(alignment:content:)](background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [alternatingRowBackgrounds(\_:)](alternatingrowbackgrounds%28__%29.md): Overrides whether lists and tables in this view have alternating row backgrounds.
- [listRowBackground(\_:)](listrowbackground%28__%29.md): Places a custom background view behind a list row item.
- [scrollContentBackground(\_:)](scrollcontentbackground%28__%29.md): Specifies the visibility of the background for scrollable views within this view.
- [containerBackground(\_:for:)](containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [glassBackgroundEffect(displayMode:)](glassbackgroundeffect%28displaymode_%29.md): Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(in:displayMode:)](glassbackgroundeffect%28in_displaymode_%29.md): Fills the view’s background with an automatic glass background effect and a shape that you specify.
- [glassBackgroundEffect(\_:in:displayMode:)](glassbackgroundeffect%28__in_displaymode_%29.md): Fills the view’s background with a custom glass background effect and a shape that you specify.
- [backgroundExtensionEffect()](backgroundextensioneffect%28%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
- [backgroundExtensionEffect(isEnabled:)](backgroundextensioneffect%28isenabled_%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
