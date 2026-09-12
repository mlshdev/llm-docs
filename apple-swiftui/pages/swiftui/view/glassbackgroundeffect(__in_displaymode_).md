> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/glassbackgroundeffect(_:in:displaymode:)](https://developer.apple.com/documentation/swiftui/view/glassbackgroundeffect(_:in:displaymode:))

# glassBackgroundEffect(\_:in:displayMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.4+

Fills the view’s background with a custom glass background effect and a shape that you specify.

## Declaration

```swift
nonisolated func glassBackgroundEffect<T, S>(_ effect: S, in shape: T, displayMode: GlassBackgroundDisplayMode = .always) -> some View where T : InsettableShape, S : GlassBackgroundEffect

```

## Parameters

- `effect`: A [GlassBackgroundEffect](../glassbackgroundeffect.md) instance that SwiftUI uses to the fill the background shape that you specify.
- `shape`: An [InsettableShape](../insettableshape.md) instance that SwiftUI draws behind the view.
- `displayMode`: When to display the glass background. The default is [GlassBackgroundDisplayMode.always](../glassbackgrounddisplaymode/always.md).

<a id="return-value"></a>

## Return Value

A view with a glass background.

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
- [glassBackgroundEffect(\_:displayMode:)](glassbackgroundeffect%28__displaymode_%29.md): Fills the view’s background with a custom glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(in:displayMode:)](glassbackgroundeffect%28in_displaymode_%29.md): Fills the view’s background with an automatic glass background effect and a shape that you specify.
- [backgroundExtensionEffect()](backgroundextensioneffect%28%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
- [backgroundExtensionEffect(isEnabled:)](backgroundextensioneffect%28isenabled_%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
