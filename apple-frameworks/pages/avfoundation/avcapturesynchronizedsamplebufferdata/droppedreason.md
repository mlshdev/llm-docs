> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/droppedreason

# droppedReason (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value indicating why the capture output failed to deliver sample buffers, if applicable.

## Declaration

```swift
var droppedReason: AVCaptureOutput.DataDroppedReason { get }
```

## See Also

### Handling dropped data

- [sampleBufferWasDropped](samplebufferwasdropped.md): A Boolean value indicating whether sample buffers were discarded between capture and processing.

# droppedReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value indicating why the capture output failed to deliver sample buffers, if applicable.

## Declaration

```objectivec
@property (readonly) AVCaptureOutputDataDroppedReason droppedReason;
```

## See Also

### Handling dropped data

- [sampleBufferWasDropped](samplebufferwasdropped.md): A Boolean value indicating whether sample buffers were discarded between capture and processing.
