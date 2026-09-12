> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertouchbaritem/delegate](https://developer.apple.com/documentation/appkit/nssharingservicepickertouchbaritem/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The object that acts as the delegate of the sharing service picker bar item.

## Declaration

```swift
weak var delegate: (any NSSharingServicePickerTouchBarItemDelegate)? { get set }
```

## See Also

### Setting the delegate

- [NSSharingServicePickerTouchBarItemDelegate](../nssharingservicepickertouchbaritemdelegate.md): A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The object that acts as the delegate of the sharing service picker bar item.

## Declaration

```objectivec
@property (weak) id<NSSharingServicePickerTouchBarItemDelegate> delegate;
```

## See Also

### Setting the delegate

- [NSSharingServicePickerTouchBarItemDelegate](../nssharingservicepickertouchbaritemdelegate.md): A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.
