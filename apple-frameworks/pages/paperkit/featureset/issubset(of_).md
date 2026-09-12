> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/issubset(of:)](https://developer.apple.com/documentation/paperkit/featureset/issubset(of:))

# isSubset(of:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Returns a Boolean value that indicates whether this feature set is a subset of the given feature set.

## Declaration

```swift
func isSubset(of other: FeatureSet) -> Bool
```

## Parameters

- `other`: Another feature set.

<a id="return-value"></a>

## Return Value

`true` if the feature set is a subset of `other`; otherwise, `false`.

## See Also

### Checking features

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the given feature exists in the set.
- [insert(\_:)](insert%28__%29.md): Inserts the given feature in the set if it is not already present.
- [remove(\_:)](remove%28__%29.md): Removes the given feature.
