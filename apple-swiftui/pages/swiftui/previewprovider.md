> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewprovider](https://developer.apple.com/documentation/swiftui/previewprovider)

# PreviewProvider

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A type that produces view previews in Xcode.

> Use [Preview(\_:body:)](preview%28__body_%29.md) instead.

## Declaration

```swift
@MainActor @preconcurrency protocol PreviewProvider : _PreviewProvider
```

<a id="overview"></a>

## Overview

> **Important**

> You can use this protocol to define a preview manually, but you typically use a preview macro like [Preview(\_:body:)](preview%28__body_%29.md) instead.

You can create an Xcode preview by declaring a structure that conforms to the `PreviewProvider` protocol. Implement the required [previews](previewprovider/previews-swift.type.property.md) computed property, and return the view to display:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
    }
}
```

Xcode statically discovers preview providers in your project and generates previews for any providers currently open in the source editor. Xcode generates the preview using the current run destination as a hint for which device to display. For example, Xcode shows the following preview if you’ve selected an iOS target to run on the iPhone 12 Pro Max simulator:

![A screenshot of the Xcode canvas previewing a circular image on an](https://developer.apple.com/images/com.apple.SwiftUI/PreviewProvider-1@2x.png)

When you create a new file (File \> New \> File) and choose the SwiftUI view template, Xcode automatically inserts a preview structure at the bottom of the file that you can configure. You can also create new preview structures in an existing SwiftUI view file by choosing Editor \> Create Preview.

Customize the preview’s appearance by adding view modifiers, just like you do when building a custom [View](view.md). This includes preview-specific modifiers that let you control aspects of the preview, like the device orientation:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewInterfaceOrientation(.landscapeLeft)
    }
}
```

![A screenshot of the Xcode canvas previewing a circular image on an](https://developer.apple.com/images/com.apple.SwiftUI/PreviewProvider-2@2x.png)

For the complete list of preview customizations, see [Previews in Xcode](previews-in-xcode.md).

Xcode creates different previews for each view in your preview, so you can see variations side by side. For example, you might want to see a view’s light and dark appearances simultaneously:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
        CircleImage()
            .preferredColorScheme(.dark)
    }
}
```

Use a [Group](group.md) when you want to maintain different previews, but apply a single modifier to all of them:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            CircleImage()
            CircleImage()
                .preferredColorScheme(.dark)
        }
        .previewLayout(.sizeThatFits)
    }
}
```

![A screenshot of the Xcode canvas previewing a circular image twice,](https://developer.apple.com/images/com.apple.SwiftUI/PreviewProvider-3@2x.png)

## Topics

### Creating a preview

- [previews](previewprovider/previews-swift.type.property.md): Deprecated. A collection of views to preview.
- [Previews](previewprovider/previews-swift.associatedtype.md): Deprecated. The type to preview.

### Specifying the platform

- [platform](previewprovider/platform.md): Deprecated. The platform on which to run the provider.

## See Also

### Defining a preview

- [PreviewPlatform](previewplatform.md): Deprecated. Platforms that can run the preview.
- [previewDisplayName(\_:)](view/previewdisplayname%28__%29.md): Deprecated. Sets a user visible name to show in the canvas for a preview.
