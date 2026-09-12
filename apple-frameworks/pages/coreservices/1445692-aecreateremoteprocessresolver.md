> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445692-aecreateremoteprocessresolver](https://developer.apple.com/documentation/coreservices/1445692-aecreateremoteprocessresolver)

# AECreateRemoteProcessResolver(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates an object for resolving a list of remote processes.

## Declaration

```swift
func AECreateRemoteProcessResolver(_ allocator: CFAllocator!, _ url: CFURL!) -> AERemoteProcessResolverRef!
```

## Parameters

- `allocator`: An object that is used to allocates and deallocate any Core Foundation types created or returned by this API. You can pass `kCFAllocatorDefault` to get the default allocation behavior. The allocator is based on `CFAllocatorRef`, an opaque data type described in the Core Foundation Reference Documentation.
- `url`: A `CFURL` reference identifying the remote host and port on which to look for processes. See the Core Foundation Reference Documentation for a description of the `CFURLRef` data type.

<a id="return_value"></a>

## Return Value

An [AERemoteProcessResolverRef](aeremoteprocessresolverref.md), which must be disposed of with [AEDisposeRemoteProcessResolver(\_:)](1442572-aedisposeremoteprocessresolver.md). A resolver can only be used one time; once it has obtained a list of remote processes from a server, or gotten an error, it can no longer be scheduled. To retrieve a new list of processes, create a new instance of this object.

<a id="discussion"></a>

## Discussion

You supply this function with the URL for a remote host and port; it returns a reference to a resolver object. To obtain a list of remote processes from the resolver, you can query it synchronously with [AERemoteProcessResolverGetProcesses(\_:\_:)](1444456-aeremoteprocessresolvergetproces.md), which blocks until the request completes (either successfully or with an error).

If asynchronous behavior is desired, you can optionally use [AERemoteProcessResolverScheduleWithRunLoop(\_:\_:\_:\_:\_:)](1447259-aeremoteprocessresolverschedulew.md) to schedule the resolver asynchronously on a run loop. If so, you supply a callback routine (see [AERemoteProcessResolverCallback](aeremoteprocessresolvercallback.md)) that is executed when the resolver completes. To obtain information about the remote processes, you will again have to call [AERemoteProcessResolverGetProcesses(\_:\_:)](1444456-aeremoteprocessresolvergetproces.md). 

A resolver can only be used once; once it has fetched the data or gotten an error it can no longer be scheduled. The data obtained by the resolver is a `CFArrayRef` of `CFDictionaryRef` objects. For information on the format of the returned remote process information, see the description of the function result for the function [AERemoteProcessResolverGetProcesses(\_:\_:)](1444456-aeremoteprocessresolvergetproces.md), and also [Remote Process Dictionary Keys](https://developer.apple.com/documentation/applicationservices/apple_event_manager/remote_process_dictionary_keys).

<a id="1770201"></a>

### Version-Notes

Thread safe starting in OS X v10.3.

## See Also

### Locating Processes on Remote Computers

- [AEDisposeRemoteProcessResolver(\_:)](1442572-aedisposeremoteprocessresolver.md): Disposes of an `AERemoteProcessResolverRef`.
- [AERemoteProcessResolverGetProcesses(\_:\_:)](1444456-aeremoteprocessresolvergetproces.md): Returns an array of objects containing information about processes running on a remote machine.
- [AERemoteProcessResolverScheduleWithRunLoop(\_:\_:\_:\_:\_:)](1447259-aeremoteprocessresolverschedulew.md): Schedules a resolver for execution on a given run loop in a given mode.

# AECreateRemoteProcessResolver (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates an object for resolving a list of remote processes.

## Declaration

```objectivec
AERemoteProcessResolverRef AECreateRemoteProcessResolver(CFAllocatorRef allocator, CFURLRef url);
```

## Parameters

- `allocator`: An object that is used to allocates and deallocate any Core Foundation types created or returned by this API. You can pass `kCFAllocatorDefault` to get the default allocation behavior. The allocator is based on `CFAllocatorRef`, an opaque data type described in the Core Foundation Reference Documentation.
- `url`: A `CFURL` reference identifying the remote host and port on which to look for processes. See the Core Foundation Reference Documentation for a description of the `CFURLRef` data type.

<a id="return_value"></a>

## Return Value

An [AERemoteProcessResolverRef](aeremoteprocessresolverref.md), which must be disposed of with [AEDisposeRemoteProcessResolver](1442572-aedisposeremoteprocessresolver.md). A resolver can only be used one time; once it has obtained a list of remote processes from a server, or gotten an error, it can no longer be scheduled. To retrieve a new list of processes, create a new instance of this object.

<a id="discussion"></a>

## Discussion

You supply this function with the URL for a remote host and port; it returns a reference to a resolver object. To obtain a list of remote processes from the resolver, you can query it synchronously with [AERemoteProcessResolverGetProcesses](1444456-aeremoteprocessresolvergetproces.md), which blocks until the request completes (either successfully or with an error).

If asynchronous behavior is desired, you can optionally use [AERemoteProcessResolverScheduleWithRunLoop](1447259-aeremoteprocessresolverschedulew.md) to schedule the resolver asynchronously on a run loop. If so, you supply a callback routine (see [AERemoteProcessResolverCallback](aeremoteprocessresolvercallback.md)) that is executed when the resolver completes. To obtain information about the remote processes, you will again have to call [AERemoteProcessResolverGetProcesses](1444456-aeremoteprocessresolvergetproces.md). 

A resolver can only be used once; once it has fetched the data or gotten an error it can no longer be scheduled. The data obtained by the resolver is a `CFArrayRef` of `CFDictionaryRef` objects. For information on the format of the returned remote process information, see the description of the function result for the function [AERemoteProcessResolverGetProcesses](1444456-aeremoteprocessresolvergetproces.md), and also [Remote Process Dictionary Keys](https://developer.apple.com/documentation/applicationservices/apple_event_manager/remote_process_dictionary_keys).

<a id="1770201"></a>

### Version-Notes

Thread safe starting in OS X v10.3.

## See Also

### Locating Processes on Remote Computers

- [AEDisposeRemoteProcessResolver](1442572-aedisposeremoteprocessresolver.md): Disposes of an `AERemoteProcessResolverRef`.
- [AERemoteProcessResolverGetProcesses](1444456-aeremoteprocessresolvergetproces.md): Returns an array of objects containing information about processes running on a remote machine.
- [AERemoteProcessResolverScheduleWithRunLoop](1447259-aeremoteprocessresolverschedulew.md): Schedules a resolver for execution on a given run loop in a given mode.
