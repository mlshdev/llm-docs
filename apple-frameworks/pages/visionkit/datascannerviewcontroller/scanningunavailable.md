> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/scanningunavailable](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/scanningunavailable)

# DataScannerViewController.ScanningUnavailable

**Framework:** VisionKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The possible reasons the data scanner is unavailable.

## Declaration

```swift
enum ScanningUnavailable
```

## Topics

### Unavailable errors

- [DataScannerViewController.ScanningUnavailable.unsupported](scanningunavailable/unsupported.md): The data scanner isn’t supported on this device.
- [DataScannerViewController.ScanningUnavailable.cameraRestricted](scanningunavailable/camerarestricted.md): The data scanner isn’t available due to user restrictions on the use of the camera.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [dataScanner(\_:becameUnavailableWithError:)](../datascannerviewcontrollerdelegate/datascanner%28__becameunavailablewitherror_%29.md): Responds when the data scanner becomes unavailable and stops scanning.

### Handling availability

- [isSupported](issupported.md): A Boolean value that indicates whether the device supports data scanning.
- [isAvailable](isavailable.md): A Boolean value that indicates whether a person grants your app access to the camera and doesn’t have any restrictions to using the camera.
- [supportedTextRecognitionLanguages](supportedtextrecognitionlanguages.md): The identifiers for the languages that the data scanner recognizes.
