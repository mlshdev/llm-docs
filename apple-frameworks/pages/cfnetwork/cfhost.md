> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhost](https://developer.apple.com/documentation/cfnetwork/cfhost)

# CFHost (Swift)

**Framework:** CFNetwork  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An opaque reference representing an CFHost object.

## Declaration

```swift
class CFHost
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Hosts

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
- [CFHostStartInfoResolution(\_:\_:\_:)](cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop(\_:\_:\_:)](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.

# CFHostRef (Objective-C)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An opaque reference representing an CFHost object.

## Declaration

```objectivec
typedef struct __CFHost * CFHostRef;
```

## See Also

### Hosts

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
- [CFHostStartInfoResolution](cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop](cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.
