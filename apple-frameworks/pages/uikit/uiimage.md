> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage](https://developer.apple.com/documentation/uikit/uiimage)

# UIImage (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that manages image data in your app.

## Declaration

```swift
class UIImage
```

## Mentioned In

- [Configuring and displaying symbol images in your UI](configuring-and-displaying-symbol-images-in-your-ui.md)
- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)
- [Understanding a drag item as a promise](understanding-a-drag-item-as-a-promise.md)

<a id="overview"></a>

## Overview

You use image objects to represent image data of all kinds, and the [UIImage](uiimage.md) class is capable of managing data for all image formats supported by the underlying platform. Image objects are immutable, so you always create them from existing image data, such as an image file on disk or programmatically created image data. An image object may contain a single image or a sequence of images for use in an animation.

You can use image objects in several different ways:

- Assign an image to a [UIImageView](uiimageview.md) object to display the image in your interface.
- Use an image to customize system controls such as buttons, sliders, and segmented controls.
- Draw an image directly into a view or other graphics context.
- Pass an image to other APIs that might require image data.

Although image objects support all platform-native image formats, it’s recommended that you use PNG or JPEG files for most images in your app. Image objects are optimized for reading and displaying both formats, and those formats offer better performance than most other image formats. Because the PNG format is lossless, it’s especially recommended for the images you use in your app’s interface.

<a id="Create-image-objects"></a>

### Create image objects

When creating image objects using the methods of this class, you must have existing image data located in a file or data structure. You can’t create an empty image and draw content into it. There are many options for creating image objects, each of which is best for specific situations:

- Use the [init(named:in:compatibleWith:)](uiimage/init%28named_in_compatiblewith_%29.md) method (or the [init(named:)](uiimage/init%28named_%29.md) method) to create an image from an image asset or image file located in your app’s main bundle (or some other known bundle). Because these methods cache the image data automatically, they’re especially recommended for images that you use frequently.
- Use the [imageWithContentsOfFile:](uiimage/imagewithcontentsoffile_.md) or [init(contentsOfFile:)](uiimage/init%28contentsoffile_%29.md) method to create an image object where the initial data isn’t in a bundle. These methods load the image data from disk each time, so don’t use them to load the same image repeatedly.
- Use the [animatedImage(with:duration:)](uiimage/animatedimage%28with_duration_%29.md) and [animatedImageNamed(\_:duration:)](uiimage/animatedimagenamed%28__duration_%29.md) methods to create a single [UIImage](uiimage.md) object comprised of multiple sequential images. Install the resulting image in a [UIImageView](uiimageview.md) object to create animations in your interface.

