> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell/delegate](https://developer.apple.com/documentation/appkit/nsdatepickercell/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate associated with the date picker.

## Declaration

```swift
weak var delegate: (any NSDatePickerCellDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to [NSDatePickerCellDelegate](../nsdatepickercelldelegate.md).

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate associated with the date picker.

## Declaration

```objectivec
@property (weak, nullable) id<NSDatePickerCellDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to [NSDatePickerCellDelegate](../nsdatepickercelldelegate.md).
