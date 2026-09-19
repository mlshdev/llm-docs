> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder/userdefinedancillarydatasizeremaining

# userDefinedAncillaryDataSizeRemaining (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Allows users to track how much data in bytes can be added to the userDefinedAncillaryData.

## Declaration

```swift
var userDefinedAncillaryDataSizeRemaining: Int16 { get }
```

<a id="discussion"></a>

## Discussion

Using SMPTE 291 and SMPTE RDD 18 standards for ancillary data, this property specifies max size in bytes for the user defined portion of that data

# userDefinedAncillaryDataSizeRemaining (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Allows users to track how much data in bytes can be added to the userDefinedAncillaryData.

## Declaration

```objectivec
@property (nonatomic, readonly) int16_t userDefinedAncillaryDataSizeRemaining;
```

<a id="discussion"></a>

## Discussion

Using SMPTE 291 and SMPTE RDD 18 standards for ancillary data, this property specifies max size in bytes for the user defined portion of that data
