> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkup/removecontentunsupported(by:)](https://developer.apple.com/documentation/paperkit/papermarkup/removecontentunsupported(by:))

# removeContentUnsupported(by:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Remove all contents that is not supported by the provided feature set.

## Declaration

```swift
mutating func removeContentUnsupported(by featureSet: FeatureSet)
```

## Parameters

- `featureSet`: The feature set to limit this data model to.

<a id="discussion"></a>

## Discussion

After calling this method `featureSet.isSubset(of: features)` will be `true`.
