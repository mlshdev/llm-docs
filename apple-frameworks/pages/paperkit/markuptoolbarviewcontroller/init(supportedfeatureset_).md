> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuptoolbarviewcontroller/init(supportedfeatureset:)](https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/init(supportedfeatureset:))

# init(supportedFeatureSet:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Creates a markup toolbar view controller.

## Declaration

```swift
@MainActor @preconcurrency init(supportedFeatureSet: FeatureSet)
```

## Parameters

- `supportedFeatureSet`: The supported features of this toolbar.

<a id="discussion"></a>

## Discussion

The feature set limits the tools / actions a person can access from this toolbar. Also set `supportedFeatureSet` on any `PaperMarkupViewController` you use.

## See Also

### Creating a toolbar

- [init(coder:)](init%28coder_%29.md)
