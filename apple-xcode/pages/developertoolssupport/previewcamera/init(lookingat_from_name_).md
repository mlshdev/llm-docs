> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewcamera/init(lookingat:from:name:)](https://developer.apple.com/documentation/developertoolssupport/previewcamera/init(lookingat:from:name:))

# init(lookingAt:from:name:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a camera that looks towards a specified point in the preview from a different specified point.

## Declaration

```swift
init(lookingAt position: Point3D, from: Point3D, name: String? = nil)
```

## Parameters

- `position`: The point to aim the camera at, specified in meters from the preview center.
- `from`: The position of the camera, specified in meters from the preview center.
- `name`: An optional name that the canvas uses to label the camera.

<a id="discussion"></a>

## Discussion

Use one or more cameras with one of the preview macros that takes a `cameras` input — like [Preview(\_:traits:body:cameras:)](https://developer.apple.com/documentation/swiftui/preview%28_:traits:body:cameras:%29) — to create custom viewpoints for the preview. The canvas offers custom cameras in its camera picker along with a set of standard cameras.

## See Also

### Creating a preview camera

- [init(from:zoom:name:)](init%28from_zoom_name_%29.md): Creates a camera that looks toward the preview center from a specified unit point.
