> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontrollerdelegate](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontrollerdelegate)

# VNDocumentCameraViewControllerDelegate (Swift)

**Framework:** VisionKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A delegate protocol through which the document camera returns its scanned results.

## Declaration

```swift
protocol VNDocumentCameraViewControllerDelegate : NSObjectProtocol
```

<a id="Overview"></a>

## Overview

Your app is responsible for dismissing the document camera in all delegate callback methods.

## Topics

### Determining scan results

- [documentCameraViewController(\_:didFinishWith:)](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user successfully saved a scanned document from the document camera.
- [documentCameraViewControllerDidCancel(\_:)](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled out of the document scanner camera.
- [documentCameraViewController(\_:didFailWithError:)](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfailwitherror_%29.md): Tells the delegate that document scanning failed while the camera view controller was active.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Document scanning through the camera

- [Structuring recognized text on a document](structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNDocumentCameraViewController](vndocumentcameraviewcontroller.md): An object that presents UI for a camera pass-through that helps people scan physical documents.
- [VNDocumentCameraScan](vndocumentcamerascan.md): A single document scanned in the document camera.

# VNDocumentCameraViewControllerDelegate (Objective-C)

**Framework:** VisionKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A delegate protocol through which the document camera returns its scanned results.

## Declaration

```objectivec
@protocol VNDocumentCameraViewControllerDelegate <NSObject>
```

<a id="Overview"></a>

## Overview

Your app is responsible for dismissing the document camera in all delegate callback methods.

## Topics

### Determining scan results

- [documentCameraViewController:didFinishWithScan:](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user successfully saved a scanned document from the document camera.
- [documentCameraViewControllerDidCancel:](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled out of the document scanner camera.
- [documentCameraViewController:didFailWithError:](vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfailwitherror_%29.md): Tells the delegate that document scanning failed while the camera view controller was active.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Document scanning through the camera

- [Structuring recognized text on a document](structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNDocumentCameraViewController](vndocumentcameraviewcontroller.md): An object that presents UI for a camera pass-through that helps people scan physical documents.
- [VNDocumentCameraScan](vndocumentcamerascan.md): A single document scanned in the document camera.
