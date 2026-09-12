> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avnavigationmarkersgroup/title](https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/title)

# title (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The title of the marker group.

## Declaration

```swift
var title: String? { get }
```

<a id="Discussion"></a>

## Discussion

You set a marker group’s title with the [AVNavigationMarkersGroup](../avnavigationmarkersgroup.md) initializer. Each marker group in the [navigationMarkerGroups](../../avfoundation/avplayeritem/navigationmarkergroups.md) array of an [AVPlayerItem](../../avfoundation/avplayeritem.md) object must have a unique title. To use the marker group as a chapter list, set its title to `nil`.

## See Also

### Inspecting Navigation Metadata

- [timedNavigationMarkers](timednavigationmarkers.md): The array of timed navigation markers for which the group provides navigation.
- [dateRangeNavigationMarkers](daterangenavigationmarkers.md): The array of date range navigation markers for which the group provides navigation.

# title (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The title of the marker group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

You set a marker group’s title with the [AVNavigationMarkersGroup](../avnavigationmarkersgroup.md) initializer. Each marker group in the [navigationMarkerGroups](../../avfoundation/avplayeritem/navigationmarkergroups.md) array of an [AVPlayerItem](../../avfoundation/avplayeritem.md) object must have a unique title. To use the marker group as a chapter list, set its title to `nil`.

## See Also

### Inspecting Navigation Metadata

- [timedNavigationMarkers](timednavigationmarkers.md): The array of timed navigation markers for which the group provides navigation.
- [dateRangeNavigationMarkers](daterangenavigationmarkers.md): The array of date range navigation markers for which the group provides navigation.
