> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage](https://developer.apple.com/documentation/arkit/arreferenceimage)

# ARReferenceImage (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A 2D image that you want ARKit to detect in the physical environment.

## Declaration

```swift
class ARReferenceImage
```

<a id="overview"></a>

## Overview

To accurately detect the position and orientation of a 2D image in the real world, ARKit requires preprocessed image data and knowledge of the image’s real-world dimensions. The [ARReferenceImage](arreferenceimage.md) class encapsulates this information. To enable image detection in an AR session, pass a collection of reference images to your session configuration’s [detectionImages](arworldtrackingconfiguration/detectionimages.md) property.

Typically, you create reference images in your Xcode project’s asset catalog:

1. In your asset catalog, use the Add (+) button to create an AR Resource Group.
2. Drag image files into the resource group to create AR Reference Image entries in the asset catalog.
3. For each reference image, use the Xcode inspector panel to provide the real-world size at which you want ARKit to recognize the image. (You can also provide a descriptive name, which appears as the [name](arreferenceimage/name.md) property at runtime and can be useful for debugging.)

## Topics

### Loading Reference Images

- [referenceImages(inGroupNamed:bundle:)](arreferenceimage/referenceimages%28ingroupnamed_bundle_%29.md): Loads all reference images in the specified AR Resource Group in your Xcode project’s asset catalog.

### Examining a Reference Image

- [name](arreferenceimage/name.md): A descriptive name for the image.
- [physicalSize](arreferenceimage/physicalsize.md): The real-world dimensions, in meters, of the image.
- [resourceGroupName](arreferenceimage/resourcegroupname.md): The AR resource group name for this image.

### Creating Reference Images

- [init(\_:orientation:physicalWidth:)](arreferenceimage/init%28__orientation_physicalwidth_%29-8b3bs.md): Creates a new reference image from a Core Graphics image object.
- [init(\_:orientation:physicalWidth:)](arreferenceimage/init%28__orientation_physicalwidth_%29-ir2z.md): Creates a new reference image from a Core Video pixel buffer.

### Validating Reference Images

- [validate(completionHandler:)](arreferenceimage/validate%28completionhandler_%29.md): Determines whether the reference image is valid.

### Initializers

- [init(CGImage:orientation:physicalWidth:)](arreferenceimage/init%28cgimage_orientation_physicalwidth_%29.md)
- [init(pixelBuffer:orientation:physicalWidth:)](arreferenceimage/init%28pixelbuffer_orientation_physicalwidth_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image Detection

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [Detecting Images in an AR Experience](detecting-images-in-an-ar-experience.md): React to known 2D images in the user’s environment, and use their positions to place AR content.
- [ARImageAnchor](arimageanchor.md): An anchor for a known image that ARKit detects in the physical environment.

# ARReferenceImage (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A 2D image that you want ARKit to detect in the physical environment.

## Declaration

```objectivec
@interface ARReferenceImage : NSObject
```

<a id="overview"></a>

## Overview

To accurately detect the position and orientation of a 2D image in the real world, ARKit requires preprocessed image data and knowledge of the image’s real-world dimensions. The [ARReferenceImage](arreferenceimage.md) class encapsulates this information. To enable image detection in an AR session, pass a collection of reference images to your session configuration’s [detectionImages](arworldtrackingconfiguration/detectionimages.md) property.

Typically, you create reference images in your Xcode project’s asset catalog:

1. In your asset catalog, use the Add (+) button to create an AR Resource Group.
2. Drag image files into the resource group to create AR Reference Image entries in the asset catalog.
3. For each reference image, use the Xcode inspector panel to provide the real-world size at which you want ARKit to recognize the image. (You can also provide a descriptive name, which appears as the [name](arreferenceimage/name.md) property at runtime and can be useful for debugging.)

## Topics

### Loading Reference Images

- [referenceImagesInGroupNamed:bundle:](arreferenceimage/referenceimages%28ingroupnamed_bundle_%29.md): Loads all reference images in the specified AR Resource Group in your Xcode project’s asset catalog.

### Examining a Reference Image

- [name](arreferenceimage/name.md): A descriptive name for the image.
- [physicalSize](arreferenceimage/physicalsize.md): The real-world dimensions, in meters, of the image.
- [resourceGroupName](arreferenceimage/resourcegroupname.md): The AR resource group name for this image.

### Creating Reference Images

- [initWithCGImage:orientation:physicalWidth:](arreferenceimage/init%28__orientation_physicalwidth_%29-8b3bs.md): Creates a new reference image from a Core Graphics image object.
- [initWithPixelBuffer:orientation:physicalWidth:](arreferenceimage/init%28__orientation_physicalwidth_%29-ir2z.md): Creates a new reference image from a Core Video pixel buffer.

### Validating Reference Images

- [validateWithCompletionHandler:](arreferenceimage/validate%28completionhandler_%29.md): Determines whether the reference image is valid.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Image Detection

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [ARImageAnchor](arimageanchor.md): An anchor for a known image that ARKit detects in the physical environment.
