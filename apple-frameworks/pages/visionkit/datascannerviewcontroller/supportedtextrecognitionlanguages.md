> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/supportedtextrecognitionlanguages](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/supportedtextrecognitionlanguages)

# supportedTextRecognitionLanguages

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The identifiers for the languages that the data scanner recognizes.

## Declaration

```swift
@MainActor class var supportedTextRecognitionLanguages: [String] { get }
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

## See Also

### Handling availability

- [isSupported](issupported.md): A Boolean value that indicates whether the device supports data scanning.
- [isAvailable](isavailable.md): A Boolean value that indicates whether a person grants your app access to the camera and doesn’t have any restrictions to using the camera.
- [DataScannerViewController.ScanningUnavailable](scanningunavailable.md): The possible reasons the data scanner is unavailable.
