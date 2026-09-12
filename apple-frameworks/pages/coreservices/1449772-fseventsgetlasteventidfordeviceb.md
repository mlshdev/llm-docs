> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449772-fseventsgetlasteventidfordeviceb](https://developer.apple.com/documentation/coreservices/1449772-fseventsgetlasteventidfordeviceb)

# FSEventsGetLastEventIdForDeviceBeforeTime(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventsGetLastEventIdForDeviceBeforeTime(_ dev: dev_t, _ time: CFAbsoluteTime) -> FSEventStreamEventId
```

## Parameters

- `dev`: The dev_t of the device.
- `time`: The time as a CFAbsoluteTime whose value is the number of seconds since Jan 1, 1970 (i.e. a posix style time_t).

<a id="return_value"></a>

## Return Value

The last event ID for the given device that was returned before the given time.

<a id="discussion"></a>

## Discussion

Gets the last event ID for the given device that was returned before the given time. This is conservative in the sense that if you then use the returned event ID as the sinceWhen parameter of FSEventStreamCreateRelativeToDevice() that you will not miss any events that happened since that time. On the other hand, you might receive some (harmless) extra events.

Beware: there are things that can cause this to fail to be accurate. For example, someone might change the system's clock (either backwards or forwards). Or an external drive might be used on different systems without perfectly synchronized clocks.

# FSEventsGetLastEventIdForDeviceBeforeTime (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
FSEventStreamEventId FSEventsGetLastEventIdForDeviceBeforeTime(dev_t dev, CFAbsoluteTime time);
```

## Parameters

- `dev`: The dev_t of the device.
- `time`: The time as a CFAbsoluteTime whose value is the number of seconds since Jan 1, 1970 (i.e. a posix style time_t).

<a id="return_value"></a>

## Return Value

The last event ID for the given device that was returned before the given time.

<a id="discussion"></a>

## Discussion

Gets the last event ID for the given device that was returned before the given time. This is conservative in the sense that if you then use the returned event ID as the sinceWhen parameter of FSEventStreamCreateRelativeToDevice() that you will not miss any events that happened since that time. On the other hand, you might receive some (harmless) extra events.

Beware: there are things that can cause this to fail to be accurate. For example, someone might change the system's clock (either backwards or forwards). Or an external drive might be used on different systems without perfectly synchronized clocks.
