> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/contains(_:)](https://developer.apple.com/documentation/paperkit/featureset/contains(_:))

# contains(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Returns a Boolean value that indicates whether the given feature exists in the set.

## Declaration

```swift
func contains(_ feature: FeatureSet.Feature) -> Bool
```

## Parameters

- `feature`: A feature to look for in the set.

<a id="return-value"></a>

## Return Value

`true` if member exists in the set; otherwise, `false`.

## See Also

### Checking features

- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether this feature set is a subset of the given feature set.
- [insert(\_:)](insert%28__%29.md): Inserts the given feature in the set if it is not already present.
- [remove(\_:)](remove%28__%29.md): Removes the given feature.
