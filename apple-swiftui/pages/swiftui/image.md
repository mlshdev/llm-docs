> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image](https://developer.apple.com/documentation/swiftui/image)

# Image

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that displays an image.

## Declaration

```swift
@frozen struct Image
```

## Mentioned In

- [Building layouts with stack views](building-layouts-with-stack-views.md)
- [Configuring views](configuring-views.md)
- [Creating performant scrollable stacks](creating-performant-scrollable-stacks.md)
- [Displaying data in lists](displaying-data-in-lists.md)
- [Fitting images into available space](fitting-images-into-available-space.md)

<a id="overview"></a>

## Overview

Use an `Image` instance when you want to add images to your SwiftUI app. You can create images from many sources:

- Image files in your app’s asset library or bundle. Supported types include PNG, JPEG, HEIC, and more.
- Instances of platform-specific image types, like [UIImage](https://developer.apple.com/documentation/uikit/uiimage) and [NSImage](https://developer.apple.com/documentation/appkit/nsimage).
- A bitmap stored in a Core Graphics [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) instance.
- System graphics from the SF Symbols set.

The following example shows how to load an image from the app’s asset library or bundle and scale it to fit within its container:

```swift
Image("Landscape_4")
    .resizable()
    .aspectRatio(contentMode: .fit)
Text("Water wheel")
```

![An image of a water wheel and its adjoining building, resized to fit the](https://developer.apple.com/images/com.apple.SwiftUI/Image-1@2x.png)

You can use methods on the `Image` type as well as standard view modifiers to adjust the size of the image to fit your app’s interface. Here, the `Image` type’s [resizable(capInsets:resizingMode:)](image/resizable%28capinsets_resizingmode_%29.md) method scales the image to fit the current view. Then, the [aspectRatio(\_:contentMode:)](view/aspectratio%28__contentmode_%29.md) view modifier adjusts this resizing behavior to maintain the image’s original aspect ratio, rather than scaling the x- and y-axes independently to fill all four sides of the view. The article [Fitting images into available space](fitting-images-into-available-space.md) shows how to apply scaling, clipping, and tiling to `Image` instances of different sizes.

An `Image` is a late-binding token; the system resolves its actual value only when it’s about to use the image in an environment.

<a id="Making-images-accessible"></a>

### Making images accessible

To use an image as a control, use one of the initializers that takes a `label` parameter. This allows the system’s accessibility frameworks to use the label as the name of the control for users who use features like VoiceOver. For images that are only present for aesthetic reasons, use an initializer with the `decorative` parameter; the accessibility systems ignore these images.

## Topics

### Creating an image

- [init(\_:bundle:)](image/init%28__bundle_%29.md): Creates a labeled image that you can use as content for controls.
- [init(\_:variableValue:bundle:)](image/init%28__variablevalue_bundle_%29.md): Creates a labeled image that you can use as content for controls, with a variable value.
- [init(\_:)](image/init%28__%29.md): Initialize an `Image` with an image resource.

### Creating an image for use as a control

- [init(\_:bundle:label:)](image/init%28__bundle_label_%29.md): Creates a labeled image that you can use as content for controls, with the specified label.
- [init(\_:variableValue:bundle:label:)](image/init%28__variablevalue_bundle_label_%29.md): Creates a labeled image that you can use as content for controls, with the specified label and variable value.
- [init(\_:scale:orientation:label:)](image/init%28__scale_orientation_label_%29.md): Creates a labeled image based on a Core Graphics image instance, usable as content for controls.

### Creating an image for decorative use

- [init(decorative:bundle:)](image/init%28decorative_bundle_%29.md): Creates an unlabeled, decorative image.
- [init(decorative:variableValue:bundle:)](image/init%28decorative_variablevalue_bundle_%29.md): Creates an unlabeled, decorative image, with a variable value.
- [init(decorative:scale:orientation:)](image/init%28decorative_scale_orientation_%29.md): Creates an unlabeled, decorative image based on a Core Graphics image instance.

### Creating a system symbol image

- [init(systemName:)](image/init%28systemname_%29.md): Creates a system symbol image.
- [init(systemName:variableValue:)](image/init%28systemname_variablevalue_%29.md): Creates a system symbol image with a variable value.

### Creating an image from another image

- [init(uiImage:)](image/init%28uiimage_%29.md): Creates a SwiftUI image from a UIKit image instance.
- [init(nsImage:)](image/init%28nsimage_%29.md): Creates a SwiftUI image from an AppKit image instance.

### Creating an image from drawing instructions

- [init(size:label:opaque:colorMode:renderer:)](image/init%28size_label_opaque_colormode_renderer_%29.md): Initializes an image of the given size, with contents provided by a custom rendering closure.

### Resizing images

- [resizable(capInsets:resizingMode:)](image/resizable%28capinsets_resizingmode_%29.md): Sets the mode by which SwiftUI resizes an image to fit its space.

### Specifying rendering behavior

- [antialiased(\_:)](image/antialiased%28__%29.md): Specifies whether SwiftUI applies antialiasing when rendering the image.
- [symbolRenderingMode(\_:)](image/symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [renderingMode(\_:)](image/renderingmode%28__%29.md): Indicates whether SwiftUI renders an image as-is, or by using a different mode.
- [interpolation(\_:)](image/interpolation%28__%29.md): Specifies the current level of quality for rendering an image that requires interpolation.
- [Image.TemplateRenderingMode](image/templaterenderingmode.md): A type that indicates how SwiftUI renders images.
- [Image.Interpolation](image/interpolation.md): The level of quality for rendering an image that requires interpolation, such as a scaled image.

### Specifying dynamic range

- [allowedDynamicRange(\_:)](image/alloweddynamicrange%28__%29.md): Returns a new image configured with the specified allowed dynamic range.
- [allowedDynamicRange](environmentvalues/alloweddynamicrange.md): The allowed dynamic range for the view, or nil.
- [Image.DynamicRange](image/dynamicrange.md)

### Instance Methods

- [symbolColorRenderingMode(\_:)](image/symbolcolorrenderingmode%28__%29.md): Sets the color rendering mode of the image.
- [symbolVariableValueMode(\_:)](image/symbolvariablevaluemode%28__%29.md): Sets the variable value mode mode for symbol images within this view.
- [widgetAccentedRenderingMode(\_:)](image/widgetaccentedrenderingmode%28__%29.md): Specifies the how to render an `Image` when using the `WidgetKit/WidgetRenderingMode/accented` mode.

### Enumerations

- [Image.Orientation](image/orientation.md): The orientation of an image.
- [Image.ResizingMode](image/resizingmode.md): The modes that SwiftUI uses to resize an image to fit within its containing view.
- [Image.Scale](image/scale.md): A scale to apply to vector images relative to text.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [JournalingSuggestionAsset](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionasset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)
- [View](view.md)
