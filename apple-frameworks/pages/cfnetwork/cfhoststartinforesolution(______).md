> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhoststartinforesolution(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhoststartinforesolution(_:_:_:))

# CFHostStartInfoResolution(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.3+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts resolution for a host object.

> Use Network framework instead, see deprecation notice in \<CFNetwork/CFHost.h\>

## Declaration

```swift
func CFHostStartInfoResolution(_ theHost: CFHost, _ info: CFHostInfoType, _ error: UnsafeMutablePointer<CFStreamError>?) -> Bool
```

## Parameters

- `theHost`: The host, obtained by previously calling [CFHostCreateCopy(\_:\_:)](cfhostcreatecopy%28____%29.md), [CFHostCreateWithAddress(\_:\_:)](cfhostcreatewithaddress%28____%29.md), or [CFHostCreateWithName(\_:\_:)](cfhostcreatewithname%28____%29.md), that is to be resolved. This value must not be `NULL`.
- `info`: A value of type `CFHostInfoType` specifying the type of information that is to be retrieved. See [CFHostInfoType](cfhostinfotype.md) for possible values.
- `error`: A pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure, that, if an error occurs, is set to the error and the error’s domain. In synchronous mode, the error indicates why resolution failed, and in asynchronous mode, the error indicates why resolution failed to start.

<a id="return-value"></a>

## Return Value

`TRUE` if the resolution was started (asynchronous mode); `FALSE` if another resolution is already in progress for `theHost` or if an error occurred.

<a id="Discussion"></a>

## Discussion

This function retrieves the information specified by `info` and stores it in the host.

In synchronous mode, this function blocks until the resolution has completed, in which case this function returns `TRUE`, until the resolution is stopped by calling [CFHostCancelInfoResolution(\_:\_:)](cfhostcancelinforesolution%28____%29.md) from another thread, in which case this function returns `FALSE`, or until an error occurs.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

## See Also

### Hosts

- [CFHost](cfhost.md): An opaque reference representing an CFHost object.
- [CFHostInfoType](cfhostinfotype.md): Values indicating the type of data that is to be resolved or the type of data that was resolved.
- [CFHostClientContext](cfhostclientcontext.md): A structure containing user-defined data and callbacks for CFHost objects.
- [CFHostCancelInfoResolution(\_:\_:)](cfhostcancelinforesolution%28____%29.md): Deprecated. Cancels the resolution of a host.
- [CFHostCreateCopy(\_:\_:)](cfhostcreatecopy%28____%29.md): Deprecated. Creates a new host object by copying.
- [CFHostCreateWithAddress(\_:\_:)](cfhostcreatewithaddress%28____%29.md): Deprecated. Uses an address to create an instance of a host object.
- [CFHostCreateWithName(\_:\_:)](cfhostcreatewithname%28____%29.md): Deprecated. Uses a name to create an instance of a host object.
- [CFHostGetAddressing(\_:\_:)](cfhostgetaddressing%28____%29.md): Deprecated. Gets the addresses from a host.
- [CFHostGetNames(\_:\_:)](cfhostgetnames%28____%29.md): Deprecated. Gets the names from a CFHost.
- [CFHostGetReachability(\_:\_:)](cfhostgetreachability%28____%29.md): Deprecated. Gets reachability information from a host.
- [CFHostGetTypeID()](cfhostgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the CFHost opaque type.
- [CFHostScheduleWithRunLoop(\_:\_:\_:)](cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient(\_:\_:\_:)](cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostUnscheduleFromRunLoop(\_:\_:\_:)](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.

# CFHostStartInfoResolution (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.3+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts resolution for a host object.

> Use Network framework instead, see deprecation notice in \<CFNetwork/CFHost.h\>

## Declaration

```objectivec
extern Boolean CFHostStartInfoResolution(CFHostRef theHost, CFHostInfoType info, CFStreamError *error);
```

## Parameters

- `theHost`: The host, obtained by previously calling [CFHostCreateCopy](cfhostcreatecopy%28____%29.md), [CFHostCreateWithAddress](cfhostcreatewithaddress%28____%29.md), or [CFHostCreateWithName](cfhostcreatewithname%28____%29.md), that is to be resolved. This value must not be `NULL`.
- `info`: A value of type `CFHostInfoType` specifying the type of information that is to be retrieved. See [CFHostInfoType](cfhostinfotype.md) for possible values.
- `error`: A pointer to a [CFStreamError](../corefoundation/cfstreamerror.md) structure, that, if an error occurs, is set to the error and the error’s domain. In synchronous mode, the error indicates why resolution failed, and in asynchronous mode, the error indicates why resolution failed to start.

<a id="return-value"></a>

## Return Value

`TRUE` if the resolution was started (asynchronous mode); `FALSE` if another resolution is already in progress for `theHost` or if an error occurred.

<a id="Discussion"></a>

## Discussion

This function retrieves the information specified by `info` and stores it in the host.

In synchronous mode, this function blocks until the resolution has completed, in which case this function returns `TRUE`, until the resolution is stopped by calling [CFHostCancelInfoResolution](cfhostcancelinforesolution%28____%29.md) from another thread, in which case this function returns `FALSE`, or until an error occurs.

<a id="Special-Considerations"></a>

### Special Considerations

This function is thread safe.

## See Also

### Hosts

- [CFHostRef](cfhost.md): An opaque reference representing an CFHost object.
- [CFHostInfoType](cfhostinfotype.md): Values indicating the type of data that is to be resolved or the type of data that was resolved.
- [CFHostClientContext](cfhostclientcontext.md): A structure containing user-defined data and callbacks for CFHost objects.
- [CFHostCancelInfoResolution](cfhostcancelinforesolution%28____%29.md): Deprecated. Cancels the resolution of a host.
- [CFHostCreateCopy](cfhostcreatecopy%28____%29.md): Deprecated. Creates a new host object by copying.
- [CFHostCreateWithAddress](cfhostcreatewithaddress%28____%29.md): Deprecated. Uses an address to create an instance of a host object.
- [CFHostCreateWithName](cfhostcreatewithname%28____%29.md): Deprecated. Uses a name to create an instance of a host object.
- [CFHostGetAddressing](cfhostgetaddressing%28____%29.md): Deprecated. Gets the addresses from a host.
- [CFHostGetNames](cfhostgetnames%28____%29.md): Deprecated. Gets the names from a CFHost.
- [CFHostGetReachability](cfhostgetreachability%28____%29.md): Deprecated. Gets reachability information from a host.
- [CFHostGetTypeID](cfhostgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the CFHost opaque type.
- [CFHostScheduleWithRunLoop](cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient](cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostUnscheduleFromRunLoop](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.
