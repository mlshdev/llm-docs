> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafesendable](https://developer.apple.com/documentation/swift/unsafesendable)

# UnsafeSendable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type whose values can safely be passed across concurrency domains by copying, but which disables some safety checking at the conformance site.

> Use @unchecked Sendable instead

## Declaration

```swift
protocol UnsafeSendable : Sendable
```

<a id="overview"></a>

## Overview

Use an unchecked conformance to `Sendable` instead — for example:

```swift
struct MyStructure: @unchecked Sendable { ... }
```

## Relationships

### Inherits From

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
- [Job](job.md): Deprecated. Deprecated equivalent of [ExecutorJob](executorjob.md).
- [PartialAsyncTask](partialasynctask.md): Deprecated.
- [UnsafeConcurrentValue](unsafeconcurrentvalue.md): Deprecated.
- [UnsafeThrowingContinuation](unsafethrowingcontinuation.md): Deprecated.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md): Invokes the passed in closure with a unsafe continuation for the current task.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-7zhvy.md)
- [withUnsafeThrowingContinuation(isolation:\_:)](withunsafethrowingcontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md).
