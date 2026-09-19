> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/isexposurepointofinterestsupported

# isExposurePointOfInterestSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether the device supports a point of interest for exposure.

## Declaration

```swift
var isExposurePointOfInterestSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Setting an exposure point of interest

- [exposurePointOfInterest](exposurepointofinterest.md): The point of interest for exposure.

# exposurePointOfInterestSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether the device supports a point of interest for exposure.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isExposurePointOfInterestSupported) BOOL exposurePointOfInterestSupported;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Setting an exposure point of interest

- [exposurePointOfInterest](exposurepointofinterest.md): The point of interest for exposure.
