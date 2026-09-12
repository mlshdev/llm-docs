> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsetlocaleventsfilterduringsupressionstate](https://developer.apple.com/documentation/coregraphics/cgsetlocaleventsfilterduringsupressionstate)

# CGSetLocalEventsFilterDuringSupressionState

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Macro  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
#define CGSetLocalEventsFilterDuringSupressionState(filter, state)
```

## See Also

### Deprecated Functions

- [CGPostKeyboardEvent](cgpostkeyboardevent%28______%29.md): Deprecated. Synthesizes a low-level keyboard event on the local machine.
- [CGPostMouseEvent](cgpostmouseevent.md): Deprecated. Synthesizes a low-level mouse-button event on the local machine.
- [CGPostScrollWheelEvent](cgpostscrollwheelevent.md): Deprecated. Synthesizes a low-level scrolling event on the local machine.
- [CGEnableEventStateCombining](cgenableeventstatecombining%28__%29.md): Deprecated. Enables or disables the merging of actual key and mouse state with the application-specified state in a synthetic event.
- [CGInhibitLocalEvents](cginhibitlocalevents%28__%29.md): Deprecated. Turns off local hardware events in the current session.
- [CGSetLocalEventsFilterDuringSuppressionState](cgsetlocaleventsfilterduringsuppressionstate%28____%29.md): Deprecated. Filters local hardware events from the keyboard and mouse during the short interval after a synthetic event is posted.
- [CGSetLocalEventsSuppressionInterval](cgsetlocaleventssuppressioninterval%28__%29.md): Deprecated. Sets the time interval in seconds that local hardware events are suppressed after posting a synthetic event.
