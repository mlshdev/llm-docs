> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/datasource](https://developer.apple.com/documentation/createml/mlstyletransfer/datasource)

# MLStyleTransfer.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

A data source for a style transfer model.

## Declaration

```swift
enum DataSource
```

## Topics

### Creating a data source

- [MLStyleTransfer.DataSource.images(styleImage:contentDirectory:processingOption:)](datasource/images%28styleimage_contentdirectory_processingoption_%29.md): The locations of a style-image file and content-image directory in the file system.

### Stylizing images

- [processImages(textelDensity:styleImageDestination:contentImagesDestination:)](datasource/processimages%28texteldensity_styleimagedestination_contentimagesdestination_%29.md): Converts the content images to square images and saves them to a destination directory.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLStyleTransfer.ModelParameters](modelparameters.md): Parameters that affect the training process of a style transfer model.
