> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_pixeltransferproperties](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_pixeltransferproperties)

# kVTCompressionPropertyKey_PixelTransferProperties (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Properties for configuring a pixel transfer session.

## Declaration

```swift
let kVTCompressionPropertyKey_PixelTransferProperties: CFString
```

<a id="discussion"></a>

## Discussion

The properties for configuring a [VTPixelTransferSession](vtpixeltransfersession-api-collection.md) to transfer source frames from the client’s image buffers to the video encoder’s image buffers, if necessary.

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionary](../corefoundation/cfdictionary.md) of properties to configure a [VTPixelTransferSession](vtpixeltransfersession-api-collection.md). Setting this property alone does not necessarily guarantee that a [VTPixelTransferSession](vtpixeltransfersession-api-collection.md) will be created.

# kVTCompressionPropertyKey_PixelTransferProperties (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Properties for configuring a pixel transfer session.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_PixelTransferProperties;
```

<a id="discussion"></a>

## Discussion

The properties for configuring a [VTPixelTransferSession](vtpixeltransfersession-api-collection.md) to transfer source frames from the client’s image buffers to the video encoder’s image buffers, if necessary.

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) of properties to configure a [VTPixelTransferSession](vtpixeltransfersession-api-collection.md). Setting this property alone does not necessarily guarantee that a [VTPixelTransferSession](vtpixeltransfersession-api-collection.md) will be created.
