> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputspan/append(repeating:count:)](https://developer.apple.com/documentation/swift/outputspan/append(repeating:count:))

# append(repeating:count:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Repeatedly append an element to this span.

## Declaration

```swift
mutating func append(repeating repeatedValue: Element, count: Int)
```

## Parameters

- `repeatedValue`: The element to append repeatedly.
- `count`: The number of times to append `repeatedValue`. `count` must not exceed `freeCapacity`.
