> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/trackingareas](https://developer.apple.com/documentation/appkit/nsview/trackingareas)

# trackingAreas (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of the view’s tracking areas.

## Declaration

```swift
var trackingAreas: [NSTrackingArea] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSTrackingArea](../nstrackingarea.md) objects. If the view has no tracking areas, the array is empty.

## See Also

### Managing Tracking Areas

- [addTrackingArea(\_:)](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea(\_:)](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [updateTrackingAreas()](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [didUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.

# trackingAreas (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of the view’s tracking areas.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTrackingArea *> * trackingAreas;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSTrackingArea](../nstrackingarea.md) objects. If the view has no tracking areas, the array is empty.

## See Also

### Managing Tracking Areas

- [addTrackingArea:](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea:](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [updateTrackingAreas](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [NSViewDidUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.
