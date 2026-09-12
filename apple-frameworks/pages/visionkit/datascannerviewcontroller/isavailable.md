> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/isavailable](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/isavailable)

# isAvailable

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether a person grants your app access to the camera and doesn’t have any restrictions to using the camera.

## Declaration

```swift
@MainActor class var isAvailable: Bool { get }
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

For example, this property may be `false` if a person has Screen Time restrictions.

## See Also

### Handling availability

- [isSupported](issupported.md): A Boolean value that indicates whether the device supports data scanning.
- [supportedTextRecognitionLanguages](supportedtextrecognitionlanguages.md): The identifiers for the languages that the data scanner recognizes.
- [DataScannerViewController.ScanningUnavailable](scanningunavailable.md): The possible reasons the data scanner is unavailable.
