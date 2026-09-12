> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydataencoder/setrdd18ancillarydata(_:fortag:)](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder/setrdd18ancillarydata(_:fortag:))

# setRDD18AncillaryData(\_:forTag:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Allows the user to add their own data to be encoded and transmitted using SMPTE RDD 18 standards.

## Declaration

```swift
func setRDD18AncillaryData(_ data: Data, forTag tag: UInt16) throws
```

## Parameters

- `data`: The data to be encoded and transmitted
- `tag`: The SMPTE RDD 18 tag with value between 0xE011 and 0xFFFF or valid tags definded in SMPTE RDD 18:2021

# setRDD18AncillaryData:forTag:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Allows the user to add their own data to be encoded and transmitted using SMPTE RDD 18 standards.

## Declaration

```objectivec
- (BOOL) setRDD18AncillaryData:(NSData *) data forTag:(uint16_t) tag error:(NSError **) error;
```

## Parameters

- `data`: The data to be encoded and transmitted
- `tag`: The SMPTE RDD 18 tag with value between 0xE011 and 0xFFFF or valid tags definded in SMPTE RDD 18:2021
- `error`: Error if the data cannot be added

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.
