> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertoolbaritemdelegate/items(for:)](https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritemdelegate/items(for:))

# items(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Asks the delegate for the items to share.

## Declaration

```swift
@MainActor func items(for pickerToolbarItem: NSSharingServicePickerToolbarItem) -> [Any]
```

## Parameters

- `pickerToolbarItem`: The toolbar item that displays the share sheet.

<a id="return-value"></a>

## Return Value

An array of items to share using the share sheet.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, return the items in the current window that you want to share. Return the content that is focal to your window or is currently selected. For example, you might share the current photo someone is viewing. For a document window, you might share the document itself.

# itemsForSharingServicePickerToolbarItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the items to share.

## Declaration

```objectivec
- (NSArray *) itemsForSharingServicePickerToolbarItem:(NSSharingServicePickerToolbarItem *) pickerToolbarItem;
```

## Parameters

- `pickerToolbarItem`: The toolbar item that displays the share sheet.

<a id="return-value"></a>

## Return Value

An array of items to share using the share sheet.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, return the items in the current window that you want to share. Return the content that is focal to your window or is currently selected. For example, you might share the current photo someone is viewing. For a document window, you might share the document itself.
