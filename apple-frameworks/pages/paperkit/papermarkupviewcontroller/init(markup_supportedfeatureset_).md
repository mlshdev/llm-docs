> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/init(markup:supportedfeatureset:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/init(markup:supportedfeatureset:))

# init(markup:supportedFeatureSet:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a new markup view controller with the provided data model.

## Declaration

```swift
@MainActor @preconcurrency init(markup: PaperMarkup? = nil, supportedFeatureSet: FeatureSet)
```

## Parameters

- `markup`: The data model to show on this canvas. The default value is `nil`.
- `supportedFeatureSet`: The features this view controller supports.

<a id="discussion"></a>

## Discussion

The canvas limits the edits that a person can make so they’re compatible with the feature set specified. If you set a `supportedFeatureSet`, also use a similar feature set to configure any `MarkupToolbarViewController` or `MarkupEditViewController` you use.
