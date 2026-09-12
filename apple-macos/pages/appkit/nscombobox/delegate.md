> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/delegate](https://developer.apple.com/documentation/appkit/nscombobox/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Sets the receiver’s delegate.

## Declaration

```swift
weak var delegate: (any NSComboBoxDelegate)? { get set }
```

## Parameters

- `anObject`: The delegate for the receiver. The delegate must conform to the [NSComboBoxDelegate](../nscomboboxdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Sets the receiver’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSComboBoxDelegate> delegate;
```

## Parameters

- `anObject`: The delegate for the receiver. The delegate must conform to the [NSComboBoxDelegate](../nscomboboxdelegate.md) protocol.
