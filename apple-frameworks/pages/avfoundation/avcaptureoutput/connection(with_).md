> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/connection(with:)](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/connection(with:))

# connection(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Returns the first connection with an input port of a specified media type.

## Declaration

```swift
func connection(with mediaType: AVMediaType) -> AVCaptureConnection?
```

## Parameters

- `mediaType`: A media type such as [video](../avmediatype/video.md) or [audio](../avmediatype/audio.md).

<a id="return-value"></a>

## Return Value

The first capture connection that has the specified media type, or `nil` if no connection for the media type exists.

## See Also

### Accessing connections

- [connections](connections.md): The capture output object’s connections.
- [AVCaptureOutput.DataDroppedReason](datadroppedreason.md): Constants that define reasons for why the system dropped a frame.

# connectionWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Returns the first connection with an input port of a specified media type.

## Declaration

```objectivec
- (AVCaptureConnection *) connectionWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: A media type such as [AVMediaTypeVideo](../avmediatype/video.md) or [AVMediaTypeAudio](../avmediatype/audio.md).

<a id="return-value"></a>

## Return Value

The first capture connection that has the specified media type, or `nil` if no connection for the media type exists.

## See Also

### Accessing connections

- [connections](connections.md): The capture output object’s connections.
- [AVCaptureOutputDataDroppedReason](datadroppedreason.md): Constants that define reasons for why the system dropped a frame.
