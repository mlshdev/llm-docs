> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avnavigationmarkersgroup/daterangenavigationmarkers](https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/daterangenavigationmarkers)

# dateRangeNavigationMarkers (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The array of date range navigation markers for which the group provides navigation.

## Declaration

```swift
var dateRangeNavigationMarkers: [AVDateRangeMetadataGroup]? { get }
```

<a id="Discussion"></a>

## Discussion

Returns the array of [AVDateRangeMetadataGroup](../../avfoundation/avdaterangemetadatagroup.md) objects managed by this group. This value may be `nil`.

## See Also

### Inspecting Navigation Metadata

- [title](title.md): The title of the marker group.
- [timedNavigationMarkers](timednavigationmarkers.md): The array of timed navigation markers for which the group provides navigation.

# dateRangeNavigationMarkers (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The array of date range navigation markers for which the group provides navigation.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<AVDateRangeMetadataGroup *> * dateRangeNavigationMarkers;
```

<a id="Discussion"></a>

## Discussion

Returns the array of [AVDateRangeMetadataGroup](../../avfoundation/avdaterangemetadatagroup.md) objects managed by this group. This value may be `nil`.

## See Also

### Inspecting Navigation Metadata

- [title](title.md): The title of the marker group.
- [timedNavigationMarkers](timednavigationmarkers.md): The array of timed navigation markers for which the group provides navigation.
