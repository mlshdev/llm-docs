> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewcamerabuilder](https://developer.apple.com/documentation/developertoolssupport/previewcamerabuilder)

# PreviewCameraBuilder

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A builder type that composes a collection of cameras for previewing a view in a 3D scene.

## Declaration

```swift
@resultBuilder struct PreviewCameraBuilder
```

<a id="overview"></a>

## Overview

You implicitly use a preview camera builder when you define a list of [PreviewCamera](previewcamera.md) instances for a preview macro:

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

### Building a preview camera

- [buildArray(\_:)](previewcamerabuilder/buildarray%28__%29.md): Builds a partial result from an array of partial results.
- [buildExpression(\_:)](previewcamerabuilder/buildexpression%28__%29-5okdh.md): Builds a partial result from a single camera.
- [buildExpression(\_:)](previewcamerabuilder/buildexpression%28__%29-5t9d2.md): Builds a partial result from an array of cameras.
- [buildPartialBlock(accumulated:next:)](previewcamerabuilder/buildpartialblock%28accumulated_next_%29.md): Combines an accumulated component with a new component.
- [buildPartialBlock(first:)](previewcamerabuilder/buildpartialblock%28first_%29.md): Builds a partial result component from the first component.

## See Also

### Preview camera management

- [PreviewCamera](previewcamera.md): A camera that defines a viewpoint in a preview.
