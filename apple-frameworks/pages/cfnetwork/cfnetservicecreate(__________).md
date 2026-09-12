> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicecreate(_:_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetservicecreate(_:_:_:_:_:))

# CFNetServiceCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an instance of a Network Service object.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```swift
func CFNetServiceCreate(_ alloc: CFAllocator?, _ domain: CFString, _ serviceType: CFString, _ name: CFString, _ port: Int32) -> Unmanaged<CFNetService>
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the current default allocator.
- `domain`: The domain in which the CFNetService is to be registered; cannot be `NULL`. Call [CFNetServiceBrowserCreate(\_:\_:\_:)](cfnetservicebrowsercreate%28______%29.md) and [CFNetServiceBrowserSearchForDomains(\_:\_:\_:)](cfnetservicebrowsersearchfordomains%28______%29.md) to get the registration domain.
- `name`: A unique name if the instance will be used to register a service. The name will become part of the instance name in the DNS records that will be created when the service is registered. If the instance will be used to resolve a service, the name should be the name of the machine or service that will be resolved.
- `port`: Local IP port, in host byte order, on which this service accepts connections. Pass zero to get placeholder service. With a placeholder service, the service will not be discovered by browsing, but a name conflict will occur if another client tries to register the same name. Most applications do not need to use placeholder service.

<a id="return-value"></a>

## Return Value

A new net service object, or `NULL` if the instance could not be created. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

If the service depends on information in DNS TXT records, call `CFNetServiceSetProtocolSpecificInformation`.

If the CFNetService is to run in asynchronous mode, call [CFNetServiceSetClient(\_:\_:\_:)](cfnetservicesetclient%28______%29.md) to prepare the service for running in asynchronous mode. Then call [CFNetServiceScheduleWithRunLoop(\_:\_:\_:)](cfnetserviceschedulewithrunloop%28______%29.md) to schedule the service on a run loop. Then call [CFNetServiceRegister](cfnetserviceregister.md) to make the service available.

If the CFNetService is to run in synchronous mode, call [CFNetServiceRegister](cfnetserviceregister.md).

To terminate a service that is running in asynchronous mode, call [CFNetServiceCancel(\_:)](cfnetservicecancel%28__%29.md) and [CFNetServiceUnscheduleFromRunLoop(\_:\_:\_:)](cfnetserviceunschedulefromrunloop%28______%29.md).

To terminate a service that is running in synchronous mode, call [CFNetServiceCancel(\_:)](cfnetservicecancel%28__%29.md).

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

# CFNetServiceCreate (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an instance of a Network Service object.

> Use nw_browser_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
extern CFNetServiceRefCFNetServiceCreate(CFAllocatorRef alloc, CFStringRef domain, CFStringRef serviceType, CFStringRef name, SInt32 port);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the current default allocator.
- `domain`: The domain in which the CFNetService is to be registered; cannot be `NULL`. Call [CFNetServiceBrowserCreate](cfnetservicebrowsercreate%28______%29.md) and [CFNetServiceBrowserSearchForDomains](cfnetservicebrowsersearchfordomains%28______%29.md) to get the registration domain.
- `name`: A unique name if the instance will be used to register a service. The name will become part of the instance name in the DNS records that will be created when the service is registered. If the instance will be used to resolve a service, the name should be the name of the machine or service that will be resolved.
- `port`: Local IP port, in host byte order, on which this service accepts connections. Pass zero to get placeholder service. With a placeholder service, the service will not be discovered by browsing, but a name conflict will occur if another client tries to register the same name. Most applications do not need to use placeholder service.

<a id="return-value"></a>

## Return Value

A new net service object, or `NULL` if the instance could not be created. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

If the service depends on information in DNS TXT records, call `CFNetServiceSetProtocolSpecificInformation`.

If the CFNetService is to run in asynchronous mode, call [CFNetServiceSetClient](cfnetservicesetclient%28______%29.md) to prepare the service for running in asynchronous mode. Then call [CFNetServiceScheduleWithRunLoop](cfnetserviceschedulewithrunloop%28______%29.md) to schedule the service on a run loop. Then call [CFNetServiceRegister](cfnetserviceregister.md) to make the service available.

If the CFNetService is to run in synchronous mode, call [CFNetServiceRegister](cfnetserviceregister.md).

To terminate a service that is running in asynchronous mode, call [CFNetServiceCancel](cfnetservicecancel%28__%29.md) and [CFNetServiceUnscheduleFromRunLoop](cfnetserviceunschedulefromrunloop%28______%29.md).

To terminate a service that is running in synchronous mode, call [CFNetServiceCancel](cfnetservicecancel%28__%29.md).

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
