> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagefeatureprint/revision](https://developer.apple.com/documentation/createmlcomponents/imagefeatureprint/revision)

# revision

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The feature extractor revision number.

## Declaration

```swift
var revision: Int { get set }
```

<a id="discussion"></a>

## Discussion

There are two Image Feature Print revisions: 1 and 2. In most cases revision 2 produces better models because it uses a smaller feature vector and better features.

In iOS 12 or later, tvOS 12 or later, and macOS 10.14 or later, revision 1 takes images with a size of 299x299 and produces a 2048 feature vector.

In iOS 17 or later, tvOS 17 or later, and macOS 14 or later, revision 2 takes images with a size of 360x360 and produces a 768 feature vector.

## See Also

### Getting the properties

- [cropAndScale](cropandscale.md): The crop and scale options.
- [latestRevision](latestrevision.md): The latest feature extractor revision.
