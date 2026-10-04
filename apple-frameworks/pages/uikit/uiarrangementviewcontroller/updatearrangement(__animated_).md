> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/updatearrangement(_:animated:)

# updateArrangement(\_:animated:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

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

- [UIArrangementViewController.Arrangement](arrangement.md): A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](../uioverlayarrangement-swift.struct.md): An arrangement that overlays views.
- [UISplitArrangement](../uisplitarrangement-swift.struct.md): An arrangement that splits views.
