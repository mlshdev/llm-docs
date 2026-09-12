> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/helprequested(with:)](https://developer.apple.com/documentation/appkit/nsmenu/helprequested(with:))

# helpRequested(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Overridden by subclasses to implement specialized context-sensitive help behavior.

## Declaration

```swift
func helpRequested(with eventPtr: NSEvent)
```

## Parameters

- `eventPtr`: An [NSEvent](../nsevent.md) object representing the event associated with the help request.

<a id="Discussion"></a>

## Discussion

Subclasses in their implementation of this method should cause the Help Manager ([NSHelpManager](../nshelpmanager.md)) to display the help associated with the menu. Never invoke this method directly.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.6 and later this method has no effect. This method may be deprecated in a future release.

## See Also

### Related Documentation

- [showContextHelp(for:locationHint:)](../nshelpmanager/showcontexthelp%28for_locationhint_%29.md): Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.

### Displaying Context-Sensitive Help

- [popUpContextMenu(\_:with:for:)](popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [popUpContextMenu(\_:with:for:with:)](popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [popUp(positioning:at:in:)](popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.

# helpRequested: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Overridden by subclasses to implement specialized context-sensitive help behavior.

## Declaration

```objectivec
- (void) helpRequested:(NSEvent *) eventPtr;
```

## Parameters

- `eventPtr`: An [NSEvent](../nsevent.md) object representing the event associated with the help request.

<a id="Discussion"></a>

## Discussion

Subclasses in their implementation of this method should cause the Help Manager ([NSHelpManager](../nshelpmanager.md)) to display the help associated with the menu. Never invoke this method directly.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.6 and later this method has no effect. This method may be deprecated in a future release.

## See Also

### Related Documentation

- [showContextHelpForObject:locationHint:](../nshelpmanager/showcontexthelp%28for_locationhint_%29.md): Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.

### Displaying Context-Sensitive Help

- [popUpContextMenu:withEvent:forView:](popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [popUpContextMenu:withEvent:forView:withFont:](popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [popUpMenuPositioningItem:atLocation:inView:](popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.
