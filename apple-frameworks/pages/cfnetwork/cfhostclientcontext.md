> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhostclientcontext](https://developer.apple.com/documentation/cfnetwork/cfhostclientcontext)

# CFHostClientContext (Swift)

**Framework:** CFNetwork  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A structure containing user-defined data and callbacks for CFHost objects.

## Declaration

```swift
struct CFHostClientContext
```

## Topics

### Initializers

- [init()](cfhostclientcontext/init%28%29.md): Initializes an object that contains user-defined data and callbacks for a network host.
- [init(version:info:retain:release:copyDescription:)](cfhostclientcontext/init%28version_info_retain_release_copydescription_%29.md): Initializes an object that contains user-defined data and callbacks for a network host using the specified values.

### Instance Properties

- [copyDescription](cfhostclientcontext/copydescription.md): The callback used to create a descriptive string representation of the info pointer (or the data pointed to by the info pointer) for debugging purposes. This callback is called by the [CFCopyDescription(\_:)](../corefoundation/cfcopydescription%28__%29.md) function.
- [info](cfhostclientcontext/info.md): An arbitrary pointer to allocated memory containing user-defined data that can be associated with the host and that is passed to the callbacks.
- [release](cfhostclientcontext/release.md): The callback used to remove a retain previously added for the host on the info pointer.
- [retain](cfhostclientcontext/retain.md): The callback used to add a retain for the host on the info pointer for the life of the host, and may be used for temporary references the host needs to take. This callback returns the actual info pointer to store in the host, almost always just the pointer passed as the parameter.
- [version](cfhostclientcontext/version.md): The version number of the structure type passed as a parameter to the host client function. The only valid version number is `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Hosts

- [CFHost](cfhost.md): An opaque reference representing an CFHost object.
- [CFHostInfoType](cfhostinfotype.md): Values indicating the type of data that is to be resolved or the type of data that was resolved.
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

# CFHostClientContext (Objective-C)

**Framework:** CFNetwork  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A structure containing user-defined data and callbacks for CFHost objects.

## Declaration

```objectivec
struct CFHostClientContext;
```

## Topics

### Instance Properties

- [copyDescription](cfhostclientcontext/copydescription.md): The callback used to create a descriptive string representation of the info pointer (or the data pointed to by the info pointer) for debugging purposes. This callback is called by the [CFCopyDescription](../corefoundation/cfcopydescription%28__%29.md) function.
- [info](cfhostclientcontext/info.md): An arbitrary pointer to allocated memory containing user-defined data that can be associated with the host and that is passed to the callbacks.
- [release](cfhostclientcontext/release.md): The callback used to remove a retain previously added for the host on the info pointer.
- [retain](cfhostclientcontext/retain.md): The callback used to add a retain for the host on the info pointer for the life of the host, and may be used for temporary references the host needs to take. This callback returns the actual info pointer to store in the host, almost always just the pointer passed as the parameter.
- [version](cfhostclientcontext/version.md): The version number of the structure type passed as a parameter to the host client function. The only valid version number is `0`.

## See Also

### Hosts

- [CFHostRef](cfhost.md): An opaque reference representing an CFHost object.
- [CFHostInfoType](cfhostinfotype.md): Values indicating the type of data that is to be resolved or the type of data that was resolved.
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
