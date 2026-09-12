> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/status-swift.property](https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The status of reading sample buffers from the asset.

## Declaration

```swift
var status: AVAssetReader.Status { get }
```

<a id="Discussion"></a>

## Discussion

Check the value of this property when the [copyNextSampleBuffer()](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method on [AVAssetReaderOutput](../avassetreaderoutput.md) returns `nil` to determine why the output can’t read more data.

This property is thread safe.

## See Also

### Configuring reading

- [timeRange](timerange.md): The time range within the asset to read.
- [AVAssetReader.Status](status-swift.enum.md): Values that represent the possible states of an asset reader.
- [error](error.md): An error that describes the reason for a failure.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The status of reading sample buffers from the asset.

## Declaration

```objectivec
@property (readonly) AVAssetReaderStatus status;
```

<a id="Discussion"></a>

## Discussion

Check the value of this property when the [copyNextSampleBuffer](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method on [AVAssetReaderOutput](../avassetreaderoutput.md) returns `nil` to determine why the output can’t read more data.

This property is thread safe.

## See Also

### Configuring reading

- [timeRange](timerange.md): The time range within the asset to read.
- [AVAssetReaderStatus](status-swift.enum.md): Values that represent the possible states of an asset reader.
- [error](error.md): An error that describes the reason for a failure.
