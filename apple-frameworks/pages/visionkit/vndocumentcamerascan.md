> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcamerascan](https://developer.apple.com/documentation/visionkit/vndocumentcamerascan)

# VNDocumentCameraScan (Swift)

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A single document scanned in the document camera.

## Declaration

```swift
class VNDocumentCameraScan
```

<a id="Overview"></a>

## Overview

When the document camera scans a document, it returns the resulting information in this format, through the delegate method [documentCameraViewController(\_:didFinishWith:)](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfinishwith_%29.md).

## Topics

### Reading the scanned document

- [title](vndocumentcamerascan/title.md): The title of the scanned document.
- [pageCount](vndocumentcamerascan/pagecount.md): The number of pages in the scanned document.
- [imageOfPage(at:)](vndocumentcamerascan/imageofpage%28at_%29.md): Requests the image of a page at a specified index.

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

### Document scanning through the camera

- [Structuring recognized text on a document](structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNDocumentCameraViewController](vndocumentcameraviewcontroller.md): An object that presents UI for a camera pass-through that helps people scan physical documents.
- [VNDocumentCameraViewControllerDelegate](vndocumentcameraviewcontrollerdelegate.md): A delegate protocol through which the document camera returns its scanned results.

# VNDocumentCameraScan (Objective-C)

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A single document scanned in the document camera.

## Declaration

```objectivec
@interface VNDocumentCameraScan : NSObject
```

<a id="Overview"></a>

## Overview

When the document camera scans a document, it returns the resulting information in this format, through the delegate method [documentCameraViewController:didFinishWithScan:](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfinishwith_%29.md).

## Topics

### Reading the scanned document

- [title](vndocumentcamerascan/title.md): The title of the scanned document.
- [pageCount](vndocumentcamerascan/pagecount.md): The number of pages in the scanned document.
- [imageOfPageAtIndex:](vndocumentcamerascan/imageofpage%28at_%29.md): Requests the image of a page at a specified index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Document scanning through the camera

- [Structuring recognized text on a document](structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNDocumentCameraViewController](vndocumentcameraviewcontroller.md): An object that presents UI for a camera pass-through that helps people scan physical documents.
- [VNDocumentCameraViewControllerDelegate](vndocumentcameraviewcontrollerdelegate.md): A delegate protocol through which the document camera returns its scanned results.
