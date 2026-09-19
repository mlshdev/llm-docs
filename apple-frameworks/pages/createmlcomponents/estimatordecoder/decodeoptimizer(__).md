> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/estimatordecoder/decodeoptimizer(_:)

# decodeOptimizer(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Decodes an optimizer value.

## Declaration

```swift
mutating func decodeOptimizer<T>(_ value: T.Type) throws -> T where T : Decodable
```

<a id="discussion"></a>

## Discussion

Decoding an optimizer lets you resume fitting.

## See Also

### Decoding values

- [decode(\_:)](decode%28__%29.md): Decodes a value.
