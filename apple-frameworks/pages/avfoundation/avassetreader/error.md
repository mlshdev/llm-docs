> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/error](https://developer.apple.com/documentation/avfoundation/avassetreader/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An error that describes the reason for a failure.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if the asset reader’s status isn’t [AVAssetReader.Status.failed](status-swift.enum/failed.md).

This property is thread safe.

## See Also

### Configuring reading

- [timeRange](timerange.md): The time range within the asset to read.
- [status](status-swift.property.md): The status of reading sample buffers from the asset.
- [AVAssetReader.Status](status-swift.enum.md): Values that represent the possible states of an asset reader.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An error that describes the reason for a failure.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if the asset reader’s status isn’t [AVAssetReaderStatusFailed](status-swift.enum/failed.md).

This property is thread safe.

## See Also

### Configuring reading

- [timeRange](timerange.md): The time range within the asset to read.
- [status](status-swift.property.md): The status of reading sample buffers from the asset.
- [AVAssetReaderStatus](status-swift.enum.md): Values that represent the possible states of an asset reader.
