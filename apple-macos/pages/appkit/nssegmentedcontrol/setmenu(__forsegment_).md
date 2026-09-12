> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setmenu(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setmenu(_:forsegment:))

# setMenu(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the menu for the specified segment.

## Declaration

```swift
func setMenu(_ menu: NSMenu?, forSegment segment: Int)
```

## Parameters

- `menu`: The menu you want to add to the segment or `nil` to clear the current menu.
- `segment`: The index of the segment whose menu you want to set. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="Discussion"></a>

## Discussion

Adding a menu to a segment allows the segment to be used as a pop-up button. If the segment has a menu only, then the menu displays when the user clicks the segment. If the segment has both a menu and an action, then the action triggers when the user clicks the segment and the menu displays when the user clicks and holds the segment.

## See Also

### Configuring a segment menu

- [menu(forSegment:)](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setShowsMenuIndicator(\_:forSegment:)](setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicator(forSegment:)](showsmenuindicator%28forsegment_%29.md)
- [isSpringLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the control.

# setMenu:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the menu for the specified segment.

## Declaration

```objectivec
- (void) setMenu:(NSMenu *) menu forSegment:(NSInteger) segment;
```

## Parameters

- `menu`: The menu you want to add to the segment or `nil` to clear the current menu.
- `segment`: The index of the segment whose menu you want to set. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="Discussion"></a>

## Discussion

Adding a menu to a segment allows the segment to be used as a pop-up button. If the segment has a menu only, then the menu displays when the user clicks the segment. If the segment has both a menu and an action, then the action triggers when the user clicks the segment and the menu displays when the user clicks and holds the segment.

## See Also

### Configuring a segment menu

- [menuForSegment:](menu%28forsegment_%29.md): Returns the menu for the specified segment.
- [setShowsMenuIndicator:forSegment:](setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicatorForSegment:](showsmenuindicator%28forsegment_%29.md)
- [springLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the control.
