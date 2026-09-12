> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/backgroundextensioneffect()](https://developer.apple.com/documentation/swiftui/view/backgroundextensioneffect())

# backgroundExtensionEffect()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.

## Declaration

```swift
@MainActor @preconcurrency func backgroundExtensionEffect() -> some View

```

<a id="discussion"></a>

## Discussion

Use this modifier when you want to extend the view beyond its bounds so the copies can function as backgrounds for other elements on top. The most common use case is to apply this to a view in the detail column of a navigation split view so it can extend under the sidebar or inspector region to provide seamless immersive visuals.

```swift
NavigationSplitView {
    // sidebar content
} detail: {
    ZStack {
        BannerView()
            .backgroundExtensionEffect()
    }
}
.inspector(isPresented: $showInspector) {
    // inspector content
}
```

Apply this modifier with discretion. This should often be used with only a single instance of background content with consideration of visual clarity and performance.

> **Note**

> This modifier will clip the view to prevent copies from overlapping with each other.

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
- [glassBackgroundEffect(\_:in:displayMode:)](glassbackgroundeffect%28__in_displaymode_%29.md): Fills the view’s background with a custom glass background effect and a shape that you specify.
- [backgroundExtensionEffect(isEnabled:)](backgroundextensioneffect%28isenabled_%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
