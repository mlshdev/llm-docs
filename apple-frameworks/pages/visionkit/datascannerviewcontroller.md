> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller)

# DataScannerViewController

**Framework:** VisionKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

An object that scans the camera live video for text, data in text, and machine-readable codes.

## Declaration

```swift
@MainActor @objc class DataScannerViewController
```

## Mentioned In

- [Scanning data with the camera](scanning-data-with-the-camera.md)

<a id="overview"></a>

## Overview

Use a `DataScannerViewController` object to get input from physical objects that appear in the camera’s live video, such as printed text and QR codes on packages.

Create a data scanner by passing parameters that configure the interface to the [init(recognizedDataTypes:qualityLevel:recognizesMultipleItems:isHighFrameRateTrackingEnabled:isPinchToZoomEnabled:isGuidanceEnabled:isHighlightingEnabled:)](datascannerviewcontroller/init%28recognizeddatatypes_qualitylevel_recognizesmultipleitems_ishighframeratetrackingenabled_ispinchtozoomenabled_isguidanceenabled_ishighlightingenabled_%29.md) initializer. Then set its delegate to an object in your app that implements the [DataScannerViewControllerDelegate](datascannerviewcontrollerdelegate.md) protocol.

Before presenting the view controller, check whether the data scanner is available using the [isSupported](datascannerviewcontroller/issupported.md) and [isAvailable](datascannerviewcontroller/isavailable.md) properties. Before you can use the data scanner, you must provide a reason for using the camera (add the [NSCameraUsageDescription](../bundleresources/information-property-list/nscamerausagedescription.md) key to the information property list), and a person must agree when the system dialog first appears.

Then begin data scanning by invoking the [startScanning()](datascannerviewcontroller/startscanning%28%29.md) method and implement the [dataScanner(\_:didTapOn:)](datascannerviewcontrollerdelegate/datascanner%28__didtapon_%29.md) and similar delegate methods to handle user actions. Use the [RecognizedItem](recognizeditem.md) parameter passed to these methods to perform data-specific actions. For example, if the item is a QR code, perform an action with its payload string, such as opening a URL in a browser, or calling a phone number.

Alternatively, you can track items that appear in the live video using the asynchronous [recognizedItems](datascannerviewcontroller/recognizeditems.md) array.

## Topics

### Handling availability

- [isSupported](datascannerviewcontroller/issupported.md): A Boolean value that indicates whether the device supports data scanning.
- [isAvailable](datascannerviewcontroller/isavailable.md): A Boolean value that indicates whether a person grants your app access to the camera and doesn’t have any restrictions to using the camera.
- [supportedTextRecognitionLanguages](datascannerviewcontroller/supportedtextrecognitionlanguages.md): The identifiers for the languages that the data scanner recognizes.
- [DataScannerViewController.ScanningUnavailable](datascannerviewcontroller/scanningunavailable.md): The possible reasons the data scanner is unavailable.

### Creating data scanners

- [init(recognizedDataTypes:qualityLevel:recognizesMultipleItems:isHighFrameRateTrackingEnabled:isPinchToZoomEnabled:isGuidanceEnabled:isHighlightingEnabled:)](datascannerviewcontroller/init%28recognizeddatatypes_qualitylevel_recognizesmultipleitems_ishighframeratetrackingenabled_ispinchtozoomenabled_isguidanceenabled_ishighlightingenabled_%29.md): Creates a scanner for finding data, such as text and machine-readable codes, in the camera’s live video.
- [recognizedDataTypes](datascannerviewcontroller/recognizeddatatypes.md): The types of data that the data scanner identifies in the live video.
- [DataScannerViewController.RecognizedDataType](datascannerviewcontroller/recognizeddatatype.md): A type of data that the scanner recognizes.

### Configuring data scanners

- [delegate](datascannerviewcontroller/delegate.md): The delegate that handles user interaction with items recognized by the data scanner.
- [qualityLevel](datascannerviewcontroller/qualitylevel-swift.property.md): The resolution that the scanner uses to find data.
- [DataScannerViewController.QualityLevel](datascannerviewcontroller/qualitylevel-swift.enum.md): The possible quality levels that the scanner uses to find data.
- [recognizesMultipleItems](datascannerviewcontroller/recognizesmultipleitems.md): A Boolean value that indicates whether the scanner should identify all items in the live video.
- [isHighFrameRateTrackingEnabled](datascannerviewcontroller/ishighframeratetrackingenabled.md): A Boolean value that determines the frequency at which the scanner updates the geometry of recognized items.
- [isPinchToZoomEnabled](datascannerviewcontroller/ispinchtozoomenabled.md): A Boolean value that indicates whether people can use a two-finger pinch-to-zoom gesture.
- [isGuidanceEnabled](datascannerviewcontroller/isguidanceenabled.md): A Boolean value that indicates whether the scanner provides help to a person when selecting items.
- [isHighlightingEnabled](datascannerviewcontroller/ishighlightingenabled.md): A Boolean value that indicates whether the scanner displays highlights around recognized items.

### Zooming

- [zoomFactor](datascannerviewcontroller/zoomfactor.md): The zoom factor for the live video in the camera.
- [minZoomFactor](datascannerviewcontroller/minzoomfactor.md): The minimum zoom factor that the camera supports.
- [maxZoomFactor](datascannerviewcontroller/maxzoomfactor.md): The maximum zoom factor that the camera supports.

### Scanning and recognizing items

- [startScanning()](datascannerviewcontroller/startscanning%28%29.md): Starts scanning the camera’s live video for data.
- [stopScanning()](datascannerviewcontroller/stopscanning%28%29.md): Stops scanning the camera’s live video for data.
- [isScanning](datascannerviewcontroller/isscanning.md): A Boolean value that indicates whether the data scanner is actively looking for items.
- [recognizedItems](datascannerviewcontroller/recognizeditems.md): An asynchronous array of items that the data scanner currently recognizes in the camera’s live video.

### Capturing photos

- [capturePhoto()](datascannerviewcontroller/capturephoto%28%29.md): Captures a high-resolution photo of the camera’s live video.

### Customizing the interface

- [overlayContainerView](datascannerviewcontroller/overlaycontainerview.md): A view that the data scanner displays over its view without interfering with the Live Text interface.
- [regionOfInterest](datascannerviewcontroller/regionofinterest.md): The area of the live video in view coordinates that the data scanner searches for items.

### Responding to view controller events

- [loadView()](datascannerviewcontroller/loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](datascannerviewcontroller/viewdidload%28%29.md): Performs some action after the system loads the view into memory.
- [viewWillAppear(\_:)](datascannerviewcontroller/viewwillappear%28__%29.md): Performs some action before the view appears.
- [viewDidDisappear(\_:)](datascannerviewcontroller/viewdiddisappear%28__%29.md): Performs some action after the view disappears.
- [removeFromParent()](datascannerviewcontroller/removefromparent%28%29.md): Removes the view controller from its parent.

### Enumerations

- [DataScannerViewController.TextContentType](datascannerviewcontroller/textcontenttype.md): Types of text that a data scanner recognizes.

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

### Barcode and text scanning through the camera

- [Scanning data with the camera](scanning-data-with-the-camera.md): Enable Live Text data scanning of text and codes that appear in the camera’s viewfinder.
- [DataScannerViewControllerDelegate](datascannerviewcontrollerdelegate.md): A delegate object that responds when people interact with items that the data scanner recognizes.
- [RecognizedItem](recognizeditem.md): An item that the data scanner recognizes in the camera’s live video.
