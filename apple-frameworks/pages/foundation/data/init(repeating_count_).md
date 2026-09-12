> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/init(repeating:count:)](https://developer.apple.com/documentation/foundation/data/init(repeating:count:))

# init(repeating:count:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialize a `Data` with a repeating byte pattern

## Declaration

```swift
init(repeating repeatedValue: UInt8, count: Int)
```

## Parameters

- `repeatedValue`: A byte to initialize the pattern
- `count`: The number of bytes the data initially contains initialized to the repeatedValue
