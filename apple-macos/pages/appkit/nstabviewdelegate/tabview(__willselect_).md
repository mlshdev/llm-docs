> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewdelegate/tabview(_:willselect:)](https://developer.apple.com/documentation/appkit/nstabviewdelegate/tabview(_:willselect:))

# tabView(\_:willSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that `tabView` is about to select `tabViewItem`.

## Declaration

```swift
@MainActor optional func tabView(_ tabView: NSTabView, willSelect tabViewItem: NSTabViewItem?)
```

## Parameters

- `tabView`: The tab view that sent the request.
- `tabViewItem`: The tab view item that is about to be selected.

## See Also

### Selecting a Tab

- [tabView(\_:shouldSelect:)](tabview%28__shouldselect_%29.md): Invoked just before `tabViewItem` in `tabView` is selected.
- [tabView(\_:didSelect:)](tabview%28__didselect_%29.md): Informs the delegate that `tabView` has selected `tabViewItem`.

# tabView:willSelectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that `tabView` is about to select `tabViewItem`.

## Declaration

```objectivec
- (void) tabView:(NSTabView *) tabView willSelectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabView`: The tab view that sent the request.
- `tabViewItem`: The tab view item that is about to be selected.

## See Also

### Selecting a Tab

- [tabView:shouldSelectTabViewItem:](tabview%28__shouldselect_%29.md): Invoked just before `tabViewItem` in `tabView` is selected.
- [tabView:didSelectTabViewItem:](tabview%28__didselect_%29.md): Informs the delegate that `tabView` has selected `tabViewItem`.
