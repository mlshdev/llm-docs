> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyactor](https://developer.apple.com/documentation/swift/anyactor)

# AnyActor

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Common marker protocol providing a shared “base” for both (local) `Actor` and (potentially remote) `DistributedActor` types.

> Use 'any Actor' with 'DistributedActor.asLocalActor' instead

## Declaration

```swift
typealias AnyActor = AnyObject & Sendable
```

<a id="discussion"></a>

## Discussion

The `AnyActor` marker protocol generalizes over all actor types, including distributed ones. In practice, this protocol can be used to restrict protocols, or generic parameters to only be usable with actors, which provides the guarantee that calls may be safely made on instances of given type without worrying about the thread-safety of it – as they are guaranteed to follow the actor-style isolation semantics.

While both local and distributed actors are conceptually “actors”, there are some important isolation model differences between the two, which make it impossible for one to refine the other.

## See Also

### Deprecated

- [extractIsolation(\_:)](extractisolation%28__%29.md): Deprecated.
- [withCheckedContinuation(isolation:function:\_:)](withcheckedcontinuation%28isolation_function___%29.md): Deprecated. Source-compatibility overload; replaced by [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md).
- [withCheckedThrowingContinuation(isolation:function:\_:)](withcheckedthrowingcontinuation%28isolation_function___%29.md): Deprecated. Source-compatibility overload; replaced by [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md).
- [withUnsafeContinuation(isolation:\_:)](withunsafecontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md).
- [ConcurrentValue](concurrentvalue.md): Deprecated.
- [Job](job.md): Deprecated. Deprecated equivalent of [ExecutorJob](executorjob.md).
- [PartialAsyncTask](partialasynctask.md): Deprecated.
- [UnsafeConcurrentValue](unsafeconcurrentvalue.md): Deprecated.
- [UnsafeSendable](unsafesendable.md): Deprecated. A type whose values can safely be passed across concurrency domains by copying, but which disables some safety checking at the conformance site.
- [UnsafeThrowingContinuation](unsafethrowingcontinuation.md): Deprecated.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md): Invokes the passed in closure with a unsafe continuation for the current task.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-7zhvy.md)
- [withUnsafeThrowingContinuation(isolation:\_:)](withunsafethrowingcontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md).
