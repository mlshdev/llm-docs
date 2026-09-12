> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444453-fseventscopyuuidfordevice](https://developer.apple.com/documentation/coreservices/1444453-fseventscopyuuidfordevice)

# FSEventsCopyUUIDForDevice(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventsCopyUUIDForDevice(_ dev: dev_t) -> CFUUID?
```

## Parameters

- `dev`: The dev_t of the device that you want to get the UUID for.

<a id="return_value"></a>

## Return Value

The UUID associated with the stream of events on this device, or NULL if no UUID is available (for example, on a read-only device). The UUID is stored on the device itself and travels with it even when the device is attached to different computers. Ownership follows the Copy Rule.

<a id="discussion"></a>

## Discussion

Gets the UUID associated with a device, or NULL if not possible (for example, on read-only device). A (non-NULL) UUID uniquely identifies a given stream of FSEvents. If this (non-NULL) UUID is different than one that you stored from a previous run then the event stream is different (for example, because FSEvents were purged, because the disk was erased, or because the event ID counter wrapped around back to zero).

A NULL return value indicates that "historical" events are not available, i.e., you should not supply a "sinceWhen" value to FSEventStreamCreate...() other than kFSEventStreamEventIdSinceNow.

# FSEventsCopyUUIDForDevice (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CFUUIDRef FSEventsCopyUUIDForDevice(dev_t dev);
```

## Parameters

- `dev`: The dev_t of the device that you want to get the UUID for.

<a id="return_value"></a>

## Return Value

The UUID associated with the stream of events on this device, or NULL if no UUID is available (for example, on a read-only device). The UUID is stored on the device itself and travels with it even when the device is attached to different computers. Ownership follows the Copy Rule.

<a id="discussion"></a>

## Discussion

Gets the UUID associated with a device, or NULL if not possible (for example, on read-only device). A (non-NULL) UUID uniquely identifies a given stream of FSEvents. If this (non-NULL) UUID is different than one that you stored from a previous run then the event stream is different (for example, because FSEvents were purged, because the disk was erased, or because the event ID counter wrapped around back to zero).

A NULL return value indicates that "historical" events are not available, i.e., you should not supply a "sinceWhen" value to FSEventStreamCreate...() other than kFSEventStreamEventIdSinceNow.
