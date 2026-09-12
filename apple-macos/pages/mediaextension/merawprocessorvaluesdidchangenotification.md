> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorvaluesdidchangenotification](https://developer.apple.com/documentation/mediaextension/merawprocessorvaluesdidchangenotification)

# MERAWProcessorValuesDidChangeNotification

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

A notification that indicates a change to the object’s set of available processing parameters.

## Declaration

```objectivec
extern NSNotificationName const MERAWProcessorValuesDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is used to notify the client that processor has changed the set of available [MERAWProcessingParameter](merawprocessingparameter.md) objects. This includes changing the set of available parameters, changing the enabled state for parameters, or changing default values for parameters. This may occur in response to incoming parameter changes, for example a change in a selected [MERAWProcessingListElementParameter](merawprocessingparameter/listelement.md), or due to metadata-driven changes.

## See Also

### Notifications

- [MERAWProcessorReadyForMoreMediaDataDidChangeNotification](merawprocessorreadyformoremediadatadidchangenotification.md): A notification that indicates a change to the object’s readiness to process additional media data.
