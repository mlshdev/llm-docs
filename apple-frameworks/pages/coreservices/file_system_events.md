> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_system_events](https://developer.apple.com/documentation/coreservices/file_system_events)

# File System Events (Swift)

**Framework:** Core Services  
**Kind:** API Collection

Get notifications when the contents of a directory hierarchy change.

<a id="overview"></a>

## Overview

The file system events API provides a way for your application to ask for notification when the contents of a directory hierarchy are modified. For example, your application can use this to quickly detect when the user modifies a file within a project bundle using another application.

It also provides a lightweight way to determine whether the contents of a directory hierarchy have changed since your application last examined them. For example, a backup application can use this to determine what files have changed since a given time stamp or a given event ID.

## Topics

### Functions

- [FSEventStreamCopyDescription(\_:)](1442676-fseventstreamcopydescription.md)
- [FSEventStreamCopyPathsBeingWatched(\_:)](1447917-fseventstreamcopypathsbeingwatch.md)
- [FSEventStreamCreate(\_:\_:\_:\_:\_:\_:\_:)](1443980-fseventstreamcreate.md)
- [FSEventStreamCreateRelativeToDevice(\_:\_:\_:\_:\_:\_:\_:\_:)](1447341-fseventstreamcreaterelativetodev.md)
- [FSEventStreamFlushAsync(\_:)](1441727-fseventstreamflushasync.md)
- [FSEventStreamFlushSync(\_:)](1445629-fseventstreamflushsync.md)
- [FSEventStreamGetDeviceBeingWatched(\_:)](1449675-fseventstreamgetdevicebeingwatch.md)
- [FSEventStreamGetLatestEventId(\_:)](1446030-fseventstreamgetlatesteventid.md)
- [FSEventStreamInvalidate(\_:)](1446990-fseventstreaminvalidate.md)
- [FSEventStreamRelease(\_:)](1445989-fseventstreamrelease.md)
- [FSEventStreamRetain(\_:)](1444986-fseventstreamretain.md)
- [FSEventStreamScheduleWithRunLoop(\_:\_:\_:)](1447824-fseventstreamschedulewithrunloop.md): Deprecated.
- [FSEventStreamSetDispatchQueue(\_:\_:)](1444164-fseventstreamsetdispatchqueue.md): Schedules the stream on the specified dispatch queue.
- [FSEventStreamSetExclusionPaths(\_:\_:)](1444666-fseventstreamsetexclusionpaths.md)
- [FSEventStreamShow(\_:)](1444302-fseventstreamshow.md)
- [FSEventStreamStart(\_:)](1448000-fseventstreamstart.md)
- [FSEventStreamStop(\_:)](1447673-fseventstreamstop.md)
- [FSEventStreamUnscheduleFromRunLoop(\_:\_:\_:)](1441982-fseventstreamunschedulefromrunlo.md): Deprecated.
- [FSEventsCopyUUIDForDevice(\_:)](1444453-fseventscopyuuidfordevice.md)
- [FSEventsGetCurrentEventId()](1442917-fseventsgetcurrenteventid.md)
- [FSEventsGetLastEventIdForDeviceBeforeTime(\_:\_:)](1449772-fseventsgetlasteventidfordeviceb.md)
- [FSEventsPurgeEventsForDeviceUpToEventId(\_:\_:)](1447985-fseventspurgeeventsfordeviceupto.md)

### Enumerations

- [FSEventStreamCreateFlags](file_system_events/1455376-fseventstreamcreateflags.md)
- [FSEventStreamEventFlags](file_system_events/1455361-fseventstreameventflags.md)

### Data Types

- [FSEventStreamCallback](fseventstreamcallback.md)
- [FSEventStreamCreateFlags](fseventstreamcreateflags.md)
- [FSEventStreamEventFlags](fseventstreameventflags.md)
- [FSEventStreamEventId](fseventstreameventid.md)
- [FSEventStreamRef](fseventstreamref.md)

### Constants

- [kFSEventStreamEventExtendedDataPathKey](kfseventstreameventextendeddatapathkey.md)
- [kFSEventStreamEventExtendedFileIDKey](kfseventstreameventextendedfileidkey.md)

## See Also

### Related Documentation

- [File System Events Programming Guide](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/FSEvents_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005289)

# File System Events (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

Get notifications when the contents of a directory hierarchy change.

<a id="overview"></a>

## Overview

The file system events API provides a way for your application to ask for notification when the contents of a directory hierarchy are modified. For example, your application can use this to quickly detect when the user modifies a file within a project bundle using another application.

It also provides a lightweight way to determine whether the contents of a directory hierarchy have changed since your application last examined them. For example, a backup application can use this to determine what files have changed since a given time stamp or a given event ID.

## Topics

### Functions

- [FSEventStreamCopyDescription](1442676-fseventstreamcopydescription.md)
- [FSEventStreamCopyPathsBeingWatched](1447917-fseventstreamcopypathsbeingwatch.md)
- [FSEventStreamCreate](1443980-fseventstreamcreate.md)
- [FSEventStreamCreateRelativeToDevice](1447341-fseventstreamcreaterelativetodev.md)
- [FSEventStreamFlushAsync](1441727-fseventstreamflushasync.md)
- [FSEventStreamFlushSync](1445629-fseventstreamflushsync.md)
- [FSEventStreamGetDeviceBeingWatched](1449675-fseventstreamgetdevicebeingwatch.md)
- [FSEventStreamGetLatestEventId](1446030-fseventstreamgetlatesteventid.md)
- [FSEventStreamInvalidate](1446990-fseventstreaminvalidate.md)
- [FSEventStreamRelease](1445989-fseventstreamrelease.md)
- [FSEventStreamRetain](1444986-fseventstreamretain.md)
- [FSEventStreamScheduleWithRunLoop](1447824-fseventstreamschedulewithrunloop.md): Deprecated.
- [FSEventStreamSetDispatchQueue](1444164-fseventstreamsetdispatchqueue.md): Schedules the stream on the specified dispatch queue.
- [FSEventStreamSetExclusionPaths](1444666-fseventstreamsetexclusionpaths.md)
- [FSEventStreamShow](1444302-fseventstreamshow.md)
- [FSEventStreamStart](1448000-fseventstreamstart.md)
- [FSEventStreamStop](1447673-fseventstreamstop.md)
- [FSEventStreamUnscheduleFromRunLoop](1441982-fseventstreamunschedulefromrunlo.md): Deprecated.
- [FSEventsCopyUUIDForDevice](1444453-fseventscopyuuidfordevice.md)
- [FSEventsGetCurrentEventId](1442917-fseventsgetcurrenteventid.md)
- [FSEventsGetLastEventIdForDeviceBeforeTime](1449772-fseventsgetlasteventidfordeviceb.md)
- [FSEventsPurgeEventsForDeviceUpToEventId](1447985-fseventspurgeeventsfordeviceupto.md)

### Enumerations

- [FSEventStreamCreateFlags](1455376-fseventstreamcreateflags.md)
- [FSEventStreamEventFlags](1455361-fseventstreameventflags.md)

### Data Types

- [FSEventStreamCallback](fseventstreamcallback.md)
- [FSEventStreamCreateFlags](fseventstreamcreateflags.md)
- [FSEventStreamEventFlags](fseventstreameventflags.md)
- [FSEventStreamEventId](fseventstreameventid.md)
- [FSEventStreamRef](fseventstreamref.md)

### Constants

- [kFSEventStreamEventExtendedDataPathKey](kfseventstreameventextendeddatapathkey.md)
- [kFSEventStreamEventExtendedFileIDKey](kfseventstreameventextendedfileidkey.md)

## See Also

### Related Documentation

- [File System Events Programming Guide](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/FSEvents_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005289)
