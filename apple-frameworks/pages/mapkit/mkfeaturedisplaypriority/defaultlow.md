> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkfeaturedisplaypriority/defaultlow](https://developer.apple.com/documentation/mapkit/mkfeaturedisplaypriority/defaultlow)

# defaultLow (Swift)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A constant indicating that the item’s display priority is low.

## Declaration

```swift
static var defaultLow: MKFeatureDisplayPriority { get }
```

<a id="Discussion"></a>

## Discussion

An annotation view with this priority is removed from the map when its bounds collide with the bounds of another view with a higher priority. If the priorities of the two views are equal, the view furthest from the center of the map’s visible region is hidden first.

## See Also

### Priorities

- [required](required.md): A constant indicating that the item is required.
- [defaultHigh](defaulthigh.md): A constant indicating that the item’s display priority is high.

# MKFeatureDisplayPriorityDefaultLow (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A constant indicating that the item’s display priority is low.

## Declaration

```objectivec
static const MKFeatureDisplayPriority MKFeatureDisplayPriorityDefaultLow;
```

<a id="Discussion"></a>

## Discussion

An annotation view with this priority is removed from the map when its bounds collide with the bounds of another view with a higher priority. If the priorities of the two views are equal, the view furthest from the center of the map’s visible region is hidden first.

## See Also

### Priorities

- [MKFeatureDisplayPriorityRequired](required.md): A constant indicating that the item is required.
- [MKFeatureDisplayPriorityDefaultHigh](defaulthigh.md): A constant indicating that the item’s display priority is high.
