> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/singleattributetransformer/replace(with:value:)-6bn0e](https://developer.apple.com/documentation/foundation/attributedstring/singleattributetransformer/replace(with:value:)-6bn0e)

# replace(with:value:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Replaces an attribute with a different attribute.

## Declaration

```swift
@preconcurrency mutating func replace<U>(with key: U.Type, value: U.Value) where U : AttributedStringKey, U.Value : Sendable
```

## Parameters

- `key`: The key of the new attribute.
- `value`: The value of the new attribute.

## See Also

### Replacing Attributes

- [replace(with:value:)](replace%28with_value_%29-xg8b.md): Replaces an attribute with a different attribute that a key path identifies.
