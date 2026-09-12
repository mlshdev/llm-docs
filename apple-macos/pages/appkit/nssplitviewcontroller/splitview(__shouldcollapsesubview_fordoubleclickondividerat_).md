> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitview(_:shouldcollapsesubview:fordoubleclickondividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview(_:shouldcollapsesubview:fordoubleclickondividerat:))

# splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Allows the split view controller to determine if a subview collapses in response to a double click.

> [NSSplitView](../nssplitview.md) no longer supports collapsing sections using a double click. The system never calls this delegate method, and this implementation always returns [false](https://developer.apple.com/documentation/swift/false).

## Declaration

```swift
func splitView(_ splitView: NSSplitView, shouldCollapseSubview subview: NSView, forDoubleClickOnDividerAt dividerIndex: Int) -> Bool
```

## See Also

### Managing Subviews

- [splitView(\_:canCollapseSubview:)](splitview%28__cancollapsesubview_%29.md): Allows the split view controller to determine whether the user can collapse and expand the specified subview.

# splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 10.15)

Allows the split view controller to determine if a subview collapses in response to a double click.

> [NSSplitView](../nssplitview.md) no longer supports collapsing sections using a double click. The system never calls this delegate method, and this implementation always returns [false](https://developer.apple.com/documentation/swift/false).

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView shouldCollapseSubview:(NSView *) subview forDoubleClickOnDividerAtIndex:(NSInteger) dividerIndex;
```

## See Also

### Managing Subviews

- [splitView:canCollapseSubview:](splitview%28__cancollapsesubview_%29.md): Allows the split view controller to determine whether the user can collapse and expand the specified subview.
