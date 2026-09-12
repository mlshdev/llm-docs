> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/characterset/insert(charactersin:)-7urdg](https://developer.apple.com/documentation/foundation/characterset/insert(charactersin:)-7urdg)

# insert(charactersIn:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Insert a range of integer values in the `CharacterSet`.

## Declaration

```swift
mutating func insert(charactersIn range: Range<Unicode.Scalar>)
```

<a id="discussion"></a>

## Discussion

It is the caller’s responsibility to ensure that the values represent valid `Unicode.Scalar` values, if that is what is desired.
