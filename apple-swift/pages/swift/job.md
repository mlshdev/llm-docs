> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/job](https://developer.apple.com/documentation/swift/job)

# Job

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Deprecated equivalent of [ExecutorJob](executorjob.md).

## Declaration

```swift
@frozen struct Job
```

<a id="overview"></a>

## Overview

A unit of schedulable work.

Unless you’re implementing a scheduler, you don’t generally interact with jobs directly.

## Topics

### Initializers

- [init(\_:)](job/init%28__%29-6f0eq.md): Deprecated.
- [init(\_:)](job/init%28__%29-6pzn2.md): Deprecated.

### Instance Properties

- [description](job/description.md): Deprecated.
- [priority](job/priority.md): Deprecated.

### Instance Methods

- [runSynchronously(on:)](job/runsynchronously%28on_%29.md): Run this job on the passed in executor.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Deprecated

- [extractIsolation(\_:)](extractisolation%28__%29.md): Deprecated.
- [withCheckedContinuation(isolation:function:\_:)](withcheckedcontinuation%28isolation_function___%29.md): Deprecated. Source-compatibility overload; replaced by [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md).
- [withCheckedThrowingContinuation(isolation:function:\_:)](withcheckedthrowingcontinuation%28isolation_function___%29.md): Deprecated. Source-compatibility overload; replaced by [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md).
- [withUnsafeContinuation(isolation:\_:)](withunsafecontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md).
- [AnyActor](anyactor.md): Deprecated. Common marker protocol providing a shared “base” for both (local) `Actor` and (potentially remote) `DistributedActor` types.
- [ConcurrentValue](concurrentvalue.md): Deprecated.
- [PartialAsyncTask](partialasynctask.md): Deprecated.
- [UnsafeConcurrentValue](unsafeconcurrentvalue.md): Deprecated.
- [UnsafeSendable](unsafesendable.md): Deprecated. A type whose values can safely be passed across concurrency domains by copying, but which disables some safety checking at the conformance site.
- [UnsafeThrowingContinuation](unsafethrowingcontinuation.md): Deprecated.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md): Invokes the passed in closure with a unsafe continuation for the current task.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-7zhvy.md)
- [withUnsafeThrowingContinuation(isolation:\_:)](withunsafethrowingcontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md).
