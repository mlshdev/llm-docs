> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/featureset/version1](https://developer.apple.com/documentation/paperkit/featureset/version1)

# version1

**Framework:** PaperKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A new feature set supporting all features in version 1.

## Declaration

```swift
static var version1: FeatureSet { get }
```

<a id="discussion"></a>

## Discussion

To automatically get the latest features that PaperKit adds in new releases use `.latest`, to avoid new releases adding unexpected functionality to your app use a specific version like `.version1`.

## See Also

### Creating a feature set

- [latest](latest.md): A new feature set supporting all features.
- [empty](empty.md): A maximally empty feature set.
