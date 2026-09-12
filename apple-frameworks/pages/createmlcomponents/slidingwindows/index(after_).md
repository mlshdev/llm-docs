> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindows/index(after:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindows/index(after:))

# index(after:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(after i: Int) -> Int
```

## Parameters

- `i`: A valid index of the collection. `i` must be less than `endIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately after `i`.

## See Also

### Getting the index

- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
