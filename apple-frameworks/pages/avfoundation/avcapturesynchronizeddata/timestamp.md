> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddata/timestamp](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddata/timestamp)

# timestamp (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The time at which this synchronized data was captured.

## Declaration

```swift
var timestamp: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

Synchronized data is always synchronized to the [masterClock](../avcapturesession/masterclock.md) time of the [AVCaptureSession](../avcapturesession.md) object to which the data output is connected.

# timestamp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The time at which this synchronized data was captured.

## Declaration

```objectivec
@property (readonly) CMTime timestamp;
```

<a id="Discussion"></a>

## Discussion

Synchronized data is always synchronized to the [masterClock](../avcapturesession/masterclock.md) time of the [AVCaptureSession](../avcapturesession.md) object to which the data output is connected.
