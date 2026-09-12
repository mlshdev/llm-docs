> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/connections](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/connections)

# connections (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The capture output object’s connections.

## Declaration

```swift
var connections: [AVCaptureConnection] { get }
```

<a id="Discussion"></a>

## Discussion

Each connection object in the array describes the mapping between the output and the capture input ports.

## See Also

### Accessing connections

- [connection(with:)](connection%28with_%29.md): Returns the first connection with an input port of a specified media type.
- [AVCaptureOutput.DataDroppedReason](datadroppedreason.md): Constants that define reasons for why the system dropped a frame.

# connections (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The capture output object’s connections.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureConnection *> * connections;
```

<a id="Discussion"></a>

## Discussion

Each connection object in the array describes the mapping between the output and the capture input ports.

## See Also

### Accessing connections

- [connectionWithMediaType:](connection%28with_%29.md): Returns the first connection with an input port of a specified media type.
- [AVCaptureOutputDataDroppedReason](datadroppedreason.md): Constants that define reasons for why the system dropped a frame.
