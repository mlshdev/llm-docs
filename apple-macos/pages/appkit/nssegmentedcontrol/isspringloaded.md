> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/isspringloaded](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/isspringloaded)

# isSpringLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

A Boolean value that indicates whether spring loading is enabled for the control.

## Declaration

```swift
var isSpringLoaded: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if spring loading is enabled for the control, and [false](https://developer.apple.com/documentation/swift/false) if it is not. The default is [false](https://developer.apple.com/documentation/swift/false).

On pressure-sensitive systems, such as systems with the Force Touch trackpad, spring loading is a feature that allows a user to activate a segment in a segmented control by dragging selected items over it and force clicking—pressing harder—without dropping the selected items. The user can then continue dragging the items, possibly to perform additional actions.

A practical example of this feature can be found in the Calendar app. A selected calendar event can be dragged over the day, week, month, or year segments in the toolbar. Force clicking on a segment switches the calendar view without releasing the selected calendar event. The calendar event can then be dropped at the desired location in the new calendar view.

When spring loading is enabled on a segmented control and a user drags something over a segment, the segment highlights to indicate that it responds to force clicking. In this situation, if the user presses harder, additional highlighting occurs to indicate that the segment was activated.

On systems that don’t support pressure sensitivity, simply hovering over the segment for a short period of time is sufficient to activate the segment.

## See Also

### Configuring a segment menu

- [setMenu(\_:forSegment:)](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menu(forSegment:)](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setShowsMenuIndicator(\_:forSegment:)](setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicator(forSegment:)](showsmenuindicator%28forsegment_%29.md)

# springLoaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

A Boolean value that indicates whether spring loading is enabled for the control.

## Declaration

```objectivec
@property (getter=isSpringLoaded) BOOL springLoaded;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if spring loading is enabled for the control, and [false](https://developer.apple.com/documentation/swift/false) if it is not. The default is [false](https://developer.apple.com/documentation/swift/false).

On pressure-sensitive systems, such as systems with the Force Touch trackpad, spring loading is a feature that allows a user to activate a segment in a segmented control by dragging selected items over it and force clicking—pressing harder—without dropping the selected items. The user can then continue dragging the items, possibly to perform additional actions.

A practical example of this feature can be found in the Calendar app. A selected calendar event can be dragged over the day, week, month, or year segments in the toolbar. Force clicking on a segment switches the calendar view without releasing the selected calendar event. The calendar event can then be dropped at the desired location in the new calendar view.

When spring loading is enabled on a segmented control and a user drags something over a segment, the segment highlights to indicate that it responds to force clicking. In this situation, if the user presses harder, additional highlighting occurs to indicate that the segment was activated.

On systems that don’t support pressure sensitivity, simply hovering over the segment for a short period of time is sufficient to activate the segment.

## See Also

### Configuring a segment menu

- [setMenu:forSegment:](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [menuForSegment:](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setShowsMenuIndicator:forSegment:](setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicatorForSegment:](showsmenuindicator%28forsegment_%29.md)
