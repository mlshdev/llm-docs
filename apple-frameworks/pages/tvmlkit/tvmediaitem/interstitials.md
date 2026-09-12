> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvmediaitem/interstitials](https://developer.apple.com/documentation/tvmlkit/tvmediaitem/interstitials)

# interstitials (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

An array of time intervals that indicate where to insert media items into another, single media item.

> Please use SwiftUI or UIKit

## Declaration

```swift
var interstitials: [TVMediaItem.TimeRange] { get }
```

<a id="Discussion"></a>

## Discussion

The `Interstitials` property defines points within a [TVMediaItem](../tvmediaitem.md) object where you can insert another media item; for example, a short ad. Each time range in the array contains two properties: [startTime](timerange/starttime.md) and [duration](timerange/duration.md). The `startTime` is the length of time from the beginning of a media item, in seconds. The `duration` is the length of the interstitial, in seconds. Both properties are required. A common use for these objects is to define when and where ads are to be played during a stream.

## See Also

### Setting Timing Options

- [highlightGroups](highlightgroups.md): Deprecated. An array containing groups of individual highlights in a media item.
- [TVMediaItem.HighlightGroup](highlightgroup.md): Deprecated. A container for groups of highlights for a media item.
- [TVMediaItem.TimeRange](timerange.md): Deprecated. An object that defines a time range in a media item.
- [resumeTime](resumetime.md): Deprecated. The number of seconds from the beginning of a media item to the point where that media item begins playing.

# interstitials (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

An array of time intervals that indicate where to insert media items into another, single media item.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<TVTimeRange *> * interstitials;
```

<a id="Discussion"></a>

## Discussion

The `Interstitials` property defines points within a [TVMediaItem](../tvmediaitem.md) object where you can insert another media item; for example, a short ad. Each time range in the array contains two properties: [startTime](timerange/starttime.md) and [duration](timerange/duration.md). The `startTime` is the length of time from the beginning of a media item, in seconds. The `duration` is the length of the interstitial, in seconds. Both properties are required. A common use for these objects is to define when and where ads are to be played during a stream.

## See Also

### Setting Timing Options

- [highlightGroups](highlightgroups.md): Deprecated. An array containing groups of individual highlights in a media item.
- [TVHighlightGroup](highlightgroup.md): Deprecated. A container for groups of highlights for a media item.
- [TVTimeRange](timerange.md): Deprecated. An object that defines a time range in a media item.
- [resumeTime](resumetime.md): Deprecated. The number of seconds from the beginning of a media item to the point where that media item begins playing.
