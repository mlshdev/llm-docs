> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor)

# MAFlashingLightsProcessor (Swift)

**Framework:** Media Accessibility  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class that processes a framebuffer object to detect and dim sequences of flashing lights.

## Declaration

```swift
class MAFlashingLightsProcessor
```

<a id="overview"></a>

## Overview

A device with the Dim Flashing Lights setting on automatically dims the brightness of flashing effect sequences when it detects them in video content. If your app performs custom video drawing instead of using [AVFoundation](../avfoundation.md) APIs, you can use the [MAFlashingLightsProcessor](maflashinglightsprocessor.md) class to detect and mitigate sequences of flashing effects in your video content.

The following example shows how you might incorporate [MAFlashingLightsProcessor](maflashinglightsprocessor.md) into code that uses [Core Video](../corevideo.md) APIs.

```swift
import MediaAccessibility
import CoreVideo
import OSLog

private let processor = MAFlashingLightsProcessor()
private let logger = Logger()

func readVideoBuffer() {
    
    // Confirm that the Dim Flashing Lights setting is on before processing video.
    if !MADimFlashingLightsEnabled() { return }

    // Retrieve the CVPixelBuffer from your video content.
    // ...
    
    // Get the IOSurface that backs the pixel buffer.
    guard let inSurface = CVPixelBufferGetIOSurface(pixelBuffer)?.takeUnretainedValue() else {
        logger.debug("Can't initialize input surface.")
        return
    }
    
    // Use the properties of the pixel buffer to initialize an output IOSurface.
    guard var outSurface = IOSurface(properties: [
        .width: CVPixelBufferGetWidth(pixelBuffer),
        .height: CVPixelBufferGetHeight(pixelBuffer),
        .bytesPerRow: CVPixelBufferGetWidth(pixelBuffer) * 4,
        .bytesPerElement: 4,
        .pixelFormat: CVPixelBufferGetPixelFormatType(pixelBuffer)
    ]) as IOSurfaceRef? else {
        logger.debug("Can't initialize output surface.")
        return
    }
    
    // Verify that the input IOSurface is compatible with the flashing lights processor.
    if processor.canProcessSurface(inSurface) {
        
        // Analyze input IOSurface for flashing light sequences
        // and write mitigated content to output IOSurface.
        let result = processor.processSurface(inSurface, outSurface: &outSurface,
                                              timestamp: CFAbsoluteTimeGetCurrent())
        
        if result.surfaceProcessed {
            logger.debug("""
            Processed content with flashing lights intensity \(result.intensityLevel)
            and mitigated output with mitigation level \(result.mitigationLevel).
            """)
            
            // Convert the mitigated output surface back to CVPixelBuffer
            // and draw the video content.
            // ...
            
        } else {
            logger.debug("Can't process input surface.")
        }
    }
}
```

For more information, see [Flashing lights](flashing-lights.md).

## Topics

### Checking compatibility

- [canProcessSurface(\_:)](maflashinglightsprocessor/canprocesssurface%28__%29.md): Returns a Boolean value that indicates whether the flashing lights processor can process the content in the surface for sequences of flashing lights.

### Processing video content

- [processSurface(\_:outSurface:timestamp:options:)](maflashinglightsprocessor/processsurface%28__outsurface_timestamp_options_%29.md): Processes a surface by analyzing pixels for sequences of flashing lights and mitigates them by dimming the content.
- [MAFlashingLightsProcessor.Result](maflashinglightsprocessor/result.md): An object that reports the result of the flashing lights processor.
- [MAFlashingLightsProcessor.OptionKey](maflashinglightsprocessor/optionkey.md): Options for the flashing lights processor.

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

## See Also

### Dim flashing lights

- [Responding to changes in the flashing lights setting](responding-to-changes-in-the-flashing-lights-setting.md): Adjust your UI when a person chooses to dim flashing lights on their Apple device.
- [MADimFlashingLightsEnabled()](madimflashinglightsenabled%28%29.md): Returns a Boolean value that indicates whether the flashing lights setting is enabled on the device.
- [kMADimFlashingLightsChangedNotification](kmadimflashinglightschangednotification.md): A notification that posts when a person changes the flashing lights setting on the device.

