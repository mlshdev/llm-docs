> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetserviceregister](https://developer.apple.com/documentation/cfnetwork/cfnetserviceregister)

# CFNetServiceRegister

**Interface language:** Objective-C

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.4)

Makes a CFNetService available on the network.

> Use [CFNetServiceRegisterWithOptions](cfnetserviceregisterwithoptions%28______%29.md) instead.

## Declaration

```objectivec
extern Boolean CFNetServiceRegister(CFNetServiceRef theService, CFStreamError *error);
```

## Parameters

- `theService`: The CFNetService to register; cannot be `NULL`. The registration will fail if the service doesn’t have a domain, a type, a name, and an IP address.
- `error`: A pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure that will be set to an error code and the error code’s domain if an error occurs; or `NULL` if you don’t want to receive the error code and its domain.

<a id="return-value"></a>

## Return Value

`TRUE` if an asynchronous service registration was started; `FALSE` if an asynchronous or synchronous registration failed or if a synchronous registration was canceled.

<a id="Discussion"></a>

## Discussion

If the service is to run in asynchronous mode, you must call [CFNetServiceSetClient](cfnetservicesetclient%28______%29.md) to associate a callback function with this CFNetService before calling this function.

When registering a service that runs in asynchronous mode, this function returns `TRUE` if the service contains all of the required attributes and the registration process can start. If the registration process completes successfully, the service is available on the network until you shut down the service by calling [CFNetServiceUnscheduleFromRunLoop](cfnetserviceunschedulefromrunloop%28______%29.md), [CFNetServiceSetClient](cfnetservicesetclient%28______%29.md), and [CFNetServiceCancel](cfnetservicecancel%28__%29.md). If the service does not contain all of the required attributes or if the registration process does not complete successfully, this function returns `FALSE`.

When registering a service that runs in synchronous mode, this function blocks until an error occurs, in which case this function returns `FALSE`. Until this function returns `FALSE`, the service is available on the network. To force this function to return `FALSE`, thereby shutting down the service, call [CFNetServiceCancel](cfnetservicecancel%28__%29.md) from another thread.

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
