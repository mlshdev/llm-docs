> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/recommendedlensaperturestops

# recommendedLensApertureStops

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

A sorted array of recommended values for the [lensAperture](../avcapturedevice/lensaperture.md) property.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * recommendedLensApertureStops;
```

<a id="discussion"></a>

## Discussion

If this array contains a single item, the aperture is fixed at that value and cannot be changed. If this array contains multiple items, the first will be the minimum recommended 𝑓-stop and the last will be the maximum recommended 𝑓-stop.

Using values from this list may provide optimal calibration and lens characteristics.
