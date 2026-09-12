> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicemonitorcreate(_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetservicemonitorcreate(_:_:_:_:))

# CFNetServiceMonitorCreate(\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.4+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an instance of a NetServiceMonitor object that watches for record changes.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```swift
func CFNetServiceMonitorCreate(_ alloc: CFAllocator?, _ theService: CFNetService, _ clientCB: CFNetServiceMonitorClientCallBack, _ clientContext: UnsafeMutablePointer<CFNetServiceClientContext>) -> Unmanaged<CFNetServiceMonitor>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the current default allocator.
- `theService`: CFNetService to be monitored.
- `clientCB`: Pointer to callback function that is to be called when a record associated with `theService` changes; cannot be `NULL`.
- `clientContext`: Pointer to user-defined contextual information that is to be passed to the callback specified by `clientCB` when the callback is called; cannot be `NULL`. For details, see [CFNetServiceClientContext](cfnetserviceclientcontext.md).

<a id="return-value"></a>

## Return Value

A new instance of a CFNetServiceMonitor, or `NULL` if the monitor could not be created. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates a CFNetServiceMonitor that watches for changes in records associated with `theService`.

If the CFNetServiceMonitor is to run in asynchronous mode, call [CFNetServiceMonitorScheduleWithRunLoop(\_:\_:\_:)](cfnetservicemonitorschedulewithrunloop%28______%29.md) to schedule the monitor on a run loop. Then call [CFNetServiceMonitorStart(\_:\_:\_:)](cfnetservicemonitorstart%28______%29.md) to start monitoring. When a change occurs, the callback function specified by `clientCB` will be called. For details, see [CFNetServiceMonitorClientCallBack](cfnetservicemonitorclientcallback.md).

If the CFNetServiceMonitor is to run in synchronous mode, call [CFNetServiceMonitorStart(\_:\_:\_:)](cfnetservicemonitorstart%28______%29.md).

To stop a monitor that is running in asynchronous mode, call [CFNetServiceMonitorStop(\_:\_:)](cfnetservicemonitorstop%28____%29.md) and [CFNetServiceMonitorUnscheduleFromRunLoop(\_:\_:\_:)](cfnetservicemonitorunschedulefromrunloop%28______%29.md).

To stop a monitor that is running in synchronous mode, call [CFNetServiceMonitorStop(\_:\_:)](cfnetservicemonitorstop%28____%29.md).

If you no longer need to monitor record changes, call [CFNetServiceMonitorStop(\_:\_:)](cfnetservicemonitorstop%28____%29.md) to stop the monitor and then call [CFNetServiceMonitorInvalidate(\_:)](cfnetservicemonitorinvalidate%28__%29.md)to invalidate the monitor so it cannot be used again. Then call `CFRelease` to release the memory associated with CFNetServiceMonitorRef.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

## See Also

### Network Services

