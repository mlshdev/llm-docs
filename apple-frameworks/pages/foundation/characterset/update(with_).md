> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/characterset/update(with:)](https://developer.apple.com/documentation/foundation/characterset/update(with:))

# update(with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Insert a `Unicode.Scalar` representation of a character into the `CharacterSet`.

## Declaration

```swift
@discardableResult mutating func update(with character: Unicode.Scalar) -> Unicode.Scalar?
```

<a id="discussion"></a>

## Discussion

`Unicode.Scalar` values are available on `Swift.String.UnicodeScalarView`.
