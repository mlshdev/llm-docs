> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol)

# ImagePlaygroundViewController.Delegate

**Framework:** Image Playground  
**Kind:** Protocol  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

An interface you use to receive images and handle events related to an image-generation view controller.

## Declaration

```swift
@objc(ImageGenerationViewControllerDelegate) protocol Delegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [ImagePlaygroundViewController.Delegate](delegate-swift.protocol.md) protocol in a custom type and assign that type as the delegate of an [ImagePlaygroundViewController](../imageplaygroundviewcontroller.md) object. When you present the view controller, the system interface handles interactions with the person and reports the results back to your delegate object.

## Topics

### Receiving the image

- [imagePlaygroundViewController(\_:didCreateImageAt:)](delegate-swift.protocol/imageplaygroundviewcontroller%28__didcreateimageat_%29.md): Returns the generated image to the delegate.

### Handling cancellation events

- [imagePlaygroundViewControllerDidCancel(\_:)](delegate-swift.protocol/imageplaygroundviewcontrollerdidcancel%28__%29.md): Notifies the delegate that the person canceled the generation of the image.

### Instance Methods

- [imagePlaygroundViewController(\_:didCreate:)](delegate-swift.protocol/imageplaygroundviewcontroller%28__didcreate_%29.md): Returns the generated genmoji to the delegate.

## Relationships

### Inherits From

- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Processing a generated image

- [delegate](delegate-swift.property.md): The delegate object that receives the generated image and handles events from the view controller.
