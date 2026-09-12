> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/creationstrategy-swift.enum/editexisting](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/creationstrategy-swift.enum/editexisting)

# ImagePlaygroundOptions.CreationStrategy.editExisting

**Framework:** Image Playground  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An option to create an image that more closely resembles the original image, but also has the modifications you specify.

## Declaration

```swift
case editExisting
```

<a id="discussion"></a>

## Discussion

This option modifies the image using the prompts you specify, but otherwise tries to preserve as much of the original image as possible. If the system is unable to apply the prompts to the image in a suitable way, it falls back to using the [ImagePlaygroundOptions.CreationStrategy.generateNew](generatenew.md) option.
