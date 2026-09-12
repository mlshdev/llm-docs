> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewdelegate](https://developer.apple.com/documentation/appkit/nstabviewdelegate)

# NSTabViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSTabViewDelegate` protocol defines the optional methods implemented by delegates of `NSTabView` objects.

## Declaration

```swift
protocol NSTabViewDelegate : NSObjectProtocol
```

## Topics

### Adding and Removing Tabs

- [tabViewDidChangeNumberOfTabViewItems(\_:)](nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md): Informs the delegate that the number of tab view items in `tabView` has changed.

### Selecting a Tab

- [tabView(\_:shouldSelect:)](nstabviewdelegate/tabview%28__shouldselect_%29.md): Invoked just before `tabViewItem` in `tabView` is selected.
- [tabView(\_:willSelect:)](nstabviewdelegate/tabview%28__willselect_%29.md): Informs the delegate that `tabView` is about to select `tabViewItem`.
- [tabView(\_:didSelect:)](nstabviewdelegate/tabview%28__didselect_%29.md): Informs the delegate that `tabView` has selected `tabViewItem`.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTabViewController](nstabviewcontroller.md)

## See Also

### Handling the Selection of Tabs

- [delegate](nstabview/delegate.md): The tab view’s delegate.

# NSTabViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSTabViewDelegate` protocol defines the optional methods implemented by delegates of `NSTabView` objects.

## Declaration

```objectivec
@protocol NSTabViewDelegate <NSObject>
```

## Topics

### Adding and Removing Tabs

- [tabViewDidChangeNumberOfTabViewItems:](nstabviewdelegate/tabviewdidchangenumberoftabviewitems%28__%29.md): Informs the delegate that the number of tab view items in `tabView` has changed.

### Selecting a Tab

- [tabView:shouldSelectTabViewItem:](nstabviewdelegate/tabview%28__shouldselect_%29.md): Invoked just before `tabViewItem` in `tabView` is selected.
- [tabView:willSelectTabViewItem:](nstabviewdelegate/tabview%28__willselect_%29.md): Informs the delegate that `tabView` is about to select `tabViewItem`.
- [tabView:didSelectTabViewItem:](nstabviewdelegate/tabview%28__didselect_%29.md): Informs the delegate that `tabView` has selected `tabViewItem`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTabViewController](nstabviewcontroller.md)

## See Also

### Handling the Selection of Tabs

- [delegate](nstabview/delegate.md): The tab view’s delegate.
