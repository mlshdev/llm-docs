> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/status-swift.property](https://developer.apple.com/documentation/avfoundation/avassetwriter/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The status of writing samples to the output file.

## Declaration

```swift
var status: AVAssetWriter.Status { get }
```

<a id="Discussion"></a>

## Discussion

This property is thread safe.

## See Also

### Inspecting writing status

- [AVAssetWriter.Status](status-swift.enum.md): Values that indicate the state of an asset writer.
- [error](error.md): An error object that describes an asset-writing failure.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The status of writing samples to the output file.

## Declaration

```objectivec
@property (readonly) AVAssetWriterStatus status;
```

<a id="Discussion"></a>

## Discussion

This property is thread safe.

## See Also

### Inspecting writing status

- [AVAssetWriterStatus](status-swift.enum.md): Values that indicate the state of an asset writer.
- [error](error.md): An error object that describes an asset-writing failure.
