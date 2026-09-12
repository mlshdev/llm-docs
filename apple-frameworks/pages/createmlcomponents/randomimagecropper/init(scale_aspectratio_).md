> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/randomimagecropper/init(scale:aspectratio:)](https://developer.apple.com/documentation/createmlcomponents/randomimagecropper/init(scale:aspectratio:))

# init(scale:aspectRatio:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an augmentation that crops an input image at a random location with a scale that indicates the lower and upper bounds to randomly scale the height and width of the image. The range must be between 0 and 1.

## Declaration

```swift
init(scale: ClosedRange<Double>, aspectRatio: Double? = nil)
```

## Parameters

- `scale`: A range of scales.
- `aspectRatio`: A size that specifies the ratio of width to height to use for the cropping rectangle.

## See Also

### Creating an image cropper

- [init(targetSize:)](init%28targetsize_%29.md): Creates an augmentation that crops an input image at a random location to the specified target size.
- [init(targetWidth:targetHeight:)](init%28targetwidth_targetheight_%29.md): Creates an augmentation that crops an input image at a random location to the specified target width and height.
