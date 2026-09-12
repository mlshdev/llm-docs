> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/numberbins/init(size:range:)-3ach2](https://developer.apple.com/documentation/charts/numberbins/init(size:range:)-3ach2)

# init(size:range:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates uniform bins covering the given range.

## Declaration

```swift
nonisolated init(size: Value, range: ClosedRange<Value>) where Value : BinaryFloatingPoint
```

## Parameters

- `size`: The size of the bins.
- `range`: The range of the data the bins cover.

<a id="return-value"></a>

## Return Value

The bins.
