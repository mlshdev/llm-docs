> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkfeaturedisplaypriority/defaulthigh](https://developer.apple.com/documentation/mapkit/mkfeaturedisplaypriority/defaulthigh)

# defaultHigh (Swift)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A constant indicating that the item’s display priority is high.

## Declaration

```swift
static var defaultHigh: MKFeatureDisplayPriority { get }
```

<a id="Discussion"></a>

## Discussion

An annotation view with this priority is removed from the map when its bounds collide with the bounds of another view with a higher priority. If the priorities of the two views are equal, the view furthest from the center of the map’s visible region is hidden first.

## See Also

### Priorities

- [required](required.md): A constant indicating that the item is required.
- [defaultLow](defaultlow.md): A constant indicating that the item’s display priority is low.

# MKFeatureDisplayPriorityDefaultHigh (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A constant indicating that the item’s display priority is high.

## Declaration

```objectivec
static const MKFeatureDisplayPriority MKFeatureDisplayPriorityDefaultHigh;
```

<a id="Discussion"></a>

## Discussion

An annotation view with this priority is removed from the map when its bounds collide with the bounds of another view with a higher priority. If the priorities of the two views are equal, the view furthest from the center of the map’s visible region is hidden first.

## See Also

### Priorities

- [MKFeatureDisplayPriorityRequired](required.md): A constant indicating that the item is required.
- [MKFeatureDisplayPriorityDefaultLow](defaultlow.md): A constant indicating that the item’s display priority is low.
