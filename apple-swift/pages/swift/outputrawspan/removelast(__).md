> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan/removelast(_:)](https://developer.apple.com/documentation/swift/outputrawspan/removelast(_:))

# removeLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Remove the last n bytes from this span, returning the memory they occupy to the uninitialized state.

## Declaration

```swift
mutating func removeLast(_ n: Int)
```

## Parameters

- `n`: The number of bytes to remove. `n` must not be negative or greater than `byteCount`.

<a id="discussion"></a>

## Discussion

`n` must not be greater than `byteCount`.
