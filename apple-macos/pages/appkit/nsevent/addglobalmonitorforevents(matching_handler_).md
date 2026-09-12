> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/addglobalmonitorforevents(matching:handler:)](https://developer.apple.com/documentation/appkit/nsevent/addglobalmonitorforevents(matching:handler:))

# addGlobalMonitorForEvents(matching:handler:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Installs an event monitor that receives copies of events the system posts to other applications.

## Declaration

```swift
class func addGlobalMonitorForEvents(matching mask: NSEvent.EventTypeMask, handler block: @escaping (NSEvent) -> Void) -> Any?
```

## Parameters

- `mask`: An event mask specifying which events you wish to monitor. See [NSEvent.EventTypeMask](eventtypemask.md) for possible values.
- `block`: The event handler block object. It is passed the event to monitor. You are unable to change the event, merely observe it.

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Events are delivered asynchronously to your app and you can only observe the event; you cannot modify or otherwise prevent the event from being delivered to its original target application.

Key-related events may only be monitored if accessibility is enabled or if your application is trusted for accessibility access (see [AXIsProcessTrusted()](../../applicationservices/1460720-axisprocesstrusted.md)).

Note that your handler will not be called for events that are sent to your own application.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v 10.6, event monitors are only able to monitor the following event types:

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

- [addLocalMonitorForEvents(matching:handler:)](addlocalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.
- [removeMonitor(\_:)](removemonitor%28__%29.md): Removes the specified event monitor.

# addGlobalMonitorForEventsMatchingMask:handler: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Installs an event monitor that receives copies of events the system posts to other applications.

## Declaration

```objectivec
+ (id) addGlobalMonitorForEventsMatchingMask:(NSEventMask) mask handler:(void (^)(NSEvent *event)) block;
```

## Parameters

- `mask`: An event mask specifying which events you wish to monitor. See [NSEventMask](eventtypemask.md) for possible values.
- `block`: The event handler block object. It is passed the event to monitor. You are unable to change the event, merely observe it.

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Events are delivered asynchronously to your app and you can only observe the event; you cannot modify or otherwise prevent the event from being delivered to its original target application.

Key-related events may only be monitored if accessibility is enabled or if your application is trusted for accessibility access (see [AXIsProcessTrusted](../../applicationservices/1460720-axisprocesstrusted.md)).

Note that your handler will not be called for events that are sent to your own application.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v 10.6, event monitors are only able to monitor the following event types:

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

- [addLocalMonitorForEventsMatchingMask:handler:](addlocalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.
- [removeMonitor:](removemonitor%28__%29.md): Removes the specified event monitor.
