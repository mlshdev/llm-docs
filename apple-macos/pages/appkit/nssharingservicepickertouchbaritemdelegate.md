> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertouchbaritemdelegate](https://developer.apple.com/documentation/appkit/nssharingservicepickertouchbaritemdelegate)

# NSSharingServicePickerTouchBarItemDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.

## Declaration

```swift
protocol NSSharingServicePickerTouchBarItemDelegate : NSSharingServicePickerDelegate
```

## Topics

### Providing items to share

- [items(for:)](nssharingservicepickertouchbaritemdelegate/items%28for_%29.md): Asks the delegate for items that represent the objects to be shared.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md)

## See Also

### Setting the delegate

- [delegate](nssharingservicepickertouchbaritem/delegate.md): The object that acts as the delegate of the sharing service picker bar item.

# NSSharingServicePickerTouchBarItemDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.

## Declaration

```objectivec
@protocol NSSharingServicePickerTouchBarItemDelegate <NSSharingServicePickerDelegate>
```

## Topics

### Providing items to share

- [itemsForSharingServicePickerTouchBarItem:](nssharingservicepickertouchbaritemdelegate/items%28for_%29.md): Asks the delegate for items that represent the objects to be shared.

## Relationships

### Inherits From

- [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md)

## See Also

### Setting the delegate

- [delegate](nssharingservicepickertouchbaritem/delegate.md): The object that acts as the delegate of the sharing service picker bar item.
