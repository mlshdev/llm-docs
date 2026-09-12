> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/checkedcontinuation/init(continuation:function:)](https://developer.apple.com/documentation/swift/checkedcontinuation/init(continuation:function:))

# init(continuation:function:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a checked continuation from an unsafe continuation.

## Declaration

```swift
init(continuation: UnsafeContinuation<T, E>, function: String = #function)
```

## Parameters

- `continuation`: An instance of `UnsafeContinuation` that hasn’t yet been resumed. After passing the unsafe continuation to this initializer, don’t use it outside of this object.
- `function`: A string identifying the declaration that is the notional source for the continuation, used to identify the continuation in runtime diagnostics related to misuse of this continuation.

<a id="discussion"></a>

## Discussion

Instead of calling this initializer, most code calls the `withCheckedContinuation(function:_:)` or `withCheckedThrowingContinuation(function:_:)` function instead. You only need to initialize your own `CheckedContinuation<T, E>` if you already have an `UnsafeContinuation` you want to impose checking on.
