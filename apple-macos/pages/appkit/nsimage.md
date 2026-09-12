> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage](https://developer.apple.com/documentation/appkit/nsimage)

# NSImage (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A high-level interface for manipulating image data.

## Declaration

```swift
class NSImage
```

<a id="overview"></a>

## Overview

You use instances of [NSImage](nsimage.md) to load existing images, create new images, and draw the resulting image data into your views. Although you use this class predominantly for image-related operations, the class itself knows little about the underlying image data. Instead, it works in conjunction with one or more image representation objects (subclasses of [NSImageRep](nsimagerep.md)) to manage and render the image data. For the most part, these interactions are transparent.

The  class serves many purposes, providing support for the following tasks:

- Loading images stored on disk or at a specified URL.
- Drawing images into a view or graphics context.
- Providing the contents of a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) object.
- Creating new images based on a series of captured drawing commands.
- Producing versions of the image in a different format.

The `NSImage` class itself is capable of managing image data in a variety of formats. The specific list of formats is dependent on the version of the operating system but includes many standard formats such as TIFF, JPEG, GIF, PNG, and PDF among others. AppKit manages each format using a specific type of image representation object, whose job is to manage the actual image data. You can get a list of supported formats using the methods described in Determining Supported Types of Images.

<a id="Using-Images-with-Core-Animation-Layers"></a>

### Using Images with Core Animation Layers

