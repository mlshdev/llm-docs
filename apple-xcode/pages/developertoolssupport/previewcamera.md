> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewcamera](https://developer.apple.com/documentation/developertoolssupport/previewcamera)

# PreviewCamera

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A camera that defines a viewpoint in a preview.

## Declaration

```swift
struct PreviewCamera
```

<a id="overview"></a>

## Overview

Use one or more preview cameras with one of the preview macros that takes a `cameras` input — like [Preview(\_:traits:body:cameras:)](https://developer.apple.com/documentation/swiftui/preview%28_:traits:body:cameras:%29) — to create custom viewpoints for the preview. The canvas offers custom cameras in its camera picker along with a set of standard cameras. The preview uses the first custom camera that you specify as the default viewpoint when the preview appears.

For example, you can create custom cameras from the top, leading, and front viewpoints:

```swift
#Preview {
    CircleImage()
} cameras: {
    PreviewCamera(from: .top, name: "Top")
    PreviewCamera(from: .leading, name: "Leading")
    PreviewCamera(from: .front, name: "Front")
}
```

## Topics

### Creating a preview camera

- [init(from:zoom:name:)](previewcamera/init%28from_zoom_name_%29.md): Creates a camera that looks toward the preview center from a specified unit point.
- [init(lookingAt:from:name:)](previewcamera/init%28lookingat_from_name_%29.md): Creates a camera that looks towards a specified point in the preview from a different specified point.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preview camera management

- [PreviewCameraBuilder](previewcamerabuilder.md): A builder type that composes a collection of cameras for previewing a view in a 3D scene.
