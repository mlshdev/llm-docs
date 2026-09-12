> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicegetaddressing(_:)](https://developer.apple.com/documentation/cfnetwork/cfnetservicegetaddressing(_:))

# CFNetServiceGetAddressing(\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the IP addressing from a CFNetService.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```swift
func CFNetServiceGetAddressing(_ theService: CFNetService) -> Unmanaged<CFArray>?
```

## Parameters

- `theService`: The CFNetService whose IP addressing is to be obtained; cannot be `NULL`.

<a id="return-value"></a>

## Return Value

A CFArray containing a CFDataRef for each IP address returned, or `NULL`. Each CFDataRef consists of a `sockaddr` structure containing the IP address of the service. This function returns `NULL` if the service’s addressing is unknown because [CFNetServiceResolve](cfnetserviceresolve.md) has not been called for `theService`.

<a id="Discussion"></a>

## Discussion

This function gets the IP addressing from a CFNetService. Typically, the CFNetService was obtained by calling [CFNetServiceBrowserSearchForServices(\_:\_:\_:\_:)](cfnetservicebrowsersearchforservices%28________%29.md). Before calling this function, call [CFNetServiceResolve](cfnetserviceresolve.md) to update the CFNetService with its IP addressing.

<a id="Special-Considerations"></a>

### Special Considerations

This function gets the data in a thread-safe way, but the data itself is not safe if the service is altered from another thread.

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

# CFNetServiceGetAddressing (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the IP addressing from a CFNetService.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
extern CFArrayRefCFNetServiceGetAddressing(CFNetServiceRef theService);
```

## Parameters

- `theService`: The CFNetService whose IP addressing is to be obtained; cannot be `NULL`.

<a id="return-value"></a>

## Return Value

A CFArray containing a CFDataRef for each IP address returned, or `NULL`. Each CFDataRef consists of a `sockaddr` structure containing the IP address of the service. This function returns `NULL` if the service’s addressing is unknown because [CFNetServiceResolve](cfnetserviceresolve.md) has not been called for `theService`.

<a id="Discussion"></a>

## Discussion

This function gets the IP addressing from a CFNetService. Typically, the CFNetService was obtained by calling [CFNetServiceBrowserSearchForServices](cfnetservicebrowsersearchforservices%28________%29.md). Before calling this function, call [CFNetServiceResolve](cfnetserviceresolve.md) to update the CFNetService with its IP addressing.

<a id="Special-Considerations"></a>

### Special Considerations

This function gets the data in a thread-safe way, but the data itself is not safe if the service is altered from another thread.

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
