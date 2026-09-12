> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicesetclient(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetservicesetclient(_:_:_:))

# CFNetServiceSetClient(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Associates a callback function with a CFNetService or disassociates a callback function from a CFNetService.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```swift
func CFNetServiceSetClient(_ theService: CFNetService, _ clientCB: CFNetServiceClientCallBack?, _ clientContext: UnsafeMutablePointer<CFNetServiceClientContext>?) -> Bool
```

## Parameters

- `theService`: The CFNetService; cannot be `NULL`.
- `clientCB`: The callback function that is to be associated with this CFNetService. If you are shutting down the service, set `clientCB` to `NULL` to disassociate from this CFNetService the callback function that was previously associated.
- `clientContext`: Context information to be used when `clientCB` is called; cannot be `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the client was set; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

The callback function specified by `clientCB` will be called to report IP addresses (in the case of [CFNetServiceResolve](cfnetserviceresolve.md)) or to report registration errors (in the case of [CFNetServiceRegister](cfnetserviceregister.md)).

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

For a CFNetService that will operate asynchronously, call this function and then call [CFNetServiceScheduleWithRunLoop(\_:\_:\_:)](cfnetserviceschedulewithrunloop%28______%29.md) to schedule the service on a run loop. Then call [CFNetServiceRegister](cfnetserviceregister.md) or [CFNetServiceResolve](cfnetserviceresolve.md).

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

# CFNetServiceSetClient (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Associates a callback function with a CFNetService or disassociates a callback function from a CFNetService.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
extern Boolean CFNetServiceSetClient(CFNetServiceRef theService, CFNetServiceClientCallBack clientCB, CFNetServiceClientContext *clientContext);
```

## Parameters

- `theService`: The CFNetService; cannot be `NULL`.
- `clientCB`: The callback function that is to be associated with this CFNetService. If you are shutting down the service, set `clientCB` to `NULL` to disassociate from this CFNetService the callback function that was previously associated.
- `clientContext`: Context information to be used when `clientCB` is called; cannot be `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the client was set; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

The callback function specified by `clientCB` will be called to report IP addresses (in the case of [CFNetServiceResolve](cfnetserviceresolve.md)) or to report registration errors (in the case of [CFNetServiceRegister](cfnetserviceregister.md)).

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

For a CFNetService that will operate asynchronously, call this function and then call [CFNetServiceScheduleWithRunLoop](cfnetserviceschedulewithrunloop%28______%29.md) to schedule the service on a run loop. Then call [CFNetServiceRegister](cfnetserviceregister.md) or [CFNetServiceResolve](cfnetserviceresolve.md).

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
