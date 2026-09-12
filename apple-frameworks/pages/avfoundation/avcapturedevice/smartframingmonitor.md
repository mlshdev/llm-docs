> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/smartframingmonitor](https://developer.apple.com/documentation/avfoundation/avcapturedevice/smartframingmonitor)

# smartFramingMonitor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A monitor owned by the device that recommends an optimal framing based on the content in the scene.

## Declaration

```swift
var smartFramingMonitor: AVCaptureSmartFramingMonitor? { get }
```

<a id="discussion"></a>

## Discussion

An ultra wide camera device that supports dynamic aspect ratio configuration may also support “smart framing monitoring”. If this property returns non `nil`, you may use it to listen for framing recommendations by configuring its [enabledFramings](../avcapturesmartframingmonitor/enabledframings.md) and calling [startMonitoring()](../avcapturesmartframingmonitor/startmonitoring%28%29.md). The smart framing monitor only makes recommendations when the current [activeFormat](activeformat.md) supports smart framing (see [isSmartFramingSupported](format/issmartframingsupported.md)).

## See Also

### Configuring smart framing

- [AVCaptureSmartFramingMonitor](../avcapturesmartframingmonitor.md): An object associated with a capture device that monitors the scene and suggests an optimal framing.
- [AVCaptureFraming](../avcaptureframing.md): A framing, consisting of an aspect ratio and a zoom factor.

# smartFramingMonitor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A monitor owned by the device that recommends an optimal framing based on the content in the scene.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCaptureSmartFramingMonitor * smartFramingMonitor;
```

<a id="discussion"></a>

## Discussion

An ultra wide camera device that supports dynamic aspect ratio configuration may also support “smart framing monitoring”. If this property returns non `nil`, you may use it to listen for framing recommendations by configuring its [enabledFramings](../avcapturesmartframingmonitor/enabledframings.md) and calling [startMonitoringWithError:](../avcapturesmartframingmonitor/startmonitoring%28%29.md). The smart framing monitor only makes recommendations when the current [activeFormat](activeformat.md) supports smart framing (see [smartFramingSupported](format/issmartframingsupported.md)).

## See Also

### Configuring smart framing

- [AVCaptureSmartFramingMonitor](../avcapturesmartframingmonitor.md): An object associated with a capture device that monitors the scene and suggests an optimal framing.
- [AVCaptureFraming](../avcaptureframing.md): A framing, consisting of an aspect ratio and a zoom factor.
