> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetservicemonitorclientcallback](https://developer.apple.com/documentation/cfnetwork/cfnetservicemonitorclientcallback)

# CFNetServiceMonitorClientCallBack (Swift)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Defines a pointer to the callback function that is to be called when a monitored record type changes.

## Declaration

```swift
typealias CFNetServiceMonitorClientCallBack = (CFNetServiceMonitor, CFNetService?, CFNetServiceMonitorType, CFData?, UnsafeMutablePointer<CFStreamError>?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `theMonitor`: CFNetServiceMonitor for which the callback is being called.
- `theService`: CFNetService for which the callback is being called.
- `typeInfo`: Type of record that changed. For possible values, see [CFNetServiceMonitorType](cfnetservicemonitortype.md).
- `rdata`: Contents of the record that changed.
- `error`: Pointer to [CFStreamError](../corefoundation/cfstreamerror.md) structure whose `error` field contains an error code if an error occurred.
- `info`: Arbitrary pointer to the user-defined data that was specified in the `info` field of the `CFNetServiceClientContext` structure when the monitor was created by [CFNetServiceMonitorCreate(\_:\_:\_:\_:)](cfnetservicemonitorcreate%28________%29.md).

<a id="Discussion"></a>

## Discussion

If you name your callback `MyNetServiceMonitorClientCallBack`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

The callback function will be called when the monitored record type changes or when the monitor is stopped by calling [CFNetServiceMonitorStop(\_:\_:)](cfnetservicemonitorstop%28____%29.md).

## See Also

### Data Types

- [CFHostClientCallBack](cfhostclientcallback.md): Defines a pointer to the callback function that is called when an asynchronous resolution of a CFHost completes or an error occurs for an asynchronous CFHost resolution.
- [CFNetServiceBrowserClientCallBack](cfnetservicebrowserclientcallback.md): Defines a pointer to the callback function for a CFNetServiceBrowser.
- [CFNetServiceClientCallBack](cfnetserviceclientcallback.md): Defines a pointer to the callback function for a CFNetService.
- [CFNetDiagnosticStatus](cfnetdiagnosticstatus.md): Deprecated. A CFIndex type that is used to return status values from `CFNetDiagnostic` status and diagnostic functions. For a list of possible values, see [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md).

# CFNetServiceMonitorClientCallBack (Objective-C)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Defines a pointer to the callback function that is to be called when a monitored record type changes.

## Declaration

```objectivec
typedef void (*)(struct __CFNetServiceMonitor *, struct __CFNetService *, enum CFNetServiceMonitorType, const struct __CFData *, CFStreamError *, void *) CFNetServiceMonitorClientCallBack;
```

## Parameters

- `theMonitor`: CFNetServiceMonitor for which the callback is being called.
- `theService`: CFNetService for which the callback is being called.
- `typeInfo`: Type of record that changed. For possible values, see [CFNetServiceMonitorType](cfnetservicemonitortype.md).
- `rdata`: Contents of the record that changed.
- `error`: Pointer to [CFStreamError](../corefoundation/cfstreamerror.md) structure whose `error` field contains an error code if an error occurred.
- `info`: Arbitrary pointer to the user-defined data that was specified in the `info` field of the `CFNetServiceClientContext` structure when the monitor was created by [CFNetServiceMonitorCreate](cfnetservicemonitorcreate%28________%29.md).

<a id="Discussion"></a>

## Discussion

If you name your callback `MyNetServiceMonitorClientCallBack`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

The callback function will be called when the monitored record type changes or when the monitor is stopped by calling [CFNetServiceMonitorStop](cfnetservicemonitorstop%28____%29.md).

## See Also

### Data Types

- [CFHostClientCallBack](cfhostclientcallback.md): Defines a pointer to the callback function that is called when an asynchronous resolution of a CFHost completes or an error occurs for an asynchronous CFHost resolution.
- [CFNetServiceBrowserClientCallBack](cfnetservicebrowserclientcallback.md): Defines a pointer to the callback function for a CFNetServiceBrowser.
- [CFNetServiceClientCallBack](cfnetserviceclientcallback.md): Defines a pointer to the callback function for a CFNetService.
- [CFNetDiagnosticStatus](cfnetdiagnosticstatus.md): Deprecated. A CFIndex type that is used to return status values from `CFNetDiagnostic` status and diagnostic functions. For a list of possible values, see [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md).
