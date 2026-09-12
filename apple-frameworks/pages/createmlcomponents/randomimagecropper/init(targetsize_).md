> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/randomimagecropper/init(targetsize:)](https://developer.apple.com/documentation/createmlcomponents/randomimagecropper/init(targetsize:))

# init(targetSize:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an augmentation that crops an input image at a random location to the specified target size.

## Declaration

```swift
init(targetSize: CGSize)
```

## Parameters

- `targetSize`: The target size of the cropping rectangle. Must be positive.

## See Also

### Creating an image cropper

- [init(scale:aspectRatio:)](init%28scale_aspectratio_%29.md): Creates an augmentation that crops an input image at a random location with a scale that indicates the lower and upper bounds to randomly scale the height and width of the image. The range must be between 0 and 1.
- [init(targetWidth:targetHeight:)](init%28targetwidth_targetheight_%29.md): Creates an augmentation that crops an input image at a random location to the specified target width and height.
