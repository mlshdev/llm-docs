> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/timestamp](https://developer.apple.com/documentation/avfoundation/avcapturephoto/timestamp)

# timestamp (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The time at which the image was captured.

## Declaration

```swift
var timestamp: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This timestamp is always synchronized to the [masterClock](../avcapturesession/masterclock.md) time of the [AVCaptureSession](../avcapturesession.md) object to which the photo output is connected.

## See Also

### Resolving photo capture requests

- [resolvedSettings](resolvedsettings.md): The settings object that was used to request this photo capture.
- [photoCount](photocount.md): The 1-based index of this photo capture relative to other results from the same capture request.

# timestamp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The time at which the image was captured.

## Declaration

```objectivec
@property (readonly) CMTime timestamp;
```

<a id="Discussion"></a>

## Discussion

This timestamp is always synchronized to the [masterClock](../avcapturesession/masterclock.md) time of the [AVCaptureSession](../avcapturesession.md) object to which the photo output is connected.

## See Also

### Resolving photo capture requests

- [resolvedSettings](resolvedsettings.md): The settings object that was used to request this photo capture.
- [photoCount](photocount.md): The 1-based index of this photo capture relative to other results from the same capture request.
