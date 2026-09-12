> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/creationstrategy-swift.property](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/creationstrategy-swift.property)

# creationStrategy

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The options that specify how to interpret the content in the provided input image.

## Declaration

```swift
var creationStrategy: ImagePlaygroundOptions.CreationStrategy
```

<a id="discussion"></a>

## Discussion

If one of the inputs to the image generation process is an image, this property determines how the system uses that image to generate new images. You can specify an image programmatically, but people can also select images from the system interface. Creation strategies include generating new images that closely resemble the original or using the original only for inspiration.

The default value of this property is [ImagePlaygroundOptions.CreationStrategy.automatic](creationstrategy-swift.enum/automatic.md).
