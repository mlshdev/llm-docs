> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/containerbackground(for:alignment:content:)](https://developer.apple.com/documentation/swiftui/view/containerbackground(for:alignment:content:))

# containerBackground(for:alignment:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the container background of the enclosing container using a view.

## Declaration

```swift
nonisolated func containerBackground<V>(for container: ContainerBackgroundPlacement, alignment: Alignment = .center, @ContentBuilder content: () -> V) -> some View where V : View

```

## Parameters

- `container`: The container that will use the background.
- `alignment`: The alignment that the modifier uses to position the implicit [ZStack](../zstack.md) that groups the background views. The default is [center](../alignment/center.md).
- `content`: The view to use as the background of the container.

<a id="discussion"></a>

## Discussion

The following example uses a custom [View](../view.md) as a background:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            List {
                NavigationLink("Image") {
                    Text("Image")
                    .containerBackground(for: .navigation) {
                        Image(name: "ImageAsset")
                    }
                }
            }
        }
    }
}
```

The `.containerBackground(for:alignment:content:)` modifier differs from the [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md) modifier by automatically filling an entire parent container. [ContainerBackgroundPlacement](../containerbackgroundplacement.md) describes the available containers.

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
- [overlay(alignment:content:)](overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [backgroundMaterial](../environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](../containerbackgroundplacement.md): The placement of a container background.
