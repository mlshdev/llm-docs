> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagecropper/init(croprectangle:)](https://developer.apple.com/documentation/createmlcomponents/imagecropper/init(croprectangle:))

# init(cropRectangle:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an image crop transformer. This transformer is used to crop an image to the `cropRectangle`.

## Declaration

```swift
init(cropRectangle: CGRect)
```

## Parameters

- `cropRectangle`: A crop rectangle to use. It must always be within the input images’ bounds.
