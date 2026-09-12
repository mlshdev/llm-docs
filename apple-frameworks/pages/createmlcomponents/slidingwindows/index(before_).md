> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindows/index(before:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindows/index(before:))

# index(before:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the position immediately before the given index.

## Declaration

```swift
func index(before i: Int) -> Int
```

## Parameters

- `i`: A valid index of the collection. `i` must be greater than `startIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately before `i`.

## See Also

### Getting the index

- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
