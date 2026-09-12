> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhostgetnames(_:_:)](https://developer.apple.com/documentation/cfnetwork/cfhostgetnames(_:_:))

# CFHostGetNames(\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.3+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the names from a CFHost.

> Use Network framework instead, see deprecation notice in \<CFNetwork/CFHost.h\>

## Declaration

```swift
func CFHostGetNames(_ theHost: CFHost, _ hasBeenResolved: UnsafeMutablePointer<DarwinBoolean>?) -> Unmanaged<CFArray>?
```

## Parameters

- `theHost`: The host to examine. The host must have been previously resolved. (To resolve a host, call [CFHostStartInfoResolution(\_:\_:\_:)](cfhoststartinforesolution%28______%29.md).) This value must not be `NULL`.
- `hasBeenResolved`: On return, contains `TRUE` if names were available, otherwise `FALSE`. This value may be `NULL`.

<a id="return-value"></a>

## Return Value

An array containing the of names of `theHost`, or `NULL` if no names were available.

<a id="Discussion"></a>

## Discussion

This function gets the names in a thread-safe way, but the resulting data is not thread-safe. The data is returned as a “get” as opposed to a copy, so the data is not safe if the CFHost is altered from another thread.

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
- [CFHostGetReachability(\_:\_:)](cfhostgetreachability%28____%29.md): Deprecated. Gets reachability information from a host.
- [CFHostGetTypeID()](cfhostgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the CFHost opaque type.
- [CFHostScheduleWithRunLoop(\_:\_:\_:)](cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient(\_:\_:\_:)](cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostStartInfoResolution(\_:\_:\_:)](cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop(\_:\_:\_:)](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.

# CFHostGetNames (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.3+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the names from a CFHost.

> Use Network framework instead, see deprecation notice in \<CFNetwork/CFHost.h\>

## Declaration

```objectivec
extern CFArrayRefCFHostGetNames(CFHostRef theHost, Boolean *hasBeenResolved);
```

## Parameters

- `theHost`: The host to examine. The host must have been previously resolved. (To resolve a host, call [CFHostStartInfoResolution](cfhoststartinforesolution%28______%29.md).) This value must not be `NULL`.
- `hasBeenResolved`: On return, contains `TRUE` if names were available, otherwise `FALSE`. This value may be `NULL`.

<a id="return-value"></a>

## Return Value

An array containing the of names of `theHost`, or `NULL` if no names were available.

<a id="Discussion"></a>

## Discussion

This function gets the names in a thread-safe way, but the resulting data is not thread-safe. The data is returned as a “get” as opposed to a copy, so the data is not safe if the CFHost is altered from another thread.

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
- [CFHostGetReachability](cfhostgetreachability%28____%29.md): Deprecated. Gets reachability information from a host.
- [CFHostGetTypeID](cfhostgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the CFHost opaque type.
- [CFHostScheduleWithRunLoop](cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient](cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostStartInfoResolution](cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.
