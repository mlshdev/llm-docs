> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/withunsafemutablebytes(_:)](https://developer.apple.com/documentation/swift/mutablerawspan/withunsafemutablebytes(_:))

# withUnsafeMutableBytes(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Calls the given closure with a mutable pointer to the underlying bytes of the viewed contiguous storage.

## Declaration

```swift
mutating func withUnsafeMutableBytes<E, Result>(_ body: (UnsafeMutableRawBufferPointer) throws(E) -> Result) throws(E) -> Result where E : Error, Result : ~Copyable
```

## Parameters

- `body`: A closure with an `UnsafeMutableRawBufferPointer` parameter that points to the viewed contiguous storage. If `body` has a return value, that value is also used as the return value for the `withUnsafeMutableBytes(_:)` method. The closure’s parameter is valid only for the duration of its execution.

<a id="return-value"></a>

## Return Value

The return value of the `body` closure parameter.

<a id="discussion"></a>

## Discussion

The buffer pointer passed as an argument to `body` is valid only during the execution of `withUnsafeMutableBytes(_:)`. Do not store or return the pointer for later use.
