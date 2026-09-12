> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagereader-swift.struct/configuration-swift.struct](https://developer.apple.com/documentation/uikit/uiimagereader-swift.struct/configuration-swift.struct)

# UIImageReader.Configuration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The properties that a reader uses to decode images.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating the configuration

- [init()](configuration-swift.struct/init%28%29.md): Creates a new instance of the image reader configuration.

### Configuration properties

- [prefersHighDynamicRange](configuration-swift.struct/prefershighdynamicrange.md): A Boolean value that indicates whether the image reader should decode the image as HDR when the type is capable of decoding in either SDR or HDR.
- [preparesImagesForDisplay](configuration-swift.struct/preparesimagesfordisplay.md): A Boolean value that indicates whether the image reader prepares the image for display.
- [preferredThumbnailSize](configuration-swift.struct/preferredthumbnailsize.md): The thumbnail size in pixels that the image reader makes the image.
- [pixelsPerInch](configuration-swift.struct/pixelsperinch.md): The integral scale that the image reader applies to the image.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
