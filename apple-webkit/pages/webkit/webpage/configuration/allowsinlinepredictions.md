> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/configuration/allowsinlinepredictions

# allowsInlinePredictions

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates whether inline predictions are allowed.

## Declaration

```swift
@MainActor var allowsInlinePredictions: Bool
```

<a id="discussion"></a>

## Discussion

The default value is `false`. If false, inline predictions are disabled regardless of the system setting. If true, they are enabled based on the system setting.
