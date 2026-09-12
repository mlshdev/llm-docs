> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setboundsorigin(_:)](https://developer.apple.com/documentation/appkit/nsview/setboundsorigin(_:))

# setBoundsOrigin(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the origin of the view’s bounds rectangle to a specified point.

## Declaration

```swift
func setBoundsOrigin(_ newOrigin: NSPoint)
```

## Parameters

- `newOrigin`: A point specifying the new bounds origin of the view.

<a id="Discussion"></a>

## Discussion

In setting the new bounds origin, this method effectively shifts the view’s coordinate system so `newOrigin` lies at the origin of the view’s frame rectangle. It neither redisplays the view nor marks it as needing display. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

This method posts an [boundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

After calling this method, `NSView` creates an internal transform (or appends these changes to an existing internal transform) to convert from frame coordinates to bounds coordinates in your view. As long as the width-to-height ratio of the two coordinate systems remains the same, your content appears normal. If the ratios differ, your content may appear skewed.

## See Also

### Related Documentation

- [translateOrigin(to:)](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.

### Modifying the bounds rectangle

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsSize(\_:)](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [boundsDidChangeNotification](boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [NSView.BoundsDidChangeMessage](boundsdidchangemessage.md)
- [postsBoundsChangedNotifications](postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

# setBoundsOrigin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the origin of the view’s bounds rectangle to a specified point.

## Declaration

```objectivec
- (void) setBoundsOrigin:(NSPoint) newOrigin;
```

## Parameters

- `newOrigin`: A point specifying the new bounds origin of the view.

<a id="Discussion"></a>

## Discussion

In setting the new bounds origin, this method effectively shifts the view’s coordinate system so `newOrigin` lies at the origin of the view’s frame rectangle. It neither redisplays the view nor marks it as needing display. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

This method posts an [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

After calling this method, `NSView` creates an internal transform (or appends these changes to an existing internal transform) to convert from frame coordinates to bounds coordinates in your view. As long as the width-to-height ratio of the two coordinate systems remains the same, your content appears normal. If the ratios differ, your content may appear skewed.

## See Also

### Related Documentation

- [translateOriginToPoint:](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.

### Modifying the bounds rectangle

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsSize:](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [postsBoundsChangedNotifications](postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.
