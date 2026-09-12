> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification)

# AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification the system posts when a sample buffer display layer changes its decoding requirements.

## Declaration

```objectivec
extern NSNotificationName const AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification;
```

## See Also

### Notifications

- [AVSampleBufferAudioRendererOutputConfigurationDidChangeNotification](avsamplebufferaudiorendereroutputconfigurationdidchangenotification.md): A notification that indicates the hardware configuration does not match the enqueued data format.
- [AVSampleBufferAudioRendererWasFlushedAutomaticallyNotification](avsamplebufferaudiorendererwasflushedautomaticallynotification.md): A notification that fires whenever the receiver’s enqueued media data has been flushed for a reason other than a call to the -flush method.
- [AVSampleBufferDisplayLayerOutputObscuredDueToInsufficientExternalProtectionDidChangeNotification](avsamplebufferdisplaylayeroutputobscuredduetoinsufficientexternalprotectiondidchangenotification.md)
- [AVSampleBufferDisplayLayerReadyForDisplayDidChangeNotification](avsamplebufferdisplaylayerreadyfordisplaydidchangenotification.md)
