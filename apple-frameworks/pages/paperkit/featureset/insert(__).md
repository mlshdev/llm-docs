> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/insert(_:)](https://developer.apple.com/documentation/paperkit/featureset/insert(_:))

# insert(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Inserts the given feature in the set if it is not already present.

## Declaration

```swift
mutating func insert(_ newFeature: FeatureSet.Feature)
```

## Parameters

- `newFeature`: A feature to insert into the set.

## See Also

### Checking features

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the given feature exists in the set.
- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether this feature set is a subset of the given feature set.
- [remove(\_:)](remove%28__%29.md): Removes the given feature.
