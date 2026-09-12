> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectbarcodesrequest/results](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest/results)

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The results of a barcode detection request.

## Declaration

```swift
var results: [VNBarcodeObservation]? { get }
```

## See Also

### Accessing the Results

- [VNBarcodeObservation](../vnbarcodeobservation.md): An object that represents barcode information that an image analysis request detects.

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The results of a barcode detection request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNBarcodeObservation *> * results;
```

## See Also

### Accessing the Results

- [VNBarcodeObservation](../vnbarcodeobservation.md): An object that represents barcode information that an image analysis request detects.
