> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoderreadyformoremediadatadidchangenotification](https://developer.apple.com/documentation/mediaextension/mevideodecoderreadyformoremediadatadidchangenotification)

# MEVideoDecoderReadyForMoreMediaDataDidChangeNotification

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Global Variable  
**Availability:** macOS 14.0+

A notification that indicates a change to the decoder’s readiness to process additional media data.

## Declaration

```objectivec
extern NSNotificationName const MEVideoDecoderReadyForMoreMediaDataDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is used to notify the Video Toolbox that the value of the [readyForMoreMediaData](mevideodecoder/isreadyformoremediadata.md) property has changed.
