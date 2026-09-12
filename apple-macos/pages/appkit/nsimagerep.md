> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep](https://developer.apple.com/documentation/appkit/nsimagerep)

# NSImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.

## Declaration

```swift
class NSImageRep
```

<a id="overview"></a>

## Overview

The [NSImageRep](nsimagerep.md) class is called “semiabstract” because it has some instance variables and implementation of its own, in addition to defining subclasses. Although an [NSImageRep](nsimagerep.md) subclass can be used directly, it is typically accessed through an [NSImage](nsimage.md) object, which manages a group of image representations, choosing the best one for the current output device.

## Topics

### Creating Representations of Images

- [imageReps(withContentsOfFile:)](nsimagerep/imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageReps(with:)](nsimagerep/imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageReps(withContentsOf:)](nsimagerep/imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [init(contentsOfFile:)](nsimagerep/init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [init(pasteboard:)](nsimagerep/init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [init(contentsOf:)](nsimagerep/init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init()](nsimagerep/init%28%29.md): Creates and returns an image representation object.
- [init(coder:)](nsimagerep/init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.

### Determining Types for Images

- [canInit(with:)](nsimagerep/caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInit(with:)](nsimagerep/caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](nsimagerep/imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](nsimagerep/imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](nsimagerep/imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes()](nsimagerep/imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes()](nsimagerep/imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes()](nsimagerep/imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

### Accessing Size of Images

- [size](nsimagerep/size.md): The size of the image representation, measured in points in the user coordinate space.

### Specifying Information About the Representation

- [bitsPerSample](nsimagerep/bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](nsimagerep/colorspacename.md): The name of the color space used by the image data.
- [hasAlpha](nsimagerep/hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [isOpaque](nsimagerep/isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](nsimagerep/pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](nsimagerep/pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](nsimagerep/layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

### Getting Core Graphics Images

- [cgImage(forProposedRect:context:hints:)](nsimagerep/cgimage%28forproposedrect_context_hints_%29.md): Returns a Core Graphics image object that captures the drawing of the image.

### Drawing Images

- [draw()](nsimagerep/draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [draw(at:)](nsimagerep/draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [draw(in:)](nsimagerep/draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](nsimagerep/draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageRep.HintKey](nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

### Managing Representation Subclasses of Images

- [class(forType:)](nsimagerep/class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [class(for:)](nsimagerep/class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredClasses](nsimagerep/registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerClass(\_:)](nsimagerep/registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterClass(\_:)](nsimagerep/unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forFileType:)](nsimagerep/class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [class(forPasteboardType:)](nsimagerep/class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

### Notifications

- [registryDidChangeNotification](nsimagerep/registrydidchangenotification.md): Posted whenever the image representation class registry changes.

### Structures

- [NSImageRep.RegistryDidChangeMessage](nsimagerep/registrydidchangemessage.md)

### Initializers

- [init(contentsOfURL:)](nsimagerep/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSBitmapImageRep](nsbitmapimagerep.md)
- [NSCIImageRep](nsciimagerep.md)
- [NSCustomImageRep](nscustomimagerep.md)
- [NSEPSImageRep](nsepsimagerep.md)
- [NSPDFImageRep](nspdfimagerep.md)
- [NSPICTImageRep](nspictimagerep.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImage](nsimage.md): A high-level interface for manipulating image data.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

# NSImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.

## Declaration

```objectivec
@interface NSImageRep : NSObject
```

<a id="overview"></a>

## Overview

The [NSImageRep](nsimagerep.md) class is called “semiabstract” because it has some instance variables and implementation of its own, in addition to defining subclasses. Although an [NSImageRep](nsimagerep.md) subclass can be used directly, it is typically accessed through an [NSImage](nsimage.md) object, which manages a group of image representations, choosing the best one for the current output device.

## Topics

### Creating Representations of Images

- [imageRepsWithContentsOfFile:](nsimagerep/imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageRepsWithPasteboard:](nsimagerep/imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageRepsWithContentsOfURL:](nsimagerep/imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [imageRepWithContentsOfFile:](nsimagerep/init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [imageRepWithPasteboard:](nsimagerep/init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [imageRepWithContentsOfURL:](nsimagerep/init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init](nsimagerep/init%28%29.md): Creates and returns an image representation object.
- [initWithCoder:](nsimagerep/init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.

### Determining Types for Images

- [canInitWithData:](nsimagerep/caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInitWithPasteboard:](nsimagerep/caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](nsimagerep/imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](nsimagerep/imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](nsimagerep/imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes](nsimagerep/imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes](nsimagerep/imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes](nsimagerep/imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

### Accessing Size of Images

- [size](nsimagerep/size.md): The size of the image representation, measured in points in the user coordinate space.

### Specifying Information About the Representation

- [bitsPerSample](nsimagerep/bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](nsimagerep/colorspacename.md): The name of the color space used by the image data.
- [alpha](nsimagerep/hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [opaque](nsimagerep/isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](nsimagerep/pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](nsimagerep/pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](nsimagerep/layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

### Getting Core Graphics Images

- [CGImageForProposedRect:context:hints:](nsimagerep/cgimage%28forproposedrect_context_hints_%29.md): Returns a Core Graphics image object that captures the drawing of the image.

### Drawing Images

- [draw](nsimagerep/draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
- [drawAtPoint:](nsimagerep/draw%28at_%29.md): Draws the image representation’s image data at the specified point in the current coordinate system.
- [drawInRect:](nsimagerep/draw%28in_%29.md): Draws the image, scaling it (as needed) to fit the specified rectangle.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](nsimagerep/draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [NSImageHintKey](nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

### Managing Representation Subclasses of Images

- [imageRepClassForType:](nsimagerep/class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [imageRepClassForData:](nsimagerep/class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredImageRepClasses](nsimagerep/registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerImageRepClass:](nsimagerep/registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterImageRepClass:](nsimagerep/unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForFileType:](nsimagerep/class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [imageRepClassForPasteboardType:](nsimagerep/class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

### Notifications

- [NSImageRepRegistryDidChangeNotification](nsimagerep/registrydidchangenotification.md): Posted whenever the image representation class registry changes.
- [NSImageRepRegistryChangedNotification](nsimagerepregistrychangednotification.md): Deprecated. Posted whenever the image representation class registry changes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSBitmapImageRep](nsbitmapimagerep.md)
- [NSCIImageRep](nsciimagerep.md)
- [NSCachedImageRep](nscachedimagerep.md)
- [NSCustomImageRep](nscustomimagerep.md)
- [NSEPSImageRep](nsepsimagerep.md)
- [NSPDFImageRep](nspdfimagerep.md)
- [NSPICTImageRep](nspictimagerep.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImage](nsimage.md): A high-level interface for manipulating image data.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.
