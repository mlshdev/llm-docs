> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/randomsplit(by:using:)-500fy](https://developer.apple.com/documentation/swift/sequence/randomsplit(by:using:)-500fy)

# randomSplit(by:using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Generates two generic arrays by randomly splitting the elements of the sequence.

## Declaration

```swift
func randomSplit<T, Generator>(by proportion: Double, using generator: inout Generator) -> (ArraySlice<T>, ArraySlice<T>) where T == Self.Element, Generator : RandomNumberGenerator
```

## Parameters

- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `generator`: A random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of array slices.
