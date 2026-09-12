> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontroller](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontroller)

# VNDocumentCameraViewController (Swift)

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that presents UI for a camera pass-through that helps people scan physical documents.

## Declaration

```swift
class VNDocumentCameraViewController
```

<a id="Overview"></a>

## Overview

This class enables a person to scan a physical document, page by page, by tapping a camera interface in the controller’s view. The results of a scan include images, by page number. With the collection of scanned images, your app can create a digital version of the physical document and export the scanned images to PDF.

<a id="Present-a-document-scanning-view-controller-in-Swift"></a>

## Present a document scanning view controller in Swift

The following Swift code presents the document scanning object and adds it to your view controller hierarchy:

```swift
let documentCameraViewController = VNDocumentCameraViewController()
documentCameraViewController.delegate = self
present(documentCameraViewController, animated: true)
```

<a id="Present-a-document-scanning-view-controller-in-Objective-C"></a>

## Present a document scanning view controller in Objective-C

The following Objective-C code presents the document scanning object and adds it to your view controller hierarchy:

```objc
VNDocumentCameraViewController* documentCameraViewController = [[VNDocumentCameraViewController alloc] init];
documentCameraViewController.delegate = self;
[self presentViewController:documentCameraViewController animated:YES completion:nil];
```

## Topics

### Supporting the document camera

- [delegate](vndocumentcameraviewcontroller/delegate.md): The delegate to be notified when the user saves or cancels the document scanner.
- [isSupported](vndocumentcameraviewcontroller/issupported.md): A Boolean variable that indicates whether or not the current device supports document scanning.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Document scanning through the camera

- [Structuring recognized text on a document](structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNDocumentCameraViewControllerDelegate](vndocumentcameraviewcontrollerdelegate.md): A delegate protocol through which the document camera returns its scanned results.
- [VNDocumentCameraScan](vndocumentcamerascan.md): A single document scanned in the document camera.

# VNDocumentCameraViewController (Objective-C)

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that presents UI for a camera pass-through that helps people scan physical documents.

## Declaration

```objectivec
@interface VNDocumentCameraViewController : UIViewController
```

<a id="Overview"></a>

## Overview

This class enables a person to scan a physical document, page by page, by tapping a camera interface in the controller’s view. The results of a scan include images, by page number. With the collection of scanned images, your app can create a digital version of the physical document and export the scanned images to PDF.

<a id="Present-a-document-scanning-view-controller-in-Swift"></a>

## Present a document scanning view controller in Swift

The following Swift code presents the document scanning object and adds it to your view controller hierarchy:

```swift
let documentCameraViewController = VNDocumentCameraViewController()
documentCameraViewController.delegate = self
present(documentCameraViewController, animated: true)
```

<a id="Present-a-document-scanning-view-controller-in-Objective-C"></a>

## Present a document scanning view controller in Objective-C

The following Objective-C code presents the document scanning object and adds it to your view controller hierarchy:

```objc
VNDocumentCameraViewController* documentCameraViewController = [[VNDocumentCameraViewController alloc] init];
documentCameraViewController.delegate = self;
[self presentViewController:documentCameraViewController animated:YES completion:nil];
```

## Topics

### Supporting the document camera

- [delegate](vndocumentcameraviewcontroller/delegate.md): The delegate to be notified when the user saves or cancels the document scanner.
- [supported](vndocumentcameraviewcontroller/issupported.md): A Boolean variable that indicates whether or not the current device supports document scanning.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Document scanning through the camera

- [Structuring recognized text on a document](structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNDocumentCameraViewControllerDelegate](vndocumentcameraviewcontrollerdelegate.md): A delegate protocol through which the document camera returns its scanned results.
- [VNDocumentCameraScan](vndocumentcamerascan.md): A single document scanned in the document camera.
