> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/zstack](https://developer.apple.com/documentation/swiftui/zstack)

# ZStack

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that overlays its subviews, aligning them in both axes.

## Declaration

```swift
@frozen nonisolated struct ZStack<Content> where Content : View
```

## Mentioned In

- [Building layouts with stack views](building-layouts-with-stack-views.md)
- [Laying out a simple view](laying-out-a-simple-view.md)
- [Adding a background to your view](adding-a-background-to-your-view.md)
- [Aligning views within a stack](aligning-views-within-a-stack.md)
- [Creating performant scrollable stacks](creating-performant-scrollable-stacks.md)
- [Making fine adjustments to a view’s position](making-fine-adjustments-to-a-view-s-position.md)
- [Picking container views for your content](picking-container-views-for-your-content.md)

<a id="overview"></a>

## Overview

The `ZStack` assigns each successive subview a higher z-axis value than the one before it, meaning later subviews appear “on top” of earlier ones.

The following example creates a `ZStack` of 100 x 100 point [Rectangle](rectangle.md) views filled with one of six colors, offsetting each successive subview by 10 points so they don’t completely overlap:

```swift
let colors: [Color] =
    [.red, .orange, .yellow, .green, .blue, .purple]

var body: some View {
    ZStack {
        ForEach(0..<colors.count) {
            Rectangle()
                .fill(colors[$0])
                .frame(width: 100, height: 100)
                .offset(x: CGFloat($0) * 10.0,
                        y: CGFloat($0) * 10.0)
        }
    }
}
```

![Six squares of different colors, stacked atop each other, with a 10-point](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-ZStack-offset-rectangles@2x.png)

The `ZStack` uses an [Alignment](alignment.md) to set the x- and y-axis coordinates of each subview, defaulting to a [center](alignment/center.md) alignment. In the following example, the `ZStack` uses a [bottomLeading](alignment/bottomleading.md) alignment to lay out two subviews, a red 100 x 50 point rectangle below, and a blue 50 x 100 point rectangle on top. Because of the alignment value, both rectangles share a bottom-left corner with the `ZStack` (in locales where left is the leading side).

```swift
var body: some View {
    ZStack(alignment: .bottomLeading) {
        Rectangle()
            .fill(Color.red)
            .frame(width: 100, height: 50)
        Rectangle()
            .fill(Color.blue)
            .frame(width:50, height: 100)
    }
    .border(Color.green, width: 1)
}
```

![A green 100 by 100 square containing two overlapping rectangles: on the](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-ZStack-alignment@2x.png)

> **Note**

> If you need a version of this stack that conforms to the [Layout](layout.md) protocol, like when you want to create a conditional layout using [AnyLayout](anylayout.md), use [ZStackLayout](zstacklayout.md) instead.

## Topics

### Creating a stack

- [init(alignment:content:)](zstack/init%28alignment_content_%29.md): Creates an instance with the given alignment.

### Supporting symbols

- [ZStackContent3D](zstackcontent3d.md): A type that adds spacing to a [ZStack](zstack.md).

### Initializers

- [init(alignment:spacing:content:)](zstack/init%28alignment_spacing_content_%29.md): Conforms when `Content` conforms to `View`. Creates an instance with the given spacing and alignment.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Layering views

- [Adding a background to your view](adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [zIndex(\_:)](view/zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](view/background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](view/background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](view/background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](view/background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](view/background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(alignment:content:)](view/overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](view/overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](view/overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [backgroundMaterial](environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](view/containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](view/containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](containerbackgroundplacement.md): The placement of a container background.
