> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/makearray(of:batchsize:)](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/makearray(of:batchsize:))

# makeArray(of:batchSize:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new array that contains a copy of the n-dimensional array descriptor’s data.

## Declaration

```swift
func makeArray<T>(of scalarType: T.Type, batchSize: Int = 1) -> [T]?
```

## Parameters

- `scalarType`: The data type of the data.
- `batchSize`: The number of batches of data.
