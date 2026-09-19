> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/scanningunavailable/unsupported

# DataScannerViewController.ScanningUnavailable.unsupported

**Framework:** VisionKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The data scanner isn’t supported on this device.

## Declaration

```swift
case unsupported
```

<a id="discussion"></a>

## Discussion

The device must have the Neural Engine to perform data scanning.

## See Also

### Unavailable errors

- [DataScannerViewController.ScanningUnavailable.cameraRestricted](camerarestricted.md): The data scanner isn’t available due to user restrictions on the use of the camera.
