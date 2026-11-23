> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration

# CPPlaybackConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Media metadata you add to audio or video items to support automatic system behaviors.

## Declaration

```swift
@MainActor class CPPlaybackConfiguration
```

<a id="overview"></a>

## Overview

When your app displays audio or video content in a list, create `CPPlaybackConfiguration` objects for your list’s rows and row elements to enable automatic system behaviors. Specifically, the system can display playback progress as part of your row or row element’s content. When someone interacts with the item, the system can also display the relevant system interface and automatically start playing the media item. Specify the behaviors you want individually for each item in your list.

Create an instance of this class for each row or row element in your interface that contains playable audio or video content. For each instance you create, enable the behaviors you want and assign the instance to the [playbackConfiguration](cpplayableitem/playbackconfiguration.md) property of the item. You can assign playback configuration objects to [CPListItem](cplistitem.md) objects, to instances of the system-defined [CPListImageRowItem](cplistimagerowitem.md) subclasses, and to the [CPListTemplateDetailsHeader](cplisttemplatedetailsheader.md) type. If you don’t provide a `CPPlaybackConfiguration` object for an item, the system doesn’t provide any automatic behaviors for it.

> **Note**

> To determine if video playback is available, check the `CPSessionConfiguration/videoPlaybackSupported` property of the session configuration object.

## Topics

### Initializers

- [init(coder:)](cpplaybackconfiguration/init%28coder_%29.md)
- [init(preferredPresentation:playbackAction:elapsedTime:duration:)](cpplaybackconfiguration/init%28preferredpresentation_playbackaction_elapsedtime_duration_%29.md): Creates a playback configuration object with the specified presentation style, playback action, and media details.

### Instance Properties

- [duration](cpplaybackconfiguration/duration.md): The duration of the media file in seconds.
- [elapsedTime](cpplaybackconfiguration/elapsedtime.md): The elapsed time since the start of playback.
- [playbackAction](cpplaybackconfiguration/playbackaction.md): The action to perform on the media item when someone selects it.
- [preferredPresentation](cpplaybackconfiguration/preferredpresentation.md): The preferred presentation behavior when someone selects the media item.

### Enumerations

- [CPPlaybackConfiguration.Action](cpplaybackconfiguration/action.md): The action to perform when someone selects the item.
- [CPPlaybackConfiguration.Presentation](cpplaybackconfiguration/presentation.md): Constants that specify the presentation style for the media of a selected item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Playback configuration

- [CPPlayableItem](cpplayableitem.md): An interface that adds media-based metadata to items with audio or video content.

# CPPlaybackConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Media metadata you add to audio or video items to support automatic system behaviors.

## Declaration

```objectivec
@interface CPPlaybackConfiguration : NSObject
```

<a id="overview"></a>

## Overview

When your app displays audio or video content in a list, create `CPPlaybackConfiguration` objects for your list’s rows and row elements to enable automatic system behaviors. Specifically, the system can display playback progress as part of your row or row element’s content. When someone interacts with the item, the system can also display the relevant system interface and automatically start playing the media item. Specify the behaviors you want individually for each item in your list.

Create an instance of this class for each row or row element in your interface that contains playable audio or video content. For each instance you create, enable the behaviors you want and assign the instance to the [playbackConfiguration](cpplayableitem/playbackconfiguration.md) property of the item. You can assign playback configuration objects to [CPListItem](cplistitem.md) objects, to instances of the system-defined [CPListImageRowItem](cplistimagerowitem.md) subclasses, and to the [CPListTemplateDetailsHeader](cplisttemplatedetailsheader.md) type. If you don’t provide a `CPPlaybackConfiguration` object for an item, the system doesn’t provide any automatic behaviors for it.

> **Note**

> To determine if video playback is available, check the `CPSessionConfiguration/videoPlaybackSupported` property of the session configuration object.

## Topics

### Instance Properties

- [duration](cpplaybackconfiguration/duration.md): The duration of the media file in seconds.
- [elapsedTime](cpplaybackconfiguration/elapsedtime.md): The elapsed time since the start of playback.
- [playbackAction](cpplaybackconfiguration/playbackaction.md): The action to perform on the media item when someone selects it.
- [preferredPresentation](cpplaybackconfiguration/preferredpresentation.md): The preferred presentation behavior when someone selects the media item.

### Instance Methods

- [initWithPreferredPresentation:playbackAction:elapsedTime:duration:](cpplaybackconfiguration/init%28preferredpresentation_playbackaction_elapsedtime_duration_%29.md): Creates a playback configuration object with the specified presentation style, playback action, and media details.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Playback configuration

- [CPPlayableItem](cpplayableitem.md): An interface that adds media-based metadata to items with audio or video content.
