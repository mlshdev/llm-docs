> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangement-c.class/setviewproperties:forplacement:

# setViewProperties:forPlacement:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

Sets the view properties in the split arrangement for a specific placement.

## Declaration

```objectivec
- (void) setViewProperties:(UISplitArrangementViewProperties *) viewProperties forPlacement:(UIArrangementViewControllerViewPlacement) placement;
```

## Parameters

- `viewProperties`: The view properties in the arrangement.
- `placement`: The placement of the properties in the arrangement.

## See Also

### Configuring the arrangement

- [axes](axes.md): The axes of the arrangement.
- [defaultViewProperties](defaultviewproperties.md): Returns the default properties for a view in the split arrangement.
- [UISplitArrangementViewProperties](../uisplitarrangementviewproperties.md): The view properties for a split arrangement view.
