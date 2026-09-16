> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/outputspan/removelast(_:)

# removeLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Remove the last n elements of this span, returning the memory they occupy to the uninitialized state.

## Declaration

```swift
mutating func removeLast(_ n: Int)
```

## Parameters

- `n`: The number of elements to remove. `n` must not be negative or greater than `count`.

<a id="discussion"></a>

## Discussion

`n` must not be greater than `count`.
