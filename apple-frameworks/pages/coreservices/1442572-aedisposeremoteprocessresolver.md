> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442572-aedisposeremoteprocessresolver](https://developer.apple.com/documentation/coreservices/1442572-aedisposeremoteprocessresolver)

# AEDisposeRemoteProcessResolver(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Disposes of an `AERemoteProcessResolverRef`.

## Declaration

```swift
func AEDisposeRemoteProcessResolver(_ ref: AERemoteProcessResolverRef!)
```

## Parameters

- `ref`: The [AERemoteProcessResolverRef](aeremoteprocessresolverref.md) to dispose of. Acquired from a previous call to [AECreateRemoteProcessResolver(\_:\_:)](1445692-aecreateremoteprocessresolver.md).

<a id="discussion"></a>

## Discussion

If this resolver is currently scheduled on a run loop, it is unscheduled, and the asynchronous callback is not executed.

<a id="1770202"></a>

### Version-Notes

Thread safe starting in OS X v10.3.

## See Also

### Locating Processes on Remote Computers

- [AECreateRemoteProcessResolver(\_:\_:)](1445692-aecreateremoteprocessresolver.md): Creates an object for resolving a list of remote processes.
- [AERemoteProcessResolverGetProcesses(\_:\_:)](1444456-aeremoteprocessresolvergetproces.md): Returns an array of objects containing information about processes running on a remote machine.
- [AERemoteProcessResolverScheduleWithRunLoop(\_:\_:\_:\_:\_:)](1447259-aeremoteprocessresolverschedulew.md): Schedules a resolver for execution on a given run loop in a given mode.

# AEDisposeRemoteProcessResolver (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Disposes of an `AERemoteProcessResolverRef`.

## Declaration

```objectivec
void AEDisposeRemoteProcessResolver(AERemoteProcessResolverRef ref);
```

## Parameters

- `ref`: The [AERemoteProcessResolverRef](aeremoteprocessresolverref.md) to dispose of. Acquired from a previous call to [AECreateRemoteProcessResolver](1445692-aecreateremoteprocessresolver.md).

<a id="discussion"></a>

## Discussion

If this resolver is currently scheduled on a run loop, it is unscheduled, and the asynchronous callback is not executed.

<a id="1770202"></a>

### Version-Notes

Thread safe starting in OS X v10.3.

## See Also

### Locating Processes on Remote Computers

- [AECreateRemoteProcessResolver](1445692-aecreateremoteprocessresolver.md): Creates an object for resolving a list of remote processes.
- [AERemoteProcessResolverGetProcesses](1444456-aeremoteprocessresolvergetproces.md): Returns an array of objects containing information about processes running on a remote machine.
- [AERemoteProcessResolverScheduleWithRunLoop](1447259-aeremoteprocessresolverschedulew.md): Schedules a resolver for execution on a given run loop in a given mode.
