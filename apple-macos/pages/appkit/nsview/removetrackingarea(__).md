> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removetrackingarea(_:)](https://developer.apple.com/documentation/appkit/nsview/removetrackingarea(_:))

# removeTrackingArea(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes a given tracking area from the view.

## Declaration

```swift
func removeTrackingArea(_ trackingArea: NSTrackingArea)
```

## Parameters

- `trackingArea`: The tracking area to remove from the view.

## See Also

### Managing Tracking Areas

- [addTrackingArea(\_:)](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas()](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [didUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.

# removeTrackingArea: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes a given tracking area from the view.

## Declaration

```objectivec
- (void) removeTrackingArea:(NSTrackingArea *) trackingArea;
```

## Parameters

- `trackingArea`: The tracking area to remove from the view.

## See Also

### Managing Tracking Areas

- [addTrackingArea:](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas](updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [NSViewDidUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.
