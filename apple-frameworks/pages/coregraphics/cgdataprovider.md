> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider](https://developer.apple.com/documentation/coregraphics/cgdataprovider)

# CGDataProvider (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.

## Declaration

```swift
class CGDataProvider
```

<a id="overview"></a>

## Overview

Data provider objects abstract the data-access task and eliminate the need for applications to manage data through a raw memory buffer.

For information on how to use CGDataProvider functions, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) Programming Guide.

See also [CGDataConsumer](cgdataconsumer.md).

## Topics

### Creating Sequential-Access Data Providers

- [init(sequentialInfo:callbacks:)](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(data:)](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [init(url:)](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [init(filename:)](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).

### Getting Data from a Data Provider

- [data](cgdataprovider/data.md): Returns a copy of the provider’s data.

### Working with Core Foundation Types

- [typeID](cgdataprovider/typeid.md): Returns the Core Foundation type identifier for data providers.

### Instance Properties

- [info](cgdataprovider/info.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Utility and Support Classes

- [CGDataConsumer](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGShading](cgshading.md): A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.
- [CGGradient](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGFunction](cgfunction.md): A general facility for defining and using callback functions.
- [CGPattern](cgpattern.md): A 2D pattern to be used for drawing graphics paths.

# CGDataProviderRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.

## Declaration

```objectivec
typedef struct CGDataProvider * CGDataProviderRef;
```

<a id="overview"></a>

## Overview

Data provider objects abstract the data-access task and eliminate the need for applications to manage data through a raw memory buffer.

For information on how to use CGDataProvider functions, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) Programming Guide.

See also [CGDataConsumerRef](cgdataconsumer.md).

## Topics

### Creating Sequential-Access Data Providers

- [CGDataProviderCreateSequential](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithCFData](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [CGDataProviderCreateWithURL](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [CGDataProviderCreateWithFilename](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).

### Retaining and Releasing Data Providers

- [CGDataProviderRelease](cgdataproviderrelease.md): Decrements the retain count of a data provider.
- [CGDataProviderRetain](cgdataproviderretain.md): Increments the retain count of a data provider.

### Getting Data from a Data Provider

- [CGDataProviderCopyData](cgdataprovider/data.md): Returns a copy of the provider’s data.

### Working with Core Foundation Types

- [CGDataProviderGetTypeID](cgdataprovider/typeid.md): Returns the Core Foundation type identifier for data providers.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
