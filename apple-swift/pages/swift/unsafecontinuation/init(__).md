> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafecontinuation/init(_:)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Convert a non-copyable continuation to an [UnsafeContinuation](../unsafecontinuation.md).

## Declaration

```swift
init(_ continuation: consuming Continuation<T, E>)
```

<a id="discussion"></a>

## Discussion

An unsafe continuation may be escaped into contexts where the non-copyable semantics would not be able to statically enforce the resume-once semantics, however the correct use of the continuation is enforced in some way at runtime.
