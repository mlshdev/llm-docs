> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/updatetrackingareas()](https://developer.apple.com/documentation/appkit/nsview/updatetrackingareas())

# updateTrackingAreas() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.

## Declaration

```swift
func updateTrackingAreas()
```

<a id="Discussion"></a>

## Discussion

You should override this method to remove out of date tracking areas and add recomputed tracking areas; your implementation should call `super`.

## See Also

### Managing Tracking Areas

- [addTrackingArea(\_:)](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea(\_:)](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [didUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.

# updateTrackingAreas (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.

## Declaration

```objectivec
- (void) updateTrackingAreas;
```

<a id="Discussion"></a>

## Discussion

You should override this method to remove out of date tracking areas and add recomputed tracking areas; your implementation should call `super`.

## See Also

### Managing Tracking Areas

- [addTrackingArea:](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea:](removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](trackingareas.md): An array of the view’s tracking areas.
- [NSViewDidUpdateTrackingAreasNotification](didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.
