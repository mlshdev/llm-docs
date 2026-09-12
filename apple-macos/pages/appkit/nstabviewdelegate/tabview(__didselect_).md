> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewdelegate/tabview(_:didselect:)](https://developer.apple.com/documentation/appkit/nstabviewdelegate/tabview(_:didselect:))

# tabView(\_:didSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that `tabView` has selected `tabViewItem`.

## Declaration

```swift
@MainActor optional func tabView(_ tabView: NSTabView, didSelect tabViewItem: NSTabViewItem?)
```

## Parameters

- `tabView`: The tab view that sent the request.
- `tabViewItem`: The tab view item that was selected.

## See Also

### Selecting a Tab

- [tabView(\_:shouldSelect:)](tabview%28__shouldselect_%29.md): Invoked just before `tabViewItem` in `tabView` is selected.
- [tabView(\_:willSelect:)](tabview%28__willselect_%29.md): Informs the delegate that `tabView` is about to select `tabViewItem`.

# tabView:didSelectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that `tabView` has selected `tabViewItem`.

## Declaration

```objectivec
- (void) tabView:(NSTabView *) tabView didSelectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabView`: The tab view that sent the request.
- `tabViewItem`: The tab view item that was selected.

## See Also

### Selecting a Tab

- [tabView:shouldSelectTabViewItem:](tabview%28__shouldselect_%29.md): Invoked just before `tabViewItem` in `tabView` is selected.
- [tabView:willSelectTabViewItem:](tabview%28__willselect_%29.md): Informs the delegate that `tabView` is about to select `tabViewItem`.