Although you can assign an `NSImage` object directly to the [contents](https://developer.apple.com/documentation/quartzcore/calayer/contents) property of a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) object, doing so may not always yield the best results. Instead of using your image object, you can use the [layerContents(forContentsScale:)](nsimage/layercontents%28forcontentsscale_%29.md) method to obtain an object that you can use for your layer’s contents. The image created by that method serves as the contents of a layer, which also supports all of the layer’s gravity modes. By contrast, the `NSImage` class supports only the [resize](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resize), [resizeAspect](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resizeaspect), and [resizeAspectFill](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resizeaspectfill) modes.

Before calling the [layerContents(forContentsScale:)](nsimage/layercontents%28forcontentsscale_%29.md) method, use the [recommendedLayerContentsScale(\_:)](nsimage/recommendedlayercontentsscale%28__%29.md) method to get the recommended scale factor for the resulting image. The code listing below shows a typical example that uses the scale factor of a window’s backing store as the desired scale factor. From that scale factor, the code gets the scale factor for the specified image object and creates an object that you assign to the layer. You might use this code for images that fit the layer bounds precisely or for which you rely on the [contentsGravity](https://developer.apple.com/documentation/quartzcore/calayer/contentsgravity) property of the layer to position or scale the image.

Listing 1. Assigning an image to a layer

```objc
static void updateLayerWithImageInWindow1(NSImage *image, CALayer *layer, NSWindow *window) {
   CGFloat desiredScaleFactor = [window backingScaleFactor];
   CGFloat actualScaleFactor = [image recommendedLayerContentsScale:desiredScaleFactor];
 
   id layerContents = [image layerContentsForContentsScale:actualScaleFactor];
 
   [layer setContents:layerContents];
   [layer setContentsScale:actualScaleFactor];
}
```

## Topics

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [init(named:)](nsimage/init%28named_%29.md): Returns the image object associated with the specified name.
- [init(systemSymbolName:accessibilityDescription:)](nsimage/init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [init(systemSymbolName:variableValue:accessibilityDescription:)](nsimage/init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [init(symbolName:variableValue:)](nsimage/init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [init(symbolName:bundle:variableValue:)](nsimage/init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [init(resource:)](nsimage/init%28resource_%29.md): Initialize a `NSImage` with an image resource.
- [setName(\_:)](nsimage/setname%28__%29.md): Registers the image object under the specified name.
- [name()](nsimage/name%28%29.md): Returns the name associated with the image, if any.
- [NSImage.Name](nsimage/name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
- [init(imageLiteralResourceName:)](nsimage/init%28imageliteralresourcename_%29.md): Creates an image initialized with the specified resource name.

### Creating Dynamically Drawn Images

- [init(size:flipped:drawingHandler:)](nsimage/init%28size_flipped_drawinghandler_%29.md): Creates and returns an image object whose contents are drawn using the specified block.

### Creating Images from Resource Files

- [init(byReferencingFile:)](nsimage/init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [init(byReferencing:)](nsimage/init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [init(contentsOfFile:)](nsimage/init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
- [init(contentsOf:)](nsimage/init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.

### Creating Images from Existing Data

- [init(data:)](nsimage/init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [init(dataIgnoringOrientation:)](nsimage/init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [init(cgImage:size:)](nsimage/init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [init(pasteboard:)](nsimage/init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [init(coder:)](nsimage/init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.

### Creating Empty Images

- [init(size:)](nsimage/init%28size_%29.md): Initializes and returns an image object with the specified dimensions.

### Creating Symbol Images

- [withSymbolConfiguration(\_:)](nsimage/withsymbolconfiguration%28__%29.md): Creates a new symbol image with the specified configuration.
- [NSImage.SymbolConfiguration](nsimage/symbolconfiguration-swift.class.md): An object that contains the specific font, style, and weight attributes to apply to a symbol image.

### Getting the Symbol Image Configuration

- [symbolConfiguration](nsimage/symbolconfiguration-swift.property.md): The configuration details for a symbol image.

### Managing Loading and Drawing of Images

- [delegate](nsimage/delegate.md): The image’s delegate object.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

### Setting Attributes of Images

- [size](nsimage/size.md): The size of the image.
- [isTemplate](nsimage/istemplate.md): A Boolean value that determines whether the image represents a template image.
- [isTemplate](nsimage/istemplate.md): A Boolean value that determines whether the image represents a template image.

### Determining Supported Types of Images

- [canInit(with:)](nsimage/caninit%28with_%29.md): Tests whether the image can create an instance of itself using pasteboard data.
- [imageTypes](nsimage/imagetypes.md): Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](nsimage/imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

### Working with Representations of Images

- [addRepresentation(\_:)](nsimage/addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations(\_:)](nsimage/addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](nsimage/representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation(\_:)](nsimage/removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentation(for:context:hints:)](nsimage/bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageRep.HintKey](nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImage.LayoutDirection](nsimage/layoutdirection.md): Constants that describe the layout direction for the image.

### Setting the Representation Selection Criteria for Images

- [prefersColorMatch](nsimage/preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.
- [usesEPSOnResolutionMismatch](nsimage/usesepsonresolutionmismatch.md): A Boolean value that indicates whether EPS representations are preferred when no other representations match the resolution of the device.
- [matchesOnMultipleResolution](nsimage/matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.

### Drawing Images

- [draw(in:)](nsimage/draw%28in_%29.md): Draws the image in the specified rectangle.
- [draw(at:from:operation:fraction:)](nsimage/draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:)](nsimage/draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [draw(in:from:operation:fraction:respectFlipped:hints:)](nsimage/draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [drawRepresentation(\_:in:)](nsimage/drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

### Managing Drawing Options

- [isValid](nsimage/isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [backgroundColor](nsimage/backgroundcolor.md): The background color for the image.
- [capInsets](nsimage/capinsets.md): The cap insets for the image.
- [resizingMode](nsimage/resizingmode-swift.property.md): The resizing mode for the image.
- [NSImage.ResizingMode](nsimage/resizingmode-swift.enum.md): Constants that describe the resizing mode for the image.

### Working with Alignment Metadata

- [alignmentRect](nsimage/alignmentrect.md): A rectangle that you can use to position the image during layout.

### Managing Caching Options

- [cacheMode](nsimage/cachemode-swift.property.md): The image’s caching mode.
- [recache()](nsimage/recache%28%29.md): Invalidates and frees offscreen caches of all image representations.
- [NSImage.CacheMode](nsimage/cachemode-swift.enum.md): Constants that specify the caching policy on a per-image basis.

### Producing TIFF Data for Images

- [tiffRepresentation](nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.
- [tiffRepresentation(using:factor:)](nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.

### Producing Core Graphics Images

- [cgImage(forProposedRect:context:hints:)](nsimage/cgimage%28forproposedrect_context_hints_%29.md): Returns a Core Graphics image based on the contents of the current image object.

### Hit-Testing Images

- [hitTest(\_:withDestinationRect:context:hints:flipped:)](nsimage/hittest%28__withdestinationrect_context_hints_flipped_%29.md): Returns whether the destination rectangle would intersect a non-transparent portion of the image.

### Managing Image Accessibility

- [accessibilityDescription](nsimage/accessibilitydescription.md): The image’s accessibility description.

### Using Images with Core Animation

- [layerContents(forContentsScale:)](nsimage/layercontents%28forcontentsscale_%29.md): Returns an object that may be used as the contents of a layer.
- [recommendedLayerContentsScale(\_:)](nsimage/recommendedlayercontentsscale%28__%29.md): Returns the recommended layer contents scale for this image.

### Managing Axis Matching

- [matchesOnlyOnBestFittingAxis](nsimage/matchesonlyonbestfittingaxis.md): A Boolean value that indicates whether the image matches only on the best fitting axis.

### Localizing Images

- [withLocale(\_:)](nsimage/withlocale%28__%29.md): Creates and returns a new image with the specified locale.
- [locale](nsimage/locale.md): The image’s preferred locale for resolving representations, if one has been specified using `-imageWithLocale:`. Otherwise, `nil`.

### Deprecated

- [Deprecated Symbols](nsimage-deprecated-symbols.md): Review symbols that are no longer supported, and find the replacements to use instead.

### Enumerations

- [NSImage.DynamicRange](nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.

### Initializers

- [init(CGImage:size:)](nsimage/init%28cgimage_size_%29-15zeh.md)
- [init(byReferencingURL:)](nsimage/init%28byreferencingurl_%29.md)
- [init(contentsOfURL:)](nsimage/init%28contentsofurl_%29.md)

### Default Implementations

- [NSPasteboardReading Implementations](nsimage/nspasteboardreading-implementations.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSItemProviderReading](https://developer.apple.com/documentation/foundation/nsitemproviderreading)
- [NSItemProviderWriting](https://developer.apple.com/documentation/foundation/nsitemproviderwriting)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)

## See Also

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.
- [NSImageRep](nsimagerep.md): A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.

# NSImage (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS

A high-level interface for manipulating image data.

## Declaration

```objectivec
@interface NSImage : NSObject
```

<a id="overview"></a>

## Overview

You use instances of [NSImage](nsimage.md) to load existing images, create new images, and draw the resulting image data into your views. Although you use this class predominantly for image-related operations, the class itself knows little about the underlying image data. Instead, it works in conjunction with one or more image representation objects (subclasses of [NSImageRep](nsimagerep.md)) to manage and render the image data. For the most part, these interactions are transparent.

The  class serves many purposes, providing support for the following tasks:

- Loading images stored on disk or at a specified URL.
- Drawing images into a view or graphics context.
- Providing the contents of a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) object.
- Creating new images based on a series of captured drawing commands.
- Producing versions of the image in a different format.

The `NSImage` class itself is capable of managing image data in a variety of formats. The specific list of formats is dependent on the version of the operating system but includes many standard formats such as TIFF, JPEG, GIF, PNG, and PDF among others. AppKit manages each format using a specific type of image representation object, whose job is to manage the actual image data. You can get a list of supported formats using the methods described in Determining Supported Types of Images.

<a id="Using-Images-with-Core-Animation-Layers"></a>

### Using Images with Core Animation Layers

Although you can assign an `NSImage` object directly to the [contents](https://developer.apple.com/documentation/quartzcore/calayer/contents) property of a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) object, doing so may not always yield the best results. Instead of using your image object, you can use the [layerContentsForContentsScale:](nsimage/layercontents%28forcontentsscale_%29.md) method to obtain an object that you can use for your layer’s contents. The image created by that method serves as the contents of a layer, which also supports all of the layer’s gravity modes. By contrast, the `NSImage` class supports only the [kCAGravityResize](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resize), [kCAGravityResizeAspect](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resizeaspect), and [kCAGravityResizeAspectFill](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resizeaspectfill) modes.

Before calling the [layerContentsForContentsScale:](nsimage/layercontents%28forcontentsscale_%29.md) method, use the [recommendedLayerContentsScale:](nsimage/recommendedlayercontentsscale%28__%29.md) method to get the recommended scale factor for the resulting image. The code listing below shows a typical example that uses the scale factor of a window’s backing store as the desired scale factor. From that scale factor, the code gets the scale factor for the specified image object and creates an object that you assign to the layer. You might use this code for images that fit the layer bounds precisely or for which you rely on the [contentsGravity](https://developer.apple.com/documentation/quartzcore/calayer/contentsgravity) property of the layer to position or scale the image.

Listing 1. Assigning an image to a layer

```objc
static void updateLayerWithImageInWindow1(NSImage *image, CALayer *layer, NSWindow *window) {
   CGFloat desiredScaleFactor = [window backingScaleFactor];
   CGFloat actualScaleFactor = [image recommendedLayerContentsScale:desiredScaleFactor];
 
   id layerContents = [image layerContentsForContentsScale:actualScaleFactor];
 
   [layer setContents:layerContents];
   [layer setContentsScale:actualScaleFactor];
}
```

## Topics

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [imageNamed:](nsimage/init%28named_%29.md): Returns the image object associated with the specified name.
- [imageWithSystemSymbolName:accessibilityDescription:](nsimage/init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [imageWithSystemSymbolName:variableValue:accessibilityDescription:](nsimage/init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [imageWithSymbolName:variableValue:](nsimage/init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [imageWithSymbolName:bundle:variableValue:](nsimage/init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [setName:](nsimage/setname%28__%29.md): Registers the image object under the specified name.
- [name](nsimage/name%28%29.md): Returns the name associated with the image, if any.
- [NSImageName](nsimage/name-swift.typealias.md): Named images, defined by the system or you, for use in your app.

### Creating Dynamically Drawn Images

- [imageWithSize:flipped:drawingHandler:](nsimage/init%28size_flipped_drawinghandler_%29.md): Creates and returns an image object whose contents are drawn using the specified block.

### Creating Images from Resource Files

- [initByReferencingFile:](nsimage/init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [initByReferencingURL:](nsimage/init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [initWithContentsOfFile:](nsimage/init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
- [initWithContentsOfURL:](nsimage/init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.

### Creating Images from Existing Data

- [initWithData:](nsimage/init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [initWithDataIgnoringOrientation:](nsimage/init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [initWithCGImage:size:](nsimage/init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [initWithPasteboard:](nsimage/init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [initWithCoder:](nsimage/init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.

### Creating Empty Images

- [initWithSize:](nsimage/init%28size_%29.md): Initializes and returns an image object with the specified dimensions.

### Creating Symbol Images

- [imageWithSymbolConfiguration:](nsimage/withsymbolconfiguration%28__%29.md): Creates a new symbol image with the specified configuration.
- [NSImageSymbolConfiguration](nsimage/symbolconfiguration-swift.class.md): An object that contains the specific font, style, and weight attributes to apply to a symbol image.

### Getting the Symbol Image Configuration

- [symbolConfiguration](nsimage/symbolconfiguration-swift.property.md): The configuration details for a symbol image.

### Managing Loading and Drawing of Images

- [delegate](nsimage/delegate.md): The image’s delegate object.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

### Setting Attributes of Images

- [size](nsimage/size.md): The size of the image.
- [template](nsimage/istemplate.md): A Boolean value that determines whether the image represents a template image.
- [template](nsimage/istemplate.md): A Boolean value that determines whether the image represents a template image.

### Determining Supported Types of Images

- [canInitWithPasteboard:](nsimage/caninit%28with_%29.md): Tests whether the image can create an instance of itself using pasteboard data.
- [imageTypes](nsimage/imagetypes.md): Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](nsimage/imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

### Working with Representations of Images

- [addRepresentation:](nsimage/addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations:](nsimage/addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](nsimage/representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation:](nsimage/removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentationForRect:context:hints:](nsimage/bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageHintKey](nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImageLayoutDirection](nsimage/layoutdirection.md): Constants that describe the layout direction for the image.

### Setting the Representation Selection Criteria for Images

- [prefersColorMatch](nsimage/preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.
- [usesEPSOnResolutionMismatch](nsimage/usesepsonresolutionmismatch.md): A Boolean value that indicates whether EPS representations are preferred when no other representations match the resolution of the device.
- [matchesOnMultipleResolution](nsimage/matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.

### Drawing Images

- [drawInRect:](nsimage/draw%28in_%29.md): Draws the image in the specified rectangle.
- [drawAtPoint:fromRect:operation:fraction:](nsimage/draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](nsimage/draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:respectFlipped:hints:](nsimage/draw%28in_from_operation_fraction_respectflipped_hints_%29.md): Draws all or part of the image in the specified rectangle respecting the hints and the orientation of the current coordinate system.
- [drawRepresentation:inRect:](nsimage/drawrepresentation%28__in_%29.md): Draws the image using the specified image representation object.
- [NSCompositingOperation](nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

### Managing Drawing Options

- [valid](nsimage/isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [backgroundColor](nsimage/backgroundcolor.md): The background color for the image.
- [capInsets](nsimage/capinsets.md): The cap insets for the image.
- [resizingMode](nsimage/resizingmode-swift.property.md): The resizing mode for the image.
- [NSImageResizingMode](nsimage/resizingmode-swift.enum.md): Constants that describe the resizing mode for the image.

### Working with Alignment Metadata

- [alignmentRect](nsimage/alignmentrect.md): A rectangle that you can use to position the image during layout.

### Managing Caching Options

- [cacheMode](nsimage/cachemode-swift.property.md): The image’s caching mode.
- [recache](nsimage/recache%28%29.md): Invalidates and frees offscreen caches of all image representations.
- [NSImageCacheMode](nsimage/cachemode-swift.enum.md): Constants that specify the caching policy on a per-image basis.

### Producing TIFF Data for Images

- [TIFFRepresentation](nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.
- [TIFFRepresentationUsingCompression:factor:](nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.

### Producing Core Graphics Images

- [CGImageForProposedRect:context:hints:](nsimage/cgimage%28forproposedrect_context_hints_%29.md): Returns a Core Graphics image based on the contents of the current image object.

### Managing Incremental Loads

- [cancelIncrementalLoad](nsimage/cancelincrementalload.md): Deprecated. Cancels the current download operation, if any, for an incrementally loaded image.

### Hit-Testing Images

- [hitTestRect:withImageDestinationRect:context:hints:flipped:](nsimage/hittest%28__withdestinationrect_context_hints_flipped_%29.md): Returns whether the destination rectangle would intersect a non-transparent portion of the image.

### Managing Image Accessibility

- [accessibilityDescription](nsimage/accessibilitydescription.md): The image’s accessibility description.

### Using Images with Core Animation

- [layerContentsForContentsScale:](nsimage/layercontents%28forcontentsscale_%29.md): Returns an object that may be used as the contents of a layer.
- [recommendedLayerContentsScale:](nsimage/recommendedlayercontentsscale%28__%29.md): Returns the recommended layer contents scale for this image.

### Managing Axis Matching

- [matchesOnlyOnBestFittingAxis](nsimage/matchesonlyonbestfittingaxis.md): A Boolean value that indicates whether the image matches only on the best fitting axis.

### Localizing Images

- [imageWithLocale:](nsimage/withlocale%28__%29.md): Creates and returns a new image with the specified locale.
- [locale](nsimage/locale.md): The image’s preferred locale for resolving representations, if one has been specified using `-imageWithLocale:`. Otherwise, `nil`.

### Deprecated

- [Deprecated Symbols](nsimage-deprecated-symbols.md): Review symbols that are no longer supported, and find the replacements to use instead.

### Enumerations

- [NSImageDynamicRange](nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.

### Instance Methods

- [init](nsimage/init.md)

### Type Methods

- [alloc](nsimage/alloc.md)
- [allocWithZone:](nsimage/allocwithzone_.md)
- [new](nsimage/new.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSItemProviderReading](https://developer.apple.com/documentation/foundation/nsitemproviderreading)
- [NSItemProviderWriting](https://developer.apple.com/documentation/foundation/nsitemproviderwriting)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.
- [NSImageRep](nsimagerep.md): A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.
