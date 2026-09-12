> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayerfailedtodecodenotification](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayerfailedtodecodenotification)

# AVSampleBufferDisplayLayerFailedToDecodeNotification

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

A notification the system posts when a sample buffer display layer fails to decode.

## Declaration

```objectivec
extern NSString * const AVSampleBufferDisplayLayerFailedToDecodeNotification;
```

<a id="Discussion"></a>

## Discussion

You can retrieve the error object from the user information dictionary by querying it for its [AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey](avsamplebufferdisplaylayerfailedtodecodenotificationerrorkey.md) value.

## See Also

### Handling errors

- [AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey](avsamplebufferdisplaylayerfailedtodecodenotificationerrorkey.md): The key for the corresponding error.
