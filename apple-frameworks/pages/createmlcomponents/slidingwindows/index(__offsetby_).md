> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindows/index(_:offsetby:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindows/index(_:offsetby:))

# index(\_:offsetBy:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an index that is the specified distance from the given index.

## Declaration

```swift
func index(_ i: Int, offsetBy distance: Int) -> Int
```

## Parameters

- `i`: A valid index of the collection.
- `distance`: The distance to offset `i`.

<a id="return-value"></a>

## Return Value

An index offset by `distance` from the index `i`.

<a id="discussion"></a>

## Discussion

The value passed as `distance` must not offset `i` beyond the bounds of the collection.

## See Also

### Getting the index

- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
