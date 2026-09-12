> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitview(_:cancollapsesubview:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview(_:cancollapsesubview:))

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