# MAFlashingLightsProcessor (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class that processes a framebuffer object to detect and dim sequences of flashing lights.

## Declaration

```objectivec
@interface MAFlashingLightsProcessor : NSObject
```

<a id="overview"></a>

## Overview

A device with the Dim Flashing Lights setting on automatically dims the brightness of flashing effect sequences when it detects them in video content. If your app performs custom video drawing instead of using [AVFoundation](../avfoundation.md) APIs, you can use the [MAFlashingLightsProcessor](maflashinglightsprocessor.md) class to detect and mitigate sequences of flashing effects in your video content.

The following example shows how you might incorporate [MAFlashingLightsProcessor](maflashinglightsprocessor.md) into code that uses [Core Video](../corevideo.md) APIs.

```swift
import MediaAccessibility
import CoreVideo
import OSLog

private let processor = MAFlashingLightsProcessor()
private let logger = Logger()

func readVideoBuffer() {
    
    // Confirm that the Dim Flashing Lights setting is on before processing video.
    if !MADimFlashingLightsEnabled() { return }

    // Retrieve the CVPixelBuffer from your video content.
    // ...
    
    // Get the IOSurface that backs the pixel buffer.
    guard let inSurface = CVPixelBufferGetIOSurface(pixelBuffer)?.takeUnretainedValue() else {
        logger.debug("Can't initialize input surface.")
        return
    }
    
    // Use the properties of the pixel buffer to initialize an output IOSurface.
    guard var outSurface = IOSurface(properties: [
        .width: CVPixelBufferGetWidth(pixelBuffer),
        .height: CVPixelBufferGetHeight(pixelBuffer),
        .bytesPerRow: CVPixelBufferGetWidth(pixelBuffer) * 4,
        .bytesPerElement: 4,
        .pixelFormat: CVPixelBufferGetPixelFormatType(pixelBuffer)
    ]) as IOSurfaceRef? else {
        logger.debug("Can't initialize output surface.")
        return
    }
    
    // Verify that the input IOSurface is compatible with the flashing lights processor.
    if processor.canProcessSurface(inSurface) {
        
        // Analyze input IOSurface for flashing light sequences
        // and write mitigated content to output IOSurface.
        let result = processor.processSurface(inSurface, outSurface: &outSurface,
                                              timestamp: CFAbsoluteTimeGetCurrent())
        
        if result.surfaceProcessed {
            logger.debug("""
            Processed content with flashing lights intensity \(result.intensityLevel)
            and mitigated output with mitigation level \(result.mitigationLevel).
            """)
            
            // Convert the mitigated output surface back to CVPixelBuffer
            // and draw the video content.
            // ...
            
        } else {
            logger.debug("Can't process input surface.")
        }
    }
}
```

For more information, see [Flashing lights](flashing-lights.md).

## Topics

### Checking compatibility

- [canProcessSurface:](maflashinglightsprocessor/canprocesssurface%28__%29.md): Returns a Boolean value that indicates whether the flashing lights processor can process the content in the surface for sequences of flashing lights.

### Processing video content

- [processSurface:outSurface:timestamp:options:](maflashinglightsprocessor/processsurface_outsurface_timestamp_options_.md): Processes a surface by analyzing pixels for sequences of flashing lights and mitigates them by dimming the content.
- [MAFlashingLightsProcessorResult](maflashinglightsprocessorresult.md): An object that reports the result of the flashing lights processor.
- [MAFlashingLightsProcessorOptionKey](maflashinglightsprocessor/optionkey.md): Options for the flashing lights processor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Dim flashing lights

- [MADimFlashingLightsEnabled](madimflashinglightsenabled%28%29.md): Returns a Boolean value that indicates whether the flashing lights setting is enabled on the device.
- [kMADimFlashingLightsChangedNotification](kmadimflashinglightschangednotification.md): A notification that posts when a person changes the flashing lights setting on the device.
