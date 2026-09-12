> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablespan/swapat(unchecked:unchecked:)](https://developer.apple.com/documentation/swift/mutablespan/swapat(unchecked:unchecked:))

# swapAt(unchecked:unchecked:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Exchange the elements at the two given indices.

## Declaration

```swift
mutating func swapAt(unchecked i: MutableSpan<Element>.Index, unchecked j: MutableSpan<Element>.Index)
```

## Parameters

- `i`: A valid index into this span.
- `j`: A valid index into this span.

<a id="discussion"></a>

## Discussion

This function does not validate `i` or `j`; this is an unsafe operation.
