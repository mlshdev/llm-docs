> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhostclientcallback](https://developer.apple.com/documentation/cfnetwork/cfhostclientcallback)

# CFHostClientCallBack (Swift)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Defines a pointer to the callback function that is called when an asynchronous resolution of a CFHost completes or an error occurs for an asynchronous CFHost resolution.

## Declaration

```swift
typealias CFHostClientCallBack = (CFHost, CFHostInfoType, UnsafePointer<CFStreamError>?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `theHost`: The host for which an asynchronous resolution has been completed.
- `typeInfo`: Value of type `CFHostInfoType` representing the type of information (addresses, names, or reachability information) obtained by the completed resolution. See [CFHostInfoType](cfhostinfotype.md) for possible values.
- `error`: If the resolution failed, contains a [CFStreamError](../corefoundation/cfstreamerror.md) structure whose `error` field contains an error code.
- `info`: User-defined context information. The value pointed to by `info` is the same as the value pointed to by the `info` field of the [CFHostClientContext](cfhostclientcontext.md) structure that was provided when the host was associated with this callback function.

<a id="Discussion"></a>

## Discussion

If you name your callback `MyHostClientCallBack`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

The callback function for a CFHost object is called one or more times when an asynchronous resolution completes for the specified host, when an asynchronous resolution is cancelled, or when an error occurs during an asynchronous resolution.

## See Also

### Data Types

- [CFNetServiceBrowserClientCallBack](cfnetservicebrowserclientcallback.md): Defines a pointer to the callback function for a CFNetServiceBrowser.
- [CFNetServiceClientCallBack](cfnetserviceclientcallback.md): Defines a pointer to the callback function for a CFNetService.
- [CFNetServiceMonitorClientCallBack](cfnetservicemonitorclientcallback.md): Defines a pointer to the callback function that is to be called when a monitored record type changes.
- [CFNetDiagnosticStatus](cfnetdiagnosticstatus.md): Deprecated. A CFIndex type that is used to return status values from `CFNetDiagnostic` status and diagnostic functions. For a list of possible values, see [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md).

# CFHostClientCallBack (Objective-C)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Defines a pointer to the callback function that is called when an asynchronous resolution of a CFHost completes or an error occurs for an asynchronous CFHost resolution.

## Declaration

```objectivec
typedef void (*)(struct __CFHost *, enum CFHostInfoType, const CFStreamError *, void *) CFHostClientCallBack;
```

## Parameters

- `theHost`: The host for which an asynchronous resolution has been completed.
- `typeInfo`: Value of type `CFHostInfoType` representing the type of information (addresses, names, or reachability information) obtained by the completed resolution. See [CFHostInfoType](cfhostinfotype.md) for possible values.
- `error`: If the resolution failed, contains a [CFStreamError](../corefoundation/cfstreamerror.md) structure whose `error` field contains an error code.
- `info`: User-defined context information. The value pointed to by `info` is the same as the value pointed to by the `info` field of the [CFHostClientContext](cfhostclientcontext.md) structure that was provided when the host was associated with this callback function.

<a id="Discussion"></a>

## Discussion

If you name your callback `MyHostClientCallBack`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

The callback function for a CFHost object is called one or more times when an asynchronous resolution completes for the specified host, when an asynchronous resolution is cancelled, or when an error occurs during an asynchronous resolution.

## See Also

### Data Types

- [CFNetServiceBrowserClientCallBack](cfnetservicebrowserclientcallback.md): Defines a pointer to the callback function for a CFNetServiceBrowser.
- [CFNetServiceClientCallBack](cfnetserviceclientcallback.md): Defines a pointer to the callback function for a CFNetService.
- [CFNetServiceMonitorClientCallBack](cfnetservicemonitorclientcallback.md): Defines a pointer to the callback function that is to be called when a monitored record type changes.
- [CFNetDiagnosticStatus](cfnetdiagnosticstatus.md): Deprecated. A CFIndex type that is used to return status values from `CFNetDiagnostic` status and diagnostic functions. For a list of possible values, see [CFNetDiagnosticStatusValues](cfnetdiagnosticstatusvalues.md).
