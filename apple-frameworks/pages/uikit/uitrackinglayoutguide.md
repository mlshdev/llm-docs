> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitrackinglayoutguide](https://developer.apple.com/documentation/uikit/uitrackinglayoutguide)

# UITrackingLayoutGuide (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A layout guide that automatically activates and deactivates layout constraints depending on its proximity to edges.

## Declaration

```swift
@MainActor class UITrackingLayoutGuide
```

## Topics

### Configuring automatic constraint activation

- [setConstraints(\_:activeWhenNearEdge:)](uitrackinglayoutguide/setconstraints%28__activewhennearedge_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.
- [setConstraints(\_:activeWhenAwayFrom:)](uitrackinglayoutguide/setconstraints%28__activewhenawayfrom_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.
- [constraints(activeWhenNearEdge:)](uitrackinglayoutguide/constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
- [constraints(activeWhenAwayFrom:)](uitrackinglayoutguide/constraints%28activewhenawayfrom_%29.md): Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.

### Tracking constraints

- [removeAllTrackedConstraints()](uitrackinglayoutguide/removealltrackedconstraints%28%29.md): Stops the layout guide from tracking any constraints.

## Relationships

### Inherits From

- [UILayoutGuide](uilayoutguide.md)

### Inherited By

- [UIKeyboardLayoutGuide](uikeyboardlayoutguide.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)

## See Also

### Keyboard layout

- [Adjusting your layout with keyboard layout guide](adjusting-your-layout-with-keyboard-layout-guide.md): Respond dynamically to keyboard movement by using the tracking features of the keyboard layout guide.
- [UIKeyboardLayoutGuide](uikeyboardlayoutguide.md): A layout guide that represents the space the keyboard occupies in your app’s layout.

# UITrackingLayoutGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A layout guide that automatically activates and deactivates layout constraints depending on its proximity to edges.

## Declaration

```objectivec
@interface UITrackingLayoutGuide : UILayoutGuide
```

## Topics

### Configuring automatic constraint activation

- [setConstraints:activeWhenNearEdge:](uitrackinglayoutguide/setconstraints%28__activewhennearedge_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.
- [setConstraints:activeWhenAwayFromEdge:](uitrackinglayoutguide/setconstraints%28__activewhenawayfrom_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.
- [constraintsActiveWhenNearEdge:](uitrackinglayoutguide/constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
- [constraintsActiveWhenAwayFromEdge:](uitrackinglayoutguide/constraints%28activewhenawayfrom_%29.md): Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.

### Tracking constraints

- [removeAllTrackedConstraints](uitrackinglayoutguide/removealltrackedconstraints%28%29.md): Stops the layout guide from tracking any constraints.

## Relationships

### Inherits From

- [UILayoutGuide](uilayoutguide.md)

### Inherited By

- [UIKeyboardLayoutGuide](uikeyboardlayoutguide.md)

## See Also

### Keyboard layout

- [UIKeyboardLayoutGuide](uikeyboardlayoutguide.md): A layout guide that represents the space the keyboard occupies in your app’s layout.
