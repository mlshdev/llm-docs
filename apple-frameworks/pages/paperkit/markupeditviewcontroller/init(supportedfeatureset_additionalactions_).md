> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupeditviewcontroller/init(supportedfeatureset:additionalactions:)](https://developer.apple.com/documentation/paperkit/markupeditviewcontroller/init(supportedfeatureset:additionalactions:))

# init(supportedFeatureSet:additionalActions:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Creates a markup edit view controller.

## Declaration

```swift
@MainActor @preconcurrency init(supportedFeatureSet: FeatureSet, additionalActions: [UIMenuElement] = [])
```

## Parameters

- `supportedFeatureSet`: The features to create actions for.
- `additionalActions`: The array of additional actions to provide from the insertion UI.

<a id="discussion"></a>

## Discussion

`MarkupEditViewController` provides a standard interface for adding to and editing content in a `PaperMarkupViewController`.
