> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/error/assetsunavailable(_:)

# SystemLanguageModel.Error.assetsUnavailable(\_:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The assets required for the session are unavailable.

## Declaration

```swift
case assetsUnavailable(SystemLanguageModel.Error.AssetsUnavailable)
```

<a id="discussion"></a>

## Discussion

This may happen if you forget to check model availability to begin with, or if the model assets are deleted. This can happen if the user disables Apple Intelligence while your app is running.

## See Also

### Error cases

- [SystemLanguageModel.Error.AssetsUnavailable](assetsunavailable.md): Information about unavailable model assets.
