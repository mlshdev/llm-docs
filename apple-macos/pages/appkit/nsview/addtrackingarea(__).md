> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addtrackingarea(_:)](https://developer.apple.com/documentation/appkit/nsview/addtrackingarea(_:))

# addTrackingArea(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Adds a given tracking area to the view.

## Declaration

```swift
func addTrackingArea(_ trackingArea: NSTrackingArea)
```

## Parameters

- `trackingArea`: The tracking area to add to the view.

## See Also

### Managing Tracking Areas

- [removeTrackingArea(\_:)](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas()](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [didUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.

# addTrackingArea: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Adds a given tracking area to the view.

## Declaration

```objectivec
- (void) addTrackingArea:(NSTrackingArea *) trackingArea;
```

## Parameters

- `trackingArea`: The tracking area to add to the view.

## See Also

### Managing Tracking Areas

- [removeTrackingArea:](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [NSViewDidUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.
