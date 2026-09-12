> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydataencoder/isenabled](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder/isenabled)

# isEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether ancillary data should be encoded and transmitted.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property controls whether ancillary data is encoded and sent along with video buffers in AVCaptureBroadcastVideoOutput. Default value is `true`.

# enabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether ancillary data should be encoded and transmitted.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

This property controls whether ancillary data is encoded and sent along with video buffers in AVCaptureBroadcastVideoOutput. Default value is `true`.
