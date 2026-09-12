> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontroller/delegate](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontroller/delegate)

# delegate (Swift)

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to be notified when the user saves or cancels the document scanner.

## Declaration

```swift
weak var delegate: (any VNDocumentCameraViewControllerDelegate)? { get set }
```

<a id="Overview"></a>

## Overview

The delegate receives one of the following three calls:

- [documentCameraViewController(\_:didFinishWith:)](../vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfinishwith_%29.md) when the camera successfully completes a scan.
- [documentCameraViewControllerDidCancel(\_:)](../vndocumentcameraviewcontrollerdelegate/documentcameraviewcontrollerdidcancel%28__%29.md) when the user cancels out of the document camera interface.
- [documentCameraViewController(\_:didFailWithError:)](../vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfailwitherror_%29.md) when the document scan fails or is unable to capture a photo.

Your app is responsible for dismissing the document camera in all delegate methods.

## See Also

### Supporting the document camera

- [isSupported](issupported.md): A Boolean variable that indicates whether or not the current device supports document scanning.

# delegate (Objective-C)

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to be notified when the user saves or cancels the document scanner.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<VNDocumentCameraViewControllerDelegate> delegate;
```

<a id="Overview"></a>

## Overview

The delegate receives one of the following three calls:

- [documentCameraViewController:didFinishWithScan:](../vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfinishwith_%29.md) when the camera successfully completes a scan.
- [documentCameraViewControllerDidCancel:](../vndocumentcameraviewcontrollerdelegate/documentcameraviewcontrollerdidcancel%28__%29.md) when the user cancels out of the document camera interface.
- [documentCameraViewController:didFailWithError:](../vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller%28__didfailwitherror_%29.md) when the document scan fails or is unable to capture a photo.

Your app is responsible for dismissing the document camera in all delegate methods.

## See Also

### Supporting the document camera

- [supported](issupported.md): A Boolean variable that indicates whether or not the current device supports document scanning.
