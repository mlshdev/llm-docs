> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewlayout](https://developer.apple.com/documentation/developertoolssupport/previewlayout)

# PreviewLayout

**Framework:** DeveloperToolsSupport  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A size constraint for a preview.

## Declaration

```swift
enum PreviewLayout
```

<a id="overview"></a>

## Overview

Customize the layout of a preview that you define using the [PreviewProvider](https://developer.apple.com/documentation/swiftui/previewprovider) protocol by providing one of the preview layout values to the [previewLayout(\_:)](https://developer.apple.com/documentation/swiftui/view/previewlayout%28_:%29) view modifier. For example, you can tell the preview to take up only the amount of space that the view requires with [PreviewLayout.sizeThatFits](previewlayout/sizethatfits.md):

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewLayout(.sizeThatFits)
    }
}
```

> **Note**

> When you migrate away from preview providers and to preview macros, you specify layout using one of the [PreviewTrait](previewtrait.md) layout values with a macro that takes traits, like [Preview(\_:traits:\_:body:)](https://developer.apple.com/documentation/swiftui/preview%28_:traits:_:body:%29).

## Topics

### Getting a layout

- [PreviewLayout.device](previewlayout/device.md): Center the preview in a container the size of the device on which the preview is running.
- [PreviewLayout.fixed(width:height:)](previewlayout/fixed%28width_height_%29.md): Center the preview in a fixed size container with the given dimensions.
- [PreviewLayout.fixed3D(width:height:depth:)](previewlayout/fixed3d%28width_height_depth_%29.md): Centers the preview in a fixed-size, 3D container.
- [PreviewLayout.sizeThatFits](previewlayout/sizethatfits.md): Fit the container to the size of the preview when offered the size of the device that the preview is running on.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preview definition

- [Preview](preview.md): A base type that preview macros use to create previews.
- [PreviewTrait](previewtrait.md): Customizations that you can apply to a preview.
- [PreviewRegistry](previewregistry.md): A protocol that the system uses to locate previews at runtime.
