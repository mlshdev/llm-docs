> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydataencoder/removerdd18ancillarydata(fortag:)](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder/removerdd18ancillarydata(fortag:))

# removeRDD18AncillaryData(forTag:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Allows the user to remove the ancillary data associated with the tag.

## Declaration

```swift
func removeRDD18AncillaryData(forTag tag: UInt16)
```

## Parameters

- `tag`: The SMPTE RDD 18 tag with, value between 0xE011 and 0xFFFF or valid tags definded in SMPTE RDD 18:2021, for the data to be removed

# removeRDD18AncillaryDataForTag: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Allows the user to remove the ancillary data associated with the tag.

## Declaration

```objectivec
- (void) removeRDD18AncillaryDataForTag:(uint16_t) tag;
```

## Parameters

- `tag`: The SMPTE RDD 18 tag with, value between 0xE011 and 0xFFFF or valid tags definded in SMPTE RDD 18:2021, for the data to be removed
