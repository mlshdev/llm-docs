> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/addlocalmonitorforevents(matching:handler:)](https://developer.apple.com/documentation/appkit/nsevent/addlocalmonitorforevents(matching:handler:))

# addLocalMonitorForEvents(matching:handler:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.

## Declaration

```swift
class func addLocalMonitorForEvents(matching mask: NSEvent.EventTypeMask, handler block: @escaping (NSEvent) -> NSEvent?) -> Any?
```

## Parameters

- `mask`: An event mask specifying which events you wish to monitor. See [NSEvent.EventTypeMask](eventtypemask.md) for possible values.
- `block`: The event handler block object. It is passed the event to monitor. You can return the event unmodified, create and return a new NSEvent object, or return nil to stop the dispatching of the event.

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Your handler will not be called for events that are consumed by nested event-tracking loops such as control tracking, menu tracking, or window dragging; only events that are dispatched through the applications [sendEvent(\_:)](../nsapplication/sendevent%28__%29.md) method will be passed to your handler.

> **Note**

>  The monitor Block is called for all future events that match `mask`. You must call [removeMonitor(\_:)](removemonitor%28__%29.md) to stop the monitor.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v 10.6, event monitors are only able to monitor the following event types:

- [NSFlagsChanged](../nsflagschanged.md)
- [NSLeftMouseDragged](../nsleftmousedragged.md)
- [NSRightMouseDragged](../nsrightmousedragged.md)
- [NSOtherMouseDragged](../nsothermousedragged.md)
- [NSLeftMouseUp](../nsleftmouseup.md)
- [NSRightMouseUp](../nsrightmouseup.md)
- [NSOtherMouseUp](../nsothermouseup.md)
- [NSLeftMouseDown](../nsleftmousedown.md)
- [NSRightMouseDown](../nsrightmousedown.md)
- [NSOtherMouseDown](../nsothermousedown.md)
- [NSMouseMoved](../nsmousemoved.md)
- [NSFlagsChanged](../nsflagschanged.md)
- [NSScrollWheel](../nsscrollwheel.md)
- [NSTabletPoint](../nstabletpoint.md)
- [NSTabletProximity](../nstabletproximity.md)
- [NSKeyDown](../nskeydown.md) (Key repeats are determined using the [isARepeat](isarepeat.md) property.)

## See Also

### Monitoring app events

- [addGlobalMonitorForEvents(matching:handler:)](addglobalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to other applications.
- [removeMonitor(\_:)](removemonitor%28__%29.md): Removes the specified event monitor.

# addLocalMonitorForEventsMatchingMask:handler: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.

## Declaration

```objectivec
+ (id) addLocalMonitorForEventsMatchingMask:(NSEventMask) mask handler:(NSEvent * (^)(NSEvent *event)) block;
```

## Parameters

- `mask`: An event mask specifying which events you wish to monitor. See [NSEventMask](eventtypemask.md) for possible values.
- `block`: The event handler block object. It is passed the event to monitor. You can return the event unmodified, create and return a new NSEvent object, or return nil to stop the dispatching of the event.

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Your handler will not be called for events that are consumed by nested event-tracking loops such as control tracking, menu tracking, or window dragging; only events that are dispatched through the applications [sendEvent:](../nsapplication/sendevent%28__%29.md) method will be passed to your handler.

> **Note**

>  The monitor Block is called for all future events that match `mask`. You must call [removeMonitor:](removemonitor%28__%29.md) to stop the monitor.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v 10.6, event monitors are only able to monitor the following event types:

- [NSFlagsChanged](../nsflagschanged.md)
- [NSLeftMouseDragged](../nsleftmousedragged.md)
- [NSRightMouseDragged](../nsrightmousedragged.md)
- [NSOtherMouseDragged](../nsothermousedragged.md)
- [NSLeftMouseUp](../nsleftmouseup.md)
- [NSRightMouseUp](../nsrightmouseup.md)
- [NSOtherMouseUp](../nsothermouseup.md)
- [NSLeftMouseDown](../nsleftmousedown.md)
- [NSRightMouseDown](../nsrightmousedown.md)
- [NSOtherMouseDown](../nsothermousedown.md)
- [NSMouseMoved](../nsmousemoved.md)
- [NSFlagsChanged](../nsflagschanged.md)
- [NSScrollWheel](../nsscrollwheel.md)
- [NSTabletPoint](../nstabletpoint.md)
- [NSTabletProximity](../nstabletproximity.md)
- [NSKeyDown](../nskeydown.md) (Key repeats are determined using the [ARepeat](isarepeat.md) property.)

## See Also

### Monitoring app events

- [addGlobalMonitorForEventsMatchingMask:handler:](addglobalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to other applications.
- [removeMonitor:](removemonitor%28__%29.md): Removes the specified event monitor.
