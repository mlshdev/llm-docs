> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avnavigationmarkersgroup/init(title:timednavigationmarkers:)](https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/init(title:timednavigationmarkers:))

# init(title:timedNavigationMarkers:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** tvOS 9.0+

Initializes a navigation markers group with the specified title and array of timed navigation markers.

## Declaration

```swift
init(title: String?, timedNavigationMarkers navigationMarkers: [AVTimedMetadataGroup])
```

## Parameters

- `title`: The title to present for the markers group.
- `navigationMarkers`: The array of timed navigation markers for which the group provides navigation.

<a id="return-value"></a>

## Return Value

A new navigation markers group.

<a id="Discussion"></a>

## Discussion

To associate marker groups with an asset for playback, use the [navigationMarkerGroups](../../avfoundation/avplayeritem/navigationmarkergroups.md) property of an [AVPlayerItem](../../avfoundation/avplayeritem.md) object.

To create a chapter list, pass `nil` for the `title` parameter and set the group as the first item in the player item’s [navigationMarkerGroups](../../avfoundation/avplayeritem/navigationmarkergroups.md) array. To provide additional options for navigating media (such as a “Goals Scored” group for a recorded sporting event), provide a unique `title` value for each marker group in the array.

## See Also

### Creating a Navigation Marker Group

- [init(title:dateRangeNavigationMarkers:)](init%28title_daterangenavigationmarkers_%29.md): Initializes a navigation markers group with the specified title and array of date range navigation markers.

# initWithTitle:timedNavigationMarkers: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Initializes a navigation markers group with the specified title and array of timed navigation markers.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title timedNavigationMarkers:(NSArray<AVTimedMetadataGroup *> *) navigationMarkers;
```

## Parameters

- `title`: The title to present for the markers group.
- `navigationMarkers`: The array of timed navigation markers for which the group provides navigation.

<a id="return-value"></a>

## Return Value

A new navigation markers group.

<a id="Discussion"></a>

## Discussion

To associate marker groups with an asset for playback, use the [navigationMarkerGroups](../../avfoundation/avplayeritem/navigationmarkergroups.md) property of an [AVPlayerItem](../../avfoundation/avplayeritem.md) object.

To create a chapter list, pass `nil` for the `title` parameter and set the group as the first item in the player item’s [navigationMarkerGroups](../../avfoundation/avplayeritem/navigationmarkergroups.md) array. To provide additional options for navigating media (such as a “Goals Scored” group for a recorded sporting event), provide a unique `title` value for each marker group in the array.

## See Also

### Creating a Navigation Marker Group

- [initWithTitle:dateRangeNavigationMarkers:](init%28title_daterangenavigationmarkers_%29.md): Initializes a navigation markers group with the specified title and array of date range navigation markers.