- [CFNetService](cfnetservice.md): An opaque reference representing a CFNetService.
- [CFNetServiceBrowser](cfnetservicebrowser.md): An opaque reference representing a CFNetServiceBrowser.
- [CFNetServiceBrowserFlags](cfnetservicebrowserflags.md): Flags that the system passes to net service browser callbacks.
- [CFNetServiceMonitor](cfnetservicemonitor.md): An opaque reference for a service monitor.
- [CFNetServiceMonitorType](cfnetservicemonitortype.md): Record type specifier used to tell a service monitor the type of record changes to watch for.
- [CFNetServiceClientContext](cfnetserviceclientcontext.md): A structure provided when a CFNetService is associated with a callback function or when a CFNetServiceBrowser is created.
- [CFNetServiceRegisterFlags](cfnetserviceregisterflags.md): Options to use when registering a service on the network.
- [CFNetServicesError](cfnetserviceserror.md): Error codes that may be returned by CFNetServices functions or passed to CFNetServices callback functions.
- [CFNetServiceBrowserInvalidate(\_:)](cfnetservicebrowserinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service browser object.
- [CFNetServiceBrowserScheduleWithRunLoop(\_:\_:\_:)](cfnetservicebrowserschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceBrowser on a run loop.
- [CFNetServiceBrowserCreate(\_:\_:\_:)](cfnetservicebrowsercreate%28______%29.md): Deprecated. Creates an instance of a Network Service browser object.
- [CFNetServiceBrowserGetTypeID()](cfnetservicebrowsergettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service browser object.
- [CFNetServiceBrowserSearchForDomains(\_:\_:\_:)](cfnetservicebrowsersearchfordomains%28______%29.md): Deprecated. Searches for domains.
- [CFNetServiceBrowserSearchForServices(\_:\_:\_:\_:)](cfnetservicebrowsersearchforservices%28________%29.md): Deprecated. Searches a domain for services of a specified type.
- [CFNetServiceBrowserStopSearch(\_:\_:)](cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.

# CFNetServiceMonitorCreate (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.4+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an instance of a NetServiceMonitor object that watches for record changes.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
extern CFNetServiceMonitorRefCFNetServiceMonitorCreate(CFAllocatorRef alloc, CFNetServiceRef theService, CFNetServiceMonitorClientCallBack clientCB, CFNetServiceClientContext *clientContext);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the current default allocator.
- `theService`: CFNetService to be monitored.
- `clientCB`: Pointer to callback function that is to be called when a record associated with `theService` changes; cannot be `NULL`.
- `clientContext`: Pointer to user-defined contextual information that is to be passed to the callback specified by `clientCB` when the callback is called; cannot be `NULL`. For details, see [CFNetServiceClientContext](cfnetserviceclientcontext.md).

<a id="return-value"></a>

## Return Value

A new instance of a CFNetServiceMonitor, or `NULL` if the monitor could not be created. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates a CFNetServiceMonitor that watches for changes in records associated with `theService`.

If the CFNetServiceMonitor is to run in asynchronous mode, call [CFNetServiceMonitorScheduleWithRunLoop](cfnetservicemonitorschedulewithrunloop%28______%29.md) to schedule the monitor on a run loop. Then call [CFNetServiceMonitorStart](cfnetservicemonitorstart%28______%29.md) to start monitoring. When a change occurs, the callback function specified by `clientCB` will be called. For details, see [CFNetServiceMonitorClientCallBack](cfnetservicemonitorclientcallback.md).

If the CFNetServiceMonitor is to run in synchronous mode, call [CFNetServiceMonitorStart](cfnetservicemonitorstart%28______%29.md).

To stop a monitor that is running in asynchronous mode, call [CFNetServiceMonitorStop](cfnetservicemonitorstop%28____%29.md) and [CFNetServiceMonitorUnscheduleFromRunLoop](cfnetservicemonitorunschedulefromrunloop%28______%29.md).

To stop a monitor that is running in synchronous mode, call [CFNetServiceMonitorStop](cfnetservicemonitorstop%28____%29.md).

If you no longer need to monitor record changes, call [CFNetServiceMonitorStop](cfnetservicemonitorstop%28____%29.md) to stop the monitor and then call [CFNetServiceMonitorInvalidate](cfnetservicemonitorinvalidate%28__%29.md)to invalidate the monitor so it cannot be used again. Then call `CFRelease` to release the memory associated with CFNetServiceMonitorRef.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

## See Also

### Network Services

- [CFNetServiceRef](cfnetservice.md): An opaque reference representing a CFNetService.
- [CFNetServiceBrowserRef](cfnetservicebrowser.md): An opaque reference representing a CFNetServiceBrowser.
- [CFNetServiceBrowserFlags](cfnetservicebrowserflags.md): Flags that the system passes to net service browser callbacks.
- [CFNetServiceMonitorRef](cfnetservicemonitor.md): An opaque reference for a service monitor.
- [CFNetServiceMonitorType](cfnetservicemonitortype.md): Record type specifier used to tell a service monitor the type of record changes to watch for.
- [CFNetServiceClientContext](cfnetserviceclientcontext.md): A structure provided when a CFNetService is associated with a callback function or when a CFNetServiceBrowser is created.
- [CFNetServiceRegisterFlags](cfnetserviceregisterflags.md): Options to use when registering a service on the network.
- [CFNetServicesError](cfnetserviceserror.md): Error codes that may be returned by CFNetServices functions or passed to CFNetServices callback functions.
- [CFNetServiceBrowserInvalidate](cfnetservicebrowserinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service browser object.
- [CFNetServiceBrowserScheduleWithRunLoop](cfnetservicebrowserschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceBrowser on a run loop.
- [CFNetServiceBrowserCreate](cfnetservicebrowsercreate%28______%29.md): Deprecated. Creates an instance of a Network Service browser object.
- [CFNetServiceBrowserGetTypeID](cfnetservicebrowsergettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service browser object.
- [CFNetServiceBrowserSearchForDomains](cfnetservicebrowsersearchfordomains%28______%29.md): Deprecated. Searches for domains.
- [CFNetServiceBrowserSearchForServices](cfnetservicebrowsersearchforservices%28________%29.md): Deprecated. Searches a domain for services of a specified type.
- [CFNetServiceBrowserStopSearch](cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
