> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticstring/withutf8buffer(_:)](https://developer.apple.com/documentation/swift/staticstring/withutf8buffer(_:))

# withUTF8Buffer(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes the given closure with a buffer containing the static string’s UTF-8 code unit sequence (excluding the null terminator).

## Declaration

```swift
func withUTF8Buffer<R>(_ body: (UnsafeBufferPointer<UInt8>) -> R) -> R
```

## Parameters

- `body`: A closure that takes a buffer pointer to the static string’s UTF-8 code unit sequence as its sole argument. If the closure has a return value, that value is also used as the return value of the `withUTF8Buffer(_:)` method. The pointer argument is valid only for the duration of the method’s execution.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure.

<a id="discussion"></a>

## Discussion

This method works regardless of whether the static string stores a pointer or a single Unicode scalar value.

The pointer argument to `body` is valid only during the execution of `withUTF8Buffer(_:)`. Do not store or return the pointer for later use.
