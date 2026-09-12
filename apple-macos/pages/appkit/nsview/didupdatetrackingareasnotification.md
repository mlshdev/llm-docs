> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/didupdatetrackingareasnotification](https://developer.apple.com/documentation/appkit/nsview/didupdatetrackingareasnotification)

# didUpdateTrackingAreasNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Posted whenever a view recalculates its tracking areas.

## Declaration

```swift
class let didUpdateTrackingAreasNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

It is sent after the view receives [updateTrackingAreas()](updatetrackingareas%28%29.md).

## See Also

### Managing Tracking Areas

- [addTrackingArea(\_:)](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea(\_:)](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas()](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.

# NSViewDidUpdateTrackingAreasNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Posted whenever a view recalculates its tracking areas.

## Declaration

```objectivec
extern NSNotificationName NSViewDidUpdateTrackingAreasNotification;
```

<a id="Discussion"></a>

## Discussion

It is sent after the view receives [updateTrackingAreas](updatetrackingareas%28%29.md).

## See Also

### Managing Tracking Areas

- [addTrackingArea:](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea:](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
