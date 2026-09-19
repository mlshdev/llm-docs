> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsdatepickercell/delegate

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
