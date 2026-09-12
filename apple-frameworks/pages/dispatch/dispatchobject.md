> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchobject](https://developer.apple.com/documentation/dispatch/dispatchobject)

# DispatchObject

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The base class for most dispatch types.

## Declaration

```swift
class DispatchObject
```

<a id="overview"></a>

## Overview

There are many types of dispatch objects, including [DispatchQueue](dispatchqueue.md), [DispatchGroup](dispatchgroup.md), and [DispatchSource](dispatchsource.md). The base dispatch object interfaces allow you to manage memory, pause and resume execution, define object context, log task data, and more.

## Topics

### Activating, Suspending, and Resuming

- [activate()](dispatchobject/activate%28%29.md): Activates the dispatch object.
- [resume()](dispatchobject/resume%28%29.md): Resumes the invocation of block objects on a dispatch object.
- [suspend()](dispatchobject/suspend%28%29.md): Suspends the invocation of block objects on a dispatch object.

### Changing the Assigned Target Queue

- [setTarget(queue:)](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.

## Relationships

### Inherits From

- [OS_object](../os/os_object.md)

### Inherited By

- [DispatchGroup](dispatchgroup.md)
- [DispatchIO](dispatchio.md)
- [DispatchQueue](dispatchqueue.md)
- [DispatchSemaphore](dispatchsemaphore.md)
- [DispatchSource](dispatchsource.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Dispatch Objects

- [DispatchPredicate](dispatchpredicate.md): Logical conditions to evaluate within a given execution context.
- [dispatchPrecondition(condition:)](dispatchprecondition%28condition_%29.md): Checks a dispatch condition necessary for further execution.
- [Dispatch Objects](dispatch-objects.md): The basic behaviors supported by all dispatch types.
