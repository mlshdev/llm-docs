> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem](https://developer.apple.com/documentation/mediaplayer/mpcontentitem)

# MPContentItem (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

An object that contains the information for a displayed media item.

## Declaration

```swift
class MPContentItem
```

<a id="overview"></a>

## Overview

This object represents a media item such as a song, movie, radio station, or podcast episode. The media player displays the information stored in it.

Update this object by changing its properties during runtime or by creating a new `MPContentItem` object with new property values, but with the same identifier as the object to change. Use the [beginUpdates()](mpplayablecontentmanager/beginupdates%28%29.md) and [endUpdates()](mpplayablecontentmanager/endupdates%28%29.md) methods found in [MPPlayableContentManager](mpplayablecontentmanager.md) to update several `MPContentItem` objects at once.

> **Important**

>  This class is only used for CarPlay. Using it requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

## Topics

### Setting a unique identifier

- [init(identifier:)](mpcontentitem/init%28identifier_%29.md): Sets the identifier for a media item.

### Retrieving information about a media item

- [artwork](mpcontentitem/artwork.md): A single image that’s associated with the media item.
- [isContainer](mpcontentitem/iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [isExplicitContent](mpcontentitem/isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](mpcontentitem/identifier.md): The unique identifier for the media item.
- [isPlayable](mpcontentitem/isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [isStreamingContent](mpcontentitem/isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](mpcontentitem/playbackprogress.md): The amount of content played for the media item.
- [subtitle](mpcontentitem/subtitle.md): A secondary designator for the media item.
- [title](mpcontentitem/title.md): The public name of the media item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPContentItem (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

An object that contains the information for a displayed media item.

## Declaration

```objectivec
@interface MPContentItem : NSObject
```

<a id="overview"></a>

## Overview

This object represents a media item such as a song, movie, radio station, or podcast episode. The media player displays the information stored in it.

Update this object by changing its properties during runtime or by creating a new `MPContentItem` object with new property values, but with the same identifier as the object to change. Use the [beginUpdates](mpplayablecontentmanager/beginupdates%28%29.md) and [endUpdates](mpplayablecontentmanager/endupdates%28%29.md) methods found in [MPPlayableContentManager](mpplayablecontentmanager.md) to update several `MPContentItem` objects at once.

> **Important**

>  This class is only used for CarPlay. Using it requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

## Topics

### Setting a unique identifier

- [initWithIdentifier:](mpcontentitem/init%28identifier_%29.md): Sets the identifier for a media item.

### Retrieving information about a media item

- [artwork](mpcontentitem/artwork.md): A single image that’s associated with the media item.
- [container](mpcontentitem/iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [explicitContent](mpcontentitem/isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](mpcontentitem/identifier.md): The unique identifier for the media item.
- [playable](mpcontentitem/isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [streamingContent](mpcontentitem/isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](mpcontentitem/playbackprogress.md): The amount of content played for the media item.
- [subtitle](mpcontentitem/subtitle.md): A secondary designator for the media item.
- [title](mpcontentitem/title.md): The public name of the media item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
