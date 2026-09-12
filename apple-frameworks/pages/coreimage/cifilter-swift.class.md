> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class](https://developer.apple.com/documentation/coreimage/cifilter-swift.class)

# CIFilter (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

An image processor that produces an image by manipulating one or more input images or by generating new image data.

## Declaration

```swift
class CIFilter
```

## Mentioned In

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md)
- [Selectively Focusing on an Image](selectively-focusing-on-an-image.md)
- [Customizing Image Transitions](customizing-image-transitions.md)

<a id="overview"></a>

## Overview

The `CIFilter` class produces a [CIImage](ciimage.md) object as output. Typically, a filter takes one or more images as input. Some filters, however, generate an image based on other types of input parameters. The par`CIFilter` swift.class\` object are set and retrieved through the use of key-value pairs.

You use the `CIFilter` object in conjunction with other Core Image classes, such as  `CIImage`, [CIContext](cicontext.md), and [CIColor](cicolor.md), to take advantage of the built-in Core Image filters when processing images, creating filter generators, or writing custom filters.

`CIFilter` objects are mutable, and thus cannot be shared safely among threads. Each thread must create its own `CIFilter` objects, but you can pass a filter’s immutable input and output `CIImage` objects between threads.

To get a quick overview of how to set up and use Core Image filters, see [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

<a id="Create-type-safe-filters"></a>

### Create type-safe filters

Core Image provides methods that create type-safe `CIFilter` instances. Use these filters to avoid run-time errors that can occur when relying on Core Image’s string-based API.

To use the type-safe API, import `CoreImage.CIFilterBuiltins`:

```swift
#import <CoreImage/CoreImage.h>
#import <CoreImage/CIFilterBuiltins.h>
```

The type-safe approach returns a non-optional filter. Because the returned filter conforms to the relevant protocol—for example, [CIFalseColor](cifalsecolor.md) in the case of [falseColor()](cifilter-swift.class/falsecolor%28%29.md)—the parameters are available as properties. The following creates and applies a false color filter:

```swift
- (CIImage *) falseColorImage:(CIImage*) inputImage {
    CIFilter<CIFalseColor> *falseColorFilter = CIFilter.falseColorFilter;
    falseColorFilter.color0 = [CIColor colorWithRed:1 green:1 blue:0];
    falseColorFilter.color1 = [CIColor colorWithRed:0 green:0 blue:1];
    falseColorFilter.inputImage = inputImage;
    return falseColorFilter.outputImage;
}
```

The false color filter maps luminance to a color ramp of two colors:

![Two photographs showing a flower. The image on the left shows the original version of the flower. The image on the right shows the false color version of the flower.](https://developer.apple.com/images/com.apple.coreimage/media-4336877@2x.png)

<a id="Subclassing-notes"></a>

### Subclassing notes

You can subclass `CIFilter` in order to create custom filter effects:

- By chaining together two or more built-in Core Image filters
- By using an image-processing kernel that you write

Regardless of whether your subclass provides its effect by chaining filters or implementing its own kernel, you should:

- Declare any input parameters as properties whose names are prefixed with `input`, such as `inputImage`.
- Override the [setDefaults()](cifilter-swift.class/setdefaults%28%29.md) methods to provide default values for any input parameters you’ve declared.
- Implement an `outputImage` method to create a new `CIImage` with your filter’s effect.

The `CIFilter` class automatically manages input parameters when archiving, copying, and deallocating filters. For this reason, your subclass must obey the following guidelines to ensure proper behavior:

- Store input parameters in instance variables whose names are prefixed with `input`.

Don’t use auto-synthesized instance variables, because their names are automatically prefixed with an underscore. Instead, synthesize the property manually. For example:

`@synthesize inputMyParameter;`

- If using manual reference counting, don’t release input parameter instance variables in your [dealloc](../objectivec/nsobject-swift.class/dealloc.md) method implementation. The [dealloc](../objectivec/nsobject-swift.class/dealloc.md) implementation in the `CIFilter` class uses [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) to automatically set the values of all input parameters to `nil`.

## Topics

### Creating a filter

- [init(name:)](cifilter-swift.class/init%28name_%29.md): Creates a [CIFilter](cifilter-swift.class.md) object for a specific kind of filter.
- [init(name:withInputParameters:)](cifilter-swift.class/init%28name_withinputparameters_%29.md): Creates a [CIFilter](cifilter-swift.class.md) object for a specific kind of filter and initializes the input values.

### Configuring type-safe filters

Configure Core Image filters that expose their attributes as properties.

- [CIFilterProtocol](cifilterprotocol.md): The properties you use to configure a Core Image filter.
- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Reduction Filters](reduction-filters.md): Create statistical information about an image.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

### Accessing registered filters

- [filterNames(inCategories:)](cifilter-swift.class/filternames%28incategories_%29.md): Returns an array of all published filter names that match all the specified categories.
- [filterNames(inCategory:)](cifilter-swift.class/filternames%28incategory_%29.md): Returns an array of all published filter names in the specified category.

### Registering a filter

- [registerName(\_:constructor:classAttributes:)](cifilter-swift.class/registername%28__constructor_classattributes_%29.md): Publishes a custom filter that is not packaged as an image unit.

### Getting filter parameters and attributes

- [name](cifilter-swift.class/name.md): A name associated with a filter.
- [isEnabled](cifilter-swift.class/isenabled.md): A Boolean value that determines whether the filter is enabled. Animatable.
- [attributes](cifilter-swift.class/attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](cifilter-swift.class/inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](cifilter-swift.class/outputkeys.md): The names of all output parameters from the filter.
- [outputImage](cifilter-swift.class/outputimage.md): Returns a [CIImage](ciimage.md) object that encapsulates the operations configured in the filter.

### Setting default values

- [setDefaults()](cifilter-swift.class/setdefaults%28%29.md): Sets all input values for a filter to default values.

### Applying a filter

- [apply(\_:arguments:options:)](cifilter-swift.class/apply%28__arguments_options_%29.md): Produces a [CIImage](ciimage.md) object by applying arguments to a kernel function and using options to control how the kernel function is evaluated.

### Getting localized information for registered filters

- [localizedName(forFilterName:)](cifilter-swift.class/localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedName(forCategory:)](cifilter-swift.class/localizedname%28forcategory_%29.md): Returns the localized name for the specified filter category.
- [localizedDescription(forFilterName:)](cifilter-swift.class/localizeddescription%28forfiltername_%29.md): Returns the localized description of a filter for display in the user interface.
- [localizedReferenceDocumentation(forFilterName:)](cifilter-swift.class/localizedreferencedocumentation%28forfiltername_%29.md): Returns the location of the localized reference documentation that describes the filter.

### Creating a configuration view for a filter

- [view(forUIConfiguration:excludedKeys:)](cifilter-swift.class/view%28foruiconfiguration_excludedkeys_%29.md): Returns a filter view for the filter.

### Applying system tone mapping modes

- [CIDynamicRangeOption](cidynamicrangeoption.md): An enum string type that your code can use to select different System Tone Mapping modes.

### Constants

- [Filter Attribute Keys](filter-attribute-keys.md): Attributes for a filter and its parameters.
- [Data Type Attributes](data-type-attributes.md): Numeric data types.
- [Vector Quantity Attributes](vector-quantity-attributes.md): Vector data types.
- [Color Attribute Keys](color-attribute-keys.md): Color types.
- [Image Attribute Keys](image-attribute-keys.md): Image Types
- [Filter Category Keys](filter-category-keys.md): Categories of filters.
- [Options for Applying a Filter](options-for-applying-a-filter.md): Options that control the application of a custom Core Image filter.
- [User Interface Control Options](user-interface-control-options.md): Sets of controls for various user scenarios.
- [User Interface Options](user-interface-options.md): Keys or values for the size of the input parameter controls for a filter view.
- [Filter Parameter Keys](filter-parameter-keys.md): Keys for input parameters to filters.
- [RAW Image Options](raw-image-options.md): Options for creating a [CIFilter](cifilter-swift.class.md) object from RAW image data.

### Deprecated

- [init(CVPixelBuffer:properties:options:)](cifilter-swift.class/init%28cvpixelbuffer_properties_options_%29-7qpsv.md): Deprecated. Creates a filter from a Core Video pixel buffer.
- [init(imageData:options:)](cifilter-swift.class/init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [init(imageURL:options:)](cifilter-swift.class/init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](cirawfilteroption.md): Deprecated.
- [serializedXMP(from:inputImageExtent:)](cifilter-swift.class/serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArray(fromSerializedXMP:inputImageExtent:error:)](cifilter-swift.class/filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels()](cifilter-swift.class/supportedrawcameramodels%28%29.md): Deprecated.

### Type methods

- [areaAlphaWeightedHistogram()](cifilter-swift.class/areaalphaweightedhistogram%28%29.md)
- [areaBoundsRed()](cifilter-swift.class/areaboundsred%28%29.md)
- [maximumScaleTransform()](cifilter-swift.class/maximumscaletransform%28%29.md)
- [toneMapHeadroom()](cifilter-swift.class/tonemapheadroom%28%29.md)

### Initializers

- [init(coder:)](cifilter-swift.class/init%28coder_%29.md)
- [init(cvPixelBuffer:properties:options:)](cifilter-swift.class/init%28cvpixelbuffer_properties_options_%29-69695.md): Deprecated. Returns a CIFilter that will in turn return a properly processed CIImage as “outputImage”.
- [init(name:parameters:)](cifilter-swift.class/init%28name_parameters_%29.md): Creates a new filter of type ‘name’. The filter’s input parameters are set from the dictionary of key-value pairs. On OSX, any of the filter input parameters not specified in the dictionary will be undefined. On iOS, any of the filter input parameters not specified in the dictionary will be set to default values.

### Type Methods

- [areaAverageMaximumRed()](cifilter-swift.class/areaaveragemaximumred%28%29.md)
- [blurredRoundedRectangleGenerator()](cifilter-swift.class/blurredroundedrectanglegenerator%28%29.md)
- [distanceGradientFromRedMask()](cifilter-swift.class/distancegradientfromredmask%28%29.md)
- [roundedQRCodeGenerator()](cifilter-swift.class/roundedqrcodegenerator%28%29.md)
- [signedDistanceGradientFromRedMask()](cifilter-swift.class/signeddistancegradientfromredmask%28%29.md)
- [systemToneMap()](cifilter-swift.class/systemtonemap%28%29.md)

### Default Implementations

- [CIFilter Implementations](cifilter-swift.class/cifilter-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIRAWFilter](cirawfilter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filters

- [CIRAWFilter](cirawfilter.md): A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.
- [CIColor](cicolor.md): The Core Image class that defines a color object.
- [CIVector](civector.md): The Core Image class that defines a vector object.

# CIFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

An image processor that produces an image by manipulating one or more input images or by generating new image data.

## Declaration

```objectivec
@interface CIFilter : NSObject
```

## Mentioned In

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md)
- [Selectively Focusing on an Image](selectively-focusing-on-an-image.md)
- [Customizing Image Transitions](customizing-image-transitions.md)

<a id="overview"></a>

## Overview

The `CIFilter` class produces a [CIImage](ciimage.md) object as output. Typically, a filter takes one or more images as input. Some filters, however, generate an image based on other types of input parameters. The par`CIFilter` swift.class\` object are set and retrieved through the use of key-value pairs.

You use the `CIFilter` object in conjunction with other Core Image classes, such as  `CIImage`, [CIContext](cicontext.md), and [CIColor](cicolor.md), to take advantage of the built-in Core Image filters when processing images, creating filter generators, or writing custom filters.

`CIFilter` objects are mutable, and thus cannot be shared safely among threads. Each thread must create its own `CIFilter` objects, but you can pass a filter’s immutable input and output `CIImage` objects between threads.

To get a quick overview of how to set up and use Core Image filters, see [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

<a id="Create-type-safe-filters"></a>

### Create type-safe filters

Core Image provides methods that create type-safe `CIFilter` instances. Use these filters to avoid run-time errors that can occur when relying on Core Image’s string-based API.

To use the type-safe API, import `CoreImage.CIFilterBuiltins`:

```swift
#import <CoreImage/CoreImage.h>
#import <CoreImage/CIFilterBuiltins.h>
```

The type-safe approach returns a non-optional filter. Because the returned filter conforms to the relevant protocol—for example, [CIFalseColor](cifalsecolor.md) in the case of [falseColorFilter](cifilter-swift.class/falsecolor%28%29.md)—the parameters are available as properties. The following creates and applies a false color filter:

```swift
- (CIImage *) falseColorImage:(CIImage*) inputImage {
    CIFilter<CIFalseColor> *falseColorFilter = CIFilter.falseColorFilter;
    falseColorFilter.color0 = [CIColor colorWithRed:1 green:1 blue:0];
    falseColorFilter.color1 = [CIColor colorWithRed:0 green:0 blue:1];
    falseColorFilter.inputImage = inputImage;
    return falseColorFilter.outputImage;
}
```

The false color filter maps luminance to a color ramp of two colors:

![Two photographs showing a flower. The image on the left shows the original version of the flower. The image on the right shows the false color version of the flower.](https://developer.apple.com/images/com.apple.coreimage/media-4336877@2x.png)

<a id="Subclassing-notes"></a>

### Subclassing notes

You can subclass `CIFilter` in order to create custom filter effects:

- By chaining together two or more built-in Core Image filters
- By using an image-processing kernel that you write

Regardless of whether your subclass provides its effect by chaining filters or implementing its own kernel, you should:

- Declare any input parameters as properties whose names are prefixed with `input`, such as `inputImage`.
- Override the [setDefaults](cifilter-swift.class/setdefaults%28%29.md) methods to provide default values for any input parameters you’ve declared.
- Implement an `outputImage` method to create a new `CIImage` with your filter’s effect.

The `CIFilter` class automatically manages input parameters when archiving, copying, and deallocating filters. For this reason, your subclass must obey the following guidelines to ensure proper behavior:

- Store input parameters in instance variables whose names are prefixed with `input`.

Don’t use auto-synthesized instance variables, because their names are automatically prefixed with an underscore. Instead, synthesize the property manually. For example:

`@synthesize inputMyParameter;`

- If using manual reference counting, don’t release input parameter instance variables in your [dealloc](../objectivec/nsobject-swift.class/dealloc.md) method implementation. The [dealloc](../objectivec/nsobject-swift.class/dealloc.md) implementation in the `CIFilter` class uses [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) to automatically set the values of all input parameters to `nil`.

## Topics

### Creating a filter

- [filterWithName:](cifilter-swift.class/init%28name_%29.md): Creates a [CIFilter](cifilter-swift.class.md) object for a specific kind of filter.
- [filterWithName:keysAndValues:](cifilter-swift.class/filterwithname_keysandvalues_.md): Creates a [CIFilter](cifilter-swift.class.md) object for a specific kind of filter and initializes the input values with a `nil`-terminated list of arguments.

### Configuring type-safe filters

Configure Core Image filters that expose their attributes as properties.

- [CIFilter](cifilterprotocol.md): The properties you use to configure a Core Image filter.
- [Blur Filters](blur-filters.md): Apply blurs, simulate motion and zoom effects, reduce noise, and erode and dilate image regions.
- [Color Adjustment Filters](color-adjustment-filters.md): Apply color transformations, including exposure, hue, and tint adjustments.
- [Color Effect Filters](color-effect-filters.md): Apply color effects, including photo effects, dithering, and color maps.
- [Composite Operations](composite-operations.md): Composite images by using a range of blend modes and compositing operators.
- [Convolution Filters](convolution-filters.md): Produce effects such as blurring, sharpening, edge detection, translation, and embossing.
- [Distortion Filters](distortion-filters.md): Apply distortion to images.
- [Generator Filters](generator-filters.md): Generate barcode, geometric, and special-effect images.
- [Geometry Adjustment Filters](geometry-adjustment-filters.md): Translate, scale, and rotate images in 2D and 3D.
- [Gradient Filters](gradient-filters.md): Generate linear and radial gradients.
- [Halftone Effect Filters](halftone-effect-filters.md): Simulate monochrome and CMYK halftone screens.
- [Reduction Filters](reduction-filters.md): Create statistical information about an image.
- [Sharpening Filters](sharpening-filters.md): Apply sharpening to images.
- [Stylizing Filters](stylizing-filters.md): Create stylized versions of images by applying effects including pixelation and line overlays.
- [Tile Effect Filters](tile-effect-filters.md): Produce tiled images from source images.
- [Transition Filters](transition-filters.md): Transition between two images by using effects including page curl and swipe.

### Accessing registered filters

- [filterNamesInCategories:](cifilter-swift.class/filternames%28incategories_%29.md): Returns an array of all published filter names that match all the specified categories.
- [filterNamesInCategory:](cifilter-swift.class/filternames%28incategory_%29.md): Returns an array of all published filter names in the specified category.

### Registering a filter

- [registerFilterName:constructor:classAttributes:](cifilter-swift.class/registername%28__constructor_classattributes_%29.md): Publishes a custom filter that is not packaged as an image unit.

### Getting filter parameters and attributes

- [name](cifilter-swift.class/name.md): A name associated with a filter.
- [enabled](cifilter-swift.class/isenabled.md): A Boolean value that determines whether the filter is enabled. Animatable.
- [attributes](cifilter-swift.class/attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](cifilter-swift.class/inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](cifilter-swift.class/outputkeys.md): The names of all output parameters from the filter.
- [outputImage](cifilter-swift.class/outputimage.md): Returns a [CIImage](ciimage.md) object that encapsulates the operations configured in the filter.

### Setting default values

- [setDefaults](cifilter-swift.class/setdefaults%28%29.md): Sets all input values for a filter to default values.

### Applying a filter

- [apply:arguments:options:](cifilter-swift.class/apply%28__arguments_options_%29.md): Produces a [CIImage](ciimage.md) object by applying arguments to a kernel function and using options to control how the kernel function is evaluated.
- [apply:](cifilter-swift.class/apply_.md): Produces a [CIImage](ciimage.md) object by applying a kernel function.

### Getting localized information for registered filters

- [localizedNameForFilterName:](cifilter-swift.class/localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedNameForCategory:](cifilter-swift.class/localizedname%28forcategory_%29.md): Returns the localized name for the specified filter category.
- [localizedDescriptionForFilterName:](cifilter-swift.class/localizeddescription%28forfiltername_%29.md): Returns the localized description of a filter for display in the user interface.
- [localizedReferenceDocumentationForFilterName:](cifilter-swift.class/localizedreferencedocumentation%28forfiltername_%29.md): Returns the location of the localized reference documentation that describes the filter.

### Creating a configuration view for a filter

- [viewForUIConfiguration:excludedKeys:](cifilter-swift.class/view%28foruiconfiguration_excludedkeys_%29.md): Returns a filter view for the filter.

### Applying system tone mapping modes

- [CIDynamicRangeOption](cidynamicrangeoption.md): An enum string type that your code can use to select different System Tone Mapping modes.

### Constants

- [Filter Attribute Keys](filter-attribute-keys.md): Attributes for a filter and its parameters.
- [Data Type Attributes](data-type-attributes.md): Numeric data types.
- [Vector Quantity Attributes](vector-quantity-attributes.md): Vector data types.
- [Color Attribute Keys](color-attribute-keys.md): Color types.
- [Image Attribute Keys](image-attribute-keys.md): Image Types
- [Filter Category Keys](filter-category-keys.md): Categories of filters.
- [Options for Applying a Filter](options-for-applying-a-filter.md): Options that control the application of a custom Core Image filter.
- [User Interface Control Options](user-interface-control-options.md): Sets of controls for various user scenarios.
- [User Interface Options](user-interface-options.md): Keys or values for the size of the input parameter controls for a filter view.
- [Filter Parameter Keys](filter-parameter-keys.md): Keys for input parameters to filters.
- [RAW Image Options](raw-image-options.md): Options for creating a [CIFilter](cifilter-swift.class.md) object from RAW image data.

### Deprecated

- [filterWithImageData:options:](cifilter-swift.class/init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [filterWithImageURL:options:](cifilter-swift.class/init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](cirawfilteroption.md): Deprecated.
- [serializedXMPFromFilters:inputImageExtent:](cifilter-swift.class/serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArrayFromSerializedXMP:inputImageExtent:error:](cifilter-swift.class/filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels](cifilter-swift.class/supportedrawcameramodels%28%29.md): Deprecated.

### Type methods

- [areaAlphaWeightedHistogramFilter](cifilter-swift.class/areaalphaweightedhistogram%28%29.md)
- [areaBoundsRedFilter](cifilter-swift.class/areaboundsred%28%29.md)
- [maximumScaleTransformFilter](cifilter-swift.class/maximumscaletransform%28%29.md)
- [toneMapHeadroomFilter](cifilter-swift.class/tonemapheadroom%28%29.md)

### Type Methods

- [areaAverageMaximumRedFilter](cifilter-swift.class/areaaveragemaximumred%28%29.md)
- [blurredRoundedRectangleGeneratorFilter](cifilter-swift.class/blurredroundedrectanglegenerator%28%29.md)
- [distanceGradientFromRedMaskFilter](cifilter-swift.class/distancegradientfromredmask%28%29.md)
- [filterWithCVPixelBuffer:properties:options:](cifilter-swift.class/init%28cvpixelbuffer_properties_options_%29-69695.md): Deprecated. Returns a CIFilter that will in turn return a properly processed CIImage as “outputImage”.
- [filterWithName:withInputParameters:](cifilter-swift.class/init%28name_parameters_%29.md): Creates a new filter of type ‘name’. The filter’s input parameters are set from the dictionary of key-value pairs. On OSX, any of the filter input parameters not specified in the dictionary will be undefined. On iOS, any of the filter input parameters not specified in the dictionary will be set to default values.
- [roundedQRCodeGeneratorFilter](cifilter-swift.class/roundedqrcodegenerator%28%29.md)
- [signedDistanceGradientFromRedMaskFilter](cifilter-swift.class/signeddistancegradientfromredmask%28%29.md)
- [systemToneMapFilter](cifilter-swift.class/systemtonemap%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIRAWFilter](cirawfilter.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filters

- [CIRAWFilter](cirawfilter.md): A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.
- [CIColor](cicolor.md): The Core Image class that defines a color object.
- [CIVector](civector.md): The Core Image class that defines a vector object.
