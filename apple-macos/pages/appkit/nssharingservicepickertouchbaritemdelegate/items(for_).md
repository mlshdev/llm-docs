> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertouchbaritemdelegate/items(for:)](https://developer.apple.com/documentation/appkit/nssharingservicepickertouchbaritemdelegate/items(for:))

# items(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Asks the delegate for items that represent the objects to be shared.

## Declaration

```swift
@MainActor func items(for pickerTouchBarItem: NSSharingServicePickerTouchBarItem) -> [Any]
```

## Parameters

- `pickerTouchBarItem`: The sharing service picker item that is requesting the items to be shared.

<a id="return-value"></a>

## Return Value

An array of items that represents the objects to be shared. Each element of the array must either conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider).

# itemsForSharingServicePickerTouchBarItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for items that represent the objects to be shared.

## Declaration

```objectivec
- (NSArray *) itemsForSharingServicePickerTouchBarItem:(NSSharingServicePickerTouchBarItem *) pickerTouchBarItem;
```

## Parameters

- `pickerTouchBarItem`: The sharing service picker item that is requesting the items to be shared.

<a id="return-value"></a>

## Return Value

An array of items that represents the objects to be shared. Each element of the array must either conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider).
