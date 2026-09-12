> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessornotification/readyformoremediadatadidchange](https://developer.apple.com/documentation/mediaextension/merawprocessornotification/readyformoremediadatadidchange)

# readyForMoreMediaDataDidChange

**Framework:** MediaExtension  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A notification that indicates a change to the object’s readiness to process additional media data.

## Declaration

```swift
static let readyForMoreMediaDataDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification is used to notify Video Toolbox that the value of the [isReadyForMoreMediaData](../merawprocessor/isreadyformoremediadata.md) property has changed.
