> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/qualitylevel-swift.enum/fast

# DataScannerViewController.QualityLevel.fast

**Framework:** VisionKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A quality level that prioritizes recognition speed over accuracy.

## Declaration

```swift
case fast
```

## Mentioned In

- [Scanning data with the camera](../../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

This quality level may fail to recognize smaller text and barcodes.

## See Also

### Identifying quality levels

- [DataScannerViewController.QualityLevel.balanced](balanced.md): A quality level that’s between fast and accurate.
- [DataScannerViewController.QualityLevel.accurate](accurate.md): A quality level that prioritizes recognition accuracy over speed.
