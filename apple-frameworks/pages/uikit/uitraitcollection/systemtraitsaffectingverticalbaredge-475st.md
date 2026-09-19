> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitcollection/systemtraitsaffectingverticalbaredge-475st

# systemTraitsAffectingVerticalBarEdge

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The system traits that affect the value of `verticalBarEdge`.

## Declaration

```swift
static var systemTraitsAffectingVerticalBarEdge: [UITrait] { get }
```

<a id="discussion"></a>

## Discussion

Pass this array to `registerForTraitChanges(_:handler:)` to be notified when the vertical bar edge changes. Note that it is possible for the actual edge to be the same even if the traits affecting the vertical bar edge themselves may have changed.

## See Also

### Getting related traits

- [systemTraitsAffectingColorAppearance](systemtraitsaffectingcolorappearance-64z7q.md)
- [systemTraitsAffectingImageLookup](systemtraitsaffectingimagelookup-4jv5.md)
