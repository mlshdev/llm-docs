> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewdelegate/tabview(_:shouldselect:)](https://developer.apple.com/documentation/appkit/nstabviewdelegate/tabview(_:shouldselect:))

# tabView(\_:shouldSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked just before `tabViewItem` in `tabView` is selected.

## Declaration

```swift
@MainActor optional func tabView(_ tabView: NSTabView, shouldSelect tabViewItem: NSTabViewItem?) -> Bool
```

## Parameters

- `tabView`: The tab view that sent the request.
- `tabViewItem`: The tab view item to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the tab view item should be selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting a Tab

- [tabView(\_:willSelect:)](tabview%28__willselect_%29.md): Informs the delegate that `tabView` is about to select `tabViewItem`.
- [tabView(\_:didSelect:)](tabview%28__didselect_%29.md): Informs the delegate that `tabView` has selected `tabViewItem`.

# tabView:shouldSelectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked just before `tabViewItem` in `tabView` is selected.

## Declaration

```objectivec
- (BOOL) tabView:(NSTabView *) tabView shouldSelectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabView`: The tab view that sent the request.
- `tabViewItem`: The tab view item to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the tab view item should be selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting a Tab

- [tabView:willSelectTabViewItem:](tabview%28__willselect_%29.md): Informs the delegate that `tabView` is about to select `tabViewItem`.
- [tabView:didSelectTabViewItem:](tabview%28__didselect_%29.md): Informs the delegate that `tabView` has selected `tabViewItem`.
