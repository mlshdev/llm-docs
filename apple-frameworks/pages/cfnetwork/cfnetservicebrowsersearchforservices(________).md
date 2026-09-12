> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicebrowsersearchforservices(_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetservicebrowsersearchforservices(_:_:_:_:))

# CFNetServiceBrowserSearchForServices(\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Searches a domain for services of a specified type.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```swift
func CFNetServiceBrowserSearchForServices(_ browser: CFNetServiceBrowser, _ domain: CFString, _ serviceType: CFString, _ error: UnsafeMutablePointer<CFStreamError>?) -> Bool
```

## Parameters

- `browser`: The CFNetServiceBrowser, obtained by previously calling [CFNetServiceBrowserCreate(\_:\_:\_:)](cfnetservicebrowsercreate%28______%29.md), that is to perform the search; cannot be `NULL`.
- `domain`: The domain to search for the service type; cannot be `NULL`. To get the domains that are available for searching, call [CFNetServiceBrowserSearchForDomains(\_:\_:\_:)](cfnetservicebrowsersearchfordomains%28______%29.md).
- `error`: A pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure, that, if an error occurs, will be set to the error and the error’s domain and passed to your callback function. Pass `NULL` if you don’t want to receive the error that may occur as a result of this particular call.

<a id="return-value"></a>

## Return Value

`TRUE` if the search was started (asynchronous mode); `FALSE` if another search is already in progress for this CFNetServiceBrowser or if an error occurred.

<a id="Discussion"></a>

## Discussion

This function searches the specified domain for services that match the specified service type. The search continues until the search is canceled by calling [CFNetServiceBrowserStopSearch(\_:\_:)](cfnetservicebrowserstopsearch%28____%29.md). When a match is found, the callback function specified when the CFNetServiceBrowser was created is called and passed an instance of a CFNetService representing the service that was found.

In asynchronous mode, this function returns `TRUE` if the search was started. Otherwise, it returns `FALSE`.

In synchronous mode, this function blocks until the search is stopped by calling [CFNetServiceBrowserStopSearch(\_:\_:)](cfnetservicebrowserstopsearch%28____%29.md) from another thread, in which case this function returns `FALSE`, or until an error occurs.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

For any one CFNetServiceBrowser, only one domain search or one service search can be in progress at the same time.

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
- [CFNetServiceBrowserStopSearch(\_:\_:)](cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
- [CFNetServiceBrowserUnscheduleFromRunLoop(\_:\_:\_:)](cfnetservicebrowserunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceBrowser from a run loop and mode.

# CFNetServiceBrowserSearchForServices (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Searches a domain for services of a specified type.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
extern Boolean CFNetServiceBrowserSearchForServices(CFNetServiceBrowserRef browser, CFStringRef domain, CFStringRef serviceType, CFStreamError *error);
```

## Parameters

- `browser`: The CFNetServiceBrowser, obtained by previously calling [CFNetServiceBrowserCreate](cfnetservicebrowsercreate%28______%29.md), that is to perform the search; cannot be `NULL`.
- `domain`: The domain to search for the service type; cannot be `NULL`. To get the domains that are available for searching, call [CFNetServiceBrowserSearchForDomains](cfnetservicebrowsersearchfordomains%28______%29.md).
- `error`: A pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure, that, if an error occurs, will be set to the error and the error’s domain and passed to your callback function. Pass `NULL` if you don’t want to receive the error that may occur as a result of this particular call.

<a id="return-value"></a>

## Return Value

`TRUE` if the search was started (asynchronous mode); `FALSE` if another search is already in progress for this CFNetServiceBrowser or if an error occurred.

<a id="Discussion"></a>

## Discussion

This function searches the specified domain for services that match the specified service type. The search continues until the search is canceled by calling [CFNetServiceBrowserStopSearch](cfnetservicebrowserstopsearch%28____%29.md). When a match is found, the callback function specified when the CFNetServiceBrowser was created is called and passed an instance of a CFNetService representing the service that was found.

In asynchronous mode, this function returns `TRUE` if the search was started. Otherwise, it returns `FALSE`.

In synchronous mode, this function blocks until the search is stopped by calling [CFNetServiceBrowserStopSearch](cfnetservicebrowserstopsearch%28____%29.md) from another thread, in which case this function returns `FALSE`, or until an error occurs.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

For any one CFNetServiceBrowser, only one domain search or one service search can be in progress at the same time.

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
- [CFNetServiceBrowserStopSearch](cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
- [CFNetServiceBrowserUnscheduleFromRunLoop](cfnetservicebrowserunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceBrowser from a run loop and mode.
