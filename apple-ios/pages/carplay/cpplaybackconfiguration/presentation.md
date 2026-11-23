> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/presentation

# CPPlaybackConfiguration.Presentation (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Constants that specify the presentation style for the media of a selected item.

## Declaration

```swift
enum Presentation
```

<a id="overview"></a>

## Overview

These constants specify the presentation style to apply to media items in a list when someone selects them. The system can present system media interfaces automatically in response to interactions. For example, when someone selects an audio item, the system can show your app’s Now Playing interface and configure it to display the item. If you prefer to present your app’s media interface, choose the [CPPlaybackConfiguration.Presentation.none](presentation/none.md) option and configure the interface using your custom code.

## Topics

### Enumeration Cases

- [CPPlaybackConfiguration.Presentation.audio](presentation/audio.md): An option to display the Now Playing interface automatically and configure it with the item.
- [CPPlaybackConfiguration.Presentation.none](presentation/none.md): An option to handle media selections from your app.
- [CPPlaybackConfiguration.Presentation.video](presentation/video.md): An option to display the system video player automatically if it’s available and supported.

### Initializers

- [init(rawValue:)](presentation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CPPlaybackPresentation (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants that specify the presentation style for the media of a selected item.

## Declaration

```objectivec
enum CPPlaybackPresentation : NSInteger;
```

<a id="overview"></a>

## Overview

These constants specify the presentation style to apply to media items in a list when someone selects them. The system can present system media interfaces automatically in response to interactions. For example, when someone selects an audio item, the system can show your app’s Now Playing interface and configure it to display the item. If you prefer to present your app’s media interface, choose the [CPPlaybackPresentationNone](presentation/none.md) option and configure the interface using your custom code.

## Topics

### Enumeration Cases

- [CPPlaybackPresentationAudio](presentation/audio.md): An option to display the Now Playing interface automatically and configure it with the item.
- [CPPlaybackPresentationNone](presentation/none.md): An option to handle media selections from your app.
- [CPPlaybackPresentationVideo](presentation/video.md): An option to display the system video player automatically if it’s available and supported.
