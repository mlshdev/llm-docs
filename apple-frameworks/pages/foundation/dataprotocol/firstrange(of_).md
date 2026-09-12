> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol/firstrange(of:)](https://developer.apple.com/documentation/foundation/dataprotocol/firstrange(of:))

# firstRange(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first found range of the type’s data buffer.

## Declaration

```swift
func firstRange<D>(of data: D) -> Range<Self.Index>? where D : DataProtocol
```

## Parameters

- `data`: The data sequence to find.

<a id="return-value"></a>

## Return Value

The range, if found, of the first match of the provided data sequence.

<a id="Discussion"></a>

## Discussion

An example of searching a data buffer converted from a string:

```swift
let data = "0123456789".data(using: .utf8)!
let pattern = "456".data(using: .utf8)!
let foundRange = data.firstRange(of: pattern)

// foundRange == Range(4..<7)
```

## See Also

### Searching Within Data

- [firstRange(of:in:)](firstrange%28of_in_%29.md): Returns the first found range of the type’s data buffer.
- [lastRange(of:)](lastrange%28of_%29.md): Returns the last found range of the type’s data buffer.
- [lastRange(of:in:)](lastrange%28of_in_%29.md): Returns the last found range of the type’s data buffer.
