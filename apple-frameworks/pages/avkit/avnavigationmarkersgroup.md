> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup

# AVNavigationMarkersGroup (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 9.0+

A set of markers for navigating playback of an audiovisual presentation.

## Declaration

```swift
class AVNavigationMarkersGroup
```

## Mentioned In

- [Presenting navigation markers](presenting-navigation-markers.md)

<a id="overview"></a>

## Overview

The most common form of a navigation markers group is a chapter list; however, you can also provide other sets of markers to allow a user to jump to significant events in the presentation. For example, a “Goals Scored” markers group might summarize key moments in a recorded sporting event. When you associate navigation markers with an [AVPlayerItem](../avfoundation/avplayeritem.md) object you present with an [AVPlayerViewController](avplayerviewcontroller.md), the user interface provides options for navigating each group.

## Topics

### Creating a navigation marker group

- [init(title:timedNavigationMarkers:)](avnavigationmarkersgroup/init%28title_timednavigationmarkers_%29.md): Initializes a navigation markers group with the specified title and array of timed navigation markers.
- [init(title:dateRangeNavigationMarkers:)](avnavigationmarkersgroup/init%28title_daterangenavigationmarkers_%29.md): Initializes a navigation markers group with the specified title and array of date range navigation markers.

### Inspecting navigation metadata

- [title](avnavigationmarkersgroup/title.md): The title of the marker group.
- [timedNavigationMarkers](avnavigationmarkersgroup/timednavigationmarkers.md): The array of timed navigation markers for which the group provides navigation.
- [dateRangeNavigationMarkers](avnavigationmarkersgroup/daterangenavigationmarkers.md): The array of date range navigation markers for which the group provides navigation.

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

## See Also

### Interstitials and markers

- [Working with interstitial content](working-with-interstitial-content.md): Present additional content alongside your main media presentation using HTTP Live Streaming support.
- [Presenting navigation markers](presenting-navigation-markers.md): Present navigation markers in the Chapters panel to help users quickly navigate your content.
- [AVInterstitialTimeRange](avinterstitialtimerange.md): A time range in an audiovisual presentation for content with an interstitial designation, such as advertisements or legal notices.

# AVNavigationMarkersGroup (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 9.0+

A set of markers for navigating playback of an audiovisual presentation.

## Declaration

```objectivec
@interface AVNavigationMarkersGroup : NSObject
```

## Mentioned In

- [Presenting navigation markers](presenting-navigation-markers.md)

<a id="overview"></a>

## Overview

The most common form of a navigation markers group is a chapter list; however, you can also provide other sets of markers to allow a user to jump to significant events in the presentation. For example, a “Goals Scored” markers group might summarize key moments in a recorded sporting event. When you associate navigation markers with an [AVPlayerItem](../avfoundation/avplayeritem.md) object you present with an [AVPlayerViewController](avplayerviewcontroller.md), the user interface provides options for navigating each group.

## Topics

### Creating a navigation marker group

- [initWithTitle:timedNavigationMarkers:](avnavigationmarkersgroup/init%28title_timednavigationmarkers_%29.md): Initializes a navigation markers group with the specified title and array of timed navigation markers.
- [initWithTitle:dateRangeNavigationMarkers:](avnavigationmarkersgroup/init%28title_daterangenavigationmarkers_%29.md): Initializes a navigation markers group with the specified title and array of date range navigation markers.

### Inspecting navigation metadata

- [title](avnavigationmarkersgroup/title.md): The title of the marker group.
- [timedNavigationMarkers](avnavigationmarkersgroup/timednavigationmarkers.md): The array of timed navigation markers for which the group provides navigation.
- [dateRangeNavigationMarkers](avnavigationmarkersgroup/daterangenavigationmarkers.md): The array of date range navigation markers for which the group provides navigation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Interstitials and markers

- [Working with interstitial content](working-with-interstitial-content.md): Present additional content alongside your main media presentation using HTTP Live Streaming support.
- [Presenting navigation markers](presenting-navigation-markers.md): Present navigation markers in the Chapters panel to help users quickly navigate your content.
- [AVInterstitialTimeRange](avinterstitialtimerange.md): A time range in an audiovisual presentation for content with an interstitial designation, such as advertisements or legal notices.
