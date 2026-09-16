> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/sequence/randomsplit(by:seed:)-9637d

# randomSplit(by:seed:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Generates two generic arrays by randomly splitting the elements of the sequence.

## Declaration

```swift
func randomSplit<T>(by proportion: Double, seed: Int? = nil) -> (ArraySlice<T>, ArraySlice<T>) where T == Self.Element
```

## Parameters

- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `seed`: A seed number for a random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of array slices.
