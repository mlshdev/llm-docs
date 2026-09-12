> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markup/removecontentunsupported(by:)](https://developer.apple.com/documentation/paperkit/markup/removecontentunsupported(by:))

# removeContentUnsupported(by:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Removes all content not supported by the provided feature set.

## Declaration

```swift
mutating func removeContentUnsupported(by featureSet: FeatureSet) -> Bool
```

## Parameters

- `featureSet`: The feature set to limit this markup to.

<a id="return-value"></a>

## Return Value

True if this was successful and the feature set is now supported.

<a id="discussion"></a>

## Discussion

If the returned value is `true` then `self.featureSet.isSubset(of: featureSet)` will be `true`.

## See Also

### Managing feature compatibility

- [featureSet](featureset.md): The set of features used by this markup.
