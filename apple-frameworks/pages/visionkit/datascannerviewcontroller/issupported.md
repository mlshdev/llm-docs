> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/issupported](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/issupported)

# isSupported

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the device supports data scanning.

## Declaration

```swift
@MainActor class var isSupported: Bool { get }
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

For this property to be `true`, the device must have the A12 Bionic chip or later. This property is `false` for apps running in visionOS.

> **Important**

> If your app requires data scanning for its core functionality, you can make your app available only on devices that support data scanning. Add the [UIRequiredDeviceCapabilities](../../bundleresources/information-property-list/uirequireddevicecapabilities.md) key to your app’s information property list and include the `iphone-ipad-minimum-performance-a12` subkey in the array of device capabilities.

## See Also

### Handling availability

- [isAvailable](isavailable.md): A Boolean value that indicates whether a person grants your app access to the camera and doesn’t have any restrictions to using the camera.
- [supportedTextRecognitionLanguages](supportedtextrecognitionlanguages.md): The identifiers for the languages that the data scanner recognizes.
- [DataScannerViewController.ScanningUnavailable](scanningunavailable.md): The possible reasons the data scanner is unavailable.
