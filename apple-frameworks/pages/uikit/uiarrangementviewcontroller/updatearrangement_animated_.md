> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/updatearrangement:animated:

# updateArrangement:animated:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Updates the arrangement of the view controller.

## Declaration

```objectivec
- (void) updateArrangement:(UIArrangement *) arrangement animated:(BOOL) animated;
```

## Parameters

- `arrangement`: The arrangement to apply.
- `animated`: Whether to animate the arrangement transition.

## See Also

### Configuring the arrangement

- [UIArrangement](../uiarrangement.md): Beta. A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](../uioverlayarrangement-c.class.md): Beta. An arrangement that overlays views.
- [UISplitArrangement](../uisplitarrangement-c.class.md): Beta. An arrangement that splits views.
- [updateArrangement:](updatearrangement_.md): Beta. Updates the arrangement of the view controller.
