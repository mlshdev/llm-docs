> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/imagescale(_:)](https://developer.apple.com/documentation/swiftui/view/imagescale(_:))

# imageScale(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.

## Declaration

```swift
nonisolated func imageScale(_ scale: Image.Scale) -> some View

```

## Parameters

- `scale`: One of the relative sizes provided by the image scale enumeration.

<a id="discussion"></a>

## Discussion

The example below shows the relative scaling effect. The system renders the image at a relative size based on the available space and configuration options of the image it is scaling.

```swift
VStack {
    HStack {
        Image(systemName: "heart.fill")
            .imageScale(.small)
        Text("Small")
    }
    HStack {
        Image(systemName: "heart.fill")
            .imageScale(.medium)
        Text("Medium")
    }

    HStack {
        Image(systemName: "heart.fill")
            .imageScale(.large)
        Text("Large")
    }
}
```

![A view showing small, medium, and large hearts rendered at a size](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-imageScale@2x.png)

## See Also

### Configuring an image

- [Fitting images into available space](../fitting-images-into-available-space.md): Adjust the size and shape of images in your app’s user interface by applying view modifiers.
- [imageScale](../environmentvalues/imagescale.md): The image scale for this environment.
- [Image.Scale](../image/scale.md): A scale to apply to vector images relative to text.
- [Image.Orientation](../image/orientation.md): The orientation of an image.
- [Image.ResizingMode](../image/resizingmode.md): The modes that SwiftUI uses to resize an image to fit within its containing view.
