> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessornotification/valuesdidchange](https://developer.apple.com/documentation/mediaextension/merawprocessornotification/valuesdidchange)

# valuesDidChange

**Framework:** MediaExtension  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A notification that indicates a change to the object’s set of available processing parameters.

## Declaration

```swift
static let valuesDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification is used to notify the client that processor has changed the set of available [MERAWProcessingParameter](../merawprocessingparameter.md) objects. This includes changing the set of available parameters, changing the enabled state for parameters, or changing default values for parameters. This may occur in response to incoming parameter changes, for example a change in a selected [MERAWProcessingParameter.ListElement](../merawprocessingparameter/listelement.md), or due to metadata-driven changes.
