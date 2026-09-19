> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/updatearrangement(_:animated:)

# updateArrangement(\_:animated:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Updates the arrangement of the view controller.

## Declaration

```swift
@MainActor @preconcurrency final func updateArrangement<A>(_ arrangement: A, animated: Bool = false) where A : UIArrangementViewController.Arrangement
```

## Parameters

- `arrangement`: The arrangement to apply.
- `animated`: Whether to animate the arrangement transition.

## See Also

### Configuring the arrangement

- [UIArrangementViewController.Arrangement](arrangement.md): Beta. A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](../uioverlayarrangement-swift.struct.md): Beta. An arrangement that overlays views.
- [UISplitArrangement](../uisplitarrangement-swift.struct.md): Beta. An arrangement that splits views.
