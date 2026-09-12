> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/timerange](https://developer.apple.com/documentation/avfoundation/avassetreader/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time range within the asset to read.

## Declaration

```swift
var timeRange: CMTimeRange { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is a time range with a start time of [zero](../../coremedia/cmtime/zero.md) and a duration of [positiveInfinity](../../coremedia/cmtime/positiveinfinity.md).

You can’t modify this value after reading starts.

## See Also

### Configuring reading

- [status](status-swift.property.md): The status of reading sample buffers from the asset.
- [AVAssetReader.Status](status-swift.enum.md): Values that represent the possible states of an asset reader.
- [error](error.md): An error that describes the reason for a failure.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time range within the asset to read.

## Declaration

```objectivec
@property (nonatomic) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

The default value is a time range with a start time of [kCMTimeZero](../../coremedia/cmtime/zero.md) and a duration of [kCMTimePositiveInfinity](../../coremedia/cmtime/positiveinfinity.md).

You can’t modify this value after reading starts.

## See Also

### Configuring reading

- [status](status-swift.property.md): The status of reading sample buffers from the asset.
- [AVAssetReaderStatus](status-swift.enum.md): Values that represent the possible states of an asset reader.
- [error](error.md): An error that describes the reason for a failure.
