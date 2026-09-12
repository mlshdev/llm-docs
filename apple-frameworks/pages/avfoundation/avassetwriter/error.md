> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/error](https://developer.apple.com/documentation/avfoundation/avassetwriter/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An error object that describes an asset-writing failure.

## Declaration

```swift
var error: (any Error)? { get }
```

## See Also

### Inspecting writing status

- [status](status-swift.property.md): The status of writing samples to the output file.
- [AVAssetWriter.Status](status-swift.enum.md): Values that indicate the state of an asset writer.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An error object that describes an asset-writing failure.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

## See Also

### Inspecting writing status

- [status](status-swift.property.md): The status of writing samples to the output file.
- [AVAssetWriterStatus](status-swift.enum.md): Values that indicate the state of an asset writer.
