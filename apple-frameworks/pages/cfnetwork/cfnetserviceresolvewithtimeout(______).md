> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetserviceresolvewithtimeout(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetserviceresolvewithtimeout(_:_:_:))

# CFNetServiceResolveWithTimeout(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.4+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the IP address or addresses for a CFNetService.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```swift
func CFNetServiceResolveWithTimeout(_ theService: CFNetService, _ timeout: CFTimeInterval, _ error: UnsafeMutablePointer<CFStreamError>?) -> Bool
```

## Parameters

- `theService`: The CFNetService to resolve; cannot be `NULL`. The resolution will fail if the service doesn’t have a domain, a type, and a name.
- `timeout`: Value of type `CFTimeInterval` specifying the maximum amount of time allowed to perform the resolution. If the resolution is not performed within the specified amount of time, a timeout error will be returned. If `timeout` is less than or equal to zero, an infinite amount of time is allowed.
- `error`: Pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure that will be set to an error code and the error code’s domain if an error occurs; or `NULL` if you don’t want to receive the error code and its domain.

<a id="return-value"></a>

## Return Value

`TRUE` if an asynchronous service resolution was started or if a synchronous service resolution updated the CFNetService; `FALSE` if an asynchronous or synchronous resolution failed or timed out, or if a synchronous resolution was canceled.

<a id="Discussion"></a>

## Discussion

This function updates the specified CFNetService with the IP address or addresses associated with the service. Call [CFNetServiceGetAddressing(\_:)](cfnetservicegetaddressing%28__%29.md) to get the addresses.

When resolving a service that runs in asynchronous mode, this function returns `TRUE` if the CFNetService has a domain, type, and name, and the underlying resolution process was started. Otherwise, this function returns `FALSE`. Once started, the resolution continues until it is canceled by calling [CFNetServiceCancel(\_:)](cfnetservicecancel%28__%29.md).

When resolving a service that runs in synchronous mode, this function blocks until the CFNetService is updated with at least one IP address, until an error occurs, or until [CFNetServiceCancel(\_:)](cfnetservicecancel%28__%29.md) is called.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

If the service will be used in asynchronous mode, you must call [CFNetServiceSetClient(\_:\_:\_:)](cfnetservicesetclient%28______%29.md) before calling this function.

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

# CFNetServiceResolveWithTimeout (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.4+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the IP address or addresses for a CFNetService.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
extern Boolean CFNetServiceResolveWithTimeout(CFNetServiceRef theService, CFTimeInterval timeout, CFStreamError *error);
```

## Parameters

- `theService`: The CFNetService to resolve; cannot be `NULL`. The resolution will fail if the service doesn’t have a domain, a type, and a name.
- `timeout`: Value of type `CFTimeInterval` specifying the maximum amount of time allowed to perform the resolution. If the resolution is not performed within the specified amount of time, a timeout error will be returned. If `timeout` is less than or equal to zero, an infinite amount of time is allowed.
- `error`: Pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure that will be set to an error code and the error code’s domain if an error occurs; or `NULL` if you don’t want to receive the error code and its domain.

<a id="return-value"></a>

## Return Value

`TRUE` if an asynchronous service resolution was started or if a synchronous service resolution updated the CFNetService; `FALSE` if an asynchronous or synchronous resolution failed or timed out, or if a synchronous resolution was canceled.

<a id="Discussion"></a>

## Discussion

This function updates the specified CFNetService with the IP address or addresses associated with the service. Call [CFNetServiceGetAddressing](cfnetservicegetaddressing%28__%29.md) to get the addresses.

When resolving a service that runs in asynchronous mode, this function returns `TRUE` if the CFNetService has a domain, type, and name, and the underlying resolution process was started. Otherwise, this function returns `FALSE`. Once started, the resolution continues until it is canceled by calling [CFNetServiceCancel](cfnetservicecancel%28__%29.md).

When resolving a service that runs in synchronous mode, this function blocks until the CFNetService is updated with at least one IP address, until an error occurs, or until [CFNetServiceCancel](cfnetservicecancel%28__%29.md) is called.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

If the service will be used in asynchronous mode, you must call [CFNetServiceSetClient](cfnetservicesetclient%28______%29.md) before calling this function.

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
