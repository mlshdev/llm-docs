> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhostgettypeid()](https://developer.apple.com/documentation/cfnetwork/cfhostgettypeid())

# CFHostGetTypeID() (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.3+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the Core Foundation type identifier for the CFHost opaque type.

> Use Network framework instead, see deprecation notice in \<CFNetwork/CFHost.h\>

## Declaration

```swift
func CFHostGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the CFHost opaque type.

<a id="Discussion"></a>

## Discussion

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
- [CFHostScheduleWithRunLoop(\_:\_:\_:)](cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient(\_:\_:\_:)](cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostStartInfoResolution(\_:\_:\_:)](cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop(\_:\_:\_:)](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.

# CFHostGetTypeID (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.3+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Gets the Core Foundation type identifier for the CFHost opaque type.

> Use Network framework instead, see deprecation notice in \<CFNetwork/CFHost.h\>

## Declaration

```objectivec
extern CFTypeID CFHostGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for the CFHost opaque type.

<a id="Discussion"></a>

## Discussion

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
- [CFHostScheduleWithRunLoop](cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient](cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostStartInfoResolution](cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.
