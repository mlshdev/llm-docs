> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aeremoteprocessresolvercontext](https://developer.apple.com/documentation/coreservices/aeremoteprocessresolvercontext)

# AERemoteProcessResolverContext (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Supplied as a parameter when performing asynchronous resolutionof remote processes.

## Declaration

```swift
struct AERemoteProcessResolverContext
```

<a id="overview"></a>

## Overview

When you call [AERemoteProcessResolverScheduleWithRunLoop(\_:\_:\_:\_:\_:)](1447259-aeremoteprocessresolverschedulew.md) forasynchronous resolution, you supply a reference to a structure ofthis type, along with a reference to a callback routine, definedby [AERemoteProcessResolverCallback](aeremoteprocessresolvercallback.md).The context is copied and the info pointer retained. When the callbackis made, the info pointer is passed to the callback.

## Topics

### Initializers

- [init()](aeremoteprocessresolvercontext/1449429-init.md)
- [init(version:info:retain:release:copyDescription:)](aeremoteprocessresolvercontext/1792092-init.md)

### Instance Properties

- [copyDescription](aeremoteprocessresolvercontext/1442771-copydescription.md): A prototype for a function callback that providesa description of the specified data. Called on the info pointer.This field may be `NULL`.
- [info](aeremoteprocessresolvercontext/1449518-info.md): A pointer to arbitrary information. The pointeris retained and passed to the callback, allowing you to provideinformation to that routine.
- [release](aeremoteprocessresolvercontext/1444738-release.md): A prototype for a function callback that releasesthe specified data. Called on the info pointer. This field may be `NULL`.
- [retain](aeremoteprocessresolvercontext/1450097-retain.md): A prototype for a function callback that retainsthe specified data. Called on the info pointer. This field may be `NULL`.
- [version](aeremoteprocessresolvercontext/1445231-version.md): This should be set to zero (0).

# AERemoteProcessResolverContext (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Supplied as a parameter when performing asynchronous resolutionof remote processes.

## Declaration

```objectivec
typedef struct AERemoteProcessResolverContext {
    ...
} AERemoteProcessResolverContext;
```

<a id="overview"></a>

## Overview

When you call [AERemoteProcessResolverScheduleWithRunLoop](1447259-aeremoteprocessresolverschedulew.md) forasynchronous resolution, you supply a reference to a structure ofthis type, along with a reference to a callback routine, definedby [AERemoteProcessResolverCallback](aeremoteprocessresolvercallback.md).The context is copied and the info pointer retained. When the callbackis made, the info pointer is passed to the callback.

## Topics

### Instance Properties

- [copyDescription](aeremoteprocessresolvercontext/1442771-copydescription.md): A prototype for a function callback that providesa description of the specified data. Called on the info pointer.This field may be `NULL`.
- [info](aeremoteprocessresolvercontext/1449518-info.md): A pointer to arbitrary information. The pointeris retained and passed to the callback, allowing you to provideinformation to that routine.
- [release](aeremoteprocessresolvercontext/1444738-release.md): A prototype for a function callback that releasesthe specified data. Called on the info pointer. This field may be `NULL`.
- [retain](aeremoteprocessresolvercontext/1450097-retain.md): A prototype for a function callback that retainsthe specified data. Called on the info pointer. This field may be `NULL`.
- [version](aeremoteprocessresolvercontext/1445231-version.md): This should be set to zero (0).
