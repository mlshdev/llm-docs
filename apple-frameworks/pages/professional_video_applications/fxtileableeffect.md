> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect)

# FxTileableEffect (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

The designated initializer for your plug-in for rendering only certain portions of the plug-in’s output, referred to as tiles.

## Declaration

```swift
protocol FxTileableEffect : NSObjectProtocol
```

## Parameters

- `apiManager`: An object that obtains the various API objects your plug-in needs for communicating with the host application.

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Migrating FxPlug 3 plug-ins to FxPlug 4](../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md)
- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Thread safety in plug-ins](../professional-video-applications/thread-safety-in-plug-ins.md)

<a id="overview"></a>

## Overview

Using this protocol, your plug-in can render select portions of its output, or tiles, to increase efficiency and to operate outside the host’s process. Your plug-in should saves a weak reference to the `apiManager` object to use in subsequent calls. The plug-in initializes its properties and instance variables and returns a pointer to `self`. If any part of initialization fails in an unrecoverable way, this method returns `nil`.

## Topics

### Setting up your plug-in

- [init(apiManager:)](fxtileableeffect/init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](proapiaccessing.md)
- [finishInitialSetup()](fxtileableeffect/finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [pluginInstanceAddedToDocument()](fxtileableeffect/plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
- [properties(\_:)](fxtileableeffect/properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

### Adding and setting parameters

- [addParameters()](fxtileableeffect/addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [class(forCustomParameterID:)](fxtileableeffect/class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [classes(forCustomParameterID:)](fxtileableeffect/classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
- [parameterChanged(\_:at:)](fxtileableeffect/parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.

### Determining input and output bounds

- [sourceTileRect(\_:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:at:)](fxtileableeffect/sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md): Calculate the input rectangle needed for the given image input and the output tile to be rendered.
- [destinationImageRect(\_:sourceImages:destinationImage:pluginState:at:)](fxtileableeffect/destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md): Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.
- [FxRectsAreEqual(\_:\_:)](fxrectsareequal%28____%29.md): Compares two rectangle structures and determines if they are equal.

### Rendering an output

- [pluginState(\_:at:quality:)](fxtileableeffect/pluginstate%28__at_quality_%29.md): Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.
- [scheduleInputs(\_:withPluginState:at:)](fxtileableeffect/scheduleinputs%28__withpluginstate_at_%29.md): Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.
- [renderDestinationImage(\_:sourceImages:pluginState:at:)](fxtileableeffect/renderdestinationimage%28__sourceimages_pluginstate_at_%29.md): Sends a request that the host wants your plug-in to do its rendering for a given output image tile.

### Data types

Data types defined in the FxPlug SDK that may not be class-specific.

- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxField](fxfield.md): Constants used to identify a field.
- [FxFieldOrder](fxfieldorder.md): Constants used to identify the field order of an image stream.
- [FxPoint2D](fxpoint2d.md): A 2D point representation.
- [FxPoint3D](fxpoint3d.md): A 3D point representation
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxRect](fxrect.md): A 2D axis-aligned rectangle with integer coordinates.
- [FxSize](fxsize.md): A structure to store width and height values.
- [FxDrawingCoordinates](fxdrawingcoordinates.md): Constants used to identify coordinate spaces.
- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.

### Constants

- [kFxRect_Empty](kfxrect_empty.md): An empty rectangle.
- [kFxRect_Infinite](kfxrect_infinite.md): An infinite rectangle.
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxPlugErrorDomain](fxplugerrordomain.md): The error domain for FxPlug-related errors.

### Initializers

- [init(APIManager:)](fxtileableeffect/init%28apimanager_%29-31e6q.md): Deprecated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Rendering

- [Rendering in FxPlug](../professional-video-applications/rendering-in-fxplug.md): Use Metal or other frameworks to render images with your FxPlug plug-in.
- [Communicating with the plug-in state](../professional-video-applications/communicating-with-the-plug-in-state.md): Prepare the necessary information, such as parameter values, for your FxPlug plug-in to render.
- [Working with tiled images](../professional-video-applications/working-with-tiled-images.md): Render only the necessary tiles of an image in your FxPlug plug-in to improve efficiency.
- [Optimizing FxPlug plug-ins](../professional-video-applications/optimizing-fxplug-plug-ins.md): Maintain consistent rendering at all resolutions and aspect ratios by using pixel transforms.

# FxTileableEffect (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

The designated initializer for your plug-in for rendering only certain portions of the plug-in’s output, referred to as tiles.

## Declaration

```objectivec
@protocol FxTileableEffect <NSObject>
```

## Parameters

- `apiManager`: An object that obtains the various API objects your plug-in needs for communicating with the host application.

## Mentioned In

- [Building an FxPlug plug-in manually](../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Migrating FxPlug 3 plug-ins to FxPlug 4](../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md)
- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Thread safety in plug-ins](../professional-video-applications/thread-safety-in-plug-ins.md)

<a id="overview"></a>

## Overview

Using this protocol, your plug-in can render select portions of its output, or tiles, to increase efficiency and to operate outside the host’s process. Your plug-in should saves a weak reference to the `apiManager` object to use in subsequent calls. The plug-in initializes its properties and instance variables and returns a pointer to `self`. If any part of initialization fails in an unrecoverable way, this method returns `nil`.

## Topics

### Setting up your plug-in

- [initWithAPIManager:](fxtileableeffect/init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](proapiaccessing.md)
- [finishInitialSetup:](fxtileableeffect/finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [pluginInstanceAddedToDocument](fxtileableeffect/plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
- [properties:error:](fxtileableeffect/properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

### Adding and setting parameters

- [addParametersWithError:](fxtileableeffect/addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [classForCustomParameterID:](fxtileableeffect/class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [classesForCustomParameterID:](fxtileableeffect/classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
- [parameterChanged:atTime:error:](fxtileableeffect/parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.

### Determining input and output bounds

- [sourceTileRect:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:atTime:error:](fxtileableeffect/sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md): Calculate the input rectangle needed for the given image input and the output tile to be rendered.
- [destinationImageRect:sourceImages:destinationImage:pluginState:atTime:error:](fxtileableeffect/destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md): Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.
- [FxRectsAreEqual](fxrectsareequal%28____%29.md): Compares two rectangle structures and determines if they are equal.

### Rendering an output

- [pluginState:atTime:quality:error:](fxtileableeffect/pluginstate%28__at_quality_%29.md): Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.
- [scheduleInputs:withPluginState:atTime:error:](fxtileableeffect/scheduleinputs%28__withpluginstate_at_%29.md): Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.
- [renderDestinationImage:sourceImages:pluginState:atTime:error:](fxtileableeffect/renderdestinationimage%28__sourceimages_pluginstate_at_%29.md): Sends a request that the host wants your plug-in to do its rendering for a given output image tile.

### Data types

Data types defined in the FxPlug SDK that may not be class-specific.

- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxField](fxfield.md): Constants used to identify a field.
- [FxFieldOrder](fxfieldorder.md): Constants used to identify the field order of an image stream.
- [FxPoint2D](fxpoint2d.md): A 2D point representation.
- [FxPoint3D](fxpoint3d.md): A 3D point representation
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxRect](fxrect.md): A 2D axis-aligned rectangle with integer coordinates.
- [FxSize](fxsize.md): A structure to store width and height values.
- [FxDrawingCoordinates](fxdrawingcoordinates.md): Constants used to identify coordinate spaces.
- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.

### Constants

- [kFxRect_Empty](kfxrect_empty.md): An empty rectangle.
- [kFxRect_Infinite](kfxrect_infinite.md): An infinite rectangle.
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxPlugErrorDomain](fxplugerrordomain.md): The error domain for FxPlug-related errors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Rendering

- [Rendering in FxPlug](../professional-video-applications/rendering-in-fxplug.md): Use Metal or other frameworks to render images with your FxPlug plug-in.
- [Communicating with the plug-in state](../professional-video-applications/communicating-with-the-plug-in-state.md): Prepare the necessary information, such as parameter values, for your FxPlug plug-in to render.
- [Working with tiled images](../professional-video-applications/working-with-tiled-images.md): Render only the necessary tiles of an image in your FxPlug plug-in to improve efficiency.
- [Optimizing FxPlug plug-ins](../professional-video-applications/optimizing-fxplug-plug-ins.md): Maintain consistent rendering at all resolutions and aspect ratios by using pixel transforms.
