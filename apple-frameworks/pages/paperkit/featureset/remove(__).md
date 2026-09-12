> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/remove(_:)](https://developer.apple.com/documentation/paperkit/featureset/remove(_:))

# remove(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Removes the given feature.

## Declaration

```swift
mutating func remove(_ feature: FeatureSet.Feature)
```

## Parameters

- `feature`: The feature to remove from the set.

## See Also

### Checking features

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the given feature exists in the set.
- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether this feature set is a subset of the given feature set.
- [insert(\_:)](insert%28__%29.md): Inserts the given feature in the set if it is not already present.
