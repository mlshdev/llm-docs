> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avnavigationmarkersgroup/timednavigationmarkers](https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/timednavigationmarkers)

# timedNavigationMarkers (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The array of timed navigation markers for which the group provides navigation.

## Declaration

```swift
var timedNavigationMarkers: [AVTimedMetadataGroup]? { get }
```

<a id="Discussion"></a>

## Discussion

Returns the array of [AVTimedMetadataGroup](../../avfoundation/avtimedmetadatagroup.md) objects managed by this group. This value may be `nil`.

## See Also

### Inspecting Navigation Metadata

- [title](title.md): The title of the marker group.
- [dateRangeNavigationMarkers](daterangenavigationmarkers.md): The array of date range navigation markers for which the group provides navigation.

# timedNavigationMarkers (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The array of timed navigation markers for which the group provides navigation.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<AVTimedMetadataGroup *> * timedNavigationMarkers;
```

<a id="Discussion"></a>

## Discussion

Returns the array of [AVTimedMetadataGroup](../../avfoundation/avtimedmetadatagroup.md) objects managed by this group. This value may be `nil`.

## See Also

### Inspecting Navigation Metadata

- [title](title.md): The title of the marker group.
- [dateRangeNavigationMarkers](daterangenavigationmarkers.md): The array of date range navigation markers for which the group provides navigation.
