> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/serialexecutor/issameexclusiveexecutioncontext(other:)-2dhzl](https://developer.apple.com/documentation/swift/serialexecutor/issameexclusiveexecutioncontext(other:)-2dhzl)

# isSameExclusiveExecutionContext(other:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

If this executor has complex equality semantics, and the runtime needs to compare two executors, it will first attempt the usual pointer-based equality / check, / and if it fails it will compare the types of both executors, if they are the same, / it will finally invoke this method, in an attempt to let the executor itself decide / if this and the `other` executor represent the same serial, exclusive, isolation context.

## Declaration

```swift
func isSameExclusiveExecutionContext(other: Self) -> Bool
```

## Parameters

- `other`: The executor to compare with.

<a id="return-value"></a>

## Return Value

`true`, if `self` and the `other` executor actually are mutually exclusive and it is safe–from a concurrency perspective–to execute code assuming one on the other.

<a id="discussion"></a>

## Discussion

This method must be implemented with great care, as wrongly returning `true` would allow / code from a different execution context (e.g. thread) to execute code which was intended to be isolated by another actor.

This check is not used when performing executor switching.

This check is used when performing [assertIsolated(\_:file:line:)](../actor/assertisolated%28__file_line_%29.md), [preconditionIsolated(\_:file:line:)](../actor/preconditionisolated%28__file_line_%29.md), [assumeIsolated(\_:file:line:)](../actor/assumeisolated%28__file_line_%29.md) and similar APIs which assert about the same “exclusive serial execution context”.
