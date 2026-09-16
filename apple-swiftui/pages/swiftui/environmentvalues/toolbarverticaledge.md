> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/toolbarverticaledge

# toolbarVerticalEdge

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

This value reflects the system’s preferred edge for the vertical bar in the current context, regardless of whether a vertical bar is currently visible. Use it to position custom bars or other UI relative to the system’s bar placement.

## Declaration

```swift
var toolbarVerticalEdge: HorizontalEdge? { get }
```

<a id="discussion"></a>

## Discussion

This value is read-only; the system determines the edge based on locale and device.

Returns `nil` on devices and in contexts where the system never places a vertical bar — for example hardware without a vertical bar, or a size class or orientation in which no vertical bar is used.

```swift
struct ContentView: View {
    @Environment(\.toolbarVerticalEdge) var toolbarVerticalEdge

    var body: some View {
        FloatingToolPalette()
            .frame(maxWidth: .infinity,
                   alignment: toolbarVerticalEdge == .trailing
                       ? .trailing : .leading)
    }
}
```

## See Also

### Display characteristics

- [appearsActive](appearsactive.md): Whether views and styles in this environment should prefer an active appearance over an inactive appearance.
- [colorScheme](colorscheme.md): The color scheme of this environment.
- [colorSchemeContrast](colorschemecontrast.md): The contrast associated with the color scheme of this environment.
- [displayScale](displayscale.md): The display scale of this environment.
- [horizontalSizeClass](horizontalsizeclass.md): The horizontal size class of this environment.
- [imageScale](imagescale.md): The image scale for this environment.
- [pixelLength](pixellength.md): The size of a pixel on the screen.
- [sidebarRowSize](sidebarrowsize.md): The current size of sidebar rows.
- [verticalSizeClass](verticalsizeclass.md): The vertical size class of this environment.
- [immersiveSpaceDisplacement](immersivespacedisplacement.md): The displacement that the system applies to the immersive space when moving the space away from its default position, in meters.
- [labelsVisibility](labelsvisibility.md): The labels visibility set by [labelsVisibility(\_:)](../view/labelsvisibility%28__%29.md).
- [materialActiveAppearance](materialactiveappearance.md): The behavior materials should use for their active state, defaulting to `automatic`.
- [TabBarPlacement](../tabbarplacement.md): A placement for tabs in a tab view.
- [toolbarLabelStyle](toolbarlabelstyle.md): The label style to apply to controls within a toolbar.