Other methods of the [UIImage](uiimage.md) class let you create animations from specific types of data, such as Core Graphics images or image data you create yourself. UIKit also provides the [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function to create images from content you draw yourself. You use that function in conjunction with a bitmap-based graphics context, which you use to capture your drawing commands.

> **Note**

>  Because image objects are immutable, you can’t change their properties after creation. Most image properties are set automatically using metadata in the accompanying image file or image data. The immutable nature of image objects also means they’re safe to create and use from any thread.

Image assets are the easiest way to manage the images that ship with your app. Each new Xcode project contains an assets library, to which you can add multiple image sets. An image set contains the variations of a single image that your app uses. A single image set can provide different versions of an image for different platforms, for different trait environments (compact or regular), and for different scale factors.

In addition to loading images from disk, you can ask the user to supply images from an available camera or photo library using a [UIImagePickerController](uiimagepickercontroller.md) object. An image picker displays a custom user interface for selecting images. Accessing user-supplied images requires explicit user permission. For more information about using an image picker, see [UIImagePickerController](uiimagepickercontroller.md).

<a id="Define-a-stretchable-image"></a>

### Define a stretchable image

A stretchable image is one that defines regions where you can duplicate the underlying image data in an aesthetically pleasing way. Stretchable images are commonly used to create backgrounds that can grow or shrink to fill the available space.

Define a stretchable image by adding insets to an existing image using the [resizableImage(withCapInsets:)](uiimage/resizableimage%28withcapinsets_%29.md) or [resizableImage(withCapInsets:resizingMode:)](uiimage/resizableimage%28withcapinsets_resizingmode_%29.md) method. The insets subdivide the image into two or more parts. Specifying nonzero values for each inset yields an image divided into nine parts, as shown in the following image:

![An image that depicts how to use insets to define stretchable regions. The image on the left is stretched and shows Left, Right, Top, and Bottom insets. The image on the right is condensed and also shows Left, Right, Top, and Bottom insets.](https://developer.apple.com/images/com.apple.uikit/media-1965929@2x.png)

Each inset defines the portion of the image that doesn’t stretch in the given dimension. The regions inside an image’s top and bottom insets maintain a fixed height, and the areas inside the left and right insets maintain a fixed width. The following image shows how each part of a nine-part image stretches as the image itself is stretched to fill the available space. The corners of the image don’t change size because they’re inside both a horizontal and vertical inset:

![An image that depicts the stretchable portions of a nine-part image. The image on the left is stretched. The image on the right is condensed. The corners of both images remain the same size.](https://developer.apple.com/images/com.apple.uikit/media-1965930@2x.png)

<a id="Compare-images"></a>

### Compare images

The [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md) method is the only reliable way to determine whether two image objects contain the same image data. The following code illustrates the correct and incorrect ways to compare images.

**Swift**

```swift
// Load the same image twice.
let image1 = UIImage(named: "MyImage")
let image2 = UIImage(named: "MyImage") 

// The image objects may be different, but the contents are still equal.
if image1 != nil && image1!.isEqual(image2) {
    // Correct. This technique compares the image data correctly.
} 
if image1 == image2 {
    // Incorrect! Direct object comparisons may not work.
}
```

**Objective-C**

```objc
// Load the same image twice.
UIImage* image1 = [UIImage imageNamed:@"MyImage"];
UIImage* image2 = [UIImage imageNamed:@"MyImage"];
 
// The image objects may be different, but the contents are still equal
if ([image1 isEqual:image2]) {
   // Correct. This technique compares the image data correctly.
}
 
if (image1 == image2) {
   // Incorrect! Direct object comparisons may not work.
}
```

<a id="Access-the-image-data"></a>

### Access the image data

Image objects don’t provide direct access to their underlying image data. However, you can retrieve the image data in other formats for use in your app. Specifically, you can use the [cgImage](uiimage/cgimage.md) and [ciImage](uiimage/ciimage.md) properties to retrieve versions of the image that are compatible with Core Graphics and Core Image, respectively. You can also use the [pngData()](uiimage/pngdata%28%29.md) and [jpegData(compressionQuality:)](uiimage/jpegdata%28compressionquality_%29.md) functions to generate an [NSData](../foundation/nsdata.md) object containing the image data in either the PNG or JPEG format.

## Topics

### Loading and caching images

- [Providing images for different appearances](providing-images-for-different-appearances.md): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Configuring and displaying symbol images in your UI](configuring-and-displaying-symbol-images-in-your-ui.md): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [Creating custom symbol images for your app](creating-custom-symbol-images-for-your-app.md): Create, organize, and annotate symbol images using SF Symbols.
- [init(named:in:compatibleWith:)](uiimage/init%28named_in_compatiblewith_%29.md): Creates an image object using the named image asset that’s compatible with the specified trait collection.
- [init(named:in:with:)](uiimage/init%28named_in_with_%29.md): Creates an image by using the named image asset that’s compatible with the configuration you specify.
- [init(named:in:variableValue:configuration:)](uiimage/init%28named_in_variablevalue_configuration_%29.md): Creates an image by using the name, configuration, and variable value you specify.
- [init(named:)](uiimage/init%28named_%29.md): Creates an image object from the specified named asset.
- [init(imageLiteralResourceName:)](uiimage/init%28imageliteralresourcename_%29.md): Returns the image object for the specified resource.
- [init(systemName:withConfiguration:)](uiimage/init%28systemname_withconfiguration_%29.md): Creates an image object that contains a system symbol image with the specified configuration.
- [init(systemName:variableValue:configuration:)](uiimage/init%28systemname_variablevalue_configuration_%29.md): Creates an image object that contains a system symbol image with the configuration and variable value you specify.
- [init(systemName:compatibleWith:)](uiimage/init%28systemname_compatiblewith_%29.md): Creates an image object that contains a system symbol image appropriate for the specified traits.
- [init(systemName:)](uiimage/init%28systemname_%29.md): Creates an image object that contains a system symbol image.
- [init(resource:)](uiimage/init%28resource_%29.md)
- [Building high-performance lists and collection views](building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.

### Loading images for display

- [preparingForDisplay()](uiimage/preparingfordisplay%28%29.md): Decodes an image synchronously and provides a new one for display in views and animations.
- [prepareForDisplay(completionHandler:)](uiimage/preparefordisplay%28completionhandler_%29.md): Decodes an image asynchronously and provides a new one for display in views and animations.
- [preparingThumbnail(of:)](uiimage/preparingthumbnail%28of_%29.md): Returns a new thumbnail image at the specified size.
- [prepareThumbnail(of:completionHandler:)](uiimage/preparethumbnail%28of_completionhandler_%29.md): Creates a thumbnail image at the specified size asynchronously on a background thread.

### Creating and initializing image objects

- [init(contentsOfFile:)](uiimage/init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [init(data:)](uiimage/init%28data_%29.md): Initializes and returns the image object with the specified data.
- [init(data:scale:)](uiimage/init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [init(cgImage:)](uiimage/init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [init(cgImage:scale:orientation:)](uiimage/init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [init(ciImage:)](uiimage/init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [init(ciImage:scale:orientation:)](uiimage/init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](uiimagereader-swift.struct.md)

### Creating animated images

- [animatedImageNamed(\_:duration:)](uiimage/animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedImage(with:duration:)](uiimage/animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed(\_:capInsets:duration:)](uiimage/animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
- [animatedResizableImageNamed(\_:capInsets:resizingMode:duration:)](uiimage/animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.

### Changing the image attributes

- [withConfiguration(\_:)](uiimage/withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [applyingSymbolConfiguration(\_:)](uiimage/applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection()](uiimage/imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [withHorizontallyFlippedOrientation()](uiimage/withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [withRenderingMode(\_:)](uiimage/withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [withAlignmentRectInsets(\_:)](uiimage/withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImage(withCapInsets:)](uiimage/resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImage(withCapInsets:resizingMode:)](uiimage/resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline()](uiimage/imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [withBaselineOffset(fromBottom:)](uiimage/withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImage.Configuration](uiimage/configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImage.SymbolConfiguration](uiimage/symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

### Getting standard system images

- [add](uiimage/add.md): The standard image for indicating the addition of content.
- [remove](uiimage/remove.md): The standard image for indicating the removal of content.
- [actions](uiimage/actions.md): The standard image for indicating user-initiated actions.
- [checkmark](uiimage/checkmark.md): The standard image for a checkmark on a filled-circle background.
- [strokedCheckmark](uiimage/strokedcheckmark.md): The standard image for a checkmark on a tinted circle with a white-stroked border.

### Getting the image data

- [cgImage](uiimage/cgimage.md): The underlying Quartz image data.
- [ciImage](uiimage/ciimage.md): The underlying Core Image data.
- [images](uiimage/images.md): The complete array of image objects that compose the animation of an animated object.
- [imageAsset](uiimage/imageasset.md): The image asset (if any) for the image.

### Getting the image size and scale

- [scale](uiimage/scale.md): The scale factor of the image.
- [size](uiimage/size.md): The logical dimensions, in points, for the image.

### Accessing image attributes

- [imageOrientation](uiimage/imageorientation.md): The orientation of the receiver’s image.
- [UIImage.Orientation](uiimage/orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](uiimage/flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](uiimage/resizingmode-swift.property.md): The resizing mode of the image.
- [UIImage.ResizingMode](uiimage/resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](uiimage/duration.md): The time interval for displaying an animated image.
- [capInsets](uiimage/capinsets.md): The end-cap insets.
- [alignmentRectInsets](uiimage/alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [isSymbolImage](uiimage/issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

### Getting the image configuration

- [configuration](uiimage/configuration-swift.property.md): The configuration details for the image.
- [symbolConfiguration](uiimage/symbolconfiguration-swift.property.md): The configuration details for a symbol image.
- [traitCollection](uiimage/traitcollection.md): The trait collection that describes the current variant of the image.

### Specifying the dynamic range

- [isHighDynamicRange](uiimage/ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [imageRestrictedToStandardDynamicRange()](uiimage/imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [heicData()](uiimage/heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.
- [UIImage.DynamicRange](uiimage/dynamicrange.md)

### Managing the baseline

- [baselineOffsetFromBottom](uiimage/baselineoffsetfrombottom-3emg.md): The position of the baseline relative to the bottom of the image.

### Getting rendering information

- [renderingMode](uiimage/renderingmode-swift.property.md): A setting that determines how the app renders an image.
- [UIImage.RenderingMode](uiimage/renderingmode-swift.enum.md): Constants that specify the possible rendering modes for an image.
- [imageRendererFormat](uiimage/imagerendererformat.md): The preferred image renderer format for the image.

### Tinting the image

- [withTintColor(\_:)](uiimage/withtintcolor%28__%29.md): Returns a new version of the current image with the specified tint color.
- [withTintColor(\_:renderingMode:)](uiimage/withtintcolor%28__renderingmode_%29.md): Returns a new version of the image with a tint color that uses the specified rendering mode.

### Drawing images

- [draw(at:)](uiimage/draw%28at_%29.md): Draws the image at the specified point in the current context.
- [draw(at:blendMode:alpha:)](uiimage/draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [draw(in:)](uiimage/draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [draw(in:blendMode:alpha:)](uiimage/draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPattern(in:)](uiimage/drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.

### Exporting standard bitmap formats

- [jpegData(compressionQuality:)](uiimage/jpegdata%28compressionquality_%29.md): Returns a data object that contains the image in JPEG format.
- [pngData()](uiimage/pngdata%28%29.md): Returns a data object that contains the specified image in PNG format.

### Deprecated

- [stretchableImage(withLeftCapWidth:topCapHeight:)](uiimage/stretchableimage%28withleftcapwidth_topcapheight_%29.md): Deprecated. Creates and returns a new image object with the specified cap values.
- [leftCapWidth](uiimage/leftcapwidth.md): Deprecated. The horizontal end-cap size.
- [topCapHeight](uiimage/topcapheight.md): Deprecated. The vertical end-cap size.

### Initializers

- [init(CGImage:)](uiimage/init%28cgimage_%29-8doi8.md)
- [init(CGImage:)](uiimage/init%28cgimage_%29-g30x.md)
- [init(CGImage:scale:orientation:)](uiimage/init%28cgimage_scale_orientation_%29-3mxey.md)
- [init(CGImage:scale:orientation:)](uiimage/init%28cgimage_scale_orientation_%29-3xlco.md)
- [init(CIImage:)](uiimage/init%28ciimage_%29-3kg9b.md)
- [init(CIImage:)](uiimage/init%28ciimage_%29-8dq4u.md)
- [init(CIImage:scale:orientation:)](uiimage/init%28ciimage_scale_orientation_%29-3742c.md)
- [init(CIImage:scale:orientation:)](uiimage/init%28ciimage_scale_orientation_%29-wlzf.md)
- [init(coder:)](uiimage/init%28coder_%29.md)
- [init(named:inBundle:compatibleWithTraitCollection:)](uiimage/init%28named_inbundle_compatiblewithtraitcollection_%29.md)
- [init(named:inBundle:withConfiguration:)](uiimage/init%28named_inbundle_withconfiguration_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [JournalingSuggestionAsset](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionasset)
- [NSCoding](../foundation/nscoding.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIItemProviderPresentationSizeProviding](uiitemproviderpresentationsizeproviding.md)

## See Also

### Representations

- [UIImage.SymbolConfiguration](uiimage/symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
- [UIImage.Configuration](uiimage/configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.

# UIImage (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that manages image data in your app.

## Declaration

```objectivec
@interface UIImage : NSObject
```

## Mentioned In

- [Configuring and displaying symbol images in your UI](configuring-and-displaying-symbol-images-in-your-ui.md)
- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)
- [Understanding a drag item as a promise](understanding-a-drag-item-as-a-promise.md)

<a id="overview"></a>

## Overview

You use image objects to represent image data of all kinds, and the [UIImage](uiimage.md) class is capable of managing data for all image formats supported by the underlying platform. Image objects are immutable, so you always create them from existing image data, such as an image file on disk or programmatically created image data. An image object may contain a single image or a sequence of images for use in an animation.

You can use image objects in several different ways:

- Assign an image to a [UIImageView](uiimageview.md) object to display the image in your interface.
- Use an image to customize system controls such as buttons, sliders, and segmented controls.
- Draw an image directly into a view or other graphics context.
- Pass an image to other APIs that might require image data.

Although image objects support all platform-native image formats, it’s recommended that you use PNG or JPEG files for most images in your app. Image objects are optimized for reading and displaying both formats, and those formats offer better performance than most other image formats. Because the PNG format is lossless, it’s especially recommended for the images you use in your app’s interface.

<a id="Create-image-objects"></a>

### Create image objects

When creating image objects using the methods of this class, you must have existing image data located in a file or data structure. You can’t create an empty image and draw content into it. There are many options for creating image objects, each of which is best for specific situations:

- Use the [imageNamed:inBundle:compatibleWithTraitCollection:](uiimage/init%28named_in_compatiblewith_%29.md) method (or the [imageNamed:](uiimage/init%28named_%29.md) method) to create an image from an image asset or image file located in your app’s main bundle (or some other known bundle). Because these methods cache the image data automatically, they’re especially recommended for images that you use frequently.
- Use the [imageWithContentsOfFile:](uiimage/imagewithcontentsoffile_.md) or [initWithContentsOfFile:](uiimage/init%28contentsoffile_%29.md) method to create an image object where the initial data isn’t in a bundle. These methods load the image data from disk each time, so don’t use them to load the same image repeatedly.
- Use the [animatedImageWithImages:duration:](uiimage/animatedimage%28with_duration_%29.md) and [animatedImageNamed:duration:](uiimage/animatedimagenamed%28__duration_%29.md) methods to create a single [UIImage](uiimage.md) object comprised of multiple sequential images. Install the resulting image in a [UIImageView](uiimageview.md) object to create animations in your interface.

Other methods of the [UIImage](uiimage.md) class let you create animations from specific types of data, such as Core Graphics images or image data you create yourself. UIKit also provides the [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function to create images from content you draw yourself. You use that function in conjunction with a bitmap-based graphics context, which you use to capture your drawing commands.

> **Note**

>  Because image objects are immutable, you can’t change their properties after creation. Most image properties are set automatically using metadata in the accompanying image file or image data. The immutable nature of image objects also means they’re safe to create and use from any thread.

Image assets are the easiest way to manage the images that ship with your app. Each new Xcode project contains an assets library, to which you can add multiple image sets. An image set contains the variations of a single image that your app uses. A single image set can provide different versions of an image for different platforms, for different trait environments (compact or regular), and for different scale factors.

In addition to loading images from disk, you can ask the user to supply images from an available camera or photo library using a [UIImagePickerController](uiimagepickercontroller.md) object. An image picker displays a custom user interface for selecting images. Accessing user-supplied images requires explicit user permission. For more information about using an image picker, see [UIImagePickerController](uiimagepickercontroller.md).

<a id="Define-a-stretchable-image"></a>

### Define a stretchable image

A stretchable image is one that defines regions where you can duplicate the underlying image data in an aesthetically pleasing way. Stretchable images are commonly used to create backgrounds that can grow or shrink to fill the available space.

Define a stretchable image by adding insets to an existing image using the [resizableImageWithCapInsets:](uiimage/resizableimage%28withcapinsets_%29.md) or [resizableImageWithCapInsets:resizingMode:](uiimage/resizableimage%28withcapinsets_resizingmode_%29.md) method. The insets subdivide the image into two or more parts. Specifying nonzero values for each inset yields an image divided into nine parts, as shown in the following image:

![An image that depicts how to use insets to define stretchable regions. The image on the left is stretched and shows Left, Right, Top, and Bottom insets. The image on the right is condensed and also shows Left, Right, Top, and Bottom insets.](https://developer.apple.com/images/com.apple.uikit/media-1965929@2x.png)

Each inset defines the portion of the image that doesn’t stretch in the given dimension. The regions inside an image’s top and bottom insets maintain a fixed height, and the areas inside the left and right insets maintain a fixed width. The following image shows how each part of a nine-part image stretches as the image itself is stretched to fill the available space. The corners of the image don’t change size because they’re inside both a horizontal and vertical inset:

![An image that depicts the stretchable portions of a nine-part image. The image on the left is stretched. The image on the right is condensed. The corners of both images remain the same size.](https://developer.apple.com/images/com.apple.uikit/media-1965930@2x.png)

<a id="Compare-images"></a>

### Compare images

The [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md) method is the only reliable way to determine whether two image objects contain the same image data. The following code illustrates the correct and incorrect ways to compare images.

**Swift**

```swift
// Load the same image twice.
let image1 = UIImage(named: "MyImage")
let image2 = UIImage(named: "MyImage") 

// The image objects may be different, but the contents are still equal.
if image1 != nil && image1!.isEqual(image2) {
    // Correct. This technique compares the image data correctly.
} 
if image1 == image2 {
    // Incorrect! Direct object comparisons may not work.
}
```

**Objective-C**

```objc
// Load the same image twice.
UIImage* image1 = [UIImage imageNamed:@"MyImage"];
UIImage* image2 = [UIImage imageNamed:@"MyImage"];
 
// The image objects may be different, but the contents are still equal
if ([image1 isEqual:image2]) {
   // Correct. This technique compares the image data correctly.
}
 
if (image1 == image2) {
   // Incorrect! Direct object comparisons may not work.
}
```

<a id="Access-the-image-data"></a>

### Access the image data

Image objects don’t provide direct access to their underlying image data. However, you can retrieve the image data in other formats for use in your app. Specifically, you can use the [CGImage](uiimage/cgimage.md) and [CIImage](uiimage/ciimage.md) properties to retrieve versions of the image that are compatible with Core Graphics and Core Image, respectively. You can also use the [UIImagePNGRepresentation](uiimage/pngdata%28%29.md) and [UIImageJPEGRepresentation](uiimage/jpegdata%28compressionquality_%29.md) functions to generate an [NSData](../foundation/nsdata.md) object containing the image data in either the PNG or JPEG format.

## Topics

### Loading and caching images

- [Providing images for different appearances](providing-images-for-different-appearances.md): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Configuring and displaying symbol images in your UI](configuring-and-displaying-symbol-images-in-your-ui.md): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [Creating custom symbol images for your app](creating-custom-symbol-images-for-your-app.md): Create, organize, and annotate symbol images using SF Symbols.
- [imageNamed:inBundle:compatibleWithTraitCollection:](uiimage/init%28named_in_compatiblewith_%29.md): Creates an image object using the named image asset that’s compatible with the specified trait collection.
- [imageNamed:inBundle:withConfiguration:](uiimage/init%28named_in_with_%29.md): Creates an image by using the named image asset that’s compatible with the configuration you specify.
- [imageNamed:inBundle:variableValue:withConfiguration:](uiimage/imagenamed_inbundle_variablevalue_withconfiguration_.md): Creates an image by using the name, configuration, and variable value you specify.
- [imageNamed:](uiimage/init%28named_%29.md): Creates an image object from the specified named asset.
- [systemImageNamed:withConfiguration:](uiimage/init%28systemname_withconfiguration_%29.md): Creates an image object that contains a system symbol image with the specified configuration.
- [systemImageNamed:variableValue:withConfiguration:](uiimage/systemimagenamed_variablevalue_withconfiguration_.md): Creates an image object that contains a system symbol image with the configuration and variable value you specify.
- [systemImageNamed:compatibleWithTraitCollection:](uiimage/init%28systemname_compatiblewith_%29.md): Creates an image object that contains a system symbol image appropriate for the specified traits.
- [systemImageNamed:](uiimage/init%28systemname_%29.md): Creates an image object that contains a system symbol image.
- [Building high-performance lists and collection views](building-high-performance-lists-and-collection-views.md): Improve the performance of lists and collections in your app with prefetching and image preparation.

### Loading images for display

- [imageByPreparingForDisplay](uiimage/preparingfordisplay%28%29.md): Decodes an image synchronously and provides a new one for display in views and animations.
- [prepareForDisplayWithCompletionHandler:](uiimage/preparefordisplay%28completionhandler_%29.md): Decodes an image asynchronously and provides a new one for display in views and animations.
- [imageByPreparingThumbnailOfSize:](uiimage/preparingthumbnail%28of_%29.md): Returns a new thumbnail image at the specified size.
- [prepareThumbnailOfSize:completionHandler:](uiimage/preparethumbnail%28of_completionhandler_%29.md): Creates a thumbnail image at the specified size asynchronously on a background thread.

### Creating and initializing image objects

- [imageWithContentsOfFile:](uiimage/imagewithcontentsoffile_.md): Creates and returns an image object by loading the image data from the file at the specified path.
- [imageWithData:](uiimage/imagewithdata_.md): Creates and returns an image object that uses the specified image data.
- [imageWithData:scale:](uiimage/imagewithdata_scale_.md): Creates and returns an image object that uses the specified image data and scale factor.
- [imageWithCGImage:](uiimage/imagewithcgimage_.md): Creates and returns an image object representing the specified Quartz image.
- [imageWithCGImage:scale:orientation:](uiimage/imagewithcgimage_scale_orientation_.md): Creates and returns an image object with the specified scale and orientation factors.
- [imageWithCIImage:](uiimage/imagewithciimage_.md): Creates and returns an image object that contains a Core Image object.
- [imageWithCIImage:scale:orientation:](uiimage/imagewithciimage_scale_orientation_.md): Creates and returns an image object based on a Core Image object and the specified attributes.
- [initWithContentsOfFile:](uiimage/init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [initWithData:](uiimage/init%28data_%29.md): Initializes and returns the image object with the specified data.
- [initWithData:scale:](uiimage/init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [initWithCGImage:](uiimage/init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [initWithCGImage:scale:orientation:](uiimage/init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [initWithCIImage:](uiimage/init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [initWithCIImage:scale:orientation:](uiimage/init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](uiimagereader-c.class.md)
- [UIImageReaderConfiguration](uiimagereaderconfiguration.md): The properties that a reader uses to decode images.

### Creating animated images

- [animatedImageNamed:duration:](uiimage/animatedimagenamed%28__duration_%29.md): Creates and returns an animated image.
- [animatedImageWithImages:duration:](uiimage/animatedimage%28with_duration_%29.md): Creates and returns an animated image from an existing set of images.
- [animatedResizableImageNamed:capInsets:duration:](uiimage/animatedresizableimagenamed%28__capinsets_duration_%29.md): Creates and returns an animated image with end caps.
- [animatedResizableImageNamed:capInsets:resizingMode:duration:](uiimage/animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md): Creates and returns an animated image with end caps and a specific resizing mode.

### Changing the image attributes

- [imageWithConfiguration:](uiimage/withconfiguration%28__%29.md): Returns a new version of the current image, replacing the current configuration attributes with the specified attributes.
- [imageByApplyingSymbolConfiguration:](uiimage/applyingsymbolconfiguration%28__%29.md): Returns a new version of the current image, applying the specified configuration attributes on top of the current attributes.
- [imageFlippedForRightToLeftLayoutDirection](uiimage/imageflippedforrighttoleftlayoutdirection%28%29.md): Returns a new version of the current image that flips horizontally when it’s in a right-to-left layout.
- [imageWithHorizontallyFlippedOrientation](uiimage/withhorizontallyflippedorientation%28%29.md): Returns a new version of the image that’s a mirror of the original image.
- [imageWithRenderingMode:](uiimage/withrenderingmode%28__%29.md): Returns a new version of the image that uses the specified rendering mode.
- [imageWithAlignmentRectInsets:](uiimage/withalignmentrectinsets%28__%29.md): Returns a new version of the image that uses the specified alignment insets.
- [resizableImageWithCapInsets:](uiimage/resizableimage%28withcapinsets_%29.md): Returns a new version of the image with the specified cap insets.
- [resizableImageWithCapInsets:resizingMode:](uiimage/resizableimage%28withcapinsets_resizingmode_%29.md): Returns a new version of the image with the specified cap insets and options.
- [imageWithoutBaseline](uiimage/imagewithoutbaseline%28%29.md): Creates a copy of the current image object without any baseline information.
- [imageWithBaselineOffsetFromBottom:](uiimage/withbaselineoffset%28frombottom_%29.md): Creates a new image with a baseline at the specified offset from the bottom of the image.
- [UIImageConfiguration](uiimage/configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
- [UIImageSymbolConfiguration](uiimage/symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

### Getting standard system images

- [addImage](uiimage/add.md): The standard image for indicating the addition of content.
- [removeImage](uiimage/remove.md): The standard image for indicating the removal of content.
- [actionsImage](uiimage/actions.md): The standard image for indicating user-initiated actions.
- [checkmarkImage](uiimage/checkmark.md): The standard image for a checkmark on a filled-circle background.
- [strokedCheckmarkImage](uiimage/strokedcheckmark.md): The standard image for a checkmark on a tinted circle with a white-stroked border.

### Getting the image data

- [CGImage](uiimage/cgimage.md): The underlying Quartz image data.
- [CIImage](uiimage/ciimage.md): The underlying Core Image data.
- [images](uiimage/images.md): The complete array of image objects that compose the animation of an animated object.
- [imageAsset](uiimage/imageasset.md): The image asset (if any) for the image.

### Getting the image size and scale

- [scale](uiimage/scale.md): The scale factor of the image.
- [size](uiimage/size.md): The logical dimensions, in points, for the image.

### Accessing image attributes

- [imageOrientation](uiimage/imageorientation.md): The orientation of the receiver’s image.
- [UIImageOrientation](uiimage/orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](uiimage/flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](uiimage/resizingmode-swift.property.md): The resizing mode of the image.
- [UIImageResizingMode](uiimage/resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](uiimage/duration.md): The time interval for displaying an animated image.
- [capInsets](uiimage/capinsets.md): The end-cap insets.
- [alignmentRectInsets](uiimage/alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [symbolImage](uiimage/issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

### Getting the image configuration

- [configuration](uiimage/configuration-swift.property.md): The configuration details for the image.
- [symbolConfiguration](uiimage/symbolconfiguration-swift.property.md): The configuration details for a symbol image.
- [traitCollection](uiimage/traitcollection.md): The trait collection that describes the current variant of the image.

### Specifying the dynamic range

- [isHighDynamicRange](uiimage/ishighdynamicrange.md): Indicates that this image is tagged for display of high dynamic range content.
- [imageRestrictedToStandardDynamicRange](uiimage/imagerestrictedtostandarddynamicrange%28%29.md): Returns a new image that will render within the standard range.
- [UIImageHEICRepresentation](uiimage/heicdata%28%29.md): Returns HEIC data representing the image, or nil if such a representation could not be generated. HEIC is recommended for efficiently storing all kinds of images, including those with high dynamic range content.
- [UIImageDynamicRange](uiimage/dynamicrange.md)

### Managing the baseline

- [hasBaseline](uiimage/hasbaseline.md): A Boolean value that indicates whether the image has a defined baseline offset.
- [baselineOffsetFromBottom](uiimage/baselineoffsetfrombottom-23gkf.md): The position of the baseline relative to the bottom of the image.

### Getting rendering information

- [renderingMode](uiimage/renderingmode-swift.property.md): A setting that determines how the app renders an image.
- [UIImageRenderingMode](uiimage/renderingmode-swift.enum.md): Constants that specify the possible rendering modes for an image.
- [imageRendererFormat](uiimage/imagerendererformat.md): The preferred image renderer format for the image.

### Tinting the image

- [imageWithTintColor:](uiimage/withtintcolor%28__%29.md): Returns a new version of the current image with the specified tint color.
- [imageWithTintColor:renderingMode:](uiimage/withtintcolor%28__renderingmode_%29.md): Returns a new version of the image with a tint color that uses the specified rendering mode.

### Drawing images

- [drawAtPoint:](uiimage/draw%28at_%29.md): Draws the image at the specified point in the current context.
- [drawAtPoint:blendMode:alpha:](uiimage/draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [drawInRect:](uiimage/draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [drawInRect:blendMode:alpha:](uiimage/draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPatternInRect:](uiimage/drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.

### Exporting standard bitmap formats

- [UIImageJPEGRepresentation](uiimage/jpegdata%28compressionquality_%29.md): Returns a data object that contains the image in JPEG format.
- [UIImagePNGRepresentation](uiimage/pngdata%28%29.md): Returns a data object that contains the specified image in PNG format.

### Deprecated

- [stretchableImageWithLeftCapWidth:topCapHeight:](uiimage/stretchableimage%28withleftcapwidth_topcapheight_%29.md): Deprecated. Creates and returns a new image object with the specified cap values.
- [leftCapWidth](uiimage/leftcapwidth.md): Deprecated. The horizontal end-cap size.
- [topCapHeight](uiimage/topcapheight.md): Deprecated. The vertical end-cap size.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [JournalingSuggestionAsset](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionasset)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIItemProviderPresentationSizeProviding](uiitemproviderpresentationsizeproviding.md)

## See Also

### Representations

- [UIImageSymbolConfiguration](uiimage/symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
- [UIImageConfiguration](uiimage/configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
