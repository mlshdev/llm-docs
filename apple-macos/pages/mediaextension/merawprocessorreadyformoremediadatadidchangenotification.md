> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorreadyformoremediadatadidchangenotification](https://developer.apple.com/documentation/mediaextension/merawprocessorreadyformoremediadatadidchangenotification)

# MERAWProcessorReadyForMoreMediaDataDidChangeNotification

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A notification that indicates a change to the object’s readiness to process additional media data.

## Declaration

```objectivec
extern NSNotificationName const MERAWProcessorReadyForMoreMediaDataDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is used to notify Video Toolbox that the value of the [readyForMoreMediaData](merawprocessor/isreadyformoremediadata.md) property has changed.

## See Also

### Notifications

- [MERAWProcessorValuesDidChangeNotification](merawprocessorvaluesdidchangenotification.md): A notification that indicates a change to the object’s set of available processing parameters.
