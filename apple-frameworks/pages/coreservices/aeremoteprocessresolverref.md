> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/aeremoteprocessresolverref

# AERemoteProcessResolverRef (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

An opaque reference to an object that encapsulates the mechanism for obtaining a list of processes running on a remote machine.

## Declaration

```swift
typealias AERemoteProcessResolverRef = OpaquePointer
```

<a id="discussion"></a>

## Discussion

You create an instance of `AERemoteProcessResolverRef` by calling [AECreateRemoteProcessResolver(\_:\_:)](1445692-aecreateremoteprocessresolver.md), and you must disposed of it by calling [AEDisposeRemoteProcessResolver(\_:)](1442572-aedisposeremoteprocessresolver.md). An instance of this type is not a `CFType` (the base type used by all Core Foundation derived opaque types).

# AERemoteProcessResolverRef (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

An opaque reference to an object that encapsulates the mechanism for obtaining a list of processes running on a remote machine.

## Declaration

```objectivec
typedef struct AERemoteProcessResolver *AERemoteProcessResolverRef;
```

<a id="discussion"></a>

## Discussion

You create an instance of `AERemoteProcessResolverRef` by calling [AECreateRemoteProcessResolver](1445692-aecreateremoteprocessresolver.md), and you must disposed of it by calling [AEDisposeRemoteProcessResolver](1442572-aedisposeremoteprocessresolver.md). An instance of this type is not a `CFType` (the base type used by all Core Foundation derived opaque types).
