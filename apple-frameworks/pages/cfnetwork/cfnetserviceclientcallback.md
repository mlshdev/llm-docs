> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetserviceclientcallback](https://developer.apple.com/documentation/cfnetwork/cfnetserviceclientcallback)

# CFNetServiceClientCallBack (Swift)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Defines a pointer to the callback function for a CFNetService.

## Declaration

```swift
typealias CFNetServiceClientCallBack = (CFNetService, UnsafeMutablePointer<CFStreamError>?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `theService`: CFNetService associated with this callback function.
- `error`: Pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure whose `error` field contain may contain an error code.
- `info`: User-defined context information. The value of `info` is the same as the value of the `info` field of the [CFNetServiceClientContext](cfnetserviceclientcontext.md) structure that was provided when [CFNetServiceSetClient(\_:\_:\_:)](cfnetservicesetclient%28______%29.md) was called for the CFNetService associated with this callback function.

<a id="Discussion"></a>

## Discussion

If you name your callback `MyNetServiceClientCallBack`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

Your callback function will be called when there are results of resolving a CFNetService to report or when there are registration errors to report. In the case of resolution, if the service has more than one IP address, your callback will be called once for each address.

## See Also

### Data Types

- [CFHostClientCallBack](cfhostclientcallback.md): Defines a pointer to the callback function that is called when an asynchronous resolution of a CFHost completes or an error occurs for an asynchronous CFHost resolution.
- [CFNetServiceBrowserClientCallBack](cfnetservicebrowserclientcallback.md): Defines a pointer to the callback function for a CFNetServiceBrowser.
- [CFNetServiceMonitorClientCallBack](cfnetservicemonitorclientcallback.md): Defines a pointer to the callback function that is to be called when a monitored record type changes.
- [CFNetDiagnosticStatus](cfnetdiagnosticstatus.md): Deprecated. A CFIndex type that is used to return status values from `CFNetDiagnostic` status and diagnostic functions. For a list of possible values, see [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md).

# CFNetServiceClientCallBack (Objective-C)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Defines a pointer to the callback function for a CFNetService.

## Declaration

```objectivec
typedef void (*)(struct __CFNetService *, CFStreamError *, void *) CFNetServiceClientCallBack;
```

## Parameters

- `theService`: CFNetService associated with this callback function.
- `error`: Pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure whose `error` field contain may contain an error code.
- `info`: User-defined context information. The value of `info` is the same as the value of the `info` field of the [CFNetServiceClientContext](cfnetserviceclientcontext.md) structure that was provided when [CFNetServiceSetClient](cfnetservicesetclient%28______%29.md) was called for the CFNetService associated with this callback function.

<a id="Discussion"></a>

## Discussion

If you name your callback `MyNetServiceClientCallBack`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

Your callback function will be called when there are results of resolving a CFNetService to report or when there are registration errors to report. In the case of resolution, if the service has more than one IP address, your callback will be called once for each address.

## See Also

### Data Types

- [CFHostClientCallBack](cfhostclientcallback.md): Defines a pointer to the callback function that is called when an asynchronous resolution of a CFHost completes or an error occurs for an asynchronous CFHost resolution.
- [CFNetServiceBrowserClientCallBack](cfnetservicebrowserclientcallback.md): Defines a pointer to the callback function for a CFNetServiceBrowser.
- [CFNetServiceMonitorClientCallBack](cfnetservicemonitorclientcallback.md): Defines a pointer to the callback function that is to be called when a monitored record type changes.
- [CFNetDiagnosticStatus](cfnetdiagnosticstatus.md): Deprecated. A CFIndex type that is used to return status values from `CFNetDiagnostic` status and diagnostic functions. For a list of possible values, see [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md).
