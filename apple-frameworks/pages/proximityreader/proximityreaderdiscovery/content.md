> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/proximityreaderdiscovery/content](https://developer.apple.com/documentation/proximityreader/proximityreaderdiscovery/content)

# ProximityReaderDiscovery.Content

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A type that represents content you can display on the current device.

## Declaration

```swift
struct Content
```

<a id="overview"></a>

## Overview

This structure stores information the system needs to present the appropriate interface. Don’t create instances of this structure directly. Instead, fetch each instance using the [content(for:)](content%28for_%29.md) method.

Pass instances of this structure to [presentContent(\_:from:)](presentcontent%28__from_%29.md) to display the associated content.

## Topics

### Getting the content identifier

- [id](content/id.md): The unique identifier of the content.

### Getting the content description

- [description](content/description.md): The description of the content.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fetching the content to display

- [content(for:)](content%28for_%29.md): Fetches the content for the specified topic.
- [ProximityReaderDiscovery.Topic](topic.md): The topics you can present to someone.
- [contentList](contentlist.md): The content you can present for the current device.
