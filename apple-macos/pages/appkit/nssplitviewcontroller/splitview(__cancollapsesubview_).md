> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview(_:cancollapsesubview:)

# splitView(\_:canCollapseSubview:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to determine whether the user can collapse and expand the specified subview.

## Declaration

```swift
@MainActor func splitView(_ splitView: NSSplitView, canCollapseSubview subview: NSView) -> Bool
```

## See Also

### Managing Subviews

- [splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:)](splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows the split view controller to determine if a subview collapses in response to a double click.

# splitView:canCollapseSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to determine whether the user can collapse and expand the specified subview.

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView canCollapseSubview:(NSView *) subview;
```

## See Also

### Managing Subviews

- [splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex:](splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows the split view controller to determine if a subview collapses in response to a double click.
