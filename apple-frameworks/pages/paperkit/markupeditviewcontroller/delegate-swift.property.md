> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markupeditviewcontroller/delegate-swift.property

# delegate

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The delegate for responding to user actions.

## Declaration

```swift
@MainActor @preconcurrency weak var delegate: (any MarkupEditViewController.Delegate)? { get set }
```

## See Also

### Configuring the view controller

- [supportedFeatureSet](supportedfeatureset.md): The supported features of this edit UI.
