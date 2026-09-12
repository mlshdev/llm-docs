> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447985-fseventspurgeeventsfordeviceupto](https://developer.apple.com/documentation/coreservices/1447985-fseventspurgeeventsfordeviceupto)

# FSEventsPurgeEventsForDeviceUpToEventId(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventsPurgeEventsForDeviceUpToEventId(_ dev: dev_t, _ eventId: FSEventStreamEventId) -> Bool
```

## Parameters

- `dev`: The dev_t of the device.
- `eventId`: The event ID.

<a id="return_value"></a>

## Return Value

True if it succeeds, otherwise False if it fails.

<a id="discussion"></a>

## Discussion

Purges old events from the persistent per-volume database maintained by the service. Can only be called by the root user.

# FSEventsPurgeEventsForDeviceUpToEventId (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
Boolean FSEventsPurgeEventsForDeviceUpToEventId(dev_t dev, FSEventStreamEventId eventId);
```

## Parameters

- `dev`: The dev_t of the device.
- `eventId`: The event ID.

<a id="return_value"></a>

## Return Value

True if it succeeds, otherwise False if it fails.

<a id="discussion"></a>

## Discussion

Purges old events from the persistent per-volume database maintained by the service. Can only be called by the root user.
